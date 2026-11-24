# Thrive v11 - Personal Growth & Fitness

A single-page web app with no build step. Works as a website and can be installed on a phone ("Add to Home screen").

## 1. Put it on GitHub Pages (replaces your old version)
1. Open your GitHub repository -> Add file -> Upload files.
2. Drag in ALL files and folders from this ZIP (index.html, sw.js, manifest.webmanifest, icons, .nojekyll, supabase-setup/). Replace the old files -> Commit changes.
3. Settings -> Pages -> Source: Deploy from a branch, branch `main`, folder `/ (root)`.
4. Open `https://<username>.github.io/<repo>/`. If you still see the old version, reload twice.

## 2. Online accounts with Supabase (replaces an older setup)
1. supabase.com -> your project -> SQL Editor -> paste `supabase-setup/schema.sql` -> Run. Safe on an old project: keeps saved data and fixes the security rules.
2. Authentication -> URL Configuration: set Site URL to your GitHub Pages link and add it to Redirect URLs (needed for sign-up and password-reset emails).
3. Project Settings -> API: copy the Project URL and the anon / publishable key.
4. In Thrive's sign-in screen open "Online setup (Supabase)", paste both, Save. Never paste the service_role key.

### Optional: shared AI for online accounts
In Supabase: Edge Functions -> Deploy a new function -> name it `thrive-ai` -> paste `supabase-setup/thrive-ai/index.ts` -> Deploy.
Then Edge Functions -> Secrets: add `THRIVE_AI_API_KEY` = your free Gemini key (aistudio.google.com). Optional `THRIVE_AI_MODEL` (default gemini-2.5-flash).
Without this, each person can paste their own Gemini key in Settings -> AI assistant (local mode).

## 3. Watch pairing - what really works
Web pages connect to watches with Web Bluetooth:
- Works: Chrome / Edge / Samsung Internet on Android, Windows, Mac, ChromeOS, over https (GitHub Pages is fine).
- Does not work: iPhone/iPad (except the Bluefy browser app), Firefox, Safari, or inside an embedded preview.
- The watch must broadcast standard heart rate (Garmin, Polar, Coros, Amazfit/Zepp, Xiaomi "heart-rate broadcast" mode, chest straps). Many Oraimo and budget watches use a private protocol: they may appear in the list but send no data. For those, export from the watch app and use "Import from watch app".
- If the watch doesn't appear, close its phone app or disconnect it from system Bluetooth first.

## What's new in v11
- Menu can be minimised (the button next to the logo; on phones a floating Menu button brings it back).
- Today: weather (Open-Meteo) and news; pick topics and city in Settings -> News & weather, with optional AI picking and AI briefing.
- AI exercise coach (7-day plan, workout review) and AI money coach (spending analysis, budget, questions).
- Journal goes full screen when you start writing (Done or Esc to exit).
- Watch: clearer messages (Bluetooth off, embedded preview) and automatic reconnect if the signal drops.
