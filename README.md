# ED Case Capture — home-screen app setup

This folder is the whole app. Hosting it only puts the app's code online. Patient
data and photos never leave your phone.

## 1. Put it online (free, once — GitHub Pages)

Same steps as Pre-Rounds. You can do this from a computer or from Safari on your iPhone.

1. On github.com, tap **+ → New repository**. Name it e.g. `ed-capture`, set it to **Public**
   (only the code is public; no patient data is ever stored there), tick
   **Add a README file**, then **Create repository**.
2. In the repository: **Add file → Upload files**. Upload these files from this folder:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`
   (and the `exam-finder` folder, which ED Capture also reads its exam checklists from).
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

## 3. Back up, and move between devices with iCloud Drive

- At the end of each shift: **Save backup file** → **Save to Files** → **iCloud Drive** →
  a folder such as `ED Capture backups`. Files are named with the date and time, so the newest
  one is easy to find.
- On another device (iPhone, iPad, Mac, or a PC with iCloud), open the app, tap
  **Load backup file** and pick the newest file from that folder.
- Loading **merges**. Each patient keeps whichever copy was edited last, new patients are added,
  and patients you deleted on one device stay deleted after you load a later backup.
  Edit on one device at a time and save a backup before switching. If you edit the same
  patient on two devices before syncing, the copy edited last wins.
- The app can't open iCloud files by itself, so you always pick the file in the Files picker.
- The app shows an amber reminder when your last backup file is more than ~20 hours old.
- Turn on **Advanced Data Protection** (Settings → your name → iCloud) to end-to-end encrypt
  iCloud Drive, and delete old backup files you no longer need.

## Dump & synthesize (the fast way)

Each patient opens on the **Dump** tab.

1. Enter the bed/initials and presenting complaint.
2. Type, dictate (the mic on your keyboard, or **Dictate** if it shows) or paste notes in any
   order, and tap **Add note** after each one. Results, history and exam findings can be mixed.
3. **Focused exam** matches the complaint to Exam Finder (Talley & O'Connor) and groups the exam
   head to toe. Add or remove presentations if the match is off.
4. **Synthesize note** sends the notes (plus anything you entered in the other tabs and the exam
   checklist) to Claude and puts the structured note under **Output → Synthesized**: ID/CC, HPI,
   PMHx, Soc Hx, Fam Hx, ROS, Labs & investigations, Impression (top 3 ddx), Physical exam
   (✓ done / ☐ to do) and Still to clarify. It needs your own Anthropic API key
   (**API key & model**, from console.anthropic.com, billed per use). The key stays on the device
   and isn't in backups.
5. With no key, **Copy prompt** copies the same instructions and notes for pasting into the Claude
   app or your "ED notes" Project (see `PROJECT-INSTRUCTIONS.md`).

Before anything leaves the phone, the app checks for likely identifiers (long numbers, PHIN/MRN,
dates with a year, DOB, phone numbers, emails, postal codes, "Mr./Mrs. Name") and offers to remove
them. It's a safety net, not a guarantee: keep notes to age and sex. Check every synthesized value
against the chart before you use it.

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

## Also hosted here

- [Focused Exam Finder](exam-finder/) — presenting complaint → focused physical exam (Talley & O'Connor page refs).
