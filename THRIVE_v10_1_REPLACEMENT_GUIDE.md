# Thrive v10.1 — Step-by-step replacement and deployment guide

This package is intended to replace the older Thrive version already published on GitHub Pages. It preserves the existing visual styling and main app sections while updating the clock/timer and watch-pairing handling.

## Files in the package

- `index.html` — the app. GitHub Pages should serve this file as the home page.
- `sw.js` — service worker with an updated cache version, to help installed copies receive the new app.
- `manifest.webmanifest` — installable-app metadata.
- `icon-192.png` and `icon-512.png` — app icons.
- `README_GITHUB_PAGES_AND_TESTING.txt` — extra testing notes and limitations.

## Before replacing the live version

1. Open the current GitHub repository that hosts Thrive.
2. Make a backup of the current `index.html`, `sw.js`, `manifest.webmanifest`, and icon files. You can download the repository as a ZIP or use GitHub's file history to recover the previous version.
3. Open the existing live app and export/backup any records using its own export feature, if available. Do not clear browser site data or uninstall the old app before backing up.
4. Keep using the same repository and the same GitHub Pages URL if you want to preserve browser-local data. Browser storage is tied to the site's origin; a new domain or repository URL can look like a different app to the browser.

## Replace the deployed version on GitHub

1. Download `Thrive_v10_1_Ready_to_Replace_GitHub_Pages.zip` and extract it on your computer. Do not upload the ZIP itself as the website.
2. Open the existing GitHub repository in your browser.
3. Confirm the repository branch and folder used by GitHub Pages. Usually this is `main` and `/(root)`, but use the same source already configured for the current live version.
4. In the repository's root folder, replace the existing `index.html` with the package's `index.html`.
5. Also replace `sw.js`, `manifest.webmanifest`, `icon-192.png`, and `icon-512.png` with the versions from the package. Keep the filenames and folder locations exactly the same.
6. Leave unrelated files and folders alone. Do not delete your other project files, configuration, or documentation.
7. Commit the changes. A suitable commit message is `Update Thrive to v10.1`.
8. Open **Settings → Pages** and verify that Pages is still deploying from the intended branch and folder. Do not change the source if the current setup is already correct.
9. Wait for the Pages deployment to finish. Open the live URL shown in the Pages settings and check that the updated app loads.

## Test the live site after deployment

Run these checks on the published HTTPS URL, not only by opening the HTML file directly:

1. **Visual check:** confirm the theme, layout, navigation, and all existing sections still appear as expected on desktop and mobile widths.
2. **Navigation:** open Today, Planner, Bible Study, Code Classroom, Journal, Progress, Exercise, Health, Finances, Clock, and Settings. Confirm each section loads.
3. **Timer:** enter a duration using Hours, Minutes, and Seconds; start, pause, resume, and reset it. Confirm the displayed remaining time and saved duration are correct.
4. **12-hour clock and alarms:** confirm the clock displays AM/PM; create a test alarm using hour, minute, and AM/PM; verify its label and time; then delete the test alarm.
5. **Watch pairing:** test only with a watch that supports Bluetooth Low Energy and a compatible browser. A device appearing in the pairing list does not guarantee its data protocol is accessible. For Oraimo and other watches using proprietary companion-app protocols, use the available manual/import route unless a documented API or SDK is supported.
6. **Persistence:** create a harmless test task, refresh the page, and check that it remains. If you use cloud sync, also sign in and test on another device.
7. **Authentication and reset:** if Supabase authentication is configured, test sign-up/sign-in, sign-out, and password reset with a disposable test account. Verify email redirects point to the deployed HTTPS URL.
8. **PWA update:** if you installed Thrive on your phone or desktop, close the installed app fully and reopen it. If it still shows the old version, open the site in the browser and refresh; close and reopen again. Avoid clearing all site data unless you have exported your records, because that can erase local data.

## Important notes

- The app's CSS/style blocks were preserved in the supplied fixed HTML; changes are targeted to timer/clock/pairing behavior rather than a redesign.
- Static HTML parsing and JavaScript syntax checks passed for the fixed file. These checks are not proof that every possible button flow works on every browser or device. Use the test checklist above for real deployment verification.
- Web Bluetooth requires HTTPS and a supported browser, typically desktop Chrome/Edge or supported Android Chrome. It is not supported in iPhone/iPad Safari. Watch compatibility depends on the device's advertised services and protocol; no web app can pair universally with every watch just because it is visible over Bluetooth.
- Browser alarms and timers may not fire reliably when the app is fully closed or the operating system suspends it. Use the phone's built-in Clock app for critical alarms.
- GitHub Pages serves static files; it does not run a private server. Features that depend on Supabase, email, AI endpoints, or other server-side services still require their existing backend configuration. Never put private service-role keys or other secrets in `index.html` or a public repository.
- If the live app stops working after the update, use GitHub's commit history to restore the backed-up files. Do not delete the repository or create a new Pages site just to update the existing app.

## Validation summary

- Six non-empty inline JavaScript blocks passed `node --check`.
- The fixed HTML retained the app's existing CSS blocks.
- The visible navigation entries and major sections were retained.
- The updated clock uses 12-hour AM/PM display and alarm selectors; the timer has separate Hours, Minutes, and Seconds inputs.
- A full end-to-end test of every interactive flow and live account/cloud/Bluetooth integration must still be completed on the actual deployed URL and supported devices.
