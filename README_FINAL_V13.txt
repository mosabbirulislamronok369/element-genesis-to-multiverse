ELEMENT Genesis to Multiverse — V13

FIXES:
- Added a large One Piece question bank and a large Death Note question bank.
  The old pools had only 3 and 2 factual seeds, which caused obvious repetition.
- Bengali mission rendering remains fully Bengali and includes 150+ distinct
  mission stems plus round variation, so generated missions remain visibly distinct.
- Added cache-busting query strings: style.css?v=13.0.0 and game.js?v=13.0.0.
  This is important because the screenshot showed the old V9 setup UI even after newer
  game code had been deployed.
- Reworked the first-entry language/difficulty UI to a premium glass interface.
- Kept the existing 10,000 mission architecture, save key and progression.
- Kept the V12 sound + 5-level penalty changes.

IMPORTANT:
After replacing the files, hard-refresh the browser once with Ctrl+Shift+R.
Then Cloudflare Pages must deploy the new files.

Files:
index.html
game.js
style.css
