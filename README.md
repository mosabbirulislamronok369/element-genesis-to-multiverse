# ELEMENT: Genesis to Multiverse

A fully local, browser-based 100-level science evolution puzzle game.

## Features
- 100 progressive levels
- Stone Age → modern physics → spacetime → multiverse
- Five choices per level
- Science-inspired synthesis/technology recipes
- Scientist milestone rewards every 5 levels
- Newton at level 10, Einstein at level 90, Nikola Tesla at level 100
- Other inventor/scientist milestones including Edison
- Saves automatically in browser `localStorage`
- No Supabase, Firebase, server, account, or cloud database
- Responsive desktop/mobile UI
- Works offline after opening the files locally

## Run
1. Extract the ZIP.
2. Open `index.html` in Chrome/Edge/Firefox.
3. Play. Progress is stored on that device/browser.

## Important
This is a playable prototype/game foundation, not a scientifically exhaustive simulation. Some late-game concepts are fictionalized for gameplay. The recipe system is data-driven, so additional puzzles, animations, sound, research trees, crafting UI, and achievements can be added later without changing the save architecture.

## New in v3
- Fabrication Chamber beside the answer choices
- Ingredient visual cards using element/material symbols
- Animated synthesis particles on successful creation
- Failed-reaction animation and Try Again state

## v4 UX change
- Answer choices are never covered by the fabrication chamber.
- The fabrication animation is hidden while choosing.
- After a correct build, the successful fabrication animation appears below the choices.

## v5 — installable PWA + deployment
- Added `manifest.json` and `sw.js` — the game is now an installable, offline-capable PWA
- Added `www/`, `package.json`, `capacitor.config.json` for an optional native Android build
- See **DEPLOY.md** for step-by-step instructions to push to GitHub, deploy on Cloudflare Pages, and generate an APK
