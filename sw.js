// ED Case Capture service worker — makes the app open offline.
// Patient data is NOT handled here; it lives only in the app's local storage on the device.
const VERSION = 'edcapture-v4';
const FONTS = 'edcapture-fonts';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './exam-finder/exam-data.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('edcapture') && k !== VERSION && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Fonts: serve from cache, refresh in background
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;
  // Leave other apps hosted in sub-folders (e.g. /exam-finder/) to their own service workers
  // Exam Finder's shared data file is used by this app too: network first, cached copy offline
  if (url.pathname.endsWith('/exam-finder/exam-data.js')) {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./exam-finder/exam-data.js', copy)); return r; })
      .catch(() => caches.match('./exam-finder/exam-data.js')));
    return;
  }
  if (url.pathname.includes('/exam-finder/')) return;

  // The page itself: try the network first so updates arrive, fall back to the cached copy offline
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Icons, manifest: cache first
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
