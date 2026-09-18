ELEMENT: Genesis to Multiverse — FULL REPLACE V3

Major fixes and updates:
- Fixed the old/new JS mismatch that caused blank questions/options.
- 5000-level game files are kept in sync: index.html + game.js + style.css.
- Mission Select has RANDOM and WITH CATEGORY.
- Category mode supports multiple sub-category selection in the same category.
- Marvel now has real sub-categories: Spider-Man, X-Men, MCU, Avengers, Thor, Guardians of the Galaxy, Fantastic Four, Black Panther, Deadpool, Marvel Universe.
- Marvel question bank expanded so Marvel is populated.
- Anime sub-categories are generated from the anime seed bank.
- Jujutsu Kaisen is not included, respecting the project requirement to exclude it.
- English questions remain, with a Bangla line added below the English question; options also show Bangla where a translation is available.
- HINT remains hidden until clicked.
- Main 5000-level journey remains separate from Category Practice.
- Fabricator/discovery game flow remains intact.

Replace these 3 files in the project:
index.html
game.js
style.css

Then run:
git add .
git commit -m "Upgrade bilingual categories multi-select and Marvel missions"
git push
