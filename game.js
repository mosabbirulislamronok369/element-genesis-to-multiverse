/* ELEMENT: Genesis to Multiverse — 1000 Level Science Challenge */
const SUBJECTS=[
 ["Chemistry"],["Physics"],["Biology"],["Botany"],["Zoology"],["Biotechnology"],
 ["Limnology"],["Microbiology"],["Molecular Biology"],["ICT"],["Mathematics"],
 ["Astronomy"],["Cosmology"],["Quantum Science"],["Geology & Earth Science"],
 ["Engineering"],["Materials Science"],["Environmental Science"]
];

// The game is intentionally interdisciplinary: subjects are mixed throughout the journey,
// rather than locked into separate 100-level blocks. Difficulty rises with the player's progress.
const LEVEL_PHASES=[
 [1,100,"STONE AGE • FOUNDATIONS","Foundation"],
 [101,250,"ANCIENT WORLD • DISCOVERY","Foundation+"],
 [251,450,"SCHOOL SCIENCE • EXPLORER","High School"],
 [451,650,"COLLEGE SCIENCE • BUILDER","College"],
 [651,800,"UNIVERSITY • RESEARCHER","University"],
 [801,900,"HONOURS • FRONTIER","Honours"],
 [901,950,"COSMIC FRONTIER • MULTIVERSE","Advanced"],
 [951,1000,"ISLAMIC KNOWLEDGE • FINAL CHAMBER","Islamic Knowledge"]
];

const DISCOVERY_PATH=[
 [1,"Stone","প্রস্তর / Stone","🪨","Earth & Materials"],[2,"Fire","আগুন / Fire","🔥","Physics & Chemistry"],
 [3,"Shelter","আশ্রয় / Shelter","⛺","Engineering"],[4,"Wheel","চাকা / Wheel","⚙️","Engineering"],
 [5,"Copper","তামা / Copper","🟠","Materials Science"],[6,"Bronze","ব্রোঞ্জ / Bronze","🟤","Materials Science"],
 [7,"Iron","লোহা / Iron","⚒️","Materials Science"],[8,"Glass","কাচ / Glass","🔷","Chemistry"],
 [9,"Magnet","চুম্বক / Magnet","🧲","Physics"],[10,"Paper","কাগজ / Paper","📜","Materials Science"],
 [11,"Compass","কম্পাস / Compass","🧭","Physics & Engineering"],[12,"Lens","লেন্স / Lens","🔍","Optics"],
 [13,"Clockwork","ঘড়ির যন্ত্র / Clockwork","🕰️","Engineering"],[14,"Steam Engine","বাষ্প ইঞ্জিন / Steam Engine","♨️","Physics & Engineering"],
 [15,"Electricity","বিদ্যুৎ / Electricity","⚡","Physics"],[16,"Battery","ব্যাটারি / Battery","🔋","Chemistry"],
 [17,"Telegraph","টেলিগ্রাফ / Telegraph","📡","ICT & Engineering"],[18,"Radio","রেডিও / Radio","📻","Physics & ICT"],
 [19,"Light Bulb","বৈদ্যুতিক বাতি / Light Bulb","💡","Physics"],[20,"Telephone","টেলিফোন / Telephone","☎️","ICT"],
 [21,"Camera","ক্যামেরা / Camera","📷","Optics & ICT"],[22,"Computer","কম্পিউটার / Computer","💻","ICT"],
 [23,"Internet","ইন্টারনেট / Internet","🌐","ICT"],[24,"Robot","রোবট / Robot","🤖","Engineering & ICT"],
 [25,"DNA","ডিএনএ / DNA","🧬","Molecular Biology"],[26,"Cell","কোষ / Cell","🔬","Biology"],
 [27,"Microbe","অণুজীব / Microbe","🦠","Microbiology"],[28,"PCR","পিসিআর / PCR","🧪","Biotechnology"],
 [29,"Quantum","কোয়ান্টাম / Quantum","⚛️","Quantum Science"],[30,"Atom","পরমাণু / Atom","⚛️","Chemistry & Physics"],
 [31,"Molecule","অণু / Molecule","🧫","Chemistry"],[32,"Protein","প্রোটিন / Protein","🧬","Molecular Biology"],
 [33,"Plant","উদ্ভিদ / Plant","🌱","Botany"],[34,"Animal Cell","প্রাণীকোষ / Animal Cell","🧫","Biology"],
 [35,"Lake","হ্রদ / Lake","💧","Limnology"],[36,"Ecosystem","বাস্তুতন্ত্র / Ecosystem","🌍","Environmental Science"],
 [37,"Crystal","স্ফটিক / Crystal","💎","Materials Science"],[38,"Semiconductor","সেমিকন্ডাক্টর / Semiconductor","◈","Physics & ICT"],
 [39,"Satellite","উপগ্রহ / Satellite","🛰️","Astronomy & Engineering"],[40,"Planet","গ্রহ / Planet","🪐","Astronomy"],
 [41,"Star","নক্ষত্র / Star","⭐","Astronomy"],[42,"Nebula","নীহারিকা / Nebula","🌌","Astronomy"],
 [43,"Galaxy","ছায়াপথ / Galaxy","🌌","Astronomy"],[44,"Black Hole","ব্ল্যাক হোল / Black Hole","🕳️","Cosmology"],
 [45,"Neutron Star","নিউট্রন নক্ষত্র / Neutron Star","✦","Astrophysics"],[46,"Gravitational Wave","মহাকর্ষীয় তরঙ্গ / Gravitational Wave","〰️","Physics"],
 [47,"Quantum Field","কোয়ান্টাম ক্ষেত্র / Quantum Field","◉","Quantum Science"],[48,"Spacetime","স্থান-কাল / Spacetime","🌀","Relativity"],
 [49,"Universe","মহাবিশ্ব / Universe","🌌","Cosmology"],[50,"Multiverse","মাল্টিভার্স / Multiverse","♾️","Cosmology"],
 [51,"Omniverse","অমনিভার্স / Omniverse","∞","Cosmic Frontier"]
];
function phaseFor(level){return LEVEL_PHASES.find(p=>level>=p[0]&&level<=p[1])||LEVEL_PHASES[0]}
function discoveryFor(level){
 const idx=Math.min(DISCOVERY_PATH.length-1,Math.floor((level-1)/20));
 const base=DISCOVERY_PATH[idx];
 if(level>=981) return [51,"Omniverse","অমনিভার্স / Omniverse","∞","Cosmic Frontier"];
 return base;
}
function subjectFor(level){
 if(level>=951)return "Islamic Science & Knowledge";
 const phase=phaseFor(level)[3];
 const sets={
  "Foundation":["Physics","Chemistry","Biology","Mathematics","Geology & Earth Science","ICT"],
  "Foundation+":["Chemistry","Physics","Biology","Botany","Zoology","Astronomy","Engineering","ICT"],
  "High School":["Chemistry","Physics","Biology","Botany","Zoology","Mathematics","ICT","Environmental Science","Astronomy"],
  "College":["Chemistry","Physics","Biology","Botany","Zoology","Biotechnology","Microbiology","Molecular Biology","Limnology","Mathematics","ICT"],
  "University":["Physics","Chemistry","Biotechnology","Microbiology","Molecular Biology","Quantum Science","Materials Science","Limnology","Astronomy","Engineering","Mathematics"],
  "Honours":["Quantum Science","Molecular Biology","Biotechnology","Materials Science","Cosmology","Astronomy","Physics","Chemistry","Microbiology","Engineering","Mathematics"],
  "Advanced":["Quantum Science","Cosmology","Astronomy","Physics","Molecular Biology","Biotechnology","Materials Science","Mathematics"]
 };
 const list=sets[phase]||sets.Foundation;
 return list[hash(level*13)%list.length];
}

const SCIENTISTS=[
["Al-Khwarizmi","Mathematics & Algorithms","Careful methods turn difficult problems into solvable ones.","সঠিক পদ্ধতি কঠিন সমস্যাকে সমাধানযোগ্য করে তোলে।"],
["Ibn al-Haytham","Optics & Experimentation","Question what you see, test it, and let evidence guide you.","যা দেখো তাকে প্রশ্ন করো, পরীক্ষা করো, আর প্রমাণকে পথ দেখাতে দাও।"],
["Al-Razi","Medicine & Chemistry","Observation is the beginning of disciplined scientific inquiry.","পর্যবেক্ষণই শৃঙ্খলাবদ্ধ বৈজ্ঞানিক অনুসন্ধানের শুরু।"],
["Ibn Sina","Medicine","Knowledge grows when observation, reasoning, and experience work together.","পর্যবেক্ষণ, যুক্তি ও অভিজ্ঞতা একসাথে কাজ করলে জ্ঞান বাড়ে।"],
["Al-Biruni","Astronomy & Natural Science","Measure carefully; nature rewards precision.","সতর্কভাবে পরিমাপ করো; প্রকৃতি নির্ভুলতাকে মূল্য দেয়।"],
["Al-Zahrawi","Surgery","A useful tool begins with understanding the problem it must solve.","যে সমস্যার সমাধান করতে হবে, তাকে বোঝার মাধ্যমেই কার্যকর যন্ত্রের শুরু।"],
["Ibn al-Nafis","Anatomy & Physiology","A claim becomes stronger when it survives careful observation.","সতর্ক পর্যবেক্ষণের পরীক্ষায় টিকে গেলে দাবির ভিত্তি শক্ত হয়।"],
["Al-Jazari","Mechanical Engineering","Design is science made tangible through precise construction.","নির্ভুল নির্মাণের মাধ্যমে বিজ্ঞান বাস্তব রূপ পায়।"],
["Abbas Ibn Firnas","Engineering","Experimentation teaches what imagination alone cannot reveal.","কল্পনা একা যা দেখাতে পারে না, পরীক্ষা তা শেখায়।"],
["Mariam al-Ijliya","Astronomical Instruments","Precision in an instrument creates precision in observation.","যন্ত্রে নির্ভুলতা থাকলে পর্যবেক্ষণেও নির্ভুলতা আসে।"],
["Banu Musa","Mechanics","Small mechanical details can produce surprisingly large effects.","ছোট যান্ত্রিক সূক্ষ্মতাও বড় ফল তৈরি করতে পারে।"],
["Thabit ibn Qurra","Mathematics & Astronomy","Reasoning connects abstract mathematics with the natural world.","যুক্তি বিমূর্ত গণিতকে প্রাকৃতিক জগতের সাথে যুক্ত করে।"],
["Al-Idrisi","Geography & Cartography","A good map is a structured record of observations.","ভালো মানচিত্র হলো পর্যবেক্ষণের সুশৃঙ্খল নথি।"],
["Ibn al-Baitar","Botany & Pharmacology","Identify a plant carefully before studying its uses.","উদ্ভিদের ব্যবহার জানার আগে তাকে সঠিকভাবে শনাক্ত করো।"],
["Al-Dinawari","Botany","Plants deserve systematic study of form, habitat, and use.","উদ্ভিদের গঠন, আবাসস্থল ও ব্যবহারকে পদ্ধতিগতভাবে অধ্যয়ন করা উচিত।"],
["Ibn al-Awwam","Agriculture","Good cultivation begins with soil, water, and plant needs.","ভালো চাষ শুরু হয় মাটি, পানি ও উদ্ভিদের প্রয়োজন বোঝা থেকে।"],
["Qusta ibn Luqa","Medicine & Natural Philosophy","Evidence and careful translation help knowledge travel across cultures.","প্রমাণ ও সতর্ক অনুবাদ জ্ঞানকে সংস্কৃতির সীমানা পেরোতে সাহায্য করে।"],
["Al-Farabi","Logic & Philosophy","Clear definitions make difficult reasoning easier to examine.","স্পষ্ট সংজ্ঞা কঠিন যুক্তিকে পরীক্ষা করা সহজ করে।"],
["Ibn Battuta","Geography & Observation","Travel broadens observation; disciplined records make it useful knowledge.","ভ্রমণ পর্যবেক্ষণকে বিস্তৃত করে; সুশৃঙ্খল নথি তাকে জ্ঞানে রূপ দেয়।"],
["Fatima al-Fihri","Education","A culture of learning can preserve and multiply knowledge.","শেখার সংস্কৃতি জ্ঞানকে সংরক্ষণ ও বহুগুণ বৃদ্ধি করতে পারে।"]
];

