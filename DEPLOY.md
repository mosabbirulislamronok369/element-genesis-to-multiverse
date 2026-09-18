# ডিপ্লয়মেন্ট গাইড — GitHub, Cloudflare Pages, APK

এই ফোল্ডারে যা নতুন যুক্ত হয়েছে:

- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — গেমটাকে একটা ইনস্টলযোগ্য **PWA** বানানোর জন্য (এটা APK বানানোর সবচেয়ে সহজ রাস্তা)
- `www/` — একই স্ট্যাটিক ফাইলগুলোর কপি, যেটা Capacitor বিল্ডের জন্য লাগবে
- `package.json`, `capacitor.config.json` — নেটিভ Android প্রজেক্ট (ঐচ্ছিক, Capacitor রুট)
- `.gitignore` — বিল্ড আর্টিফ্যাক্ট বাদ দেওয়ার জন্য

মূল গেম ফাইল (`index.html`, `style.css`, `game.js`) অপরিবর্তিত আছে, কেবল `index.html`-এ manifest link ও service-worker রেজিস্ট্রেশন যুক্ত হয়েছে।

---

## ১. GitHub-এ আপলোড

লোকাল মেশিনে (আপনার কম্পিউটারে, Claude-এর কন্টেইনারে নয়, কারণ এখান থেকে আমার নেটওয়ার্ক অ্যাক্সেস নেই):

```bash
cd element-genesis-to-multiverse   # এই ফোল্ডারে ঢুকুন
git init
git add .
git commit -m "Initial commit: ELEMENT Genesis to Multiverse"
```

GitHub.com-এ গিয়ে একটা নতুন empty repository বানান (README/license ছাড়া), তারপর:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## ২. Cloudflare Pages-এ ডিপ্লয়

### সহজ উপায় (Dashboard, GitHub-এর সাথে)
1. https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. আপনার GitHub repo সিলেক্ট করুন
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (খালি রাখুন)
   - **Build output directory:** `/` (রুট, কারণ `index.html` রুটেই আছে)
4. **Save and Deploy** — কয়েক সেকেন্ডে একটা লাইভ URL পাবেন (যেমন `your-project.pages.dev`)

এরপর যেকোনো নতুন `git push` স্বয়ংক্রিয়ভাবে রিডিপ্লয় করবে।

### CLI দিয়ে (Wrangler)
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=element-genesis
```

> লাইভ URL-টা পরের ধাপে (APK বানানো) কাজে লাগবে, তাই এটা সেভ রাখুন।

---

## ৩. APK বানানো — দুটো রাস্তা

### রুট A (সবচেয়ে সহজ, কোনো কোড ছাড়াই) — PWABuilder দিয়ে TWA APK
গেমটা এখন একটা সঠিক PWA (manifest + service worker), তাই এটাই সবচেয়ে দ্রুত পথ:

1. আগে Cloudflare Pages-এ ডিপ্লয় করুন (ধাপ ২), যাতে একটা পাবলিক HTTPS URL থাকে
2. https://www.pwabuilder.com -এ যান, আপনার লাইভ URL পেস্ট করুন → **Start**
3. এটা manifest ও service worker স্কোর দেখাবে (সব ✅ থাকা উচিত)
4. **Package for Stores** → **Android** সিলেক্ট করুন
5. Package ID (যেমন `com.yourname.elementgenesis`), অ্যাপের নাম, আইকন কনফার্ম করুন
6. **Generate** — এটা একটা সাইনড `.apk` (এবং `.aab`, Play Store-এর জন্য) ডাউনলোড লিংক দেবে

এই APK একটা Trusted Web Activity (TWA) — মানে আপনার লাইভ ওয়েবসাইটকে নেটিভ Android অ্যাপের মতো র‍্যাপ করে চালায়। অফলাইন সাপোর্টও কাজ করবে কারণ service worker আছে।

### রুট B (নেটিভ, বেশি নিয়ন্ত্রণ) — Capacitor
এর জন্য লোকাল মেশিনে Node.js ও Android Studio লাগবে।

```bash
cd element-genesis-to-multiverse
npm install
npx cap add android
npx cap sync android
npx cap open android
```

শেষ কমান্ডটা Android Studio খুলে দেবে। সেখানে:
- **Build → Generate Signed Bundle / APK** → APK সিলেক্ট করুন
- একটা নতুন কিস্টোর বানান (অথবা আগের কিস্টোর ব্যবহার করুন) → পাসওয়ার্ড ও তথ্য দিন
- Build variant: `release` → Finish

`android/app/release/app-release.apk` ফাইলটাই আপনার ফাইনাল APK।

> নোট: `capacitor.config.json`-এ `appId` (`com.yourname.elementgenesis`) নিজের পছন্দমতো বদলে নিন — Play Store-এ আপলোড করলে এই ID পরে বদলানো যায় না।

---

## কোনটা বেছে নেবেন?
- **শুধু বন্ধুদের/নিজে ফোনে ইনস্টল করতে চাইলে বা Play Store-এ দ্রুত দিতে চাইলে:** রুট A (PWABuilder) — কোনো কোডিং নেই, ৫ মিনিটে হয়ে যায়
- **নেটিভ প্লাগইন (push notification, in-app purchase, ইত্যাদি) পরে যুক্ত করার ইচ্ছা থাকলে:** রুট B (Capacitor)
