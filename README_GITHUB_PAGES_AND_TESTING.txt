THRIVE v10.1 PATCH — GITHUB PAGES PACKAGE

This package preserves the original Thrive v10 HTML and its existing sections, then applies targeted changes:
- Clock display now uses 12-hour AM/PM with seconds.
- Alarm creation uses hour, minute and AM/PM selectors; saved alarm times retain the existing internal 24-hour format so old alarms remain compatible.
- Timer duration has separate Hours, Minutes and Seconds inputs and supports up to 99:59:59.
- Watch pairing offers discovery of all visible Bluetooth LE devices, detects standard Bluetooth heart-rate support where available, and reports when a selected device does not expose that standard service.
- Removed the extra duplicate pairing button and fixed stale disconnect-button state.
- Updated PWA service-worker cache version and retained manifest/icons for GitHub Pages installation.

GITHUB PAGES
1. Back up your current app and export important records.
2. Extract this ZIP. Upload the contents (index.html, sw.js, manifest.webmanifest, icons) to the root of a GitHub repository, not the ZIP file itself.
3. In GitHub: Settings > Pages > deploy from branch, select your branch and /(root), then save.
4. Open the resulting HTTPS Pages URL in Chrome/Edge on a supported Android device or desktop. Use the browser's Install app / Add to Home Screen option.
5. After updating an existing install, close and reopen it or refresh twice if the old service-worker cache remains.

IMPORTANT LIMITS
- I ran static HTML parsing, checked for duplicate static IDs, and ran JavaScript syntax checks on all seven inline scripts. These checks passed. They do not prove every interactive flow works in every browser; live account sign-up, email confirmation, password reset, Supabase sync, notifications and device Bluetooth require testing in your own configured deployment.
- Web Bluetooth is limited to secure HTTPS contexts and supported browsers. Accept-all pairing only makes a device selectable; it does not create a universal protocol. Heart-rate readings are automatic only when the watch exposes the standard Bluetooth Heart Rate Service. Some Oraimo models use a companion app/proprietary service and may not provide direct web access. For these, use the existing Import from watch app/manual entry path until a supported SDK/API is confirmed.
- On iPhone/iPad Safari, Web Bluetooth is not supported. Use manual import or a native app bridge.
- Alarms and timers in a browser PWA may not ring while the app is fully closed or the OS suspends it. Keep Thrive open and use the device Clock app for critical alarms.
- AI/cloud features require the existing Supabase and AI server setup; secrets must not be placed in index.html.

REFERENCES
MDN Web Bluetooth requestDevice: https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice
MDN Web Bluetooth API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API
GitHub Pages docs: https://docs.github.com/en/pages/getting-started-with-github-pages