// Level 100 is explicitly reserved for Nikola Tesla. Other milestones use Muslim scholars/scientists.
const MILESTONE_SCIENTISTS={100:["Nikola Tesla","Electrical Engineering & Invention","The present is theirs; the future, for which I really worked, is mine.","বর্তমান তাদের; আর যে ভবিষ্যতের জন্য আমি কাজ করেছি, তা আমার।"]};
function scientistFor(level){
 const muslim=SCIENTISTS;
 if(MILESTONE_SCIENTISTS[level]) return MILESTONE_SCIENTISTS[level];
 return muslim[((level/5)-1)%muslim.length];
}

const FACTS=[
["পানির pH 25°C-এ প্রায় কত?","7.0",["6.0","8.0","7.8"],"Chemistry"],
["অক্সিজেনের সাধারণ জারণ সংখ্যা কত?","−2",["−1","+1","+2"],"Chemistry"],
["NaCl-এ প্রধান ধরনের রাসায়নিক বন্ধন কোনটি?","আয়নিক বন্ধন",["ধাতব বন্ধন","সমযোজী বন্ধন","হাইড্রোজেন বন্ধন"],"Chemistry"],
["এক মোল পদার্থে কণার সংখ্যা প্রায় কত?","6.022 × 10²³",["6.022 × 10²⁰","3.011 × 10²³","9.81 × 10²³"],"Chemistry"],
["Catalyst সাধারণত কী করে?","বিক্রিয়ার সক্রিয়ণ শক্তি কমায়",["equilibrium constant বদলায়","উৎপাদের মৌলিক পরিচয় বদলায়","তাপমাত্রা স্থায়ীভাবে বাড়ায়"],"Chemistry"],
["Le Chatelier নীতি অনুযায়ী গ্যাসীয় সাম্যে চাপ বাড়ালে সাধারণত কোন দিকে সরে?","যেদিকে মোট গ্যাসীয় মোল কম",["যেদিকে মোট মোল বেশি","সবসময় বিক্রিয়কের দিকে","কোনো দিকেই নয়"],"Chemistry"],
["Buffer solution-এর প্রধান বৈশিষ্ট্য কী?","অল্প অ্যাসিড/ক্ষার যোগে pH-এর পরিবর্তন প্রতিরোধ করে",["সবসময় pH 7 রাখে","শুধু লবণ ধারণ করে","শুধু তাপমাত্রা নিয়ন্ত্রণ করে"],"Chemistry"],
["Redox বিক্রিয়ায় oxidation কী?","ইলেকট্রন ত্যাগ",["ইলেকট্রন গ্রহণ","প্রোটন গ্রহণ সবসময়","নিউট্রন ত্যাগ"],"Chemistry"],
["Redox বিক্রিয়ায় reduction কী?","ইলেকট্রন গ্রহণ",["ইলেকট্রন ত্যাগ","প্রোটন ত্যাগ সবসময়","নিউট্রন গ্রহণ"],"Chemistry"],
["Electrochemical cell-এ oxidation কোথায় ঘটে?","Anode-এ",["Cathode-এ","Salt bridge-এ","Electrolyte-এর বাইরে"],"Chemistry"],
["আদর্শ গ্যাস সমীকরণ কোনটি?","PV = nRT",["PV = RT/n","P + V = nRT","PV = nR/T"],"Chemistry"],
["একটি exothermic reaction-এ সিস্টেম সাধারণত কী করে?","তাপ পরিবেশে ছাড়ে",["তাপ শোষণ করে","ভর সৃষ্টি করে","সবসময় আলো শোষণ করে"],"Chemistry"],
["একটি Lewis acid কী গ্রহণ করে?","Electron pair",["Proton pair","Neutron","Photon অবশ্যই"],"Chemistry"],
["পিরিয়ডিক টেবিলে একই গ্রুপের মৌলগুলোর মধ্যে সাধারণত কী মিল বেশি?","Valence electron বিন্যাসে সাদৃশ্য",["একই পারমাণবিক ভর","একই নিউট্রন সংখ্যা","একই পর্যায়"],"Chemistry"],
["শক্তিশালী অ্যাসিডের উদাহরণ কোনটি?","HCl",["CH₃COOH","NH₃","H₂O"],"Chemistry"],
["Quantum number l মূলত কী নির্দেশ করে?","Orbital-এর আকৃতি/উপশক্তিস্তর",["প্রধান শক্তিস্তর শুধু","শুধু electron spin","নিউক্লিয়াসের ভর"],"Chemistry"],
["Equilibrium constant K কী নির্দেশ করে?","সাম্যে উৎপাদ ও বিক্রিয়কের আপেক্ষিক অনুপাত",["বিক্রিয়ার সময়কাল","ক্যাটালিস্টের ভর","শুধু প্রাথমিক ঘনত্ব"],"Chemistry"],
["Benzene-এর স্থিতিশীলতার গুরুত্বপূর্ণ কারণ কোনটি?","π electron delocalization",["শুধু sp³ hybridization","ionic lattice","নিউট্রন delocalization"],"Chemistry"],
["NaCl পানিতে দ্রবীভূত হলে প্রধানত কী হয়?","Na⁺ ও Cl⁻ আয়নে বিচ্ছুরিত হয়",["Na ও Cl পরমাণুতে অপরিবর্তিত থাকে","NaCl গ্যাসে পরিণত হয়","শুধু proton তৈরি হয়"],"Chemistry"],
["Molarity কোন রাশিকে নির্দেশ করে?","প্রতি লিটার দ্রবণে দ্রবের মোল",["প্রতি কেজি দ্রাবকে মোল","মোট দ্রবণের ভর","শুধু solvent-এর volume"],"Chemistry"],
["প্রাণীকোষে কোনটি অনুপস্থিত?","কোষপ্রাচীর",["কোষঝিল্লি","মাইটোকন্ড্রিয়া","রাইবোসোম"],"Biology"],
["প্রাণীকোষে উদ্ভিদকোষের তুলনায় কোন গঠনটি সাধারণত থাকে?","সেন্ট্রোসোম/সেন্ট্রিওল",["ক্লোরোপ্লাস্ট","বৃহৎ কেন্দ্রীয় রসধানী","কোষপ্রাচীর"],"Biology"],
["কোষের শক্তি উৎপাদনে প্রধান অঙ্গাণু কোনটি?","মাইটোকন্ড্রিয়া",["গলজি বডি","লাইসোসোম","নিউক্লিওলাস"],"Biology"],
["প্রোটিন সংশ্লেষণের সরাসরি স্থান কোনটি?","রাইবোসোম",["লাইসোসোম","সেন্ট্রোসোম","ভ্যাকুওল"],"Biology"],
["DNA-র পূর্ণরূপ কী?","Deoxyribonucleic acid",["Dinucleic acid","Deoxyribose nitrogen acid","Double nucleic arrangement"],"Molecular Biology"],
["RNA-তে DNA-র বদলে কোন ক্ষার থাকে?","ইউরাসিল",["থাইমিন","গুয়ানিন","সাইটোসিন"],"Molecular Biology"],
["মানব রক্তে অক্সিজেন বহনে প্রধান ভূমিকা কার?","হিমোগ্লোবিন",["ইনসুলিন","কেরাটিন","পিত্তলবণ"],"Biology"],
["অ্যান্টিবডি উৎপাদনের সাথে কোন কোষ সরাসরি যুক্ত?","B-লিম্ফোসাইট",["লোহিত রক্তকণিকা","প্লেটলেট","অস্টিওসাইট"],"Biology"],
["এনজাইম সাধারণত কী?","জৈব অনুঘটক",["জিনের অংশমাত্র","খনিজ লবণ","শক্তির উৎস"],"Biology"],
["ইনসুলিন কোন অঙ্গ থেকে নিঃসৃত হয়?","অগ্ন্যাশয়",["থাইরয়েড","যকৃত","প্লীহা"],"Biology"],
["মাইটোসিসের ফলে সাধারণত কতটি কন্যা কোষ তৈরি হয়?","দুটি",["একটি","তিনটি","চারটি"],"Biology"],
["মিয়োসিসের প্রধান ফল কী?","হ্যাপ্লয়েড প্রজনন কোষ তৈরিতে সহায়তা",["দেহকোষ দ্বিগুণ করা","শুধু ক্ষত সারানো","রক্তে গ্লুকোজ বাড়ানো"],"Biology"],
["কোষঝিল্লির প্রধান গঠন কী?","ফসফোলিপিড দ্বিস্তর",["সেলুলোজের একক স্তর","শুধু DNA","ক্যালসিয়াম কার্বোনেট স্তর"],"Biology"],
["হোমিওস্টেসিস বলতে কী বোঝায়?","অভ্যন্তরীণ পরিবেশ তুলনামূলক স্থিতিশীল রাখা",["শুধু বৃদ্ধি","শুধু চলাচল","শুধু প্রজনন"],"Biology"],
["ফুসফুসে গ্যাসের আদান-প্রদান কোথায় হয়?","অ্যালভিওলাই",["খাদ্যনালী","ডায়াফ্রামের পেশি","যকৃত"],"Biology"],
["কিডনির কার্যকরী একক কোনটি?","নেফ্রন",["নিউরন","অ্যালভিওলাস","অস্টিওন"],"Biology"],
["রক্ত জমাট বাঁধায় কোনটি গুরুত্বপূর্ণ?","প্লেটলেট",["রাইবোসোম","নিউরন","অ্যাডিপোসাইট"],"Biology"],
["ATP-র প্রধান ভূমিকা কী?","বহু জৈবিক কাজে ব্যবহারযোগ্য শক্তি সরবরাহ",["জিনের নাম নির্ধারণ","শুধু অক্সিজেন বহন","কোষপ্রাচীর তৈরি"],"Biology"],

["উদ্ভিদকোষে প্রাণীকোষের তুলনায় কোনটি থাকে?","কোষপ্রাচীর",["সেন্ট্রোসোম","হিমোগ্লোবিন","গ্লাইকোজেন কণিকা"],"Botany"],
["প্রকাশ-সংশ্লেষণের প্রধান স্থান কোন অঙ্গাণু?","ক্লোরোপ্লাস্ট",["মাইটোকন্ড্রিয়া","লাইসোসোম","সেন্ট্রোসোম"],"Botany"],
["ক্লোরোফিলের প্রধান কাজ কী?","আলোক শক্তি শোষণে সহায়তা করা",["প্রোটিন ভাঙা","DNA অনুলিপি করা","পানি জমাট করা"],"Botany"],
["জাইলেমের প্রধান কাজ কী?","পানি ও খনিজ পরিবহন",["শুধু চিনি পরিবহন","পরাগায়ন","বীজ তৈরি"],"Botany"],
["ফ্লোয়েম প্রধানত কী পরিবহন করে?","সুক্রোজসহ জৈব দ্রব্য",["শুধু অক্সিজেন","শুধু ক্যালসিয়াম","শুধু DNA"],"Botany"],
["স্টোমাটা কী নিয়ন্ত্রণ করে?","গ্যাস বিনিময় ও জলীয়বাষ্প নির্গমন",["DNA replication","বীজের অঙ্কুরোদ্গমই শুধু","পরাগের DNA"],"Botany"],
["রুট হেয়ার কী বাড়ায়?","শোষণকারী পৃষ্ঠের ক্ষেত্রফল",["ফুলের রং","বীজের DNA","পাতার ক্লোরোফিল"],"Botany"],
["অক্সিনের একটি গুরুত্বপূর্ণ ভূমিকা কী?","কোষের বৃদ্ধি ও ট্রপিক প্রতিক্রিয়ায় সহায়তা",["DNA ধ্বংস","শ্বাস বন্ধ","পরাগ ধ্বংস"],"Botany"],
["ফল সাধারণত কোন গঠন থেকে বিকশিত হয়?","পরিণত ডিম্বাশয়",["শুধু পাপড়ি","শুধু পুংকেশর","শুধু মূল"],"Botany"],
["পরাগধানী কোন অংশের অন্তর্ভুক্ত?","পুংকেশর",["গর্ভকেশর","বৃতি","পাপড়ি"],"Botany"],

["মাছ প্রধানত কোন অঙ্গ দিয়ে পানিতে দ্রবীভূত অক্সিজেন নেয়?","ফুলকা",["ফুসফুস","ট্র্যাকিয়া","শুধু ত্বক"],"Zoology"],
["স্তন্যপায়ীর একটি বৈশিষ্ট্য কোনটি?","স্তন্যগ্রন্থি থেকে দুধ উৎপাদন",["সবাই ডিম পাড়ে","সবাই ফুলকা দিয়ে শ্বাস নেয়","সবাই শীতল রক্তের"],"Zoology"],
["কীটপতঙ্গের দেহ সাধারণত কয়টি প্রধান অঞ্চলে বিভক্ত?","তিনটি",["দুটি","চারটি","পাঁচটি"],"Zoology"],
["মাকড়সা কোন শ্রেণির?","Arachnida",["Insecta","Mollusca","Annelida"],"Zoology"],
["কেঁচো কোন পর্বের?","Annelida",["Arthropoda","Mollusca","Cnidaria"],"Zoology"],
["অক্টোপাস কোন পর্বের?","Mollusca",["Annelida","Arthropoda","Echinodermata"],"Zoology"],
["তারামাছ কোন পর্বের?","Echinodermata",["Mollusca","Chordata","Annelida"],"Zoology"],
["ব্যাঙের জলজ লার্ভাকে কী বলা হয়?","ব্যাঙাচি (Tadpole)",["Pupa","Nymph","Caterpillar"],"Zoology"],

["PCR-এর প্রধান ব্যবহার কী?","নির্দিষ্ট DNA অংশের বহু কপি তৈরি করা",["প্রোটিন জমাট করা","কোষ মেরে ফেলা","লিপিড তৈরি করা"],"Biotechnology"],
["CRISPR-Cas9 কী কাজে ব্যবহৃত হতে পারে?","নির্দিষ্ট DNA ক্রম সম্পাদনা",["শুধু RNA অনুবাদ","ATP উৎপাদন","কোষের পানি বের করা"],"Biotechnology"],
["রিকম্বিন্যান্ট DNA প্রযুক্তিতে কী করা হয়?","ভিন্ন উৎসের DNA অংশ যুক্ত করা",["DNA পোড়ানো","প্রোটিন দ্রবীভূত করা","কোষ শুকানো"],"Biotechnology"],
["ব্যাকটেরিয়া দিয়ে মানব ইনসুলিন উৎপাদন কোন প্রযুক্তির উদাহরণ?","জেনেটিক ইঞ্জিনিয়ারিং",["শুধু পাতন","শুধু টিস্যু কালচার","শুধু ফিল্টারেশন"],"Biotechnology"],
["উদ্ভিদ টিস্যু কালচারের একটি ব্যবহার কী?","দ্রুত ক্লোনাল বংশবিস্তার",["মাটি জমাট করা","পরাগ ধ্বংস","শুধু বীজ শুকানো"],"Biotechnology"],
["Yeast fermentation-এ কী তৈরি হতে পারে?","ইথানল ও CO₂",["DNA ও RNA","ক্যালসিয়াম ও লোহা","শুধু অক্সিজেন"],"Biotechnology"],
["ELISA সাধারণত কী শনাক্ত করে?","নির্দিষ্ট অ্যান্টিজেন বা অ্যান্টিবডি",["হাড়ের ঘনত্ব","রক্তচাপ","উদ্ভিদের উচ্চতা"],"Biotechnology"],
["Stem cell-এর গুরুত্বপূর্ণ বৈশিষ্ট্য কী?","নিজেকে পুনর্নবীকরণ ও বিভিন্ন কোষে বিভেদের ক্ষমতা",["DNA ধ্বংস","রক্ত জমাট","অক্সিজেন তৈরি"],"Biotechnology"],

["লিমনোলজি কী নিয়ে অধ্যয়ন করে?","অভ্যন্তরীণ জলজ বাস্তুতন্ত্র",["মরুভূমি","বায়ুমণ্ডল","শুধু মহাসাগরের জোয়ার"],"Limnology"],
["Eutrophication-এর সাথে কোনটি যুক্ত?","অতিরিক্ত নাইট্রোজেন ও ফসফরাস",["শুধু লবণ শূন্য হওয়া","শুধু আলো কমা","শুধু পাথর বৃদ্ধি"],"Limnology"],
["Dissolved oxygen কমে গেলে কী সমস্যা হতে পারে?","জলজ প্রাণীর শ্বাসক্রিয়ায় চাপ তৈরি হতে পারে",["সব মাছ দ্রুত বড় হয়","সব উদ্ভিদ শুকায়","pH সবসময় 7 হয়"],"Limnology"],
["Secchi disk কী মাপে?","পানির স্বচ্ছতা",["তাপমাত্রা","লবণাক্ততা","স্রোতের গতি"],"Limnology"],
["Thermal stratification কী?","তাপমাত্রাভেদে জলস্তরের স্তরবিন্যাস",["বরফের গলন","নদীর গতি","মাছের স্থানান্তর"],"Limnology"],
["Photic zone কী?","যেখানে পর্যাপ্ত আলো পৌঁছে",["যেখানে অক্সিজেন নেই","শুধু তলদেশ","শুধু উষ্ণতম স্তর"],"Limnology"],

["ব্যাকটেরিয়া সাধারণত কোন ধরনের কোষ?","প্রোক্যারিওটিক",["ইউক্যারিওটিক বহুকোষী","ভাইরাস","ছত্রাক"],"Microbiology"],
["ভাইরাসকে সাধারণত কী বলা হয়?","অকোষীয় সংক্রামক কণা",["স্বাধীনভাবে বিভাজিত কোষ","ব্যাকটেরিয়ার অঙ্গাণু","উদ্ভিদ টিস্যু"],"Microbiology"],
["Gram-positive ব্যাকটেরিয়ার কোষপ্রাচীরে কী বেশি থাকে?","পুরু peptidoglycan স্তর",["সেলুলোজ","কাইটিন","কোনো কোষপ্রাচীর নেই"],"Microbiology"],
["Autoclave কী কাজে ব্যবহৃত হয়?","চাপযুক্ত বাষ্পে জীবাণুমুক্তকরণ",["ঠান্ডা করা","DNA sequencing","pH মাপা"],"Microbiology"],
["Antibiotic সাধারণত কোন জীবের বিরুদ্ধে ব্যবহৃত হয়?","ব্যাকটেরিয়ার বিরুদ্ধে",["সব ভাইরাসের বিরুদ্ধে নিশ্চিতভাবে","সব পোকামাকড়ের বিরুদ্ধে","শুধু উদ্ভিদের বিরুদ্ধে"],"Microbiology"],
["Lactobacillus কোন প্রক্রিয়ায় গুরুত্বপূর্ণ?","ল্যাকটিক অ্যাসিড fermentation",["DNA replication","ফটোসিন্থেসিস","নাইট্রোজেনের দহন"],"Microbiology"],
["Biofilm কী?","পৃষ্ঠে গঠিত অণুজীবের সংগঠিত আবরণ",["একটি ভাইরাস","মৃত কোষ","খনিজ স্ফটিক"],"Microbiology"],

["Transcription-এ কী তৈরি হয়?","DNA টেমপ্লেট থেকে RNA",["RNA থেকে DNA সবসময়","প্রোটিন থেকে DNA","লিপিড থেকে RNA"],"Molecular Biology"],
["Translation কোথায় ঘটে?","রাইবোসোমে",["লাইসোসোমে","কোষপ্রাচীরে","গলজি বডির বাইরে"],"Molecular Biology"],
["mRNA-এর কাজ কী?","প্রোটিন তৈরির জন্য জেনেটিক তথ্য বহন করা",["DNA কাটা","ATP ভাঙা","কোষঝিল্লি তৈরি"],"Molecular Biology"],
["Codon কী?","mRNA-র তিন নিউক্লিওটাইডের ক্রম",["DNA-র পুরো অণু","একটি প্রোটিন","একটি অঙ্গাণু"],"Molecular Biology"],
["DNA replication-এর বৈশিষ্ট্য কী?","Semiconservative",["সম্পূর্ণ conservative","শুধু RNA-dependent","template লাগে না"],"Molecular Biology"],
["Mutation বলতে কী বোঝায়?","জেনেটিক উপাদানের ক্রমে পরিবর্তন",["কোষের আয়তন বাড়া","পানি হারানো","প্রোটিন জমা হওয়া"],"Molecular Biology"],
["Restriction enzyme কী করতে পারে?","নির্দিষ্ট DNA sequence চিনে কেটে দিতে পারে",["RNA অনুবাদ","ATP তৈরি","লিপিড ভাঙা"],"Molecular Biology"],
["Operon ধারণাটি বিশেষভাবে কোথায় gene regulation বোঝাতে ব্যবহৃত হয়?","ব্যাকটেরিয়া/প্রোক্যারিওটে",["ভাইরাসে","লোহিত রক্তকণিকায়","পরিণত পেশিকোষে"],"Molecular Biology"],

["ইসলামিক জ্ঞানচর্চায় পর্যবেক্ষণ ও চিন্তার গুরুত্ব কোন ধারণার সাথে সামঞ্জস্যপূর্ণ?","সৃষ্টিজগতের নিদর্শন নিয়ে চিন্তা ও জ্ঞান অন্বেষণ",["জ্ঞানচর্চা নিষিদ্ধ","পরীক্ষা অপ্রয়োজনীয়","প্রমাণের বদলে কেবল অনুমান"],"Islamic Science & Knowledge"],
["ইবন আল-হাইসামের বৈজ্ঞানিক পদ্ধতির সাথে কোনটি সামঞ্জস্যপূর্ণ?","পরীক্ষা ও পর্যবেক্ষণের মাধ্যমে ধারণা যাচাই",["প্রমাণ ছাড়াই সিদ্ধান্ত","পরীক্ষা এড়িয়ে চলা","শুধু কর্তৃত্বের উপর নির্ভর করা"],"Islamic Science & Knowledge"],
["আল-বিরুনির কাজের একটি বৈশিষ্ট্য কী?","পরিমাপ ও তুলনামূলক পর্যবেক্ষণ",["কল্পকাহিনি লেখা","শুধু ভাষাতত্ত্ব","শুধু স্থাপত্য"],"Islamic Science & Knowledge"],
["ইবন সিনার 'কানুন' কোন ক্ষেত্রের সাথে সম্পর্কিত?","চিকিৎসাবিজ্ঞান",["জ্যোতির্বিদ্যার যন্ত্র","সামুদ্রিক মানচিত্র","যান্ত্রিক ঘড়ি"],"Islamic Science & Knowledge"],
["আল-জাজারির অবদান কোন ক্ষেত্রের সাথে সম্পর্কিত?","যান্ত্রিক প্রকৌশল",["উদ্ভিদ শ্রেণিবিন্যাস","ভাইরাসবিদ্যা","সমুদ্রবিজ্ঞান"],"Islamic Science & Knowledge"],
["আল-ইদ্রিসির কাজের সাথে কোন ক্ষেত্রের সম্পর্ক বেশি?","ভূগোল ও মানচিত্রবিদ্যা",["আণবিক জীববিজ্ঞান","কোষবিদ্যা","ব্যাকটেরিয়াল জেনেটিক্স"],"Islamic Science & Knowledge"],
["ইবন আল-বাইতারের কাজ কোন ক্ষেত্রের সাথে বিশেষভাবে যুক্ত?","উদ্ভিদ ও ঔষধি পদার্থ",["জ্যোতির্পদার্থবিদ্যা","যান্ত্রিক ঘড়ি","পরমাণু বিভাজন"],"Islamic Science & Knowledge"],
["আল-জাজারির জ্ঞানচর্চায় কোন দক্ষতা বিশেষভাবে গুরুত্বপূর্ণ ছিল?","যান্ত্রিক নকশা ও নির্মাণ",["শুধু উদ্ভিদ প্রজনন","শুধু ভাইরাস শনাক্তকরণ","শুধু রক্তের গ্রুপ নির্ণয়"],"Islamic Science & Knowledge"]
];



