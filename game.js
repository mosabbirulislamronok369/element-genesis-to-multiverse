/* ELEMENT: Genesis to Multiverse — 1000 Level Science Challenge */
const SUBJECTS=[
 ["Chemistry",1,160],["Biology",161,320],["Botany",321,440],["Zoology",441,560],
 ["Biotechnology",561,680],["Limnology",681,760],["Microbiology",761,860],
 ["Molecular Biology",861,940],["Islamic Science & Knowledge",941,1000]
];

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

const FACTS=[
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

const ADV=[
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

function subjectFor(l){return SUBJECTS.find(s=>l>=s[1]&&l<=s[2])[0]}
function hash(n){let x=(n*1103515245+12345)>>>0;x^=x>>>16;x=Math.imul(x,2246822519)>>>0;x^=x>>>13;return x>>>0}
function shuffle(a,seed){a=[...a];for(let i=a.length-1;i>0;i--){let j=hash(seed+i*97)%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function questionFor(level){
  const subject=subjectFor(level);
  let pool=FACTS.filter(x=>x[3]===subject);
  let q=pool[hash(level*31)%pool.length];
  const av=ADV.filter(x=>x[4]===subject);
  if(av.length && level%4===0){
    const a=av[hash(level*17)%av.length];
    q=[`কোন বিকল্পটি ${a[0]}-এর সঠিক পরিচয়/সম্পর্ক নির্দেশ করে?`,a[2],a[3],subject];
  }
  return {subject,q:q[0],a:q[1],wrong:q[2]}
}

const DEFAULT={level:1,xp:0,retryCount:0,completed:[],rewarded:[],maxUnlocked:1,materials:["Wood","Stone"]};
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
 document.getElementById("bar").style.width=`${l/10}%`;
 document.getElementById("missionTag").textContent=`LEVEL ${l} • ${q.subject.toUpperCase()}`;
 document.getElementById("goal").textContent=q.q;
 document.getElementById("hint").textContent=l>=900?"FINAL SECTOR • Closely related options are intentional. Read every word.":"Choose the scientifically most precise answer. Distractors are designed to be plausible.";
 const opts=shuffle([{t:q.a,c:true},...q.wrong.map(t=>({t,c:false}))],l*73);
 document.getElementById("options").innerHTML=opts.map((x,i)=>`<button class="option" data-c="${x.c}"><span class="num">OPTION ${String.fromCharCode(65+i)}</span><strong>${esc(x.t)}</strong><small>Think carefully before selecting.</small></button>`).join("");
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(b.dataset.c==="true"));
 document.getElementById("materials").innerHTML=state.materials.slice(-30).map(x=>`<span class="chip">${esc(x)}</span>`).join("");
 let html="";
 for(let n=5;n<=1000;n+=5){
   const s=SCIENTISTS[(n/5-1)%SCIENTISTS.length],done=state.rewarded.includes(n);
   html+=`<div class="scientist ${done?"done":"locked"}"><div><b>${esc(s[0])}</b><br><span>Level ${n} • ${esc(s[1])}</span></div><span>${done?"✓":"🔒"}</span></div>`;
 }
 document.getElementById("scientists").innerHTML=html;
 document.getElementById("nextLevel").classList.add("hidden-next");
 const fab=document.getElementById("fabricatorSuccess");if(fab)fab.classList.remove("show");
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
 state.materials.push(`${q.subject} • Level ${l}`);save();
 msg.className="message good";msg.textContent=`✓ Correct! Level ${l} completed.`;
 document.querySelectorAll(".option").forEach(b=>b.disabled=true);
 const fab=document.getElementById("fabricatorSuccess");
 if(fab){
   fab.classList.add("show");
   document.getElementById("fabState").textContent=l%5===0?"SCIENTIST MILESTONE READY":"KNOWLEDGE UNLOCKED";
   document.getElementById("fabCaption").textContent=`${q.subject} • Level ${l} • Precision challenge completed`;
   document.getElementById("fabricatorVisual").innerHTML=`<div class="product-core"><div><div class="icon product-picture">✦</div><strong>LEVEL ${l}</strong><small>DISCOVERY UNLOCKED</small></div></div>`;
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
 const s=SCIENTISTS[(level/5-1)%SCIENTISTS.length];
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
