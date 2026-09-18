ELEMENT: Genesis to Multiverse — FULL REPLACE
Version: 5000 + Mission Select + Category/Sub-category + Hint Fix

এই ZIP-এর 3টি মূল game file:
- index.html
- game.js
- style.css

কেন আগের error হচ্ছিল:
আগের deployed index.html ছিল 5000-version, কিন্তু game.js পুরোনো 100-level version ছিল।
HTML-এ hintText/options IDs ছিল, আর পুরোনো JS অন্য ID ব্যবহার করছিল। ফলে JavaScript মাঝপথে error করে options render বন্ধ হয়ে যাচ্ছিল।
এই ZIP-এ index.html + game.js + style.css একই version-এর এবং একই IDs ব্যবহার করে।

নতুন আপডেট:
1. Game entry-তে দুইটি mode:
   - RANDOM
   - WITH CATEGORY
2. WITH CATEGORY খুললে main category:
   - সাইন্স
   - এনিমে
   - Marvel
   - চাকরি / জব
   - Technology / ICT
   - Entertainment / TV
   - Sports / Current Affairs
   - Islamic Knowledge
3. প্রতিটি category-তে sub-category আছে।
   Anime-এর মধ্যে যেমন:
   - Attack on Titan
   - One Piece
   - Death Note
   - Demon Slayer
   - Bleach
   - Naruto
   - Dr. Stone
   - Solo Leveling
   - Wistoria Wand and Sword
   - Vinland Saga
   - Fullmetal Alchemist
   - Hunter x Hunter
   - My Hero Academia
   - Haikyuu
   - Spy x Family
   - Frieren
   - Mob Psycho 100
   - Sword Art Online
4. 5000 generated missions-এর প্রতিটি seed-category/sub-category অনুযায়ী classified।
5. Category Mode হলো free-play practice:
   - category/sub-category বেছে প্রশ্ন করা যাবে
   - correct answer → fabricator animation → XP
   - main 5000-level journey-এর linear progress আলাদা থাকবে
6. HINT এখন default-এ hidden।
   শুধু HINT চাপলে clue দেখা যাবে।
7. Options আর blank থাকবে না; 4টি option render হবে।
8. Level Map-এর level-number jump এখন কাজ করবে।
9. Level Map থেকে কোনো unlocked level replay করলে category mode reset হয়ে main journey-তে ফিরে যাবে।
10. পুরোনো elementGameSave থাকলে basic progress migrate করার চেষ্টা করবে।
11. 5000-level journey + scientist milestones + fabricator animation রাখা হয়েছে।

ব্যবহার:
1. ZIP extract করো।
2. পুরোনো project-এর index.html, game.js, style.css পুরো replace করো।
3. তারপর:
   git add .
   git commit -m "Add category system and fix mission rendering"
   git push

Cloudflare Pages GitHub থেকে auto deploy করলে নতুন build live হবে।

নোট:
5000 playable missions আছে, কিন্তু এগুলো একটি curated factual seed bank থেকে deterministic mission variants হিসেবে তৈরি। তাই 5000টি আলাদা independently-authored factual concept নয়।