const EXTRA_FACTS=[
 ["বল ও ত্বরণের সম্পর্ক কোন সূত্রে সবচেয়ে সরাসরি প্রকাশ পায়?","F = ma",["F = mv","F = m/a","F = a/m"],"Physics"],
 ["সমবেগে চলা বস্তুর ত্বরণ কত?","শূন্য",["ধ্রুব কিন্তু শূন্য নয়","অসীম","ভরের সমান"],"Physics"],
 ["কাজের SI একক কোনটি?","Joule",["Newton","Watt","Pascal"],"Physics"],
 ["ক্ষমতার SI একক কোনটি?","Watt",["Joule","Volt","Ohm"],"Physics"],
 ["ভরবেগের সূত্র কোনটি?","p = mv",["p = m/v","p = v/m","p = ma"],"Physics"],
 ["তড়িৎ প্রবাহের SI একক কী?","Ampere",["Volt","Ohm","Coulomb"],"Physics"],
 ["Ohm-এর সূত্র কোন সম্পর্কটি প্রকাশ করে?","V = IR",["V = I/R","I = VR","R = VI"],"Physics"],
 ["আলো শূন্যস্থানে প্রায় কত বেগে চলে?","3.00 × 10⁸ m/s",["3.00 × 10⁶ m/s","3.00 × 10⁷ m/s","3.00 × 10⁹ m/s"],"Physics"],
 ["তাপমাত্রা বাড়লে অধিকাংশ কঠিন পদার্থে কী ঘটে?","তাপীয় প্রসারণ ঘটে",["ভর শূন্য হয়","চার্জ দ্বিগুণ হয়","মহাকর্ষ বন্ধ হয়"],"Physics"],
 ["লেন্সের power-এর SI একক কী?","Diopter",["Tesla","Henry","Weber"],"Physics"],
 ["বাইনারি সংখ্যায় 1010-এর দশমিক মান কত?","10",["8","12","14"],"ICT"],
 ["CPU-এর প্রধান কাজ কোনটি?","নির্দেশনা প্রক্রিয়াকরণ ও হিসাব সম্পাদন",["শুধু ছবি সংরক্ষণ","শুধু বিদ্যুৎ তৈরি","শুধু কাগজ ছাপানো"],"ICT"],
 ["RAM-এর বৈশিষ্ট্য কোনটি?","বিদ্যুৎ বন্ধ হলে সাধারণত ডেটা হারায়",["স্থায়ীভাবে ডেটা রাখে","শুধু ইনপুট নেয়","কেবল নেটওয়ার্কে কাজ করে"],"ICT"],
 ["HTML-এর মূল ব্যবহার কী?","ওয়েব পেজের কাঠামো নির্ধারণ",["শুধু ডেটাবেস এনক্রিপ্ট করা","শুধু CPU নিয়ন্ত্রণ","শুধু ছবি আঁকা"],"ICT"],
 ["IP address-এর প্রধান ভূমিকা কী?","নেটওয়ার্কে একটি ডিভাইস/ইন্টারফেস শনাক্ত করতে সহায়তা",["শুধু স্ক্রিনের রং নির্ধারণ","শুধু ফাইল compress করা","শুধু keyboard চালানো"],"ICT"],
 ["Database-এ primary key-এর মূল উদ্দেশ্য কী?","একটি record-কে অনন্যভাবে শনাক্ত করা",["সব record মুছে ফেলা","শুধু password তৈরি","শুধু ছবি দেখানো"],"ICT"],
 ["Algorithm বলতে কী বোঝায়?","কোনো সমস্যা সমাধানের সুনির্দিষ্ট ধাপসমূহ",["শুধু programming language","শুধু hardware","শুধু internet speed"],"ICT"],
 ["Encryption-এর উদ্দেশ্য কী?","তথ্যকে অননুমোদিত পাঠ থেকে সুরক্ষিত করা",["ডেটা মুছে ফেলা","CPU ঠান্ডা করা","স্ক্রিন বড় করা"],"ICT"],
 ["Binary search সাধারণত কোন শর্তে প্রয়োগ করা হয়?","ডেটা sorted থাকতে হয়",["ডেটা সবসময় random হতে হয়","শুধু image-এ কাজ করে","শুধু encrypted data-তে কাজ করে"],"ICT"],
 ["Cloud computing-এ resource সাধারণত কোথা থেকে পাওয়া যায়?","নেটওয়ার্কের মাধ্যমে remote infrastructure থেকে",["শুধু local keyboard থেকে","শুধু printer থেকে","শুধু offline paper থেকে"],"ICT"],
 ["ত্রিভুজের তিন কোণের সমষ্টি কত?","180°",["90°","270°","360°"],"Mathematics"],
 ["একটি মৌলিক সংখ্যার ধনাত্মক গুণনীয়ক কয়টি?","দুটি",["একটি","তিনটি","চারটি"],"Mathematics"],
 ["2, 4, 8, 16 ধারার পরের পদ কী?","32",["24","30","36"],"Mathematics"],
 ["একটি সরলরেখার slope কী নির্দেশ করে?","y-এর পরিবর্তনের হার x-এর তুলনায়",["শুধু y-এর intercept","শুধু x-এর মান","রেখার দৈর্ঘ্য"],"Mathematics"],
 ["log₁₀(1000) কত?","3",["2","10","100"],"Mathematics"],
 ["∫ 2x dx-এর একটি antiderivative কোনটি?","x² + C",["2x² + C","x + C","x²/2 + C"],"Mathematics"],
 ["d(x²)/dx কত?","2x",["x","x²","2"],"Mathematics"],
 ["একটি fair coin একবার ছুঁড়লে Head-এর সম্ভাবনা কত?","1/2",["1/4","1/3","2/3"],"Mathematics"],
 ["Matrix multiplication-এর জন্য কোন শর্তটি প্রয়োজন?","প্রথম matrix-এর column সংখ্যা = দ্বিতীয়টির row সংখ্যা",["দুই matrix-এর row সংখ্যা সবসময় সমান","দুই matrix-এর column সংখ্যা সবসময় সমান","দুটিই square হওয়া বাধ্যতামূলক"],"Mathematics"],
 ["একটি vector-এর magnitude কী?","তার দৈর্ঘ্য/মান",["শুধু x-component","শুধু y-component","শুধু direction"],"Mathematics"],
 ["পৃথিবী সূর্যকে একবার প্রদক্ষিণ করতে প্রায় কত সময় নেয়?","365.25 দিন",["24 ঘণ্টা","30 দিন","700 দিন"],"Astronomy"],
 ["চাঁদের আলো সম্পর্কে কোনটি সঠিক?","চাঁদ মূলত সূর্যের আলো প্রতিফলিত করে",["চাঁদ নিজে সূর্যের মতো আলো উৎপন্ন করে","চাঁদ সবসময় plasma দিয়ে জ্বলে","চাঁদ কেবল পৃথিবীর আলো শোষণ করে"],"Astronomy"],
 ["একটি নক্ষত্রের মূল শক্তির উৎস কী হতে পারে?","কেন্দ্রে nuclear fusion",["শুধু chemical combustion","শুধু friction","শুধু reflection"],"Astronomy"],
 ["Milky Way কী?","একটি galaxy",["একটি planet","একটি moon","একটি nebula মাত্র"],"Astronomy"],
 ["গ্রহের কক্ষপথে সূর্যের সবচেয়ে কাছে থাকা বিন্দুকে কী বলা হয়?","Perihelion",["Aphelion","Zenith","Equinox"],"Astronomy"],
 ["Event horizon কোন জ্যোতির্বৈজ্ঞানিক বস্তুর সাথে বিশেষভাবে যুক্ত?","Black hole",["White dwarf","Asteroid belt","Comet tail"],"Astronomy"],
 ["Redshift সাধারণত দূরে সরে যাওয়া আলোর কোন পরিবর্তন নির্দেশ করে?","তরঙ্গদৈর্ঘ্য বৃদ্ধি",["তরঙ্গদৈর্ঘ্য হ্রাস","আলো সম্পূর্ণ অদৃশ্য হওয়া","শুধু intensity দ্বিগুণ হওয়া"],"Astronomy"],
 ["একটি light-year কী মাপে?","দূরত্ব",["সময়","ভর","তাপমাত্রা"],"Astronomy"],
 ["Hertzsprung–Russell diagram কী সম্পর্ক দেখায়?","নক্ষত্রের luminosity ও surface temperature",["গ্রহের ভর ও সমুদ্রের গভীরতা","গ্যালাক্সির বয়স ও নদীর গতি","চাঁদের phase ও বাতাসের চাপ"],"Astronomy"],
 ["Neutron star কী ধরনের অবশিষ্ট নাক্ষত্রিক বস্তু?","অত্যন্ত ঘন stellar remnant",["একটি gas giant","একটি asteroid","একটি সাধারণ moon"],"Astronomy"],
 ["Quantum superposition ধারণাটি কী বোঝায়?","একটি quantum state একাধিক সম্ভাব্য অবস্থার সমন্বয়ে থাকতে পারে",["সব বস্তু একই অবস্থায় থাকে","measurement অসম্ভব","কেবল classical particles superpose করে"],"Quantum Science"],
 ["Heisenberg uncertainty principle কোন জোড়ার নির্ভুলতা সীমিত করে?","অবস্থান ও ভরবেগ",["ভর ও চার্জ","তাপমাত্রা ও রং","সময় ও mass number"],"Quantum Science"],
 ["একটি photon-এর শক্তি কোন সম্পর্কের সাথে যুক্ত?","E = hf",["E = mc","E = h/f","E = f/h"],"Quantum Science"],
 ["Quantum tunneling কী?","classically নিষিদ্ধ barrier পেরিয়ে quantum particle-এর পাওয়ার সম্ভাবনা",["particle-এর গতি সবসময় শূন্য হওয়া","আলো বন্ধ হওয়া","মাধ্যাকর্ষণ অদৃশ্য হওয়া"],"Quantum Science"],
 ["Entanglement কী নির্দেশ করে?","দুই quantum system-এর যৌথ state-এ শক্তিশালী correlation",["দুই particle সবসময় একই জায়গায় থাকা","কেবল classical coincidence","শুধু gravity effect"],"Quantum Science"],
 ["Wave function কী ধারণার সাথে যুক্ত?","quantum state-এর mathematical description",["শুধু classical trajectory","শুধু temperature","শুধু mass density"],"Quantum Science"],
 ["Quantum number n সাধারণত কী নির্দেশ করে?","প্রধান শক্তিস্তর",["শুধু spin direction","শুধু nucleus charge","শুধু orbital orientation"],"Quantum Science"],
 ["Pauli exclusion principle কী বলে?","একই atom-এ দুই electron-এর চার quantum number একসাথে একই হতে পারে না",["সব electron একই orbit-এ থাকে","একটি atom-এ electron থাকতে পারে না","সব electron-এর spin অবশ্যই সমান"],"Quantum Science"],
 ["Superconductivity-এর একটি বৈশিষ্ট্য কী?","নির্দিষ্ট শর্তে বৈদ্যুতিক resistance অত্যন্ত কম/শূন্য হতে পারে",["resistance সবসময় বেড়ে যায়","কেবল আলো উৎপন্ন করে","শুধু gas-এ ঘটে"],"Quantum Science"],
 ["Quantum measurement-এর ফলাফল সম্পর্কে কোনটি সঠিক?","পরিমাপ নির্দিষ্ট ফল দেয় এবং quantum state-কে প্রভাবিত করতে পারে",["পরিমাপ কখনো state-কে প্রভাবিত করে না","সব measurement একই ফল দেয়","measurement কেবল classical object-এ সম্ভব"],"Quantum Science"],
 ["Plate tectonics অনুযায়ী lithospheric plates কী করতে পারে?","আপেক্ষিকভাবে সরে যেতে পারে",["কখনো নড়ে না","শুধু বাতাসে ভাসে","শুধু সমুদ্রের পানিতে দ্রবীভূত হয়"],"Geology & Earth Science"],
 ["ভূমিকম্পের magnitude কী ধারণার সাথে যুক্ত?","মুক্ত শক্তির পরিমাণের পরিমাপ",["শুধু ক্ষয়ক্ষতির ছবি","শুধু আবহাওয়ার তাপমাত্রা","শুধু সমুদ্রের উচ্চতা"],"Geology & Earth Science"],
 ["Igneous rock কীভাবে তৈরি হয়?","গলিত শিলা/ম্যাগমা বা লাভা ঠান্ডা হয়ে",["শুধু উদ্ভিদের পচনে","শুধু বৃষ্টির কারণে","শুধু বাতাসে ঘর্ষণে"],"Geology & Earth Science"],
 ["Sedimentary rock গঠনে কোন প্রক্রিয়া গুরুত্বপূর্ণ?","sediment জমা ও lithification",["শুধু nuclear fusion","শুধু photosynthesis","শুধু বজ্রপাত"],"Geology & Earth Science"],
 ["Water cycle-এ evaporation কী?","তরল পানি থেকে জলীয়বাষ্পে রূপান্তর",["বাষ্প থেকে বরফ","বরফ থেকে পাথর","মেঘ থেকে মাটি"],"Geology & Earth Science"],
 ["বায়ুমণ্ডলের কোন স্তরে অধিকাংশ আবহাওয়া ঘটে?","Troposphere",["Stratosphere","Mesosphere","Exosphere"],"Geology & Earth Science"],
 ["Greenhouse effect-এর প্রধান কারণ কী?","বায়ুমণ্ডলের কিছু gas infrared radiation শোষণ/পুনঃনিঃসরণ করে",["সব আলো মহাকাশে প্রতিফলিত হওয়া","শুধু অক্সিজেন জমা হওয়া","মহাসাগর শুকিয়ে যাওয়া"],"Environmental Science"],
 ["Biodiversity বলতে কী বোঝায়?","জীববৈচিত্র্য—জিন, প্রজাতি ও ecosystem-এর বৈচিত্র্য",["শুধু প্রাণীর সংখ্যা","শুধু গাছের উচ্চতা","শুধু মাটির pH"],"Environmental Science"],
 ["Carbon cycle-এ photosynthesis কী করে?","CO₂ থেকে জৈব কার্বন তৈরিতে সহায়তা করে",["কার্বন সম্পূর্ণ ধ্বংস করে","শুধু nitrogen তৈরি করে","শুধু methane পোড়ায়"],"Environmental Science"],
 ["Engineering design-এর গুরুত্বপূর্ণ ধাপ কোনটি?","সমস্যা নির্ধারণ, নকশা, পরীক্ষা ও উন্নয়ন",["শুধু final product আঁকা","শুধু material কেনা","শুধু বিজ্ঞাপন তৈরি"],"Engineering"],
 ["Feedback control system-এর উদ্দেশ্য কী?","output পর্যবেক্ষণ করে system-এর আচরণ সামঞ্জস্য করা",["শুধু power বন্ধ করা","শুধু input মুছে ফেলা","শুধু sensor নিষ্ক্রিয় করা"],"Engineering"],
 ["Bridge-এর truss design কেন কার্যকর হতে পারে?","ত্রিভুজাকার সদস্য দিয়ে load transfer দক্ষভাবে করা যায়",["ত্রিভুজে কোনো force কাজ করে না","শুধু decoration-এর জন্য","শুধু পানি আটকাতে"],"Engineering"],
 ["Semiconductor-এর conductivity সাধারণত কীভাবে নিয়ন্ত্রণ করা যায়?","doping ও অন্যান্য বৈদ্যুতিক/তাপীয় শর্ত দিয়ে",["শুধু রং বদলে","শুধু ওজন বাড়িয়ে","শুধু পানিতে ভিজিয়ে"],"Materials Science"],
 ["Alloy কী?","দুই বা ততোধিক উপাদানের মধ্যে অন্তত একটি ধাতু থাকা কঠিন/ধাতব মিশ্রণ",["শুধু বিশুদ্ধ element","শুধু gas mixture","শুধু organic polymer"],"Materials Science"],
 ["Graphene কী?","এক স্তর carbon atoms-এর honeycomb lattice",["একটি protein","একটি virus","একটি liquid metal"],"Materials Science"],
 ["Ceramic materials-এর একটি সাধারণ বৈশিষ্ট্য কী?","উচ্চ তাপ সহনশীলতা ও কঠোরতা থাকতে পারে",["সবসময় rubber-এর মতো নমনীয়","সবসময় electrical superconductor","সবসময় liquid"],"Materials Science"],
 ["Molecular biology-তে promoter কী?","transcription শুরু/নিয়ন্ত্রণের সাথে যুক্ত DNA region",["একটি protein product","একটি lipid","একটি ribosome"],"Molecular Biology"],
 ["Biotechnology-তে vector কী করতে পারে?","genetic material একটি host cell-এ বহনে সহায়তা করতে পারে",["শুধু cell শুকায়","শুধু protein ভাঙে","শুধু microscope বানায়"],"Biotechnology"],
 ["Limnology-তে thermocline কী?","জলের এমন স্তর যেখানে তাপমাত্রা দ্রুত পরিবর্তিত হয়",["সবচেয়ে লবণাক্ত স্তর","শুধু বরফের স্তর","শুধু কাদা স্তর"],"Limnology"],
 ["Microbiology-তে binary fission কী?","একটি prokaryotic cell বিভাজিত হয়ে দুটি কন্যা কোষ তৈরি করে",["একটি virus-এর budding মাত্র","DNA transcription","protein folding"],"Microbiology"],
 ["Botany-তে transpiration কী?","উদ্ভিদ থেকে জলীয়বাষ্পের ক্ষয়",["শুধু CO₂ গ্রহণ","শুধু pollen তৈরি","শুধু glucose ভাঙা"],"Botany"],
 ["Zoology-তে homeothermy কী?","দেহের তাপমাত্রা তুলনামূলক স্থিতিশীল রাখার ক্ষমতা",["শুধু পানিতে বাস করা","শুধু ডিম পাড়া","শুধু রং পরিবর্তন"],"Zoology"],
 ["Biology-তে gene কী?","বংশগত তথ্যের কার্যকরী একক/sequence",["শুধু protein","শুধু cell wall","শুধু ATP"],"Biology"],
 ["Chemistry-তে enthalpy change কী প্রকাশ করে?","নির্দিষ্ট শর্তে system-এর heat content পরিবর্তনের সাথে সম্পর্কিত রাশি",["শুধু reaction time","শুধু atomic number","শুধু catalyst mass"],"Chemistry"],
 ["Cosmology-তে cosmic microwave background কী?","প্রারম্ভিক উষ্ণ মহাবিশ্বের অবশিষ্ট thermal radiation",["একটি planet-এর আলো","শুধু black hole-এর jet","শুধু solar wind"],"Cosmology"],
 ["Dark matter ধারণাটি কেন ব্যবহৃত হয়?","দৃশ্যমান পদার্থের চেয়ে বেশি মহাকর্ষীয় প্রভাব ব্যাখ্যা করতে",["শুধু আলো উৎপাদন করতে","শুধু পৃথিবীর আবহাওয়া ব্যাখ্যা করতে","শুধু chemistry reaction ব্যাখ্যা করতে"],"Cosmology"],
 ["Dark energy শব্দটি কোন cosmic observation-এর সাথে যুক্ত?","মহাবিশ্বের accelerated expansion",["শুধু নক্ষত্রের rotation","শুধু চাঁদের phase","শুধু পৃথিবীর gravity"],"Cosmology"],
 ["General relativity-তে gravity কীভাবে বর্ণিত হয়?","spacetime-এর curvature হিসেবে",["শুধু একটি chemical bond হিসেবে","শুধু electric current হিসেবে","শুধু sound wave হিসেবে"],"Cosmology"],
 ["Islamic belief অনুযায়ী আসমান ও জমিনের স্রষ্টা কে? / In Islamic belief, Who is the Creator of the heavens and the earth?","আল্লাহ — Allah",["ফেরেশতা — The angels","মানুষ — Humanity","প্রকৃতি নিজে — Nature itself"],"Islamic Science & Knowledge"],
 ["ইসলামি বিশ্বাসে সর্বশক্তিমান ও একমাত্র উপাস্য কে? / Who is the One worthy of worship in Islam?","আল্লাহ — Allah",["কোনো নবী — A prophet","কোনো ফেরেশতা — An angel","কোনো জ্যোতিষ্ক — A celestial body"],"Islamic Science & Knowledge"],
 ["ইসলামি বিশ্বাসে কুরআন কার বাণী হিসেবে মানা হয়? / Whose word is the Qur'an regarded as in Islam?","আল্লাহর বাণী — The word of Allah",["মানব রচিত কাব্য — A human poem","একজন জ্যোতির্বিদের লেখা — An astronomer's writing","একটি বৈজ্ঞানিক ম্যানুয়াল — A science manual"],"Islamic Science & Knowledge"],
 ["ইসলামি ঐতিহ্যে জ্ঞান অন্বেষণের একটি গুরুত্বপূর্ণ নীতি কোনটি? / Which principle is important in the Islamic tradition of seeking knowledge?","জ্ঞান অন্বেষণ ও চিন্তাশীল পর্যবেক্ষণ — Seeking knowledge and thoughtful observation",["জ্ঞান এড়িয়ে চলা — Avoiding knowledge","প্রমাণ অপ্রয়োজনীয় — Evidence is unnecessary","প্রশ্ন করা নিষিদ্ধ — Questions are forbidden"],"Islamic Science & Knowledge"],
 ["ইবন আল-হাইসামের কাজ কোন ক্ষেত্রের সাথে বিশেষভাবে যুক্ত? / Ibn al-Haytham is especially associated with which field?","অপটিক্স — Optics",["জেনেটিক ইঞ্জিনিয়ারিং — Genetic engineering","কম্পাইলার ডিজাইন — Compiler design","নিউক্লিয়ার রিঅ্যাক্টর — Nuclear reactor"],"Islamic Science & Knowledge"],
 ["আল-খওয়ারিজমির নাম কোন ধারণার সাথে ঐতিহাসিকভাবে যুক্ত? / Al-Khwarizmi's name is historically associated with which concept?","Algorithm — অ্যালগরিদম",["Antibody — অ্যান্টিবডি","Photosynthesis — প্রকাশ-সংশ্লেষণ","PCR — পিসিআর"],"Islamic Science & Knowledge"],
 ["ইবন সিনার বিখ্যাত চিকিৎসাবিষয়ক গ্রন্থ কোনটি? / Which famous medical work is associated with Ibn Sina?","The Canon of Medicine — কানুন ফিৎ-তিব্ব",["The Book of Optics — কিতাব আল-মানাজির","The Book of Ingenious Devices — কিতাব আল-হিয়াল","The Meadows of Gold — মুরূজ আল-ধাহাব"],"Islamic Science & Knowledge"],
 ["আল-বিরুনি কোন ধরনের কাজের জন্য পরিচিত? / Al-Biruni is known for work involving which area?","পরিমাপ, জ্যোতির্বিজ্ঞান ও প্রাকৃতিক বিজ্ঞান — Measurement, astronomy and natural science",["শুধু novel writing — শুধু উপন্যাস লেখা","শুধু modern programming — শুধু আধুনিক programming","শুধু film production — শুধু চলচ্চিত্র নির্মাণ"],"Islamic Science & Knowledge"],
 ["আল-জাজারি কোন ক্ষেত্রের সাথে বেশি পরিচিত? / Al-Jazari is best known for which field?","যান্ত্রিক প্রকৌশল — Mechanical engineering",["Molecular genetics — আণবিক জেনেটিক্স","Marine biology — সামুদ্রিক জীববিজ্ঞান","Quantum computing — কোয়ান্টাম কম্পিউটিং"],"Islamic Science & Knowledge"],
 ["ইবন আল-বাইতার কোন ক্ষেত্রের সাথে যুক্ত? / Ibn al-Baytar is associated with which field?","উদ্ভিদ ও ঔষধি পদার্থ — Botany and medicinal substances",["Cosmology only — শুধু মহাকাশতত্ত্ব","Computer networking — কম্পিউটার নেটওয়ার্কিং","Bridge engineering — সেতু প্রকৌশল"],"Islamic Science & Knowledge"],
 ["আল-ইদ্রিসির কাজ কোন ক্ষেত্রের সাথে যুক্ত? / Al-Idrisi's work is associated with which field?","ভূগোল ও মানচিত্রবিদ্যা — Geography and cartography",["Microbial culture — অণুজীব culture","Protein folding — protein folding","Quantum tunneling — quantum tunneling"],"Islamic Science & Knowledge"],
 ["ইসলামি বিশ্বাসে আল্লাহ সম্পর্কে 'তাওহিদ' কী নির্দেশ করে? / In Islamic belief, what does Tawhid refer to?","আল্লাহর একত্ব — The oneness of Allah",["অনেক স্রষ্টার ধারণা — Many creators","শুধু ফেরেশতাদের উপাসনা — Worship of angels","প্রকৃতির উপাসনা — Worship of nature"],"Islamic Science & Knowledge"],
 ["ইসলামি বিশ্বাসে নবী মুহাম্মদ ﷺ-এর মর্যাদা কী? / In Islamic belief, what is Prophet Muhammad ﷺ's role?","আল্লাহর রাসূল ও শেষ নবী — Messenger of Allah and the final prophet",["স্রষ্টা — The Creator","একজন ফেরেশতা — An angel","একজন গ্রহ — A planet"],"Islamic Science & Knowledge"]
];

