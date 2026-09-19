ELEMENT: Genesis to Multiverse — FINAL V8 NO-REPEAT PATCH

FIXES:
- Fixed the root cause of One Piece/Death Note repeats in Bengali mode: Bengali display no longer falls back to baseQuestion, so each generated mission keeps its unique mission wording.
- Added a GLOBAL question uniqueness guard while building the 10,000 mission bank. Exact normalized displayed English question text is unique across the entire bank, not merely unique inside each sub-category.
- One Piece: 156 mission records / 156 unique English mission texts.
- Death Note: 156 mission records / 156 unique English mission texts.
- Challenge Mode uses mission IDs from the globally unique bank, so the same mission ID cannot occur twice in one challenge run.
- Bengali mode now uses a dedicated Bengali mission-stem generator so 84 missions remain 84 different displayed questions instead of collapsing back to the same base question.
- Added broader Bengali answer rendering to reduce English/Bengali mixing. Standard proper names/technical terms remain recognizable.
- Question font reduced one step from 30px to 27px.

INSTALL:
Replace index.html, game.js and style.css. Then run:
  git add .
  git commit -m "Fix repeated missions and tune question typography"
  git push

Validation performed:
- node --check: PASS
- mission bank: 10,000
- global unique English question texts: 10,000
- One Piece: 156 / 156 unique
- Death Note: 156 / 156 unique
