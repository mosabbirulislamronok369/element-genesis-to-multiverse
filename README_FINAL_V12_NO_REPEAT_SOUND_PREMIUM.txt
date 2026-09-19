ELEMENT: Genesis to Multiverse — V12

FULL REPLACE based on V11.

V12 fixes:
1. IMPORTANT Bengali repeat-question bug:
   Bengali display was using baseQuestion, so different generated mission
   variants collapsed to the same visible question. It now uses bnMissionQuestion(q),
   preserving the unique Bengali mission stem + round variation.

2. No-repeat protection:
   - Challenge pool IDs are deduplicated.
   - Challenge session tracks already-served IDs.
   - Normal/NCTB missions track served IDs.
   - Existing 10,000 mission bank remains intact.

3. Three wrong answers:
   - Normal Random Journey: user moves back exactly 5 levels.
   - Category Journey: user moves back exactly 5 category levels.
   - maxUnlocked is NOT lost.
   - Challenge mode does not apply this penalty.

4. Answer sounds:
   - Correct = short rising success tone.
   - Wrong = short descending error tone.
   - Uses Web Audio API, no external audio files required.
   - Starts only after the user interacts, so it works with browser autoplay rules.

5. Premium answer UI:
   - larger answer cards
   - glass gradient
   - hover glow/lift
   - correct glow animation
   - wrong shake animation
   - improved answer typography

Replace:
index.html
game.js
style.css

Then:
git add .
git commit -m "Fix repeated questions, 5-level penalty and answer sounds"
git push