const ADV=[
["NaCl","MgCl₂","NaCl",["MgCl₂","CH₄","SiO₂"],"Chemistry"],
["catalyst","equilibrium constant","catalyst",["equilibrium constant","reaction enthalpy","product identity"],"Chemistry"],
["anode","cathode","anode",["cathode","salt bridge","electrolyte solvent"],"Chemistry"],
["HCl","CH₃COOH","HCl",["CH₃COOH","NH₃","H₂O"],"Chemistry"],
["কোষপ্রাচীর","কোষঝিল্লি","কোষপ্রাচীর",["কোষঝিল্লি","মাইটোকন্ড্রিয়া","গলজি বডি"],"Biology"],
["ক্লোরোপ্লাস্ট","মাইটোকন্ড্রিয়া","ক্লোরোপ্লাস্ট",["মাইটোকন্ড্রিয়া","রাইবোসোম","লাইসোসোম"],"Botany"],
["জাইলেম","ফ্লোয়েম","জাইলেম",["ফ্লোয়েম","ক্যাম্বিয়াম","কর্ক"],"Botany"],
["PCR","ELISA","PCR",["ELISA","Western blot","Gram stain"],"Biotechnology"],
["Secchi disk","Petri dish","Secchi disk",["Petri dish","Kirby disk","watch glass"],"Limnology"],
["Taq polymerase","Pepsin","Taq polymerase",["Pepsin","Amylase","Lipase"],"Biotechnology"],
["Codon","Anticodon","Codon",["Anticodon","Operon","Intron"],"Molecular Biology"],
["Peptidoglycan","Cellulose","Peptidoglycan",["Cellulose","Chitin","Lignin"],"Microbiology"],
["ফুলকা","ফুসফুস","ফুলকা",["ফুসফুস","ট্র্যাকিয়া","কিডনি"],"Zoology"]
];

