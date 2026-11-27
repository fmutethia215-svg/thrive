# Thrive v11.6 patch notes

- Removed the separate Planner item from the desktop sidebar.
- Legacy navigation to `planner` now redirects to Today so old links do not open a separate Planner page.
- Kept the five-item mobile bottom navigation shown in the reference screenshots; Home and Plan both open Today, where tasks can be managed.
- Added responsive journal layout rules for the desktop notes-list/editor layout and a compact mobile editor.
- Added a `window.cloudData` compatibility alias to the existing `window.loadCloudData` loader when available.
- Updated the page title to v11.6.

## Validation

- Extracted inline JavaScript blocks and ran `node --check` on each non-empty block; no syntax errors were reported.
- This is a static syntax check, not a full browser test. Real Supabase authentication, cloud sync, mobile interactions, and Android watch/Bluetooth behavior still need to be tested on devices.
