ELEMENT: Genesis to Multiverse — V10 Question Readability Fix

This is a FULL REPLACE based on V9.

The screenshot showed the question becoming tiny because the CSS rule
`.mission span { font-size: 10px; ... }` was also affecting the <span>
inside the question heading.

V10 fixes that CSS conflict explicitly:
- Question: 32px on large desktop
- Question: 30px on normal desktop
- Question: 27px on mobile
- Question text is white and bold
- Mission metadata remains small
- Premium V9 UI is preserved
- Game engine/data are preserved

Replace:
index.html
game.js
style.css

Then:
git add .
git commit -m "Fix mission question font size CSS conflict"
git push
