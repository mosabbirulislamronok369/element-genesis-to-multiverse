ELEMENT: Genesis to Multiverse — FINAL V7

Core files: index.html, game.js, style.css

Major fixes/features
- 10,000 playable Random Journey missions.
- 64 sub-categories; each has 156 or 157 mission instances.
- Exact displayed question text is unique within each sub-category; the engine checks uniqueness while building the bank.
- One Piece and Death Note have expanded authored seed facts plus a large non-repeating mission stem system.
- Marvel sub-categories include Spider-Man, X-Men, MCU, Avengers, Thor, Guardians of the Galaxy, Fantastic Four, Black Panther, Deadpool and Marvel Universe.
- Language-first UI: বাংলা or English. In Bengali mode the full question is shown in Bengali; answer cards use Bengali mappings where available and preserve proper names/technical names as standard names. The English helper line was removed from answer cards in Bengali mode.
- Large question and option typography for desktop and mobile.
- Difficulty: All / Easy / Medium / Hard.
- Category mode supports multiple sub-category selection and its own progressive Category Levels.
- Challenge Mode: user-selected category/sub-categories, 3/5/10/12/15/30/45/60 minute timer, continuous non-repeating questions, final result with total/correct/wrong.
- NCTB 2026 Board Practice UI: Class -> Subject -> multi-chapter selection; 40 non-repeating chapter-scoped checkpoints are generated per selected chapter.

Important NCTB content note
NCTB has official 2026 textbook pages for primary and secondary levels. This build includes the selector/progression engine and uses subject-linked question seeds for the 40 checkpoint slots. It does NOT claim that every generated checkpoint is a verified extraction from the exact 2026 textbook chapter text. For true book-derived questions, the corresponding 2026 NCTB PDFs/text must be loaded and question-written from those sources. The UI is designed so that verified chapter packs can replace the generator without changing Challenge/Level architecture.

Official NCTB 2026 references used for the structure:
- https://nctb.gov.bd/
- 2026 primary textbook pages
- 2026 class 6/7/8 and class 9-10 textbook pages

Islamic section
- Added Islamic Knowledge, Hadith Studies, Aqeedah, Manhaj, Comparative Religion, and Seerah & History sub-categories.
- Aqeedah/Manhaj items are explicitly framed as Salafi methodology where requested; comparative religion items are descriptive.
- Hadith methodology questions follow the previously researched source framing around verification and fabricated reports.

Install
1. Replace index.html, game.js and style.css in the project.
2. Run:
   git add .
   git commit -m "Final 10000 mission engine with challenge mode and NCTB practice"
   git push
3. Cloudflare Pages deploys the pushed commit.

Validation performed
- node --check game.js passed.
- Mission bank size validated at exactly 10,000.
- 64 sub-categories detected.
- Minimum unique displayed questions per sub-category: 156.
- One Piece: 156 unique displayed mission texts in the generated bank.
- Death Note: 156 unique displayed mission texts in the generated bank.
