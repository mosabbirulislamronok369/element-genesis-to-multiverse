ELEMENT: Genesis to Multiverse — V6 FULL REPLACE

Files:
- index.html
- game.js
- style.css

Major changes:
1. First-entry setup screen:
   - Language: বাংলা / English
   - Difficulty: All / Easy / Medium / Hard
2. Active language controls the entire question/answer display.
   - Bengali mode shows Bengali questions and Bengali/transliterated answer text.
   - English mode shows English questions and answers.
   - Proper names and technical terms may stay in their standard form.
3. Exactly 5000 playable missions are generated.
4. 60 sub-categories are included.
5. Every sub-category contains at least 83 missions.
6. Anime sub-categories include Attack on Titan, One Piece, Death Note, Demon Slayer, Bleach, Naruto, Dr. Stone, Solo Leveling, Wistoria, Vinland Saga, Fullmetal Alchemist, Hunter x Hunter, My Hero Academia, Haikyuu, Spy x Family, Frieren, Mob Psycho 100 and Sword Art Online.
7. Marvel sub-categories include Spider-Man, X-Men, MCU, Avengers, Thor, Guardians of the Galaxy, Fantastic Four, Black Panther, Deadpool and Marvel Universe.
8. Selecting multiple sub-categories merges their mission pools into one Category Level track.
9. Category progress is saved separately by category + selected sub-categories + difficulty.
10. Category Level Archive allows replaying unlocked category levels.
11. Random Journey keeps its own progressive level track.
12. Death Note and every other sub-category no longer stops at the small seed count; missions are expanded into 83+ distinct mission wordings with deterministic option shuffling, so the same exact question text is not repeatedly shown within a sub-category.
13. Mission/Level navigation was redesigned as a premium Play Hub and Level Archive.
14. Question typography and answer cards were enlarged for better readability.
15. Fabricator/discovery animation is retained.
16. Old v5000 / legacy local save is migrated where possible.

Install:
Replace the project's index.html, game.js and style.css with these files.

Then run:
git add .
git commit -m "Upgrade language difficulty category levels and premium mission hub"
git push

Cloudflare Pages should deploy the new GitHub commit automatically.

Note:
The build has 5000 playable mission instances. The mission engine expands a curated factual seed bank into non-identical mission variants. It is not 5000 independently researched factual concepts yet.