function hash(n){let x=(n*1103515245+12345)>>>0;x^=x>>>16;x=Math.imul(x,2246822519)>>>0;x^=x>>>13;return x>>>0}
function shuffle(a,seed){a=[...a];for(let i=a.length-1;i>0;i--){let j=hash(seed+i*97)%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
const GENERIC_FALLBACK={
"Chemistry":["কোন বক্তব্যটি reaction kinetics ও equilibrium-এর পার্থক্য সবচেয়ে ভালো বোঝায়?","Catalyst বিক্রিয়ার গতি বদলায় কিন্তু নির্দিষ্ট তাপমাত্রায় equilibrium constant সাধারণত বদলায় না",["Catalyst সবসময় equilibrium constant দ্বিগুণ করে","Catalyst উৎপাদের রাসায়নিক পরিচয় বদলে দেয়","Catalyst শুধু চাপের মান নির্ধারণ করে"]],
"Biology":["কোষীয় গঠন ও কাজের সম্পর্ক সম্পর্কে কোন বক্তব্যটি সবচেয়ে নির্ভুল?","অঙ্গাণুর গঠন তার নির্দিষ্ট কোষীয় কাজের সাথে সম্পর্কিত",["সব অঙ্গাণুর একই কাজ","কোষে গঠন ও কাজের কোনো সম্পর্ক নেই","শুধু নিউক্লিয়াসই সব কোষীয় কাজ করে"]],
"Botany":["উদ্ভিদের পরিবহন টিস্যু সম্পর্কে কোন বক্তব্যটি সবচেয়ে নির্ভুল?","জাইলেম মূলত পানি-খনিজ এবং ফ্লোয়েম জৈব দ্রব্য পরিবহনে বিশেষায়িত",["দুটিই শুধু পানি পরিবহন করে","জাইলেম শুধু চিনি বহন করে","ফ্লোয়েম কেবল অক্সিজেন বহন করে"]],
"Zoology":["প্রাণীবিজ্ঞানে অঙ্গতন্ত্র সম্পর্কে কোন বক্তব্যটি সবচেয়ে নির্ভুল?","একাধিক অঙ্গ সমন্বিতভাবে নির্দিষ্ট শারীরবৃত্তীয় কাজ সম্পন্ন করতে পারে",["প্রতিটি অঙ্গ একাই সব কাজ করে","সব অঙ্গ একই টিস্যু দিয়ে গঠিত","অঙ্গতন্ত্রে নিয়ন্ত্রণের প্রয়োজন নেই"]],
"Biotechnology":["PCR ও sequencing-এর সম্পর্ক কোনটি?","PCR নির্দিষ্ট DNA অংশ বাড়াতে পারে, sequencing nucleotide order নির্ণয় করে",["দুটিই একই প্রক্রিয়া","Sequencing DNA কপি করে কিন্তু PCR sequence পড়ে","PCR শুধু protein শনাক্ত করে"]],
"Limnology":["একটি হ্রদের ecosystem বোঝার সময় কোন সমন্বয়টি সবচেয়ে গুরুত্বপূর্ণ?","আলো, তাপমাত্রা, dissolved oxygen ও nutrient dynamics",["শুধু পানির রং","শুধু বাতাসের গতি","শুধু তীরের উচ্চতা"]],
"Microbiology":["অণুজীব শনাক্তকরণে একাধিক পরীক্ষা প্রয়োজন হতে পারে কেন?","একটি বৈশিষ্ট্য অনেক প্রজাতির মধ্যে মিল থাকতে পারে",["সব অণুজীব একই","একটি পরীক্ষাই সবসময় যথেষ্ট","সংস্কৃতি ছাড়া DNA-এর অস্তিত্ব নেই"]],
"Molecular Biology":["Gene expression-এ transcription ও translation-এর সম্পর্ক কোনটি?","Transcription RNA তৈরি করে এবং translation protein synthesis-এ সহায়তা করে",["দুটিই DNA replication","Translation আগে DNA বানায়","Transcription সরাসরি lipid তৈরি করে"]],
"Islamic Science & Knowledge":["ইসলামি জ্ঞানচর্চার ঐতিহাসিক ধারায় বৈজ্ঞানিক অনুসন্ধানের সঙ্গে কোন নীতিটি সামঞ্জস্যপূর্ণ?","পর্যবেক্ষণ, পরিমাপ, যুক্তি ও জ্ঞান অন্বেষণ",["প্রমাণ অপ্রয়োজনীয়","শুধু অনুমানই যথেষ্ট","প্রাকৃতিক ঘটনাকে মাপা নিষিদ্ধ"]]
};
function difficultyFor(level){
 if(level<=100)return 1;
 if(level<=250)return 2;
 if(level<=450)return 3;
 if(level<=650)return 4;
 if(level<=800)return 5;
 if(level<=900)return 6;
 if(level<=950)return 7;
 return 8;
}
const DIFFICULTY_LABEL={1:"Foundation",2:"Foundation+",3:"High School",4:"College",5:"University",6:"Honours",7:"Advanced Frontier",8:"Islamic Knowledge"};
const ALL_FACTS=FACTS.concat(EXTRA_FACTS);
function fallbackFor(subject,level){
 const bilingual=subject==="Islamic Science & Knowledge";
 const base={
  "Chemistry":["A chemistry mission is ready. Which concept best matches the described chemical behaviour?","Chemical structure and reaction conditions determine observable behaviour.",["Only colour determines it.","Only mass determines it.","Chemical behaviour never depends on conditions."]],
  "Physics":["A physics mission is ready. Which statement best matches the physical system?","The measured outcome depends on the relevant physical quantities and conditions.",["Physical laws change randomly.","Measurements never depend on conditions.","Only colour can determine a physical result."]],
  "Biology":["A biology mission is ready. Which statement best matches the biological system?","Structure and function are closely related in living systems.",["Every cell has the same function.","Biological processes need no energy.","Genes are identical to organelles."]],
  "Botany":["A plant-science mission is ready. Which statement is most precise?","Plant structures are specialized for transport, growth, support and reproduction.",["All plant tissues perform the same task.","Plants have no specialized tissues.","Roots perform only photosynthesis."]],
  "Zoology":["A zoology mission is ready. Which statement is most precise?","Animal structures are adapted to particular physiological roles.",["All animals use identical organs.","Animal cells have cell walls like plants.","All animals breathe with gills."]],
  "Biotechnology":["A biotechnology mission is ready. Which statement is most precise?","Biotechnology applies biological systems or molecules to useful processes.",["It never uses DNA.","It is limited to astronomy.","It excludes laboratory methods."]],
  "Limnology":["A freshwater mission is ready. Which factor matters to a lake ecosystem?","Light, temperature, oxygen and nutrients interact in freshwater systems.",["Only water colour matters.","Lakes contain no organisms.","Nutrients never affect aquatic systems."]],
  "Microbiology":["A microbiology mission is ready. Which statement is most precise?","Microorganisms can differ in structure, metabolism and response to conditions.",["All microbes are viruses.","All microbes are multicellular animals.","Microbes never interact with environments."]],
  "Molecular Biology":["A molecular mission is ready. Which statement is most precise?","DNA, RNA and proteins participate in information flow and cellular function.",["DNA is a lipid.","RNA is always a protein.","Proteins contain no biological information or function."]],
  "ICT":["An ICT mission is ready. Which statement is most precise?","Computing systems combine algorithms, data and hardware/software components.",["Algorithms are physical wires.","Data never needs storage.","Software cannot represent instructions."]],
  "Mathematics":["A mathematics mission is ready. Which statement is most precise?","Definitions and logical operations determine the valid result.",["Any numerical answer is valid.","Units never matter in applied mathematics.","Proof is unrelated to mathematics."]],
  "Astronomy":["An astronomy mission is ready. Which statement is most precise?","Astronomical observations connect measurable light, motion and physical properties.",["Stars are all identical.","Planets produce all of their own visible light.","Distance has no effect on observation."],],
  "Cosmology":["A cosmology mission is ready. Which statement is most precise?","Cosmology studies the large-scale structure, history and evolution of the universe.",["It studies only one laboratory reaction.","It excludes observations.","It concerns only Earth's weather."]],
  "Quantum Science":["A quantum mission is ready. Which statement is most precise?","Quantum systems are described by states, probabilities and measurement rules.",["Quantum objects always follow classical paths.","Measurement has no relation to quantum states.","Quantum theory applies only to planets."]],
  "Geology & Earth Science":["An Earth-science mission is ready. Which statement is most precise?","Earth processes are shaped by interacting geological, atmospheric and hydrological systems.",["Earth has no internal processes.","Rocks never change.","Water has no role in Earth systems."]],
  "Engineering":["An engineering mission is ready. Which statement is most precise?","Engineering uses constraints, models, testing and iteration to solve practical problems.",["Testing is unnecessary.","Constraints never matter.","Design cannot be improved after testing."]],
  "Materials Science":["A materials mission is ready. Which statement is most precise?","Material properties arise from composition, structure and processing.",["Only colour determines properties.","All materials behave identically.","Processing cannot change properties."]],
  "Environmental Science":["An environmental mission is ready. Which statement is most precise?","Environmental systems involve interacting organisms, resources and physical conditions.",["Only one species matters.","Physical conditions never affect ecosystems.","Nutrients have no environmental effects."]],
  "Islamic Science & Knowledge":["ইসলামি জ্ঞানচর্চার একটি প্রশ্ন প্রস্তুত। / An Islamic knowledge question is ready.","জ্ঞান, চিন্তা ও সৃষ্টিজগতের নিদর্শন সম্পর্কে মনোযোগী হওয়া — Seeking knowledge and reflecting on signs of creation.",["জ্ঞান পরিহার করা — Avoiding knowledge.","প্রশ্ন করা নিষিদ্ধ — Questions are forbidden.","প্রমাণের প্রয়োজন নেই — Evidence is unnecessary."]]
 };
 const x=base[subject]||base.Chemistry;
 return {subject,q:x[0],a:x[1],wrong:x[2],difficulty:DIFFICULTY_LABEL[difficultyFor(level)]};
}
function questionFor(level){
 const subject=subjectFor(level);
 const phase=phaseFor(level);
 const diff=difficultyFor(level);
 let pool=(level>=951 ? EXTRA_FACTS : ALL_FACTS).filter(x=>x[3]===subject);
 if(!pool.length)return fallbackFor(subject,level);
 // Later stages deliberately prefer deeper concepts when such questions exist.
 const preferred=pool.filter((x,i)=>{
   const score=(i*7+hash(level*19))%10;
   return diff>=5 ? score>=3 : score<9;
 });
 pool=preferred.length?preferred:pool;
 const q=pool[hash(level*31)%pool.length];
 let opts=[q[1],...q[2]];
 // Harder stages use deterministic option shuffling and a mission wrapper.
 const mission=diff<=2
  ? q[0]
  : `${phase[2]} • ${q[0]}`;
 return {subject,q:mission,a:q[1],wrong:q[2],difficulty:DIFFICULTY_LABEL[diff],phase:phase[2],discovery:discoveryFor(level)};
}

const DEFAULT={level:1,xp:0,retryCount:0,completed:[],rewarded:[],maxUnlocked:1,materials:["Stone • Earth & Materials","Fire • Physics & Chemistry"]};
let state=JSON.parse(localStorage.getItem("elementGameSave")||"null")||DEFAULT;
state={...DEFAULT,...state};
if(!Array.isArray(state.completed))state.completed=[];
if(!Array.isArray(state.rewarded))state.rewarded=[];
if(!Array.isArray(state.materials))state.materials=["Wood","Stone"];
if(typeof state.retryCount!=="number")state.retryCount=0;
if(state.level<1||state.level>1000)state.level=1;
let pending=false;

function save(){
 localStorage.setItem("elementGameSave",JSON.stringify(state));
 const e=document.getElementById("saveStatus");if(e)e.textContent="Saved locally";
}
function esc(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}
function render(){
 const l=state.level,q=questionFor(l);
 document.getElementById("level").textContent=`${l} / 1000`;
 document.getElementById("era").textContent=q.subject;
 document.getElementById("xp").textContent=state.xp;
 document.getElementById("retryCount").textContent=`${state.retryCount} / 3`;
 document.getElementById("discovery").textContent=`${state.completed.length} / 1000`;
 document.getElementById("bar").style.width=`${Math.min(100,l/10)}%`;
 document.getElementById("missionTag").textContent=`LEVEL ${l} • ${q.subject.toUpperCase()}`;
 const d=q.discovery||discoveryFor(l); document.getElementById("missionTag").textContent=`LEVEL ${l} • ${q.subject.toUpperCase()} • ${d[3]} ${d[1]}`;
 const ph=phaseFor(l); document.getElementById("phase").textContent=ph[2]; document.getElementById("difficulty").textContent=q.difficulty||ph[3];
 document.getElementById("goal").textContent=q.q;
 document.getElementById("hint").textContent=`${q.difficulty} • ${q.phase||phaseFor(l)[2]} • Mission → Reason → Fabricate → Discover`;
 const opts=shuffle([{t:q.a,c:true},...q.wrong.map(t=>({t,c:false}))],l*73);
 document.getElementById("options").innerHTML=opts.map((x,i)=>`<button class="option" data-c="${x.c}"><span class="num">OPTION ${String.fromCharCode(65+i)}</span><strong>${esc(x.t)}</strong><small>Think carefully before selecting.</small></button>`).join("");
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(b.dataset.c==="true"));
 document.getElementById("materials").innerHTML=state.materials.slice(-30).map(x=>`<span class="chip">${esc(x)}</span>`).join("");
 let html="";
 for(let n=5;n<=1000;n+=5){
   const s=scientistFor(n),done=state.rewarded.includes(n);
   html+=`<div class="scientist ${done?"done":"locked"}"><div><b>${esc(s[0])}</b><br><span>Level ${n} • ${esc(s[1])}</span></div><span>${done?"✓":"🔒"}</span></div>`;
 }
 document.getElementById("scientists").innerHTML=html;
 document.getElementById("nextLevel").classList.add("hidden-next");
 const fab=document.getElementById("fabricatorSuccess");if(fab)fab.classList.remove("show");
}
function productArt(answer,subject){
 const a=String(answer).toLowerCase();
 let kind="star";
 if(/dna|rna|codon|transcription|translation|mutation|gene|নিউক্লি/.test(a))kind="dna";
 else if(/cell|কোষ|mitochond|chloroplast|ক্লোরোপ্লাস্ট|রাইবোসোম|membrane|কোষপ্রাচীর/.test(a))kind="cell";
 else if(/plant|উদ্ভিদ|জাইলেম|ফ্লোয়েম|ক্লোরোফিল|অক্সিন|স্টোমাটা|পাতা|মূল/.test(a))kind="plant";
 else if(/fish|মাছ|ফুলকা|ব্যাঙ|কেঁচো|অক্টোপাস|তারামাছ|পোকা|arachnid|mollusc|annelid/.test(a))kind="animal";
 else if(/bacteria|ব্যাকটের|virus|ভাইরাস|biofilm|micro/.test(a))kind="microbe";
 else if(/lake|water|পানি|লিমন|secchi|eutroph|oxygen/.test(a))kind="lake";
 else if(/pcr|crispr|elisa|stem|insulin|ferment|recombinant/.test(a))kind="lab";
 else if(/hcl|nacl|mol|acid|base|catalyst|electron|oxid|reduction|বন্ধন|রাসায়নিক|অ্যাসিড|ক্ষার|benzene|pv =/.test(a))kind="chem";
 const label=answer.length>32?answer.slice(0,32)+"…":answer;
 const defs=`<defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#6d5dfc"/><stop offset="1" stop-color="#32d6ff"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
 let body="";
 if(kind==="dna")body=`<path d="M58 18 C100 40 100 80 58 102 C16 124 16 164 58 186" fill="none" stroke="url(#g)" stroke-width="8"/><path d="M142 18 C100 40 100 80 142 102 C184 124 184 164 142 186" fill="none" stroke="url(#g)" stroke-width="8"/><g stroke="#dbe7ff" stroke-width="4">${[35,58,81,104,127,150,173].map(y=>`<line x1="58" y1="${y}" x2="142" y2="${y}"/>`).join("")}</g>`;
 else if(kind==="cell")body=`<ellipse cx="100" cy="100" rx="78" ry="62" fill="#172640" stroke="url(#g)" stroke-width="6"/><ellipse cx="100" cy="100" rx="22" ry="18" fill="#6d5dfc" filter="url(#glow)"/><g fill="none" stroke="#32d6ff" stroke-width="5"><ellipse cx="55" cy="75" rx="13" ry="8"/><ellipse cx="145" cy="75" rx="13" ry="8"/><ellipse cx="62" cy="133" rx="13" ry="8"/><ellipse cx="140" cy="133" rx="13" ry="8"/></g>`;
 else if(kind==="plant")body=`<path d="M100 180V72" stroke="url(#g)" stroke-width="8"/><path d="M100 110 C55 100 32 65 35 42 C72 45 100 67 100 110Z" fill="#243f55" stroke="#6ee7b7" stroke-width="5"/><path d="M100 130 C145 120 168 85 165 62 C128 65 100 87 100 130Z" fill="#243f55" stroke="#32d6ff" stroke-width="5"/><circle cx="100" cy="55" r="13" fill="#ffd36e" filter="url(#glow)"/>`;
 else if(kind==="animal")body=`<ellipse cx="100" cy="105" rx="70" ry="38" fill="#1b3146" stroke="url(#g)" stroke-width="6"/><path d="M38 105 L14 78 L18 128Z M162 105 L188 78 L182 128Z" fill="#223b55" stroke="#32d6ff" stroke-width="5"/><circle cx="145" cy="94" r="6" fill="#fff"/><path d="M45 145 Q100 180 155 145" fill="none" stroke="#6ee7b7" stroke-width="5"/>`;
 else if(kind==="microbe")body=`<circle cx="100" cy="100" r="62" fill="#183044" stroke="#6ee7b7" stroke-width="6"/><g fill="#32d6ff">${[[70,70],[120,65],[135,110],[82,125],[108,145]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="7"/>`).join("")}</g><path d="M42 146 C20 170 26 190 10 194 M158 54 C180 30 174 10 192 6" fill="none" stroke="#dbe7ff" stroke-width="4"/>`;
 else if(kind==="lake")body=`<path d="M20 128 Q55 105 90 128 T160 128 T210 128 V185 H20Z" fill="#173c56" stroke="#32d6ff" stroke-width="5"/><circle cx="100" cy="72" r="28" fill="#ffd36e" filter="url(#glow)"/><path d="M40 145 H160 M55 160 H175" stroke="#6d5dfc" stroke-width="4"/>`;
 else if(kind==="lab")body=`<path d="M82 28 H118 M88 28 V82 L45 160 Q42 174 58 178 H142 Q158 174 155 160 L112 82 V28" fill="#14253a" stroke="url(#g)" stroke-width="6"/><path d="M60 145 H140" stroke="#6ee7b7" stroke-width="8"/><circle cx="92" cy="132" r="7" fill="#32d6ff"/><circle cx="112" cy="120" r="6" fill="#ffd36e"/>`;
 else if(kind==="chem")body=`<circle cx="100" cy="100" r="28" fill="#6d5dfc" filter="url(#glow)"/><circle cx="100" cy="100" r="62" fill="none" stroke="#32d6ff" stroke-width="4"/><circle cx="100" cy="38" r="9" fill="#dbe7ff"/><circle cx="46" cy="132" r="9" fill="#dbe7ff"/><circle cx="154" cy="132" r="9" fill="#dbe7ff"/>`;
 else body=`<path d="M100 18 L118 72 L176 78 L132 112 L146 170 L100 138 L54 170 L68 112 L24 78 L82 72Z" fill="#6d5dfc" stroke="#32d6ff" stroke-width="5" filter="url(#glow)"/>`;
 return `<div class="artifact-wrap"><svg class="artifact-svg" viewBox="0 0 200 200" role="img" aria-label="${esc(answer)}">${defs}${body}</svg><div class="artifact-label">${esc(subject)} • ${esc(label)}</div></div>`;
}

function choose(correct){
 if(pending)return;
 const msg=document.getElementById("message");
 if(!correct){
   state.retryCount++;save();msg.className="message bad";
   if(state.retryCount>=3){
     const old=state.level,n=Math.max(1,old-3);state.level=n;state.retryCount=0;save();
     document.querySelectorAll(".option").forEach(b=>b.disabled=true);
     msg.textContent=old>1?`⚠ 3 mistakes — Level ${old} → ${n}. Review the harder concepts and try again.`:"⚠ 3 mistakes — Level 1 has no lower level.";
     setTimeout(render,1100);
   }else msg.textContent=`✕ Incorrect. ${state.retryCount}/3 mistakes — compare the terms again.`;
   return;
 }
 pending=true;
 const l=state.level,q=questionFor(l);
 if(!state.completed.includes(l))state.completed.push(l);
 state.xp+=100;state.retryCount=0;state.maxUnlocked=Math.max(state.maxUnlocked,Math.min(1000,l+1));
 const d=q.discovery||discoveryFor(l); state.materials.push(`${d[1]} • ${d[4]} • Level ${l}`); save();
 msg.className="message good";msg.textContent=`✓ Correct! Level ${l} completed.`;
 document.querySelectorAll(".option").forEach(b=>b.disabled=true);
 const fab=document.getElementById("fabricatorSuccess");
 if(fab){
   fab.classList.add("show");
   document.getElementById("fabState").textContent="ENERGY DETECTED";
   document.getElementById("energyState").textContent="ENERGY DETECTED • ANALYZING";
   const d=q.discovery||discoveryFor(l); document.getElementById("fabCaption").textContent=`${d[3]} ${d[1]} • ${d[2]} • ${q.subject} • ${q.difficulty}`;
   document.getElementById("fabricatorVisual").innerHTML=productArt(`${d[1]} — ${q.a}`,q.subject);
   setTimeout(()=>{const e=document.getElementById("fabState"),s=document.getElementById("energyState"); if(e)e.textContent="FABRICATING ARTIFACT"; if(s)s.textContent="MATERIALS ASSEMBLING • STABILIZING"},300);
   setTimeout(()=>{const e=document.getElementById("fabState"),s=document.getElementById("energyState"); if(e)e.textContent=l%5===0?"SCIENTIST MILESTONE READY":"ARTIFACT FABRICATED"; if(s)s.textContent="ARTIFACT STABLE • DISCOVERY COMPLETE"},1000);
 }
 const next=document.getElementById("nextLevel");
 next.textContent=l>=1000?"CLAIM FINAL AWARD ★":"NEXT LEVEL →";
 setTimeout(()=>{next.classList.remove("hidden-next");next.classList.add("next-level-show")},450);
}
function advance(){
 if(!pending)return;
 const l=state.level;
 if(l%5===0){showReward(l);return}
 if(l>=1000){showReward(1000);return}
 state.level=l+1;pending=false;save();render();
}
function showReward(level){
 const s=scientistFor(level);
 if(!state.rewarded.includes(level))state.rewarded.push(level);
 save();
 document.getElementById("awardLevel").textContent=`LEVEL ${level} • SCIENTIST AWARD`;
 document.getElementById("scientistName").textContent=s[0];
 document.getElementById("scientistField").textContent=s[1];
 document.getElementById("quoteEn").textContent=`“${s[2]}”`;
 document.getElementById("quoteBn").textContent=`“${s[3]}”`;
 document.getElementById("modal").classList.remove("hidden");
}
function continueReward(){
 document.getElementById("modal").classList.add("hidden");
 const l=state.level;
 if(l>=1000){pending=false;save();render();return}
 state.level=l+1;pending=false;save();render();
}
document.getElementById("nextLevel").onclick=advance;
document.getElementById("continue").onclick=continueReward;
document.getElementById("reset").onclick=()=>{if(confirm("Reset all local progress and return to Level 1?")){localStorage.removeItem("elementGameSave");location.reload()}};

/* Legacy-save repair: if the old game saved Level 100 as completed, unlock Tesla immediately. */
if(state.level===100&&state.completed.includes(100)&&!state.rewarded.includes(100)){
 pending=true;setTimeout(()=>showReward(100),250);
}
render();save();
