# ED Case Capture — home-screen app setup

This folder is the whole app. Hosting it only puts the app's code online. Patient
data and photos never leave your phone.

## 1. Put it online (free, once — GitHub Pages)

Same steps as Pre-Rounds. You can do this from a computer or from Safari on your iPhone.

1. On github.com, tap **+ → New repository**. Name it e.g. `ed-capture`, set it to **Public**
   (only the code is public; no patient data is ever stored there), tick
   **Add a README file**, then **Create repository**.
2. In the repository: **Add file → Upload files**. Upload these files from this folder:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`.
   Tap **Commit changes**.
3. **Settings → Pages**. Under "Build and deployment", Source = **Deploy from a branch**,
   Branch = **main**, folder **/ (root)** → **Save**.
4. Wait 1–2 minutes and refresh. The page shows your address, e.g.
   `https://YOUR-USERNAME.github.io/ed-capture/`.

## 2. Install it on your iPhone

1. Open that address in **Safari**.
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. From now on, always open ED Capture **from the home-screen icon**. The installed app
   keeps its own storage, separate from Safari and from the Claude app version.

It works offline once it has been opened. The camera and photo library work from the
**Camera** / **Library** buttons in each section.

## 3. Back up at the end of each shift

- **Backup & data → Save backup file** → choose **Save to Files**
  (e.g. On My iPhone → ED Capture). Backup files include photos, so they can be a few MB.
  Don't send them through Messages or email.
- To restore, or to move to a new phone: **Load backup file** and pick the latest backup.
  Loading adds the backup's patients; patients already in the app stay.
- The patient list shows an amber reminder when your last backup file is more than ~20 hours old.

## Sharing output

On the **Output** tab, **Copy text** puts the oral presentation or ED note on the clipboard.
**Share** sends it to Notes or another app. In the photo viewer, **Share** saves or sends
a single photo.

## Updating the app later

Upload the new `index.html` (and `sw.js` if it changed) to the same repository. The app picks
up the update next time it opens with a connection and shows a **Reload** banner on the
patient list. Your data is not affected.

## Privacy

Keep a passcode on your phone. Use a bed number or initials, keep identifiers out of photos,
delete patients once the note is done, and delete old backup files you no longer need.
Check your program's and site's rules on clinical photos and patient information on
personal devices (PHIA in Manitoba).
