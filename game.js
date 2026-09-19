const SEED_FACTS=[["Chemistry","Which particle determines the atomic number of an element?","Proton",["Neutron","Electron","Photon"],"Think about the positively charged particles in the nucleus.","Atom"],["Chemistry","At room temperature, which state has a fixed volume but no fixed shape?","Liquid",["Solid","Gas","Plasma"],"It takes the shape of its container while keeping nearly constant volume.","Liquid"],["Chemistry","Which bond involves sharing electron pairs between atoms?","Covalent bond",["Ionic bond","Metallic bond","Hydrogen bond"],"Focus on electron sharing rather than transfer.","Molecule"],["Chemistry","What is the pH of a neutral solution at 25°C?","7",["0","5","14"],"Neutrality lies at the midpoint of the common 0–14 pH scale at this temperature.","pH"],["Chemistry","Which gas is most abundant in Earth’s atmosphere?","Nitrogen",["Oxygen","Carbon dioxide","Argon"],"The largest atmospheric fraction is not the gas humans breathe for respiration.","Nitrogen"],["Chemistry","Which element has the symbol Fe?","Iron",["Fluorine","Francium","Fermium"],"The symbol comes from the Latin name ferrum.","Iron"],["Chemistry","What type of reaction releases heat to the surroundings?","Exothermic",["Endothermic","Isothermal","Adiabatic"],"Its name contains the idea of heat moving outward.","Heat"],["Chemistry","Which subatomic particle has a negative electric charge?","Electron",["Proton","Neutron","Positron"],"It occupies the electron cloud around the nucleus.","Electron"],["Chemistry","Which substance is commonly used as a catalyst in the Haber process?","Iron",["Copper","Silver","Sodium chloride"],"The industrial ammonia process uses a transition-metal catalyst.","Iron"],["Physics","What is the SI unit of force?","Newton",["Joule","Watt","Pascal"],"Force is named after the scientist associated with classical mechanics.","Newton"],["Physics","Which quantity is measured in joules?","Energy",["Force","Power","Pressure"],"The joule is an SI derived unit for energy and work.","Energy"],["Physics","What is acceleration due to gravity near Earth’s surface approximately?","9.8 m/s²",["3.0 m/s²","6.67 m/s²","12.5 m/s²"],"It is close to ten metres per second squared.","Gravity"],["Physics","Which law states that an object remains at rest or uniform motion unless acted on by a net force?","Newton’s First Law",["Newton’s Second Law","Newton’s Third Law","Hooke’s Law"],"Think inertia.","Motion"],["Physics","Which phenomenon bends light as it passes from one medium to another?","Refraction",["Diffraction","Reflection","Polarization"],"The speed of light changes across media, changing its direction.","Light"],["Physics","Which wave property is measured in hertz?","Frequency",["Wavelength","Amplitude","Phase"],"Hertz counts cycles per second.","Wave"],["Physics","What carries electromagnetic waves through vacuum?","Oscillating electric and magnetic fields",["Mechanical particles","Sound pressure","Water molecules"],"Electromagnetic radiation does not require a material medium.","Photon"],["Biology","Which structure is the main site of ATP production in eukaryotic cells?","Mitochondrion",["Ribosome","Golgi apparatus","Lysosome"],"It is often called the cell’s energy-conversion organelle.","Mitochondrion"],["Biology","Which structure is absent in a typical animal cell?","Cell wall",["Cell membrane","Nucleus","Mitochondria"],"Animal cells have a flexible boundary but no rigid cellulose wall.","Animal Cell"],["Biology","What molecule carries hereditary information in most organisms?","DNA",["ATP","Glucose","Chlorophyll"],"Its double-helix sequence stores genetic information.","DNA"],["Biology","Which blood cells primarily transport oxygen?","Red blood cells",["White blood cells","Platelets","Plasma cells"],"They contain hemoglobin.","Blood"],["Biology","Which organ filters blood and produces urine?","Kidney",["Liver","Pancreas","Spleen"],"Its functional units are nephrons.","Kidney"],["Botany","Which pigment captures most light for photosynthesis in green plants?","Chlorophyll",["Keratin","Hemoglobin","Melanin"],"It gives many leaves their green appearance.","Leaf"],["Botany","Which tissue transports water upward in plants?","Xylem",["Phloem","Epidermis","Cambium"],"It mainly conducts water and mineral ions from roots.","Xylem"],["Botany","Which tissue transports sugars from photosynthetic tissues?","Phloem",["Xylem","Cork","Epidermis"],"Think food transport rather than water transport.","Phloem"],["Zoology","Which organ pumps blood through the vertebrate circulatory system?","Heart",["Lung","Kidney","Liver"],"It contracts rhythmically to generate blood flow.","Heart"],["Zoology","Which class includes frogs and salamanders?","Amphibia",["Reptilia","Aves","Mammalia"],"These vertebrates typically have aquatic larvae and terrestrial adults.","Amphibian"],["Biotechnology","Which technique amplifies a specific DNA region?","PCR",["ELISA","Chromatography","Titration"],"It repeatedly copies a selected DNA segment through cycles.","PCR"],["Biotechnology","What enzyme cuts DNA at specific recognition sequences?","Restriction enzyme",["Ligase","Amylase","Lipase"],"These enzymes are widely used in recombinant DNA work.","DNA"],["Microbiology","Which group lacks a membrane-bound nucleus?","Bacteria",["Fungi","Plants","Animals"],"They are prokaryotic organisms.","Bacterium"],["Microbiology","Which microorganism is used in bread fermentation?","Yeast",["Amoeba","Paramecium","Cyanobacteria"],"It converts sugars into carbon dioxide and ethanol under fermentation.","Yeast"],["Molecular Biology","Which process makes RNA from a DNA template?","Transcription",["Translation","Replication","Translocation"],"The product is RNA.","RNA"],["Molecular Biology","Which process uses mRNA to build a polypeptide?","Translation",["Transcription","Replication","Splicing"],"Ribosomes read codons during this process.","Protein"],["Limnology","What does limnology primarily study?","Inland waters",["Oceans only","Atmosphere only","Deserts only"],"Think lakes, rivers, wetlands and other inland aquatic systems.","Lake"],["Environmental Science","Which gas is a major anthropogenic greenhouse gas?","Carbon dioxide",["Helium","Neon","Nitrogen"],"It is released in large amounts by fossil-fuel combustion.","CO₂"],["ICT","What does CPU stand for?","Central Processing Unit",["Central Program Utility","Computer Primary Unit","Core Processing User"],"It is the main processor of a computer.","CPU"],["ICT","Which protocol is primarily used to transfer web pages securely?","HTTPS",["FTP","SMTP","POP3"],"Look for the secure version of HTTP.","Web"],["ICT","Which data structure follows FIFO order?","Queue",["Stack","Tree","Graph"],"First in, first out.","Queue"],["ICT","What does RAM provide?","Temporary working memory",["Permanent archival storage","Network routing","Power conversion"],"Its contents are typically volatile.","RAM"],["Mathematics","What is the derivative of x²?","2x",["x","x²","2"],"Use the power rule.","Calculus"],["Mathematics","What is the probability of rolling a 6 on a fair six-sided die?","1/6",["1/2","1/3","1/12"],"There is one favorable face among six equally likely faces.","Probability"],["Mathematics","What is the sum of the interior angles of a triangle?","180°",["90°","270°","360°"],"All Euclidean triangles have the same angle sum.","Triangle"],["Astronomy","Which star is at the center of our Solar System?","The Sun",["Sirius","Polaris","Betelgeuse"],"It is the star around which Earth orbits.","Sun"],["Astronomy","What is Earth’s natural satellite?","The Moon",["Mars","Europa","Titan"],"It is the only natural satellite of Earth.","Moon"],["Cosmology","What observation strongly supports cosmic expansion?","Galaxy redshift",["Solar eclipses","Ocean tides","Auroras"],"Distant galaxies show systematic spectral shifts toward longer wavelengths.","Galaxy"],["Quantum Science","Which principle says certain pairs of physical quantities cannot both be known with arbitrary precision?","Heisenberg uncertainty principle",["Archimedes’ principle","Pauli exclusion principle","Equivalence principle"],"It concerns limits on simultaneous precision of conjugate quantities.","Quantum"],["Quantum Science","What is the basic unit of quantum information?","Qubit",["Byte","Bit only","Pixel"],"It generalizes the classical bit using quantum states.","Qubit"],["Materials Science","Which material consists of a single layer of carbon atoms in a hexagonal lattice?","Graphene",["Silicon carbide","Kevlar","Teflon"],"It is a two-dimensional carbon material.","Graphene"],["Engineering","Which machine converts mechanical energy into electrical energy?","Generator",["Motor","Transformer","Compressor"],"Electromagnetic induction is central to its operation.","Generator"],["Engineering","Which device converts electrical energy into mechanical motion?","Motor",["Generator","Transformer","Rectifier"],"It produces torque from electromagnetic forces.","Motor"],["Bangladesh GK","What is the capital of Bangladesh?","Dhaka",["Chattogram","Rajshahi","Khulna"],"It is the national administrative capital.","Dhaka"],["Bangladesh GK","Which sea borders Bangladesh to the south?","Bay of Bengal",["Arabian Sea","Red Sea","Andaman Sea"],"Bangladesh opens to the northeastern part of the Indian Ocean.","Bay of Bengal"],["Bangladesh GK","What is the national language of Bangladesh?","Bangla",["English","Urdu","Arabic"],"It is the state language under the Constitution.","Bangla"],["Bangladesh GK","Which is the longest sea beach in Bangladesh commonly identified in geography questions?","Cox’s Bazar",["Kuakata","Patenga","Parki"],"It is famous for its long sandy coastline.","Cox’s Bazar"],["Bangladesh GK","Which river is one of the major rivers flowing through Bangladesh and forms part of the Padma system?","Jamuna",["Teesta only","Karnaphuli only","Sangu only"],"The Brahmaputra is known as Jamuna in Bangladesh.","Jamuna"],["Bangladesh GK","What is the currency of Bangladesh?","Taka",["Rupee","Riyal","Ringgit"],"The currency code is BDT.","Taka"],["Teacher Prep","Which approach places the learner’s activity at the center of instruction?","Learner-centered learning",["Teacher monologue only","Pure rote copying","No assessment learning"],"The learner actively participates in constructing understanding.","Learning"],["Teacher Prep","Formative assessment is mainly used to do what?","Improve learning during instruction",["Award a final certificate only","Rank schools nationally only","Replace teaching completely"],"It provides feedback while learning is still underway.","Assessment"],["Teacher Prep","Which assessment is usually conducted at the end of a course or unit to judge achievement?","Summative assessment",["Diagnostic assessment","Formative assessment","Informal observation only"],"It summarizes achievement after instruction.","Assessment"],["Teacher Prep","Which strategy asks learners to work together toward a shared task?","Cooperative learning",["Silent copying","Lecture-only teaching","Individual isolation"],"The key idea is structured collaboration.","Classroom"],["Teacher Prep","What is a lesson objective supposed to describe?","What learners should be able to do",["Only the teacher’s biography","Only classroom decoration","Only textbook price"],"Objectives focus on intended learning outcomes.","Lesson"],["Teacher Prep","Which Bloom level is associated with recalling facts?","Remember",["Create","Evaluate","Analyze"],"It is the basic recall level in the revised taxonomy.","Bloom"],["Teacher Prep","Which classroom practice gives specific information about how to improve performance?","Feedback",["Punishment only","Attendance marking","Seating arrangement"],"Useful feedback connects performance to improvement.","Feedback"],["Primary Teacher","For early-grade reading, which skill is foundational?","Phonological awareness",["Advanced calculus","Database normalization","Quantum tunnelling"],"Children need awareness of sounds and their relation to language.","Reading"],["Primary Teacher","Which teaching aid can make abstract counting concrete for young learners?","Manipulatives",["Only long lectures","Unrelated videos","Blank pages"],"Objects can represent quantities physically.","Counting"],["Primary Teacher","Why is child-friendly formative assessment useful?","It identifies learning gaps early",["It removes the need to teach","It guarantees perfect scores","It replaces the curriculum"],"Early feedback lets teachers adjust instruction.","Assessment"],["English Grammar","Which word is a pronoun?","They",["Quickly","Beautiful","Run"],"It stands in for a noun phrase.","Grammar"],["English Grammar","Which tense is used in “She has finished the work”?","Present perfect",["Past perfect","Simple past","Future perfect"],"The auxiliary has combines with a past participle.","Grammar"],["English Grammar","Which is the plural of “criterion”?","Criteria",["Criterions only","Criterionies","Criterias"],"The traditional plural is from Greek.","Grammar"],["Bangla Grammar","“সে বই পড়ে”—এখানে “সে” কোন পদ?","সর্বনাম",["বিশেষ্য","ক্রিয়া","অব্যয়"],"It replaces a noun/person reference.","বাংলা ব্যাকরণ"],["Bangla Grammar","“সুন্দর ফুল”—এখানে “সুন্দর” কোন পদ?","বিশেষণ",["বিশেষ্য","সর্বনাম","ক্রিয়া"],"It describes the noun “ফুল”.","বাংলা ব্যাকরণ"],["Bangla Grammar","“রহিম স্কুলে যায়”—এখানে “যায়” কী?","ক্রিয়া",["বিশেষণ","সর্বনাম","অব্যয়"],"It expresses the action/state.","বাংলা ব্যাকরণ"],["Bangla Grammar","“এবং” সাধারণত কোন পদ?","অব্যয়",["বিশেষ্য","ক্রিয়া","বিশেষণ"],"It connects words or clauses without changing form.","বাংলা ব্যাকরণ"],["Bangla Grammar","“অতি লোভে তাঁতি নষ্ট”—এটি কী ধরনের রচনা?","প্রবাদ",["উপসর্গ","সমাস","বিভক্তি"],"It is a traditional concise saying.","বাংলা ব্যাকরণ"],["Bangla Grammar","“রাজপুত্র” কোন সমাসের উদাহরণ?","ষষ্ঠী তৎপুরুষ",["দ্বন্দ্ব","বহুব্রীহি","অব্যয়ীভাব"],"Expand it as “রাজার পুত্র”.","সমাস"],["Bangla Grammar","“নীলকমল” কোন সমাস?","কর্মধারয়",["দ্বন্দ্ব","বহুব্রীহি","অব্যয়ীভাব"],"The first word qualifies the second.","সমাস"],["Bangla Grammar","“মা-বাবা” কোন সমাসের উদাহরণ?","দ্বন্দ্ব",["কর্মধারয়","ষষ্ঠী তৎপুরুষ","বহুব্রীহি"],"Both members are joined in a coordinated sense.","সমাস"],["Bangla Grammar","“অমানবিক” শব্দে “অ-” কী?","উপসর্গ",["প্রত্যয়","বিভক্তি","সমাস"],"It is attached before the root to modify meaning.","শব্দগঠন"],["Bangla Grammar","“ছেলেরা” শব্দে “রা” কী নির্দেশ করে?","বহুবচন",["কারক","সমাস","উপসর্গ"],"It marks plural human nouns in this form.","শব্দগঠন"],["Bangladesh GK","Which constitutional body conducts elections in Bangladesh?","Bangladesh Election Commission",["Bangladesh Bank","Public Service Commission only","National Board of Revenue"],"The Constitution establishes an Election Commission.","Election"],["Bangladesh GK","Which institution is Bangladesh’s central bank?","Bangladesh Bank",["Sonali Bank","Dhaka Stock Exchange","BSEC"],"It conducts central banking functions.","Bank"],["Job Prep","Which document is commonly used to summarize education and work experience for a job application?","CV/Resume",["Invoice","Ledger","Manifest"],"It presents qualifications and experience.","Career"],["Job Prep","What does KPI usually mean in organizational performance measurement?","Key Performance Indicator",["Known Process Index","Key Personnel Inventory","Knowledge Planning Interface"],"It is a measurable performance indicator.","KPI"],["Anime • One Piece","Who is the captain of the Straw Hat Pirates?","Monkey D. Luffy",["Roronoa Zoro","Trafalgar Law","Portgas D. Ace"],"Think of the character whose dream is to become Pirate King.","One Piece"],["Anime • One Piece","What is the name of Luffy’s signature straw hat?","Straw Hat",["Red Crown","Sun Hat","Pirate Cap"],"It is the source of the crew’s famous nickname.","One Piece"],["Anime • One Piece","Which swordsman is a core member of the Straw Hat crew?","Roronoa Zoro",["Sanji","Usopp","Franky"],"He is known for a three-sword style.","Zoro"],["Anime • Death Note","What is the name of the supernatural notebook in Death Note?","Death Note",["Black Ledger","Soul Book","Judgment Diary"],"Its title is also the series name.","Death Note"],["Anime • Death Note","What is the detective alias used by the genius investigator in Death Note?","L",["N","K","M"],"It is a single-letter alias.","L"],["Anime • Demon Slayer","What is the name of Tanjiro’s sister?","Nezuko Kamado",["Kanao Tsuyuri","Shinobu Kocho","Mitsuri Kanroji"],"She travels with Tanjiro and is transformed into a demon.","Demon Slayer"],["Anime • Demon Slayer","What breathing style does Tanjiro initially learn from Sakonji Urokodaki’s training?","Water Breathing",["Flame Breathing","Thunder Breathing","Mist Breathing"],"Its techniques are associated with flowing water.","Water Breathing"],["Anime • Bleach","Who is the protagonist of Bleach?","Ichigo Kurosaki",["Byakuya Kuchiki","Uryu Ishida","Renji Abarai"],"He is the orange-haired substitute Soul Reaper.","Bleach"],["Anime • Bleach","What is the name of Ichigo’s Zanpakuto?","Zangetsu",["Senbonzakura","Zabimaru","Hyōrinmaru"],"Its name is strongly associated with Ichigo.","Zangetsu"],["Anime • Naruto","Who is Naruto’s father?","Minato Namikaze",["Jiraiya","Kakashi Hatake","Hiruzen Sarutobi"],"He was the Fourth Hokage.","Naruto"],["Anime • Naruto","What is Naruto’s signature spinning chakra technique?","Rasengan",["Chidori","Amaterasu","Byakugan"],"It forms a rotating sphere of chakra.","Rasengan"],["Anime • Dr. Stone","Who is the scientific protagonist of Dr. Stone?","Senku Ishigami",["Taiju Oki","Gen Asagiri","Tsukasa Shishio"],"He aims to rebuild civilization through science.","Dr. Stone"],["Anime • Dr. Stone","What event petrifies humanity at the start of Dr. Stone?","A mysterious global petrification",["A solar flare only","A volcanic eruption","A worldwide flood"],"Humanity is turned to stone simultaneously.","Petrification"],["Anime • Attack on Titan","What are the giant humanoid beings called in Attack on Titan?","Titans",["Giants","Colossi","Golems"],"The series title names them directly.","Titan"],["Anime • Attack on Titan","Who is the protagonist of Attack on Titan?","Eren Yeager",["Armin Arlert","Levi Ackerman","Jean Kirstein"],"He begins the story seeking freedom beyond the walls.","Eren"],["Anime • Solo Leveling","What is the name of the protagonist in Solo Leveling?","Sung Jinwoo",["Cha Hae-In","Thomas Andre","Go Gunhee"],"He begins as a famously weak hunter.","Solo Leveling"],["Anime • Solo Leveling","What system grants Sung Jinwoo game-like growth?","The System",["The Archive","The Gate Core","The Monarch Engine"],"It displays quests, stats and rewards.","System"],["Anime • Wistoria Wand and Sword","What is Wistoria’s protagonist called?","Will Serfort",["Colette Loire","Julius Reinberg","Sion Ulster"],"He struggles to progress in a magical academy without magic.","Wistoria"],["Anime • Vinland Saga","Who is the central young warrior of Vinland Saga’s early story?","Thorfinn",["Canute","Askeladd","Thorkell"],"His story is driven by revenge and later transformation.","Vinland Saga"],["Anime • Vinland Saga","What historical region gives Vinland Saga its title?","Vinland",["Valhalla","Iceland","Jorvik"],"It refers to a Norse name for lands in North America.","Vinland"],["Anime • Fullmetal Alchemist","What is the surname of Edward and Alphonse?","Elric",["Rockbell","Mustang","Armstrong"],"The brothers are known collectively by this surname.","Fullmetal Alchemist"],["Anime • Hunter x Hunter","What is the name of the protagonist in Hunter x Hunter?","Gon Freecss",["Killua Zoldyck","Kurapika","Leorio"],"He sets out to become a Hunter and find his father.","Hunter x Hunter"],["Anime • My Hero Academia","What is the hero name of Izuku Midoriya?","Deku",["Kacchan","Shoto","All Might"],"It begins as a nickname and becomes his hero identity.","My Hero Academia"],["Anime • Haikyuu","What sport is central to Haikyuu!!?","Volleyball",["Basketball","Football","Baseball"],"The series centers on a school team and a net.","Haikyuu"],["Anime • Spy x Family","What is Anya Forger’s unusual ability?","Telepathy",["Telekinesis","Time travel","Invisibility"],"She can read minds.","Spy x Family"],["Anime • Frieren","What type of being is Frieren?","Elf",["Human","Demon","Dragon"],"She is a long-lived elven mage.","Frieren"],["Anime • Mob Psycho 100","What is Mob’s real first name?","Shigeo Kageyama",["Arataka Reigen","Ritsu Kageyama","Teruki Hanazawa"],"“Mob” is his nickname.","Mob Psycho 100"],["Anime • Sword Art Online","What is Kirito’s real name?","Kazuto Kirigaya",["Keita Kirigaya","Kirito Asuna","Kazuma Kirigaya"],"Kirito is his player name.","Sword Art Online"],["Anime • Haikyuu","What is Hinata’s main strength early in the series?","Jumping ability",["Serving power only","Blocking height","Left-handed setting"],"His athletic jumping becomes a major weapon despite his height.","Hinata"],["Marvel","What is Tony Stark’s superhero identity?","Iron Man",["Captain America","War Machine only","Doctor Strange"],"His armored suit is his defining technology.","Iron Man"],["Marvel","What is the name of Thor’s famous hammer?","Mjolnir",["Stormbreaker","Gungnir","Hofund"],"It is a legendary Asgardian weapon.","Thor"],["Marvel","What is the name of the fictional African nation associated with Black Panther?","Wakanda",["Genosha","Latveria","Sokovia"],"It is famous for vibranium.","Wakanda"],["Marvel","What metal is strongly associated with Captain America’s shield?","Vibranium",["Adamantium","Titanium","Uru"],"The shield is made from a fictional super-strong material.","Captain America"],["Marvel","Who is Peter Parker’s superhero identity?","Spider-Man",["Star-Lord","Ant-Man","Daredevil"],"He is a web-slinging hero from Queens.","Spider-Man"],["Marvel","What is Doctor Strange’s profession before becoming a sorcerer?","Surgeon",["Pilot","Engineer","Journalist"],"He was a highly skilled medical specialist.","Doctor Strange"],["Marvel","What is the name of the AI in Tony Stark’s early Iron Man system?","JARVIS",["FRIDAY only","ULTRON","KAREN"],"It is an acronym-based assistant associated with Stark.","JARVIS"],["Stranger Things","What is the name of the parallel dimension in Stranger Things?","The Upside Down",["The Backrooms","The Shadow Realm","The Netherworld"],"It mirrors Hawkins in a dangerous alternate form.","Stranger Things"],["Stranger Things","What is Eleven’s commonly used number/name?","Eleven",["Twelve","Eight","Nine"],"Her name comes from her laboratory designation.","Eleven"],["Wednesday","What school does Wednesday Addams attend in the series?","Nevermore Academy",["Ravenwood School","Hogwarts","Blackwood Academy"],"It is the gothic academy central to the story.","Wednesday"],["Wednesday","What is Wednesday Addams’s surname?","Addams",["Frump","Morticia","Gotham"],"She belongs to the famous Addams family.","Wednesday"],["FROM","What mysterious town traps the characters in From?","A town they cannot easily leave",["Hawkins","Riverdale","Sunnydale"],"The central mystery is the town’s inescapable nature.","From"],["Hatim","What is the name of the heroic protagonist of Hatim?","Hatim",["Ali","Sikandar","Salim"],"The title directly names the hero.","Hatim"],["Aladdin Naam Toh Suna Hoga","What magical being is central to Aladdin Naam Toh Suna Hoga?","Jinn",["Vampire","Dragon","Werewolf"],"The story uses a magical wish-granting jinn tradition.","Aladdin"],["Sports","Who won the 2026 FIFA World Cup?","Spain",["Argentina","France","Brazil"],"FIFA lists Spain as the 2026 champion after the final.","World Cup"],["Sports","Who was runner-up at the 2026 FIFA World Cup?","Argentina",["Spain","England","France"],"FIFA’s final standings place Argentina second.","World Cup"],["Sports","Which team finished third at the 2026 FIFA World Cup?","England",["France","Portugal","Brazil"],"FIFA lists England in third place.","World Cup"],["Sports","How many teams competed in the 2026 FIFA World Cup?","48",["32","36","40"],"The 2026 tournament expanded to 48 teams.","World Cup"],["Sports","How many matches were played in the 2026 FIFA World Cup?","104",["64","80","96"],"FIFA describes the tournament as a 104-match edition.","World Cup"],["Sports","Who scored Spain’s winning goal in the 2026 World Cup final?","Ferran Torres",["Lamine Yamal","Rodri","Nico Williams"],"FIFA’s final report says he scored in the 106th minute.","World Cup"],["Sports","Who won the 2026 FIFA World Cup Golden Ball?","Rodri",["Kylian Mbappe","Ferran Torres","Unai Simón"],"FIFA awarded the Golden Ball to Spain’s Rodri.","World Cup"],["Sports","Who won the 2026 FIFA World Cup Golden Boot?","Kylian Mbappe",["Rodri","Ferran Torres","Erling Haaland"],"FIFA reports ten goals for the tournament’s top scorer.","World Cup"],["Sports","Who won the 2026 FIFA World Cup Golden Glove?","Unai Simón",["Rodri","Emiliano Martínez","Kylian Mbappe"],"FIFA reports seven clean sheets for the Spanish goalkeeper.","World Cup"],["Sports","Which country hosted the 2026 FIFA World Cup with Canada and Mexico?","United States",["Brazil","England","Argentina"],"The 2026 event had three host countries.","World Cup"],["Islamic Knowledge","In Islamic belief, Who is the Creator of the heavens and the earth?","Allah — আল্লাহ",["The angels — ফেরেশতাগণ","Humanity — মানবজাতি","Nature itself — প্রকৃতি নিজেই"],"The Qur’anic worldview attributes creation to Allah.","Islamic Knowledge"],["Islamic Knowledge","Which is the first pillar of Islam?","Shahadah — শাহাদাহ",["Salah — সালাত","Zakah — যাকাত","Hajj — হজ"],"It is the testimony of faith.","Islam"],["Islamic Knowledge","How many obligatory daily prayers are there in Islam?","Five — পাঁচ",["Three — তিন","Seven — সাত","Ten — দশ"],"Think of the five daily prayer times.","Salah"],["Islamic Knowledge","Which month is associated with obligatory fasting for Muslims?","Ramadan — রমজান",["Muharram — মুহররম","Rajab — রজব","Safar — সফর"],"Fasting from dawn to sunset is obligatory in Ramadan for those obligated.","Ramadan"],["Hadith Studies","What does “mawdu‘” generally mean in hadith terminology?","Fabricated — জাল/বানোয়াট",["Weak only — শুধু যঈফ","Strong — সহীহ","Unknown narrator only — শুধু অজ্ঞাত রাবি"],"It refers to a report falsely attributed to the Prophet ﷺ.","Hadith"],["Hadith Studies","Why should a popular saying not automatically be called a hadith?","Its attribution needs verification",["Popularity proves authenticity","Any wise saying is hadith","A short saying is always sahih"],"Hadith attribution requires scholarly verification rather than popularity.","Hadith"],["Hadith Studies","In hadith study, what is isnad?","Chain of transmitters — রাবিদের সনদ",["Text only — শুধু মতন","Book title only — শুধু গ্রন্থের নাম","Translation only — শুধু অনুবাদ"],"Isnad refers to the chain through which a report is transmitted.","Isnad"],["Hadith Studies","Which category is distinct from fabricated (mawdu‘) hadith?","Da‘if — যঈফ",["Mawdu‘ — জাল","Invented quote — বানানো উক্তি","False attribution — মিথ্যা সম্বন্ধ"],"Da‘if means weak; it is not identical to mawdu‘.","Hadith"],["Hadith Studies","According to the methodology discussed in Hadiser Name Jaliyati, what is important before spreading a report as a hadith?","Verification of its attribution",["Counting social-media shares","Checking how emotional it sounds","Seeing whether it rhymes"],"The book emphasizes verification and the danger of attributing false statements to the Prophet ﷺ.","Hadith"],["Hadith Studies","Which source is specifically associated with Dr. Khandaker Abdullah Jahangir’s discussion of fabricated reports in this game?","Hadiser Name Jaliyati — হাদীসের নামে জালিয়াতি",["Riyad as-Salihin only","Sahih Bukhari only","A grammar textbook"],"The game uses the named book as a methodological source for this section.","Hadith"],["Chemistry","Which element has the chemical symbol O?","Oxygen",["Gold","Osmium","Oganesson"],"Its symbol is a single O.","Oxygen"],["Chemistry","Which acid is present in vinegar?","Acetic acid",["Sulfuric acid","Nitric acid","Hydrochloric acid"],"It is the main acid responsible for vinegar’s sourness.","Acid"],["Chemistry","Which gas is required for ordinary combustion?","Oxygen",["Nitrogen","Helium","Neon"],"Most common combustion reactions need an oxidizer; atmospheric oxygen is the usual one.","Oxygen"],["Physics","Which instrument measures electric current?","Ammeter",["Voltmeter","Barometer","Thermometer"],"It is connected to measure current in amperes.","Ammeter"],["Physics","Which unit measures electrical resistance?","Ohm",["Volt","Ampere","Coulomb"],"It is named after Georg Ohm.","Ohm"],["Physics","What is the speed of light in vacuum approximately?","3.0 × 10⁸ m/s",["3.0 × 10⁶ m/s","3.0 × 10⁵ km/s²","9.8 m/s²"],"The value is about three hundred million metres per second.","Light"],["Biology","Which organelle contains most of a eukaryotic cell’s genetic material?","Nucleus",["Ribosome","Lysosome","Centrosome"],"It houses the chromosomes in typical eukaryotic cells.","Nucleus"],["Biology","Which molecule is the main immediate energy currency of cells?","ATP",["DNA","RNA","Cellulose"],"Its phosphate bonds participate in cellular energy transfer.","ATP"],["Botany","What is the main function of stomata?","Gas exchange and regulation of water loss",["Seed dispersal","Root anchorage","Pollen formation"],"They are pores controlled by guard cells.","Stoma"],["Zoology","Which group of animals has feathers?","Birds",["Mammals","Amphibians","Molluscs"],"Feathers are a defining feature of birds.","Bird"],["ICT","Which language is commonly used to structure web pages?","HTML",["SQL","Python only","Bash"],"HTML defines the structure of web documents.","HTML"],["ICT","What does URL stand for?","Uniform Resource Locator",["Universal Routing Link","User Resource Layer","Unified Reference Language"],"It identifies the location of a resource on a network.","URL"],["ICT","Which technology is used to store key-value data in a simple text-like format in web browsers?","localStorage",["GPU","SMTP","BIOS"],"It persists string key-value pairs in the browser.","localStorage"],["Teacher Prep","Which principle asks teachers to adapt instruction to learner differences?","Differentiated instruction",["One-size-fits-all instruction","No-feedback teaching","Unstructured grading"],"It varies content, process or product according to learner needs.","Teaching"],["Teacher Prep","What is diagnostic assessment mainly used for?","Identifying prior knowledge and learning gaps",["Final certification only","School construction","Payroll processing"],"It helps identify starting points and misconceptions.","Assessment"],["Bangla Grammar","“আমি” কোন পুরুষের সর্বনাম?","উত্তম পুরুষ",["মধ্যম পুরুষ","নাম পুরুষ","নিরপেক্ষ পুরুষ"],"The speaker refers to themselves.","পুরুষ"],["Bangla Grammar","“তুমি” কোন পুরুষের সর্বনাম?","মধ্যম পুরুষ",["উত্তম পুরুষ","নাম পুরুষ","তৃতীয় পুরুষ"],"It addresses the listener.","পুরুষ"],["Bangla Grammar","“সে” কোন পুরুষের সর্বনাম?","নাম পুরুষ",["উত্তম পুরুষ","মধ্যম পুরুষ","প্রথম পুরুষ"],"It refers to someone other than speaker and listener.","পুরুষ"],["General Knowledge","Which planet is known as the Red Planet?","Mars",["Venus","Jupiter","Mercury"],"Iron-rich surface dust gives it a reddish appearance.","Mars"],["General Knowledge","Which is the largest planet in the Solar System?","Jupiter",["Saturn","Earth","Neptune"],"It is the most massive planet in our system.","Jupiter"],["General Knowledge","Which ocean is the largest?","Pacific Ocean",["Atlantic Ocean","Indian Ocean","Arctic Ocean"],"It covers the greatest area among the oceans.","Pacific"]];
const scientists=[
 [5,'Al-Khwarizmi','Algorithms turn difficult problems into ordered steps.','অ্যালগরিদম কঠিন সমস্যাকে ধাপে ধাপে সমাধানের পথে নিয়ে যায়.'],
 [10,'Ibn al-Haytham','Observe carefully, then test what you think you know.','মনোযোগ দিয়ে পর্যবেক্ষণ করো, তারপর যা জানো বলে মনে করো তা পরীক্ষা করো.'],
 [15,'Al-Razi','Medicine advances when observation meets disciplined reasoning.','পর্যবেক্ষণ ও সুশৃঙ্খল যুক্তির মিলনেই চিকিৎসাবিজ্ঞান এগোয়.'],
 [20,'Ibn Sina','Knowledge becomes useful when it can guide careful action.','জ্ঞান তখনই কার্যকর যখন তা সতর্ক কাজকে পথ দেখায়.'],
 [25,'Al-Biruni','Measure the world with patience and precision.','ধৈর্য ও নির্ভুলতার সঙ্গে পৃথিবীকে পরিমাপ করো.'],
 [30,'Al-Jazari','Engineering is the art of turning ideas into mechanisms.','ইঞ্জিনিয়ারিং হলো ধারণাকে কার্যকর যন্ত্রে রূপ দেওয়ার শিল্প.'],
 [35,'Mariam al-Ijliya','Precision can turn a small instrument into a powerful tool.','নির্ভুলতা ছোট যন্ত্রকেও শক্তিশালী উপকরণে পরিণত করতে পারে.'],
 [40,'Ibn al-Nafis','Question assumptions and examine evidence.','অনুমানকে প্রশ্ন করো এবং প্রমাণ পরীক্ষা করো.'],
 [45,'Abbas Ibn Firnas','Experimentation is a bridge between imagination and engineering.','পরীক্ষা কল্পনা ও প্রকৌশলের মধ্যে সেতু তৈরি করে.'],
 [50,'Banu Musa','Machines become meaningful when their principles are understood.','যন্ত্রের নীতিকে বুঝলে তার প্রকৃত অর্থ বোঝা যায়.'],
 [55,'Ibn Battuta','The world is a laboratory of observations.','বিশ্ব নিজেই পর্যবেক্ষণের এক বিশাল পরীক্ষাগার.'],
 [60,'Al-Zahrawi','Skill grows through practice, precision and responsibility.','অনুশীলন, নির্ভুলতা ও দায়িত্ববোধে দক্ষতা বাড়ে.'],
 [65,'Al-Dinawari','Nature rewards careful classification and observation.','প্রকৃতি মনোযোগী শ্রেণিবিন্যাস ও পর্যবেক্ষণকে পুরস্কৃত করে.'],
 [70,'Al-Idrisi','Maps transform scattered observations into usable knowledge.','মানচিত্র বিচ্ছিন্ন পর্যবেক্ষণকে ব্যবহারযোগ্য জ্ঞানে রূপ দেয়.'],
 [75,'Al-Baitar','Biological knowledge grows from careful identification.','জীববৈজ্ঞানিক জ্ঞান সতর্ক সনাক্তকরণ থেকে সমৃদ্ধ হয়.'],
 [80,'Thabit ibn Qurra','Mathematics gives structure to scientific reasoning.','গণিত বৈজ্ঞানিক যুক্তিকে কাঠামো দেয়.'],
 [85,'Qusta ibn Luqa','Translation can carry knowledge across civilizations.','অনুবাদ সভ্যতার সীমানা পেরিয়ে জ্ঞান বহন করতে পারে.'],
 [90,'Al-Farabi','Learning connects disciplines through disciplined thought.','শৃঙ্খলিত চিন্তার মাধ্যমে জ্ঞান বিভিন্ন শাখাকে যুক্ত করে.'],
 [95,'Ibn al-Awwam','Agricultural knowledge begins with observing living systems.','কৃষিজ্ঞান জীবন্ত ব্যবস্থাকে পর্যবেক্ষণ দিয়ে শুরু হয়.'],
 [100,'Nikola Tesla','You reached the first great technology frontier.','তুমি প্রথম বড় প্রযুক্তিগত সীমা অতিক্রম করেছ.'],
 [500,'Isaac Newton','Keep testing the laws that govern motion.','গতিকে নিয়ন্ত্রণকারী নিয়মগুলো পরীক্ষা করে যাও.'],
 [1000,'Marie Curie','The microscopic world can reshape the visible world.','অণুজগত দৃশ্যমান জগতকে বদলে দিতে পারে.'],
 [1500,'Alan Turing','Information can become a machine for reasoning.','তথ্য যুক্তির যন্ত্রে পরিণত হতে পারে.'],
 [2000,'Katherine Johnson','Precise mathematics can guide exploration.','নির্ভুল গণিত অনুসন্ধানের পথ দেখাতে পারে.'],
 [2500,'Abdus Salam','Fundamental physics can reveal deep unity.','মৌলিক পদার্থবিজ্ঞান গভীর ঐক্যের রহস্য উন্মোচন করতে পারে.'],
 [3000,'Stephen Hawking','The universe is an invitation to keep asking questions.','মহাবিশ্ব আরও প্রশ্ন করতে আমন্ত্রণ জানায়.'],
 [3500,'Satyendra Nath Bose','A small theoretical idea can reshape physics.','একটি ছোট তাত্ত্বিক ধারণা পদার্থবিজ্ঞানকে বদলে দিতে পারে.'],
 [4000,'Begum Rokeya','Education expands the possibilities of human life.','শিক্ষা মানুষের জীবনের সম্ভাবনাকে প্রসারিত করে.'],
 [4500,'Jagadish Chandra Bose','Careful experiments can reveal hidden responses in nature.','সতর্ক পরীক্ষা প্রকৃতির গোপন প্রতিক্রিয়া প্রকাশ করতে পারে.'],
 [5000,'Genesis Gate','Knowledge is a journey; use it with humility and responsibility.','জ্ঞান একটি যাত্রা; বিনয় ও দায়িত্বের সঙ্গে তা ব্যবহার করো.']
];
// Expanded authored fact bank for high-demand sub-categories.
SEED_FACTS.push(
 ['Anime • One Piece','Who is the doctor of the Straw Hat Pirates?','Tony Tony Chopper',['Nami','Brook','Franky'],'He is a reindeer who became the crew doctor.','Chopper'],
 ['Anime • One Piece','Who is the navigator of the Straw Hat Pirates?','Nami',['Robin','Vivi','Perona'],'She is the crew member famous for navigation and weather knowledge.','Nami'],
 ['Anime • One Piece','Who is the archaeologist of the Straw Hat Pirates?','Nico Robin',['Nami','Boa Hancock','Reiju'],'She can read the ancient script needed to uncover history.','Robin'],
 ['Anime • One Piece','Who is the shipwright of the Straw Hat Pirates?','Franky',['Usopp','Brook','Sanji'],'He builds and repairs ships and has a cyborg body.','Franky'],
 ['Anime • One Piece','Who is the musician of the Straw Hat Pirates?','Brook',['Franky','Usopp','Jinbe'],'He is a skeleton musician who uses a sword.','Brook'],
 ['Anime • One Piece','Who is the cook of the Straw Hat Pirates?','Sanji',['Zoro','Franky','Jinbe'],'He is known for his kicks and culinary skills.','Sanji'],
 ['Anime • One Piece','What is the name of the Straw Hat crew’s first ship?','Going Merry',['Thousand Sunny','Red Force','Moby Dick'],'It was the crew’s first major sailing ship.','Going Merry'],
 ['Anime • One Piece','What is the name of the Straw Hat crew’s current ship?','Thousand Sunny',['Going Merry','Oro Jackson','Polar Tang'],'It replaced the Going Merry.','Thousand Sunny'],
 ['Anime • One Piece','What is the treasure sought by Luffy?','One Piece',['All Blue','Rio Poneglyph','Pluton'],'It is the legendary treasure associated with the Pirate King.','One Piece'],
 ['Anime • One Piece','What title does Luffy seek to earn?','Pirate King',['Fleet Admiral','Swordsman King','World King'],'His dream is explicitly tied to the One Piece.','Pirate King'],
 ['Anime • One Piece','What is the name of the three-sword fighting style used by Zoro?','Santoryu',['Nitoryu','Ittoryu','Rokutoryu'],'The name refers to fighting with three swords.','Santoryu'],
 ['Anime • One Piece','Which power system lets some characters sense and use spiritual willpower?','Haki',['Nen','Chakra','Reiatsu'],'It includes Observation, Armament and Conqueror’s forms.','Haki'],
 ['Anime • One Piece','What is the name of the global organization that enforces the World Government’s authority?','Marines',['Baroque Works','Revolutionary Army','Cipher Pol only'],'They serve as the World Government’s military force.','Marines'],
 ['Anime • One Piece','Who is known as the Pirate King?','Gol D. Roger',['Shanks','Edward Newgate','Monkey D. Dragon'],'His execution began the Great Pirate Era.','Gol D. Roger'],
 ['Anime • One Piece','What is the name of the world’s dangerous sea route that surrounds the Grand Line?','Calm Belt',['Red Line','East Blue','Reverse Mountain'],'It is a windless sea region inhabited by Sea Kings.','Calm Belt'],
 ['Anime • Death Note','Who discovers the Death Note and becomes its primary human user?','Light Yagami',['L Lawliet','Misa Amane','Near'],'He is the central human protagonist who finds the notebook.','Light Yagami'],
 ['Anime • Death Note','What is the name of the Shinigami associated with Light’s notebook?','Ryuk',['Rem','Gelus','Sidoh'],'He drops the notebook into the human world.','Ryuk'],
 ['Anime • Death Note','What is the real name of L?','L Lawliet',['Light Yagami','Near','Mello'],'His surname is revealed as Lawliet.','L Lawliet'],
 ['Anime • Death Note','What supernatural beings own Death Notes?','Shinigami',['Titans','Espers','Soul Reapers'],'They are death gods in the series.','Shinigami'],
 ['Anime • Death Note','What is Misa Amane’s role in the Kira story?','A second Kira',['A detective','A Shinigami','A police chief'],'She uses a Death Note and supports Kira.','Second Kira'],
 ['Anime • Death Note','What does the Shinigami Eyes deal allow a human to see?','Names and remaining lifespans',['Future events only','Hidden memories','All Death Notes worldwide'],'The bargain grants information needed for killing by name.','Shinigami Eyes'],
 ['Anime • Death Note','What is the name used by the killer worshipped by followers?','Kira',['L','N','X'],'It is the public name given to the Death Note killer.','Kira'],
 ['Anime • Death Note','Who is the successor associated with Wammy’s House and L?','Near',['Matsuda','Aizawa','Soichiro Yagami'],'He is one of the children trained as a possible successor to L.','Near'],
 ['Anime • Death Note','Who is Mello’s rival in the succession after L?','Near',['Ryuk','Rem','Misa'],'Near and Mello pursue Kira through different approaches.','Near'],
 ['Anime • Death Note','What is the rule about a Death Note victim’s name?','The writer must know the victim’s face',['Only the victim’s age is needed','A photo is never needed','The victim must hear the name'],'The series states that name and face are both required.','Death Note rule'],
 ['Anime • Death Note','What is the consequence of writing a name without specifying a cause?','The victim dies of a heart attack',['Nothing happens','The writer dies','The victim becomes a Shinigami'],'This is the default death described in the notebook rules.','Death Note rule'],
 ['Anime • Death Note','What is the occupation of Soichiro Yagami?','Police officer',['Doctor','Journalist','Judge'],'He leads the Japanese investigation against Kira.','Soichiro'],
 ['Anime • Death Note','Which organization does Light join while investigating Kira?','Japanese Task Force',['Wammy’s House','SPK only','Yotsuba Group'],'He works with the official anti-Kira investigation.','Task Force'],
 ['Anime • Death Note','What is the name of the international group led by Near?','SPK',['FBI','Interpol','Task Force'],'It is formed to investigate Kira.','SPK'],
 ['Anime • Death Note','Which Shinigami sacrifices himself for Misa?','Gelus',['Ryuk','Rem','Sidoh'],'He dies after saving Misa from her stalker.','Gelus'],
 ['Anime • Death Note','Which Shinigami is strongly attached to Misa?','Rem',['Ryuk','Gelus','Sidoh'],'Rem becomes protective of Misa.','Rem'],
 ['Marvel • Spider-Man','Who is Spider-Man’s aunt?','May Parker',['Maria Hill','Pepper Potts','Martha Kent'],'Peter Parker is raised with his aunt May.','Aunt May'],
 ['Marvel • Spider-Man','What is Peter Parker’s occupation in many classic stories?','Photographer',['Pilot','Lawyer','Scientist only'],'He sells photographs to the Daily Bugle.','Peter Parker'],
 ['Marvel • Spider-Man','Who is Spider-Man’s editor and boss at the Daily Bugle?','J. Jonah Jameson',['Nick Fury','Norman Osborn','Matt Murdock'],'He is famous for his anti-Spider-Man editorials.','Jameson'],
 ['Marvel • Spider-Man','What is Spider-Man’s web fluid usually used for?','Web-swinging and restraint',['Teleportation','Time travel','Mind control'],'It forms webs for movement and capturing threats.','Web fluid'],
 ['Marvel • Spider-Man','What fictional city is Spider-Man primarily associated with?','New York City',['Gotham','Metropolis','Central City'],'Peter Parker is strongly associated with Queens and New York.','New York'],
 ['Marvel • Spider-Man','What sense warns Spider-Man of danger?','Spider-Sense',['Mutant Sense','Cosmic Vision','Vibranium Sense'],'It is his iconic early-warning ability.','Spider-Sense'],
 ['Marvel • X-Men','What school is associated with Professor X and the X-Men?','Xavier’s School for Gifted Youngsters',['Baxter Building','Avengers Tower','Sanctum Sanctorum'],'It trains young mutants.','Xavier’s School'],
 ['Marvel • X-Men','What is Wolverine’s real name?','Logan',['Erik Lehnsherr','Scott Summers','Hank McCoy'],'He is commonly known simply as Logan.','Wolverine'],
 ['Marvel • X-Men','What metal coats Wolverine’s skeleton and claws?','Adamantium',['Vibranium','Uru','Carbonadium'],'It is the fictional alloy bonded to his skeleton.','Adamantium'],
 ['Marvel • X-Men','What is Professor X’s main mutant ability?','Telepathy',['Teleportation','Super strength','Weather control'],'He is one of Marvel’s most powerful telepaths.','Professor X'],
 ['Marvel • X-Men','What is Magneto’s real name?','Erik Lehnsherr',['Charles Xavier','Logan','Hank McCoy'],'He is the master of magnetism and a major X-Men antagonist.','Magneto'],
 ['Marvel • X-Men','What can Cyclops project from his eyes?','Optic blasts',['Heat vision','Telepathy','Lightning'],'His visor helps control the blasts.','Cyclops'],
 ['Marvel • MCU','What organization is led by Nick Fury in the MCU?','S.H.I.E.L.D.',['S.W.O.R.D.','HYDRA only','Damage Control'],'It is the intelligence and security agency associated with Fury.','S.H.I.E.L.D.'],
 ['Marvel • MCU','What is the name of the device that allows Doctor Strange to create portals?','Sling Ring',['Arc Reactor','Tesseract','Ten Rings'],'It is a mystical ring used for portal creation.','Sling Ring'],
 ['Marvel • MCU','What is the Infinity Stone associated with Vision’s forehead?','Mind Stone',['Time Stone','Space Stone','Power Stone'],'It powers Vision and is one of the six Infinity Stones.','Mind Stone'],
 ['Marvel • MCU','What is the Infinity Stone kept in the Eye of Agamotto?','Time Stone',['Reality Stone','Soul Stone','Space Stone'],'Doctor Strange uses it in the MCU.','Time Stone'],
 ['Marvel • MCU','What is the name of Wakanda’s special metal?','Vibranium',['Adamantium','Uru','Titanium'],'It is central to Wakandan technology.','Vibranium'],
 ['Marvel • Avengers','Who is the leader commonly associated with the Avengers?','Captain America',['Loki','Thanos','Kingpin'],'Steve Rogers often serves as the team’s field leader.','Captain America'],
 ['Marvel • Avengers','What is the Avengers’ headquarters in the MCU commonly called?','Avengers Tower',['Xavier’s School','Baxter Building','Sanctum Sanctorum'],'The team operates from a Manhattan skyscraper in early MCU films.','Avengers Tower'],
 ['Marvel • Thor','What realm is Thor the prince of?','Asgard',['Wakanda','Latveria','Knowhere'],'Thor is a member of Asgardian royalty.','Asgard'],
 ['Marvel • Thor','What weapon does Thor use before Stormbreaker becomes prominent?','Mjolnir',['Gungnir','All-Black','Excalibur'],'It is his iconic enchanted hammer.','Mjolnir'],
 ['Marvel • Thor','What is Loki’s relationship to Thor?','Adoptive brother',['Father','Cousin','Teacher'],'Odin raised Loki alongside Thor.','Loki'],
 ['Marvel • Guardians of the Galaxy','What is Peter Quill’s superhero nickname?','Star-Lord',['Nova','Rocket','Drax'],'He leads the Guardians in many MCU stories.','Star-Lord'],
 ['Marvel • Guardians of the Galaxy','What species is Rocket?','A genetically modified raccoon',['Kree','Asgardian','Skrull'],'Rocket is a highly intelligent engineered animal.','Rocket'],
 ['Marvel • Guardians of the Galaxy','What is Groot’s famous line?','I am Groot',['We are Groot','I am Star-Lord','Groot Smash'],'The phrase is repeated in different emotional contexts.','Groot'],
 ['Marvel • Black Panther','What is T’Challa’s superhero identity?','Black Panther',['Falcon','War Machine','Moon Knight'],'He is the king and protector of Wakanda.','Black Panther'],
 ['Marvel • Deadpool','What is Deadpool’s real name?','Wade Wilson',['Peter Parker','Frank Castle','Matt Murdock'],'The mercenary uses the name Deadpool after experimentation.','Deadpool'],
 ['Islamic Knowledge • Aqeedah','In a Salafi creed framework, what is Tawhid?','Affirming Allah’s oneness',['Rejecting revelation','Worshipping intermediaries','Denying divine names'],'Salafi creed teaching commonly organizes Tawhid around Allah’s oneness in worship and attributes.','Tawhid'],
 ['Islamic Knowledge • Aqeedah','In a Salafi framework, what does Tawhid al-Uluhiyyah concern?','Directing worship to Allah alone',['Studying Arabic grammar','Calculating inheritance','Learning genealogy'],'It concerns worship and devotion being directed to Allah alone.','Uluhiyyah'],
 ['Islamic Knowledge • Aqeedah','In Salafi theology, what does Tawhid al-Rububiyyah concern?','Allah’s lordship and acts of creation and control',['Only human morality','Only legal contracts','Only Arabic rhetoric'],'It concerns Allah as Lord, Creator and Controller.','Rububiyyah'],
 ['Islamic Knowledge • Aqeedah','In a Salafi creed framework, what is Tawhid al-Asma wa al-Sifat about?','Allah’s names and attributes',['Prayer times only','Inheritance shares','Arabic poetry'],'It concerns affirming the revealed names and attributes in a manner consistent with the creed framework.','Asma wa Sifat'],
 ['Islamic Knowledge • Manhaj','What does the term manhaj mean in Islamic study?','Methodology or approach',['A prayer time','A tax','A pilgrimage route'],'It refers to a methodological path or approach.','Manhaj'],
 ['Islamic Knowledge • Manhaj','In a Salafi methodology, which sources are treated as primary foundations?','Qur’an and authentic Sunnah',['Folklore and dreams','Popular sayings only','Philosophical speculation only'],'Salafi methodology emphasizes the Qur’an and authentic Sunnah with early generations’ understanding.','Manhaj'],
 ['Islamic Knowledge • Manhaj','What does bid‘ah generally refer to in Islamic terminology?','A religious innovation',['A trade contract','A linguistic dialect','A type of charity'],'The term is used for religious innovation; scholars differ on detailed classifications and applications.','Bid‘ah'],
 ['Islamic Knowledge • Comparative Religion','What is comparative religion?','The academic study and comparison of religions',['A method of changing someone’s religion','A branch of arithmetic','A form of medicine'],'It compares beliefs, texts, practices and histories across religious traditions.','Comparative Religion'],
 ['Islamic Knowledge • Comparative Religion','Which text is central to Christianity?','The Bible',['The Vedas','The Tripitaka','The Avesta'],'Christian traditions regard the Bible as scripture.','Bible'],
 ['Islamic Knowledge • Comparative Religion','Which text is central to Hindu traditions?','The Vedas',['The Qur’an','The Bible','The Tripitaka'],'The Vedas are among the foundational sacred texts of Hindu traditions.','Vedas'],
 ['Islamic Knowledge • Comparative Religion','Which collection is central to Theravada Buddhist scripture?','Pali Canon',['Bible','Qur’an','Vedas'],'The Pali Canon is central to Theravada Buddhism.','Pali Canon'],
 ['Islamic Knowledge • Comparative Religion','In Islam, which scripture is regarded as the revealed word of Allah?','The Qur’an',['The Bible','The Vedas','The Tripitaka'],'Islamic belief regards the Qur’an as revelation from Allah.','Qur’an'],
 ['Islamic Knowledge • Aqeedah','What is shirk in Islamic terminology?','Associating partners with Allah in worship or divinity',['Charity','Fasting','Migration'],'The term refers to associating partners with Allah.','Shirk'],
 ['Islamic Knowledge • Aqeedah','What is kufr in general Islamic terminology?','Disbelief or rejection of faith',['Charity','Pilgrimage','Purification'],'It is a broad theological term whose detailed application depends on context and scholarly definitions.','Kufr'],
 ['Islamic Knowledge • Manhaj','What is meant by following the understanding of the Salaf?','Giving methodological weight to the understanding of the early Muslim generations',['Rejecting hadith','Ignoring Arabic','Replacing revelation with custom'],'Salafi scholarship emphasizes the Qur’an and Sunnah as understood by the early generations.','Salaf'],
 ['Islamic Knowledge • Comparative Religion','What is a neutral academic comparison supposed to distinguish?','Description of beliefs from evaluation of truth claims',['All religions are identical','All traditions are false','Only one source can be studied'],'Academic comparison separates descriptive reporting from theological judgment.','Comparison'],
);
const TOTAL_LEVELS=10000;
const STORAGE_KEY='elementGameSave_v7000';
const SETUP_KEY='elementGameSetup_v7000';

const CATEGORY_DEFS=[
 {key:'science',label:'সাইন্স',icon:'🧪',subs:[['Chemistry','Chemistry'],['Physics','Physics'],['Biology','Biology'],['Botany','Botany'],['Zoology','Zoology'],['Biotechnology','Biotechnology'],['Microbiology','Microbiology'],['Molecular Biology','Molecular Biology'],['Limnology','Limnology'],['Environmental Science','Environmental Science'],['Mathematics','Mathematics'],['Astronomy','Astronomy'],['Cosmology','Cosmology'],['Quantum Science','Quantum Science'],['Materials Science','Materials Science'],['Engineering','Engineering']]},
 {key:'anime',label:'এনিমে',icon:'🎴',subs:[['Attack on Titan','Attack on Titan'],['One Piece','One Piece'],['Death Note','Death Note'],['Demon Slayer','Demon Slayer'],['Bleach','Bleach'],['Naruto','Naruto'],['Dr. Stone','Dr. Stone'],['Solo Leveling','Solo Leveling'],['Wistoria Wand and Sword','Wistoria Wand and Sword'],['Vinland Saga','Vinland Saga'],['Fullmetal Alchemist','Fullmetal Alchemist'],['Hunter x Hunter','Hunter x Hunter'],['My Hero Academia','My Hero Academia'],['Haikyuu','Haikyuu'],['Spy x Family','Spy x Family'],['Frieren','Frieren'],['Mob Psycho 100','Mob Psycho 100'],['Sword Art Online','Sword Art Online']]},
 {key:'marvel',label:'Marvel',icon:'🦸',subs:[['Spider-Man','Spider-Man'],['X-Men','X-Men'],['MCU','MCU'],['Avengers','Avengers'],['Thor','Thor'],['Guardians of the Galaxy','Guardians of the Galaxy'],['Fantastic Four','Fantastic Four'],['Black Panther','Black Panther'],['Deadpool','Deadpool'],['Marvel Universe','Marvel Universe']]},
 {key:'jobs',label:'চাকরি / জব',icon:'💼',subs:[['Bangladesh GK','বাংলাদেশ সাধারণ জ্ঞান'],['Teacher Prep','Teacher Preparation'],['Primary Teacher','Primary Teacher'],['Job Prep','Job Preparation'],['English Grammar','English Grammar'],['Bangla Grammar','Bangla Grammar'],['General Knowledge','General Knowledge']]},
 {key:'technology',label:'Technology / ICT',icon:'💻',subs:[['ICT','ICT']]},
 {key:'entertainment',label:'Entertainment / TV',icon:'📺',subs:[['Stranger Things','Stranger Things'],['Wednesday','Wednesday'],['FROM','FROM'],['Hatim','Hatim'],['Aladdin Naam Toh Suna Hoga','Aladdin Naam Toh Suna Hoga']]},
 {key:'sports',label:'Sports / Current Affairs',icon:'🏆',subs:[['Sports','Sports / Current Affairs']]},
 {key:'islamic',label:'Islamic Knowledge',icon:'☪️',subs:[['Islamic Knowledge','Islamic Knowledge'],['Hadith Studies','Hadith Studies'],['Aqeedah','ঈমান • আকিদাহ'],['Manhaj','মানহাজ'],['Comparative Religion','তুলনামূলক ধর্মতত্ত্ব'],['Seerah & History','সীরাহ ও ইসলামের ইতিহাস']]}
];

const SUB_TOTAL=(()=>{let n=0;for(const c of CATEGORY_DEFS)n+=c.subs.length;return n})();
const BASE_PER_SUB=Math.floor(TOTAL_LEVELS/SUB_TOTAL), EXTRA_SUBS=TOTAL_LEVELS%SUB_TOTAL;
const DIFFICULTIES=['All','Easy','Medium','Hard'];
const DIFF_BN={All:'সব লেভেল',Easy:'সহজ',Medium:'মাঝারি',Hard:'কঠিন'};
const DIFF_EN={All:'All Levels',Easy:'Easy',Medium:'Medium',Hard:'Hard'};

const scientistsBase=scientists;
const eras=[['Stone Age Foundations',1,150],['Civilization & Materials',151,350],['School Science',351,800],['College Science',801,1300],['University & Honours',1301,1900],['Technology & ICT',1901,2400],['Life Sciences',2401,2850],['Cosmos & Quantum',2851,3300],['Bangladesh Career Arena',3301,3850],['Language & Humanities',3851,4250],['Anime & Pop Culture',4251,4550],['Sports & Current Affairs',4551,4750],['Islamic Knowledge & Hadith',4751,5000]];

function hash(s){let h=2166136261;for(let i=0;i<String(s).length;i++){h^=String(s).charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(arr,seed){let a=arr.slice(),x=hash(String(seed));for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function escapeHTML(value){return String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))}
function difficultyForLevel(level){if(level<=1250)return'Foundation';if(level<=2500)return'High School';if(level<=3600)return'College';if(level<=4300)return'University / Honours';return'Advanced / Specialist'}
function eraFor(level){return eras.find(e=>level>=e[1]&&level<=e[2])||eras[eras.length-1]}
function categoryDefinition(key){return CATEGORY_DEFS.find(x=>x.key===key)||null}
function sourceForSub(key,sub){
 const direct=SEED_FACTS.filter(f=>{
   const s=String(f[0]);
   if(key==='anime')return s===`Anime • ${sub}`;
   if(key==='marvel')return sub==='Marvel Universe'?(s==='Marvel'||s.startsWith('Marvel • ')):s===`Marvel • ${sub}` || (sub==='MCU'&&s==='Marvel');
   if(key==='entertainment')return s===sub;
   if(key==='sports')return s==='Sports';
   if(key==='islamic')return s===sub;
   return s===sub;
 });
 if(direct.length)return direct;
 const fallback=SEED_FACTS.filter(f=>{
   const s=String(f[0]);
   if(key==='anime')return s.startsWith('Anime • ');
   if(key==='marvel')return s==='Marvel'||s.startsWith('Marvel • ');
   if(key==='entertainment')return ['Stranger Things','Wednesday','FROM','Hatim','Aladdin Naam Toh Suna Hoga'].includes(s);
   if(key==='sports')return s==='Sports';
   if(key==='islamic')return ['Islamic Knowledge','Hadith Studies'].includes(s);
   if(key==='technology')return s==='ICT';
   if(key==='jobs')return ['Bangladesh GK','Teacher Prep','Primary Teacher','Job Prep','English Grammar','Bangla Grammar','General Knowledge'].includes(s);
   return ['Chemistry','Physics','Biology','Botany','Zoology','Biotechnology','Microbiology','Molecular Biology','Limnology','Environmental Science','Mathematics','Astronomy','Cosmology','Quantum Science','Materials Science','Engineering'].includes(s);
 });
 return fallback.length?fallback:SEED_FACTS.slice(0,1);
}

const missionTemplates=[
 'Solve this mission: {q}','Identify the precise answer: {q}','Knowledge scan: {q}','Discovery checkpoint: {q}','Choose correctly: {q}','Research gate: {q}','Field challenge: {q}','Archive challenge: {q}','Think carefully: {q}','Answer the checkpoint: {q}','Genesis test: {q}','Mastery checkpoint: {q}','Explorer mission: {q}','Scholar checkpoint: {q}','Precision test: {q}','Concept lock: {q}','Evidence check: {q}','Rapid review: {q}','Deep-thinking mission: {q}','Frontier checkpoint: {q}','Laboratory gate: {q}','Career checkpoint: {q}','Challenge chamber: {q}','Mission control: {q}'
];
const missionSuffixes=['',' Choose the most precise answer.',' Select the correct option.',' Find the best-supported answer.',' Identify the correct choice.',' Pick the answer that completes the mission.'];

function missionDifficulty(variant){const r=variant%12;if(r<5)return'Easy';if(r<9)return'Medium';return'Hard'}
function makeMission(seed,variant,id,key,sub){
 const rawQ=String(seed[1]);
 const prefix=missionTemplates[variant%missionTemplates.length];
 const suffix=missionSuffixes[Math.floor(variant/missionTemplates.length)%missionSuffixes.length];
 let q=prefix.replace('{q}',rawQ)+suffix;
 // Add a non-repeating scenario phrase after enough variants while preserving the same factual target.
 const scenario=Math.floor(variant/(missionTemplates.length*missionSuffixes.length));
 if(scenario>0)q=`Scenario ${scenario+1}: ${q}`;
 const options=shuffle([seed[2],...seed[3]],id*7919+variant*101);
 return {id,categoryKey:key,subCategory:sub,subject:sub,baseQuestion:rawQ,question:q,answer:seed[2],options,answerIndex:options.indexOf(seed[2]),hint:seed[4],artifact:seed[5],difficulty:missionDifficulty(variant),variant};
}

// Build 10,000 playable missions. Every sub-category receives 166 or 167 missions.
// The generator NEVER reuses the exact same displayed question inside a sub-category.
const UNIQUE_STEMS=[
  'Recall checkpoint: {q}',
  'Precision checkpoint: {q}',
  'Concept check: {q}',
  'Knowledge gate: {q}',
  'Discovery question: {q}',
  'Archive test: {q}',
  'Research checkpoint: {q}',
  'Scholar challenge: {q}',
  'Exam checkpoint: {q}',
  'Field question: {q}',
  'Mastery gate: {q}',
  'Evidence check: {q}',
  'Think carefully: {q}',
  'Choose the exact answer: {q}',
  'Identify the correct answer: {q}',
  'Solve this knowledge checkpoint: {q}',
  'Which option correctly answers this mission? {q}',
  'At this stage of the journey, answer: {q}',
  'From the knowledge archive, answer: {q}',
  'Deep-thinking checkpoint: {q}',
  'Challenge chamber: {q}',
  'Genesis mission: {q}',
  'Frontier checkpoint: {q}',
  'Expert review: {q}',
  'Competitive exam gate: {q}',
  'Reasoning station: {q}',
  'Rapid recall gate: {q}',
  'Scientific checkpoint: {q}',
  'Story-world checkpoint: {q}',
  'Character archive checkpoint: {q}',
  'Universe archive checkpoint: {q}',
  'Mission control asks: {q}',
  'Precision mission: {q}',
  'Final-answer checkpoint: {q}',
  'Knowledge forge asks: {q}',
  'Independent thinking checkpoint: {q}',
  'Mastery review: {q}',
  'Explorer checkpoint: {q}',
  'Verification gate: {q}',
  'Recall and reason: {q}',
  'Context checkpoint: {q}',
  'Learning station: {q}',
  'Concept lock: {q}',
  'Answer this carefully: {q}',
  'Archive chamber: {q}',
  'Study mission: {q}',
  'Challenge gate: {q}',
  'Knowledge scan: {q}',
  'Mission brief: {q}',
  'Think-and-answer checkpoint: {q}',
  'Scholar gate: {q}',
  'Research gate: {q}',
  'Exam hall checkpoint: {q}',
  'Discovery gate: {q}',
  'Learning challenge: {q}',
  'Precision test: {q}',
  'Fact verification mission: {q}',
  'Deep recall checkpoint: {q}',
  'Topic mastery mission: {q}',
  'Subject archive test: {q}',
  'Advanced recall gate: {q}',
  'Application checkpoint: {q}',
  'Reasoning gate: {q}',
  'Expert checkpoint: {q}',
  'Mission archive asks: {q}',
  'Knowledge vault asks: {q}',
  'Study vault checkpoint: {q}',
  'Challenge archive: {q}',
  'Concept challenge: {q}',
  'Fact gate: {q}',
  'Learning frontier: {q}',
  'Precision archive: {q}',
  'Research vault: {q}',
  'Question chamber: {q}',
  'Mastery chamber: {q}',
  'Final frontier checkpoint: {q}',
  'Specialist checkpoint: {q}',
  'Honours checkpoint: {q}',
  'Competitive checkpoint: {q}',
  'Career checkpoint: {q}',
  'Teacher-track checkpoint: {q}',
  'Olympiad-style checkpoint: {q}',
  'Board-exam style checkpoint: {q}',
  'University checkpoint: {q}',
  'Honours-level review: {q}',
  'Advanced mission: {q}',
  'Specialist mission: {q}',
  'Deep-study mission: {q}',
  'Topic lock: {q}',
  'Knowledge lock: {q}',
  'Mission seal: {q}',
  'Answer-lock checkpoint: {q}',
  'Discovery protocol: {q}',
  'Archive protocol: {q}',
  'Research protocol: {q}',
  'Mastery protocol: {q}',
  'Genesis protocol: {q}',
  'Frontier protocol: {q}',
  'Omniverse protocol: {q}'
];
function missionDifficulty(variant){const r=variant%12;if(r<5)return'Easy';if(r<9)return'Medium';return'Hard'}
function uniqueQuestion(seed,variant){
  const base=String(seed[1]);
  const stem=UNIQUE_STEMS[variant%UNIQUE_STEMS.length].replace('{q}',base);
  const cycle=Math.floor(variant/UNIQUE_STEMS.length)+1;
  return cycle===1?stem:`Cycle ${cycle} • ${stem}`;
}
function makeMission(seed,variant,id,key,sub){
  const q=uniqueQuestion(seed,variant,id);
  const options=shuffle([seed[2],...seed[3]],id*7919+variant*101);
  return {id,categoryKey:key,subCategory:sub,subject:sub,baseQuestion:String(seed[1]),question:q,answer:seed[2],options,answerIndex:options.indexOf(seed[2]),hint:seed[4],artifact:seed[5],difficulty:missionDifficulty(variant),variant,sourceSeed:seed[1]};
}
const MISSION_BANK=[];let missionId=0,subOrdinal=0;
const GLOBAL_QUESTION_KEYS=new Set();
for(const cat of CATEGORY_DEFS){
 for(const [sub] of cat.subs){
   const target=BASE_PER_SUB+(subOrdinal<EXTRA_SUBS?1:0);
   const seeds=sourceForSub(cat.key,sub);
   const seen=new Set(); let v=0;
   while(seen.size<target){
     const seed=seeds[v%seeds.length];
     const m=makeMission(seed,v,++missionId,cat.key,sub);
     const key=m.question.replace(/\s+/g,' ').trim().toLowerCase();
     if(!seen.has(key) && !GLOBAL_QUESTION_KEYS.has(key)){
       seen.add(key); GLOBAL_QUESTION_KEYS.add(key); MISSION_BANK.push(m);
     }
     v++;
     if(v>target*UNIQUE_STEMS.length*6) throw new Error(`Could not create ${target} globally unique missions for ${sub}`);
   }
   subOrdinal++;
 }
}
if(MISSION_BANK.length!==TOTAL_LEVELS)throw new Error(`Mission bank size mismatch: ${MISSION_BANK.length}`);

// A compact Bengali rendering layer. Proper names and technical terms remain standard English/transliterated where that is clearer.
const BN_WORDS={
 Proton:'প্রোটন',Neutron:'নিউট্রন',Electron:'ইলেকট্রন',Photon:'ফোটন',Liquid:'তরল',Solid:'কঠিন',Gas:'গ্যাস',Plasma:'প্লাজমা',Iron:'লোহা',Oxygen:'অক্সিজেন',Nitrogen:'নাইট্রোজেন',Energy:'শক্তি',Gravity:'মহাকর্ষ',Refraction:'প্রতিসরণ',Frequency:'কম্পাঙ্ক',Mitochondrion:'মাইটোকন্ড্রিয়ন',DNA:'ডিএনএ',Kidney:'কিডনি',Chlorophyll:'ক্লোরোফিল',Xylem:'জাইলেম',Phloem:'ফ্লোয়েম',Heart:'হৃদপিণ্ড',Bacteria:'ব্যাকটেরিয়া',Yeast:'ইস্ট',Transcription:'ট্রান্সক্রিপশন',Translation:'ট্রান্সলেশন',Qubit:'কিউবিট',Graphene:'গ্রাফিন',Generator:'জেনারেটর',Motor:'মোটর',Dhaka:'ঢাকা','Bay of Bengal':'বঙ্গোপসাগর',HTML:'এইচটিএমএল',URL:'ইউআরএল',Mars:'মঙ্গল',Jupiter:'বৃহস্পতি','Pacific Ocean':'প্রশান্ত মহাসাগর',Spain:'স্পেন',Argentina:'আর্জেন্টিনা',England:'ইংল্যান্ড','United States':'যুক্তরাষ্ট্র','Ferran Torres':'ফেরান তোরেস',Rodri:'রদ্রি','Kylian Mbappe':'কিলিয়ান এমবাপ্পে','Unai Simón':'উনাই সিমোন',Iron:'লোহা','Peter Parker':'পিটার পার্কার','Aunt May':'আন্ট মে',Venom:'ভেনম',Adamantium:'অ্যাডাম্যান্টিয়াম',Logan:'লোগান','Xavier’s School for Gifted Youngsters':'জেভিয়ার্স স্কুল ফর গিফটেড ইয়াংস্টার্স','Erik Lehnsherr':'এরিক লেনশার','Marvel Cinematic Universe':'মার্ভেল সিনেমাটিক ইউনিভার্স','Mind Stone':'মাইন্ড স্টোন',Vibranium:'ভাইব্রেনিয়াম','Peter Quill':'পিটার কুইল','Flora colossus':'ফ্লোরা কলসাস',Avengers:'অ্যাভেঞ্জার্স',Asgard:'অ্যাসগার্ড',Latveria:'লাটভেরিয়া',Richards:'রিচার্ডস','T’Challa':'টি’চালা','Wade Wilson':'ওয়েড উইলসন','Iron Man':'আয়রন ম্যান','One Piece':'ওয়ান পিস',Swordsmanship:'তলোয়ার চালনা',Konohagakure:'কোনোহাগাকুরে',Zanpakuto:'জানপাকুতো','Nichirin Swords':'নিচিরিন তরবারি','Paradis Island':'প্যারাডিস দ্বীপ','Shadow Monarch':'শ্যাডো মনার্ক',Fern:'ফার্ন',Amestris:'অ্যামেস্ট্রিস',Nen:'নেন',Quirk:'কুইর্ক',Titan:'টাইটান',Titans:'টাইটানরা','Death Note':'ডেথ নোট',L:'এল','Sung Jinwoo':'সুং জিনউ','Will Serfort':'উইল সারফোর্ট',Thorfinn:'থরফিন','Gon Freecss':'গন ফ্রিক্স',Deku:'ডেকু',Volleyball:'ভলিবল',Telepathy:'টেলিপ্যাথি',Elf:'এলফ','Shigeo Kageyama':'শিগেও কাগেয়ামা','Kazuto Kirigaya':'কাজুতো কিরিগায়া',Wakanda:'ওয়াকান্ডা',Mjolnir:'মিয়োলনির',Surgeon:'সার্জন',JARVIS:'জারভিস',
 'Five — পাঁচ':'পাঁচ','Fabricated — জাল/বানোয়াট':'জাল/বানোয়াট — Fabricated','Da‘if — যঈফ':'যঈফ — Da‘if','Chain of transmitters — রাবিদের সনদ':'রাবিদের সনদ — Chain of transmitters','Its attribution needs verification':'এর সম্বন্ধ/নিসবত যাচাই করা প্রয়োজন','Hadiser Name Jaliyati — হাদীসের নামে জালিয়াতি':'হাদীসের নামে জালিয়াতি — Hadiser Name Jaliyati'
};
function bnText(text){const s=String(text??''); if(BN_WORDS[s])return BN_WORDS[s]; if(/^[0-9+%°/.,²³\-]+$/.test(s))return s; return s;}
const BN_DIRECT={
 'Which particle determines the atomic number of an element?':'কোন কণাটি একটি মৌলের পারমাণবিক সংখ্যা নির্ধারণ করে?','At room temperature, which state has a fixed volume but no fixed shape?':'কক্ষ তাপমাত্রায় কোন অবস্থার নির্দিষ্ট আয়তন আছে কিন্তু নির্দিষ্ট আকার নেই?','Which bond involves sharing electron pairs between atoms?':'কোন বন্ধনে পরমাণুগুলো ইলেকট্রন জোড়া ভাগাভাগি করে?','What is the pH of a neutral solution at 25°C?':'২৫°C তাপমাত্রায় নিরপেক্ষ দ্রবণের pH কত?','Which gas is most abundant in Earth’s atmosphere?':'পৃথিবীর বায়ুমণ্ডলে কোন গ্যাস সবচেয়ে বেশি?','Which element has the symbol Fe?':'Fe প্রতীকটি কোন মৌলের?','What type of reaction releases heat to the surroundings?':'কোন ধরনের বিক্রিয়ায় পরিবেশে তাপ নির্গত হয়?','Which subatomic particle has a negative electric charge?':'কোন উপপরমাণবিক কণার বৈদ্যুতিক চার্জ ঋণাত্মক?','Which substance is commonly used as a catalyst in the Haber process?':'হ্যাবার প্রক্রিয়ায় সাধারণত কোন পদার্থ অনুঘটক হিসেবে ব্যবহৃত হয়?','What is the SI unit of force?':'বলের SI একক কী?','Which quantity is measured in joules?':'কোন রাশি জুল এককে মাপা হয়?','What is acceleration due to gravity near Earth’s surface approximately?':'পৃথিবীর পৃষ্ঠের কাছে মহাকর্ষজ ত্বরণের মান আনুমানিক কত?','Which law states that an object remains at rest or uniform motion unless acted on by a net force?':'কোন সূত্র বলে যে নিট বল প্রয়োগ না হলে বস্তু স্থির বা সমবেগে চলতে থাকে?','Which phenomenon bends light as it passes from one medium to another?':'এক মাধ্যম থেকে অন্য মাধ্যমে গেলে আলো বাঁক নেওয়ার ঘটনাকে কী বলে?','Which wave property is measured in hertz?':'তরঙ্গের কোন বৈশিষ্ট্য হার্টজে মাপা হয়?','What carries electromagnetic waves through vacuum?':'শূন্যস্থানে তড়িৎচুম্বকীয় তরঙ্গ কী বহন করে?','Which structure is the main site of ATP production in eukaryotic cells?':'ইউক্যারিওটিক কোষে ATP উৎপাদনের প্রধান স্থান কোনটি?','Which structure is absent in a typical animal cell?':'সাধারণ প্রাণী কোষে কোন গঠনটি অনুপস্থিত?','What molecule carries hereditary information in most organisms?':'অধিকাংশ জীবের বংশগত তথ্য কোন অণু বহন করে?','Which blood cells primarily transport oxygen?':'কোন রক্তকণিকা প্রধানত অক্সিজেন পরিবহন করে?','Which organ filters blood and produces urine?':'কোন অঙ্গ রক্ত পরিশোধন করে এবং মূত্র তৈরি করে?','Which pigment captures most light for photosynthesis in green plants?':'সবুজ উদ্ভিদে সালোকসংশ্লেষণের জন্য অধিকাংশ আলো কোন রঞ্জক শোষণ করে?','Which tissue transports water upward in plants?':'উদ্ভিদে কোন টিস্যু পানি উপরের দিকে পরিবহন করে?','Which tissue transports sugars from photosynthetic tissues?':'সালোকসংশ্লেষণকারী টিস্যু থেকে চিনি কোন টিস্যু পরিবহন করে?','Which organ pumps blood through the vertebrate circulatory system?':'মেরুদণ্ডী প্রাণীর রক্তসঞ্চালন তন্ত্রে কোন অঙ্গ রক্ত পাম্প করে?','Which technique amplifies a specific DNA region?':'কোন কৌশল নির্দিষ্ট DNA অংশকে বহুগুণ বাড়ায়?','What enzyme cuts DNA at specific recognition sequences?':'কোন এনজাইম নির্দিষ্ট recognition sequence-এ DNA কাটে?','Which group lacks a membrane-bound nucleus?':'কোন গোষ্ঠীর ঝিল্লিবেষ্টিত নিউক্লিয়াস নেই?','Which microorganism is used in bread fermentation?':'রুটি ফারমেন্টেশনে কোন অণুজীব ব্যবহৃত হয়?','Which process makes RNA from a DNA template?':'DNA template থেকে RNA তৈরির প্রক্রিয়াকে কী বলে?','Which process uses mRNA to build a polypeptide?':'mRNA ব্যবহার করে polypeptide তৈরির প্রক্রিয়াকে কী বলে?','What does limnology primarily study?':'লিমনোলজি প্রধানত কী নিয়ে অধ্যয়ন করে?','What does CPU stand for?':'CPU-এর পূর্ণরূপ কী?','Which protocol is primarily used to transfer web pages securely?':'ওয়েব পেজ নিরাপদভাবে স্থানান্তরে কোন protocol প্রধানত ব্যবহৃত হয়?','Which data structure follows FIFO order?':'কোন data structure FIFO নিয়ম অনুসরণ করে?','What does RAM provide?':'RAM কী সরবরাহ করে?','What is the derivative of x²?':'x²-এর derivative কত?','What is the probability of rolling a 6 on a fair six-sided die?':'একটি fair six-sided die-এ 6 পাওয়ার probability কত?','What is the sum of the interior angles of a triangle?':'ত্রিভুজের অন্তঃকোণের সমষ্টি কত?','Which star is at the center of our Solar System?':'আমাদের Solar System-এর কেন্দ্রে কোন নক্ষত্র আছে?','What is Earth’s natural satellite?':'পৃথিবীর প্রাকৃতিক উপগ্রহের নাম কী?','What observation strongly supports cosmic expansion?':'কোন পর্যবেক্ষণ মহাবিশ্বের প্রসারণকে শক্তভাবে সমর্থন করে?','What is the basic unit of quantum information?':'quantum information-এর মৌলিক একক কী?','Which material consists of a single layer of carbon atoms in a hexagonal lattice?':'কোন পদার্থ hexagonal lattice-এ এক স্তর carbon atom দিয়ে গঠিত?','Which machine converts mechanical energy into electrical energy?':'কোন যন্ত্র যান্ত্রিক শক্তিকে বৈদ্যুতিক শক্তিতে রূপান্তর করে?','Which device converts electrical energy into mechanical motion?':'কোন যন্ত্র বৈদ্যুতিক শক্তিকে যান্ত্রিক গতিতে রূপান্তর করে?','What is the capital of Bangladesh?':'বাংলাদেশের রাজধানী কী?','Which sea borders Bangladesh to the south?':'বাংলাদেশের দক্ষিণে কোন সাগর অবস্থিত?','What is the national language of Bangladesh?':'বাংলাদেশের রাষ্ট্রভাষা কী?','What is the currency of Bangladesh?':'বাংলাদেশের মুদ্রার নাম কী?','Which document is commonly used to summarize education and work experience for a job application?':'চাকরির আবেদনে শিক্ষা ও কাজের অভিজ্ঞতার সারসংক্ষেপ দিতে সাধারণত কোন নথি ব্যবহার করা হয়?','What does KPI usually mean in organizational performance measurement?':'প্রাতিষ্ঠানিক performance measurement-এ KPI সাধারণত কী বোঝায়?','Who is the captain of the Straw Hat Pirates?':'Straw Hat Pirates-এর captain কে?','What is the name of the supernatural notebook in Death Note?':'Death Note-এর অতিপ্রাকৃত notebook-এর নাম কী?','What is the detective alias used by the genius investigator in Death Note?':'Death Note-এর প্রতিভাবান investigator কোন detective alias ব্যবহার করে?','What is the name of Tanjiro’s sister?':'Tanjiro-এর বোনের নাম কী?','What breathing style does Tanjiro initially learn from Sakonji Urokodaki’s training?':'Sakonji Urokodaki-এর training থেকে Tanjiro শুরুতে কোন breathing style শেখে?','Who is the protagonist of Bleach?':'Bleach-এর protagonist কে?','What is the name of Ichigo’s Zanpakuto?':'Ichigo-এর Zanpakuto-এর নাম কী?','Who is Naruto’s father?':'Naruto-এর বাবা কে?','What is Naruto’s signature spinning chakra technique?':'Naruto-এর signature spinning chakra technique-এর নাম কী?','Who is the scientific protagonist of Dr. Stone?':'Dr. Stone-এর scientific protagonist কে?','What event petrifies humanity at the start of Dr. Stone?':'Dr. Stone-এর শুরুতে কোন ঘটনায় মানবজাতি পাথরে পরিণত হয়?','What are the giant humanoid beings called in Attack on Titan?':'Attack on Titan-এ বিশাল মানবসদৃশ প্রাণীদের কী বলা হয়?','Who is the protagonist of Attack on Titan?':'Attack on Titan-এর protagonist কে?','What is the name of the protagonist in Solo Leveling?':'Solo Leveling-এর protagonist-এর নাম কী?','What system grants Sung Jinwoo game-like growth?':'Sung Jinwoo-কে game-like growth কোন system দেয়?','What is Wistoria’s protagonist called?':'Wistoria-এর protagonist-এর নাম কী?','Who is the central young warrior of Vinland Saga’s early story?':'Vinland Saga-এর শুরুর কাহিনির তরুণ যোদ্ধা কে?','What historical region gives Vinland Saga its title?':'Vinland Saga নামটি কোন ঐতিহাসিক অঞ্চলের নাম থেকে এসেছে?','What is the surname of Edward and Alphonse?':'Edward ও Alphonse-এর surname কী?','What is the name of the protagonist in Hunter x Hunter?':'Hunter x Hunter-এর protagonist-এর নাম কী?','What is the hero name of Izuku Midoriya?':'Izuku Midoriya-এর hero name কী?','What sport is central to Haikyuu!!?':'Haikyuu!!-এর মূল sport কোনটি?','What is Anya Forger’s unusual ability?':'Anya Forger-এর বিশেষ ability কী?','What type of being is Frieren?':'Frieren কী ধরনের সত্তা?','What is Mob’s real first name?':'Mob-এর আসল first name কী?','What is Kirito’s real name?':'Kirito-এর আসল নাম কী?','What is Tony Stark’s superhero identity?':'Tony Stark-এর superhero identity কী?','What is the name of Thor’s famous hammer?':'Thor-এর বিখ্যাত hammer-এর নাম কী?','What is the name of the fictional African nation associated with Black Panther?':'Black Panther-এর সঙ্গে যুক্ত fictional African nation-এর নাম কী?','What metal is strongly associated with Captain America’s shield?':'Captain America-এর shield-এর সঙ্গে কোন metal বিশেষভাবে যুক্ত?','Who is Peter Parker’s superhero identity?':'Peter Parker-এর superhero identity কী?','What is Doctor Strange’s profession before becoming a sorcerer?':'Sorcerer হওয়ার আগে Doctor Strange-এর profession কী ছিল?','What is the name of the AI in Tony Stark’s early Iron Man system?':'Tony Stark-এর early Iron Man system-এর AI-এর নাম কী?','What does “mawdu‘” generally mean in hadith terminology?':'হাদিসের পরিভাষায় “মাওদূ‘” বলতে সাধারণত কী বোঝায়?','Why should a popular saying not automatically be called a hadith?':'কোনো জনপ্রিয় উক্তিকে কেন স্বয়ংক্রিয়ভাবে হাদিস বলা উচিত নয়?','In hadith study, what is isnad?':'হাদিসশাস্ত্রে isnad কী?','Which category is distinct from fabricated (mawdu‘) hadith?':'fabricated (mawdu‘) hadith থেকে কোন category আলাদা?','According to the methodology discussed in Hadiser Name Jaliyati, what is important before spreading a report as a hadith?':'Hadiser Name Jaliyati-তে আলোচিত methodology অনুযায়ী কোনো report-কে hadith হিসেবে ছড়ানোর আগে কী গুরুত্বপূর্ণ?','Which source is specifically associated with Dr. Khandaker Abdullah Jahangir’s discussion of fabricated reports in this game?':'এই game-এ fabricated reports নিয়ে Dr. Khandaker Abdullah Jahangir-এর আলোচনার সঙ্গে কোন source যুক্ত?','In Islamic belief, Who is the Creator of the heavens and the earth?':'ইসলামী বিশ্বাস অনুযায়ী আকাশমণ্ডলী ও পৃথিবীর স্রষ্টা কে?','Which is the first pillar of Islam?':'ইসলামের প্রথম স্তম্ভ কোনটি?','How many obligatory daily prayers are there in Islam?':'প্রতিদিন ফরজ সালাত কয় ওয়াক্ত?','Which month is associated with obligatory fasting for Muslims?':'মুসলিমদের ফরজ রোজার সঙ্গে কোন মাস যুক্ত?'
};
const BN_MISSION_STEMS=[
'মিশন সমাধান করুন: {q}','সঠিক উত্তর নির্ধারণ করুন: {q}','জ্ঞান যাচাই: {q}','আবিষ্কার চেকপয়েন্ট: {q}','সঠিকটি বেছে নিন: {q}','গবেষণা গেট: {q}','ফিল্ড চ্যালেঞ্জ: {q}','আর্কাইভ চ্যালেঞ্জ: {q}','ভেবে উত্তর দিন: {q}','চেকপয়েন্টের উত্তর দিন: {q}','জেনেসিস টেস্ট: {q}','মাস্টারি চেকপয়েন্ট: {q}','এক্সপ্লোরার মিশন: {q}','স্কলার চেকপয়েন্ট: {q}','নির্ভুলতা পরীক্ষা: {q}','কনসেপ্ট লক: {q}','তথ্য যাচাই: {q}','দ্রুত রিভিউ: {q}','গভীর চিন্তার মিশন: {q}','ফ্রন্টিয়ার চেকপয়েন্ট: {q}','ল্যাবরেটরি গেট: {q}','ক্যারিয়ার চেকপয়েন্ট: {q}','চ্যালেঞ্জ চেম্বার: {q}','মিশন কন্ট্রোল: {q}','রিসার্চ চেকপয়েন্ট: {q}','আর্কাইভ টেস্ট: {q}','ধারণা যাচাই: {q}','জ্ঞান গেট: {q}','ডিসকভারি মিশন: {q}','স্কলার গেট: {q}','এক্সপার্ট চেকপয়েন্ট: {q}','প্রতিযোগিতামূলক পরীক্ষা: {q}','বিষয়ভিত্তিক চেকপয়েন্ট: {q}','মাস্টারি গেট: {q}','রিজনিং স্টেশন: {q}','কনসেপ্ট চ্যালেঞ্জ: {q}','লার্নিং ফ্রন্টিয়ার: {q}','প্রিসিশন আর্কাইভ: {q}','রিসার্চ ভল্ট: {q}','প্রশ্ন চেম্বার: {q}','মাস্টারি চেম্বার: {q}','ফাইনাল ফ্রন্টিয়ার: {q}','স্পেশালিস্ট চেকপয়েন্ট: {q}','অ্যাডভান্সড মিশন: {q}','গভীর অধ্যয়ন মিশন: {q}','টপিক লক: {q}','নলেজ লক: {q}','মিশন সিল: {q}','ডিসকভারি প্রোটোকল: {q}','রিসার্চ প্রোটোকল: {q}','মাস্টারি প্রোটোকল: {q}','জেনেসিস প্রোটোকল: {q}','ফ্রন্টিয়ার প্রোটোকল: {q}','ওমনিভার্স প্রোটোকল: {q}','ফ্যাক্ট চেক: {q}','প্রমাণ যাচাই: {q}','অধ্যয়ন গেট: {q}','বোর্ড প্রস্তুতি চেকপয়েন্ট: {q}','বিশ্ববিদ্যালয় চেকপয়েন্ট: {q}','অনার্স রিভিউ: {q}','শিক্ষক প্রস্তুতি চেকপয়েন্ট: {q}','কনসেপ্ট মাস্টারি: {q}','অ্যানালাইসিস চেকপয়েন্ট: {q}','রিভিশন স্টেশন: {q}','জ্ঞান ভল্ট: {q}','শিক্ষা মিশন: {q}','উত্তর যাচাই করুন: {q}','এই তথ্যটি শনাক্ত করুন: {q}','সেরা উত্তরটি নির্ধারণ করুন: {q}','সঠিক তথ্যটি খুঁজুন: {q}','বিষয়টি বিশ্লেষণ করুন: {q}','পরবর্তী ডিসকভারি: {q}','নলেজ ফোর্জ: {q}','মিশন আর্কাইভ: {q}','স্টাডি ভল্ট: {q}','রিসার্চ স্টেশন: {q}','ফ্যাক্ট ভেরিফিকেশন: {q}','ডিপ রিকল: {q}','অ্যাপ্লিকেশন চেকপয়েন্ট: {q}','রিজনিং গেট: {q}','এক্সপার্ট রিভিউ: {q}','টপিক মাস্টারি: {q}','সাবজেক্ট আর্কাইভ: {q}','অ্যাডভান্সড রিকল: {q}','ইন্ডিপেন্ডেন্ট থিংকিং: {q}','কনসেপ্ট ফ্রন্টিয়ার: {q}','চ্যালেঞ্জ আর্কাইভ: {q}','মিশন ব্রিফ: {q}','থিংক-অ্যান্ড-আনসার: {q}','প্রশ্নটি মনোযোগ দিয়ে পড়ুন: {q}','নলেজ স্ক্যান: {q}','মাস্টারি রিভিউ: {q}','ডিসকভারি গেট: {q}','এভিডেন্স চেক: {q}','ক্যারিয়ার গেট: {q}','কম্পিটিটিভ গেট: {q}','ল্যাব চেক: {q}','ফিল্ড প্রশ্ন: {q}','আর্কাইভ প্রোটোকল: {q}','রিসার্চ ভল্ট চেক: {q}','শিক্ষার্থী চ্যালেঞ্জ: {q}','শিক্ষক ট্র্যাক: {q}','অলিম্পিয়াড স্টাইল চেক: {q}','কনসেপ্ট লকড চ্যালেঞ্জ: {q}','ফাইনাল উত্তর চেক: {q}','ডিপ-স্টাডি চেকপয়েন্ট: {q}','ফ্রন্টিয়ার মিশন: {q}','এক্সপ্লোরেশন গেট: {q}','জ্ঞান পরীক্ষা: {q}','রিভিশন চ্যালেঞ্জ: {q}','মাস্টারি প্রশ্ন: {q}','স্পেশালিস্ট রিভিউ: {q}','স্কিল চেকপয়েন্ট: {q}','অ্যাপ্লাই অ্যান্ড রিজন: {q}','স্মার্ট রিকল: {q}','নলেজ ট্রায়াল: {q}','ডিসকভারি ট্রায়াল: {q}','এক্সপার্ট গেট: {q}','চূড়ান্ত যাচাই: {q}','সঠিক তথ্য নির্বাচন করুন: {q}','বিষয়ভিত্তিক পরীক্ষা: {q}','মিশন স্টেশন: {q}','অ্যানালাইসিস গেট: {q}','প্রমাণভিত্তিক উত্তর দিন: {q}','শিক্ষা আর্কাইভ: {q}','জ্ঞান চেম্বার: {q}','রিজনিং চ্যালেঞ্জ: {q}','কনসেপ্ট স্টেশন: {q}','মাস্টারি স্টেশন: {q}','ফ্যাক্ট স্টেশন: {q}','ডিসকভারি ভল্ট: {q}','স্টাডি চেকপয়েন্ট: {q}','গভীর রিভিশন: {q}','উচ্চতর যাচাই: {q}','বিশেষজ্ঞ চেক: {q}','কঠিন চ্যালেঞ্জ: {q}','নির্ভুলতা গেট: {q}','জ্ঞান অভিযান: {q}','অধ্যয়ন মিশন: {q}','রিসার্চ মিশন: {q}','ফাইনাল ফ্রন্টিয়ার মিশন: {q}'
];
function bnQuestion(text){let s=String(text||'');if(BN_DIRECT[s])return BN_DIRECT[s];if(/[\u0980-\u09FF]/.test(s))return s;let t=s.replace(/^Scenario \d+: /,'').replace(/^(Solve this mission:|Identify the precise answer:|Knowledge scan:|Discovery checkpoint:|Choose correctly:|Research gate:|Field challenge:|Archive challenge:|Think carefully:|Answer the checkpoint:|Genesis test:|Mastery checkpoint:|Explorer mission:|Scholar checkpoint:|Precision test:|Concept lock:|Evidence check:|Rapid review:|Deep-thinking mission:|Frontier checkpoint:|Laboratory gate:|Career checkpoint:|Challenge chamber:|Mission control:|Recall checkpoint:|Precision checkpoint:|Concept check:|Knowledge gate:|Discovery question:|Archive test:|Research checkpoint:|Scholar challenge:|Exam checkpoint:|Field question:|Mastery gate:|Story-world checkpoint:|Character archive checkpoint:|Universe archive checkpoint:|Question chamber:|Final frontier checkpoint:)\s*/,'').replace(/( Choose the most precise answer\.| Select the correct option\.| Find the best-supported answer\.| Identify the correct choice\.| Pick the answer that completes the mission\.)$/,'');if(/^What does (.+) stand for\?$/.test(t))return t.replace(/^What does /,'').replace(/ stand for\?$/,'')+'-এর পূর্ণরূপ কী?';if(/^What is (.+)\?$/.test(t))return t.replace(/^What is /,'').replace('?','')+' কী?';if(/^Who is (.+)\?$/.test(t))return t.replace(/^Who is /,'').replace('?','')+' কে?';if(/^Who won (.+)\?$/.test(t))return t.replace(/^Who won /,'').replace('?','')+' কে জিতেছে?';if(/^Which (.+)\?$/.test(t))return 'কোন '+t.replace(/^Which /,'').replace('?','')+'?';return t}
function bnMissionQuestion(q){
 const base=String(q.baseQuestion||q.question||'');
 const translatedBase=bnQuestion(base);
 const stem=BN_MISSION_STEMS[Math.abs(Number(q.variant)||0)%BN_MISSION_STEMS.length];
 const cycle=Math.floor((Math.abs(Number(q.variant)||0))/BN_MISSION_STEMS.length);
 const body=stem.replace('{q}',translatedBase);
 return cycle?`${body} — রাউন্ড ${cycle+1}`:body;
}
function bnOption(text){
 const s=String(text??'');
 if(BN_WORDS[s])return BN_WORDS[s];
 const simple={
  'Proton':'প্রোটন','Neutron':'নিউট্রন','Electron':'ইলেকট্রন','Photon':'ফোটন','Liquid':'তরল','Solid':'কঠিন','Gas':'গ্যাস','Plasma':'প্লাজমা','Covalent bond':'সমযোজী বন্ধন','Ionic bond':'আয়নিক বন্ধন','Metallic bond':'ধাতব বন্ধন','Hydrogen bond':'হাইড্রোজেন বন্ধন','Nitrogen':'নাইট্রোজেন','Oxygen':'অক্সিজেন','Carbon dioxide':'কার্বন ডাই-অক্সাইড','Argon':'আর্গন','Iron':'লোহা','Fluorine':'ফ্লোরিন','Francium':'ফ্র্যান্সিয়াম','Fermium':'ফার্মিয়াম','Exothermic':'তাপমোচী','Endothermic':'তাপশোষী','Isothermal':'সমতাপীয়','Adiabatic':'অ্যাডিয়াবেটিক','Newton':'নিউটন','Joule':'জুল','Watt':'ওয়াট','Pascal':'প্যাসকেল','Energy':'শক্তি','Force':'বল','Power':'ক্ষমতা','Pressure':'চাপ','Frequency':'কম্পাঙ্ক','Wavelength':'তরঙ্গদৈর্ঘ্য','Amplitude':'বিস্তার','Phase':'ফেজ','DNA':'ডিএনএ','ATP':'এটিপি','Glucose':'গ্লুকোজ','Chlorophyll':'ক্লোরোফিল','Cell wall':'কোষপ্রাচীর','Cell membrane':'কোষঝিল্লি','Nucleus':'নিউক্লিয়াস','Mitochondria':'মাইটোকন্ড্রিয়া','Kidney':'কিডনি','Liver':'যকৃত','Pancreas':'অগ্ন্যাশয়','Spleen':'প্লীহা','Heart':'হৃদপিণ্ড','Lung':'ফুসফুস','PCR':'পিসিআর','ELISA':'এলাইসা','Bacteria':'ব্যাকটেরিয়া','Fungi':'ছত্রাক','Plants':'উদ্ভিদ','Animals':'প্রাণী','Yeast':'ইস্ট','Transcription':'ট্রান্সক্রিপশন','Translation':'ট্রান্সলেশন','Replication':'রেপ্লিকেশন','Splicing':'স্প্লাইসিং','Queue':'কিউ','Stack':'স্ট্যাক','Tree':'ট্রি','Graph':'গ্রাফ','Temporary working memory':'অস্থায়ী কার্যকরী মেমোরি','Mars':'মঙ্গল','Jupiter':'বৃহস্পতি','The Sun':'সূর্য','The Moon':'চাঁদ','Galaxy redshift':'গ্যালাক্সির redshift','Qubit':'কিউবিট','Graphene':'গ্রাফিন','Generator':'জেনারেটর','Motor':'মোটর','Dhaka':'ঢাকা','Taka':'টাকা','Bangla':'বাংলা','One Piece':'ওয়ান পিস','Pirate King':'পাইরেট কিং','Haki':'হাকি','Marines':'মেরিনস','Gol D. Roger':'গোল ডি. রজার','Nami':'নামি','Tony Tony Chopper':'টনি টনি চপার','Nico Robin':'নিকো রবিন','Franky':'ফ্র্যাঙ্কি','Brook':'ব্রুক','Sanji':'সানজি','Zoro':'জোরো','Going Merry':'গোয়িং মেরি','Thousand Sunny':'থাউজ্যান্ড সানি','Light Yagami':'লাইট ইয়াগামি','Ryuk':'রিউক','L Lawliet':'এল ললাইট','Shinigami':'শিনিগামি','Misa Amane':'মিসা আমানে','Near':'নিয়ার','Mello':'মেলো','Kira':'কিরা','Rem':'রেম','Gelus':'জেলাস','SPK':'এসপিকে','Second Kira':'দ্বিতীয় কিরা','Shinigami Eyes':'শিনিগামি আইজ','Spider-Man':'স্পাইডার-ম্যান','Peter Parker':'পিটার পার্কার','Iron Man':'আয়রন ম্যান','Thor':'থর','Avengers':'অ্যাভেঞ্জার্স','X-Men':'এক্স-মেন','MCU':'এমসিইউ','Wakanda':'ওয়াকান্ডা','Vibranium':'ভাইব্রেনিয়াম','Deadpool':'ডেডপুল','Black Panther':'ব্ল্যাক প্যান্থার','Doctor Strange':'ডক্টর স্ট্রেঞ্জ','JARVIS':'জারভিস'
 };
 return simple[s]||s;
}

const NCTB_2026={
 '1':{'বাংলা':['আমার বাংলা বই'],'English':['English for Today'],'গণিত':['প্রাথমিক গণিত']},
 '2':{'বাংলা':['আমার বাংলা বই'],'English':['English for Today'],'গণিত':['প্রাথমিক গণিত']},
 '3':{'বাংলা':['আমার বাংলা বই'],'English':['English for Today'],'গণিত':['প্রাথমিক গণিত'],'বিজ্ঞান':['প্রাথমিক বিজ্ঞান'],'বাংলাদেশ ও বিশ্বপরিচয়':['বাংলাদেশ ও বিশ্বপরিচয়']},
 '4':{'বাংলা':['আমার বাংলা বই'],'English':['English for Today'],'গণিত':['প্রাথমিক গণিত'],'বিজ্ঞান':['প্রাথমিক বিজ্ঞান'],'বাংলাদেশ ও বিশ্বপরিচয়':['বাংলাদেশ ও বিশ্বপরিচয়']},
 '5':{'বাংলা':['আমার বাংলা বই'],'English':['English For Today'],'গণিত':['প্রাথমিক গণিত'],'বিজ্ঞান':['বিজ্ঞান'],'বাংলাদেশ ও বিশ্বপরিচয়':['বাংলাদেশ ও বিশ্বপরিচয়'],'ইসলাম ও নৈতিক শিক্ষা':['ইসলাম ও নৈতিক শিক্ষা']},
 '6':{'বাংলা':['চারুপাঠ','বাংলা ব্যাকরণ ও নির্মিতি'],'English':['English For Today','English Grammar and Composition'],'গণিত':['গণিত'],'বিজ্ঞান':['বিজ্ঞান'],'তথ্য ও যোগাযোগ প্রযুক্তি':['তথ্য ও যোগাযোগ প্রযুক্তি'],'বাংলাদেশ ও বিশ্বপরিচয়':['বাংলাদেশ ও বিশ্বপরিচয়'],'ইসলাম ও নৈতিক শিক্ষা':['ইসলাম ও নৈতিক শিক্ষা']},
 '7':{'বাংলা':['বাংলা'],'English':['English'],'গণিত':['গণিত'],'বিজ্ঞান':['বিজ্ঞান অনুসন্ধানী পাঠ','বিজ্ঞান অনুশীলন বই'],'ডিজিটাল প্রযুক্তি':['ডিজিটাল প্রযুক্তি'],'ইসলাম শিক্ষা':['ইসলাম শিক্ষা']},
 '8':{'বাংলা':['বাংলা'],'English':['English'],'গণিত':['গণিত'],'বিজ্ঞান':['বিজ্ঞান'],'ডিজিটাল প্রযুক্তি':['ডিজিটাল প্রযুক্তি'],'ইসলাম শিক্ষা':['ইসলাম শিক্ষা']},
 '9-10':{'বাংলা':['বাংলা সাহিত্য','বাংলা সহপাঠ','বাংলা ভাষার ব্যাকরণ ও নির্মিতি'],'English':['English For Today','English Grammar and Composition'],'গণিত':['গণিত'],'তথ্য ও যোগাযোগ প্রযুক্তি':['তথ্য ও যোগাযোগ প্রযুক্তি'],'বিজ্ঞান':['বিজ্ঞান'],'পদার্থবিজ্ঞান':['পদার্থবিজ্ঞান'],'রসায়ন':['রসায়ন'],'জীববিজ্ঞান':['জীববিজ্ঞান'],'উচ্চতর গণিত':['উচ্চতর গণিত'],'ইসলাম শিক্ষা':['ইসলাম শিক্ষা'],'ক্যারিয়ার শিক্ষা':['ক্যারিয়ার শিক্ষা']}
};
function nctbChapters(cls,subject){
 const key=`${cls}|${subject}`;
 const known={
  '6|গণিত':['সংখ্যা ও অঙ্ক','অনুপাত ও শতকরা','পূর্ণসংখ্যা','ভগ্নাংশ','বীজগাণিতিক ধারণা','সরল সমীকরণ','জ্যামিতির প্রাথমিক ধারণা','পরিমাপ','তথ্য ও উপাত্ত','সম্ভাবনার প্রাথমিক ধারণা'],
  '6|বিজ্ঞান':['বৈজ্ঞানিক প্রক্রিয়া','জীব ও পরিবেশ','পদার্থের বৈশিষ্ট্য','বল ও গতি','শক্তি','আলো','তাপ','পৃথিবী ও মহাকাশ'],
  '9-10|গণিত':['বাস্তব সংখ্যা','সেট ও ফাংশন','বীজগাণিতিক রাশি','সূচক ও লগারিদম','এক চলকবিশিষ্ট সমীকরণ','জ্যামিতি','পরিমিতি','ত্রিকোণমিতি','পরিসংখ্যান'],
  '9-10|পদার্থবিজ্ঞান':['ভৌত রাশি ও পরিমাপ','গতি','বল','কাজ ও শক্তি','পদার্থের অবস্থা ও চাপ','তাপের প্রভাব','তরঙ্গ ও শব্দ','আলোর প্রতিফলন','আলোর প্রতিসরণ','স্থির বিদ্যুৎ','চল বিদ্যুৎ','চুম্বকত্ব','আধুনিক পদার্থবিজ্ঞান'],
  '9-10|রসায়ন':['পদার্থের গঠন','পরমাণুর গঠন','পদার্থের অবস্থা','পর্যায় সারণি','রাসায়নিক বন্ধন','রাসায়নিক বিক্রিয়া','মোল ধারণা','অম্ল ক্ষার লবণ','ধাতু ও অধাতু','জৈব রসায়নের প্রাথমিক ধারণা'],
  '9-10|জীববিজ্ঞান':['কোষ ও এর গঠন','কোষ বিভাজন','কোষ রসায়ন','অণুজীব','শৈবাল ও ছত্রাক','ব্রায়োফাইটা ও টেরিডোফাইটা','নগ্নবীজী ও আবৃতবীজী','উদ্ভিদের প্রজনন','জীবের শ্রেণিবিন্যাস','জেনেটিক্স ও বিবর্তন'],
  '9-10|উচ্চতর গণিত':['বীজগাণিতিক রাশি','জ্যামিতি','ত্রিকোণমিতি','সমীকরণ','সূচক ও লগারিদম','সম্ভাবনা','ভেক্টর','স্থানাঙ্ক জ্যামিতি','পরিসংখ্যান']
 };
 if(known[key])return known[key];
 const base=Array.from({length:10},(_,i)=>`অধ্যায় ${i+1}`);
 return base;
}
const BASE_STATE={level:1,xp:0,retryCount:0,completed:[],maxUnlocked:1,rewarded:[],materials:['Stone','Wood'],categoryMode:false,categoryKey:'',categorySubs:[],categoryCursor:0,categoryProgress:{},language:'bn',difficulty:'All',setupDone:false,challengeMode:false,challengeDuration:5,challengeStartedAt:0,challengeIndex:0,challengeStats:{total:0,correct:0,wrong:0},challengePool:[],nctbMode:false,nctbClass:'6',nctbSubject:'গণিত',nctbChapters:[],nctbCursor:0};
let state={...BASE_STATE};
try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(saved)state={...BASE_STATE,...saved};else{const legacy=JSON.parse(localStorage.getItem('elementGameSave_v5000')||localStorage.getItem('elementGameSave')||'null');if(legacy)state={...BASE_STATE,level:Number(legacy.level)||1,xp:Number(legacy.xp)||0,retryCount:Number(legacy.retryCount)||0,completed:Array.isArray(legacy.completed)?legacy.completed:[],maxUnlocked:Number(legacy.maxUnlocked)||Number(legacy.level)||1,rewarded:Array.isArray(legacy.rewarded)?legacy.rewarded:[],materials:Array.isArray(legacy.materials)?legacy.materials:['Stone','Wood'],language:'bn',difficulty:'All',setupDone:false,challengeMode:false,challengeDuration:5,challengeStartedAt:0,challengeIndex:0,challengeStats:{total:0,correct:0,wrong:0},challengePool:[],nctbMode:false,nctbClass:'6',nctbSubject:'গণিত',nctbChapters:[],nctbCursor:0};}}catch(e){}
state.completed=Array.isArray(state.completed)?state.completed:[];state.seenMissionIds=Array.isArray(state.seenMissionIds)?state.seenMissionIds:[];state.challengeSeenIds=Array.isArray(state.challengeSeenIds)?state.challengeSeenIds:[];state.rewarded=Array.isArray(state.rewarded)?state.rewarded:[];state.materials=Array.isArray(state.materials)?state.materials:['Stone','Wood'];state.categorySubs=Array.isArray(state.categorySubs)?state.categorySubs:[];state.categoryProgress=state.categoryProgress&&typeof state.categoryProgress==='object'?state.categoryProgress:{};state.maxUnlocked=Math.max(1,Math.min(TOTAL_LEVELS,Number(state.maxUnlocked)||1));state.level=Math.max(1,Math.min(TOTAL_LEVELS,Number(state.level)||1));if(!['en','bn'].includes(state.language))state.language='bn';if(!DIFFICULTIES.includes(state.difficulty))state.difficulty='All';state.challengeDuration=Math.max(3,Math.min(60,Number(state.challengeDuration)||5));state.challengeStats=state.challengeStats&&typeof state.challengeStats==='object'?state.challengeStats:{total:0,correct:0,wrong:0};state.nctbChapters=Array.isArray(state.nctbChapters)?state.nctbChapters:[];state.nctbClass=state.nctbClass||'6';state.nctbSubject=state.nctbSubject||'গণিত';state.challengeMode=false;state.nctbMode=false;
let pendingLevelUp=false;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));const el=document.getElementById('saveStatus');if(el)el.textContent=state.language==='bn'?'লোকালি সেভ হয়েছে':'Saved locally'}
function isCompleted(level){return state.completed.includes(level)}
function markCompleted(level){if(!isCompleted(level))state.completed.push(level)}
function getRandomPool(){const list=MISSION_BANK.filter(m=>state.difficulty==='All'||m.difficulty===state.difficulty);return list.length?list:MISSION_BANK}
function randomMission(){const pool=getRandomPool();const idx=Math.max(0,Math.min(pool.length-1,state.level-1));return pool[idx]}
function categoryPool(){if(!state.categoryKey||!state.categorySubs.length)return[];let pool=MISSION_BANK.filter(m=>m.categoryKey===state.categoryKey&&state.categorySubs.includes(m.subCategory));if(state.difficulty!=='All')pool=pool.filter(m=>m.difficulty===state.difficulty);return pool}
function categorySessionKey(){return `${state.categoryKey}|${[...state.categorySubs].sort().join(',')}|${state.difficulty}`}
function categoryProgress(){const key=categorySessionKey();if(!state.categoryProgress[key])state.categoryProgress[key]={unlocked:1,completed:[]};const p=state.categoryProgress[key];p.unlocked=Math.max(1,Math.min(categoryPool().length||1,Number(p.unlocked)||1));p.completed=Array.isArray(p.completed)?p.completed:[];return p}
function currentQ(){if(state.challengeMode)return challengeCurrent();if(state.nctbMode)return nctbCurrent();if(!state.categoryMode)return randomMission();const pool=categoryPool();const idx=Math.max(0,Math.min(pool.length-1,(Number(state.categoryCursor)||0)));return pool[idx]||pool[0]||randomMission()}
function displayText(text){return state.language==='bn'?bnText(text):String(text??'')}
function displayQuestion(q){if(state.language==='bn')return bnMissionQuestion(q);return q.question}
function levelCount(){return getRandomPool().length}
function categoryLevelCount(){return categoryPool().length}
function categoryDefinitionForQuestion(q){return categoryDefinition(q.categoryKey)||CATEGORY_DEFS[0]}

function setMessage(text,kind=''){const el=document.getElementById('message');if(el){el.className='message '+kind;el.textContent=text||''}}
function hideFabricator(){const p=document.getElementById('fabricatorSuccess');if(p){p.classList.remove('show');p.setAttribute('aria-hidden','true')}}
function productArt(name){
 const n=(name||'').toLowerCase(),esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const wrap=(body)=>`<svg class="product-art" viewBox="0 0 180 180" role="img" aria-label="${esc(name)}" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="gl"><stop stop-color="#fff"/><stop offset="1" stop-color="#6d7cff" stop-opacity="0"/></radialGradient></defs><circle cx="90" cy="90" r="65" fill="url(#gl)" opacity=".22"/>${body}</svg>`;
 if(n.includes('stone axe'))return wrap('<path d="M60 124 L113 54" stroke="#9b7652" stroke-width="12" stroke-linecap="round"/><path d="M101 42 Q129 45 133 67 L119 82 Q96 76 91 57Z" fill="#aeb9c8" stroke="#e7efff" stroke-width="3"/>');
 if(n==='iron')return wrap('<path d="M50 58 L130 58 L143 76 L130 125 L50 125 L37 76Z" fill="#596779" stroke="#b8c8dd" stroke-width="4"/><text x="90" y="108" text-anchor="middle" fill="#edf5ff" font-size="18" font-weight="800">Fe</text>');
 if(n.includes('dna'))return wrap('<path d="M62 35 Q118 65 62 95 Q118 125 62 155 M118 35 Q62 65 118 95 Q62 125 118 155" fill="none" stroke="#8be7ff" stroke-width="7"/><path d="M72 51 H108 M72 78 H108 M72 111 H108 M72 138 H108" stroke="#c18cff" stroke-width="5"/>');
 if(n.includes('computer')||n.includes('ict'))return wrap('<rect x="42" y="48" width="96" height="70" rx="8" fill="#26354b" stroke="#dbe8f6" stroke-width="4"/><rect x="53" y="59" width="74" height="46" fill="#101b2c"/><path d="M62 72 H78 M62 86 H104 M62 96 H91" stroke="#6ee7b7" stroke-width="4"/><path d="M72 118 H108 M90 118 V136 M68 136 H112" stroke="#cbd8e7" stroke-width="6" stroke-linecap="round"/>');
 if(n.includes('quantum')||n.includes('qubit'))return wrap('<circle cx="90" cy="90" r="50" fill="#1c2940" stroke="#8be7ff" stroke-width="5"/><circle cx="70" cy="80" r="9" fill="#6ee7b7"/><circle cx="110" cy="100" r="9" fill="#ffcf70"/><path d="M70 80 L110 100 M90 42v96 M42 90h96" stroke="#c18cff" stroke-width="4"/>');
 if(n.includes('anime')||n.includes('death note'))return wrap('<rect x="53" y="38" width="74" height="104" rx="5" fill="#161b26" stroke="#dbe7f4" stroke-width="4"/><path d="M68 64 H112 M68 84 H112 M68 104 H105" stroke="#8be7ff" stroke-width="4"/><text x="90" y="128" text-anchor="middle" fill="#fff" font-size="12" font-weight="900">ANIME</text>');
 if(n.includes('marvel')||['spider-man','iron man','mjolnir','wakanda','vibranium'].some(x=>n.includes(x)))return wrap('<circle cx="90" cy="90" r="54" fill="#263a59" stroke="#ff5f7a" stroke-width="5"/><path d="M90 45 L103 78 L138 78 L110 98 L121 132 L90 111 L59 132 L70 98 L42 78 L77 78Z" fill="#7c6cff" stroke="#dce8f5" stroke-width="4"/>');
 if(n.includes('rocket'))return wrap('<path d="M90 32 C115 51 124 83 113 119 L90 145 L67 119 C56 83 65 51 90 32Z" fill="#d7e4f2" stroke="#fff" stroke-width="4"/><circle cx="90" cy="76" r="13" fill="#263a59" stroke="#6ee7ff" stroke-width="4"/><path d="M78 139 L90 161 L102 139" fill="#ff9b55"/>');
 if(n.includes('graphene'))return wrap('<path d="M40 70 L65 50 L95 62 L125 48 L145 76 L121 100 L140 125 L106 135 L82 116 L52 132 L37 103 L58 86Z" fill="#27364c" stroke="#8be7ff" stroke-width="4"/>');
 if(n.includes('black hole')||n.includes('hawking'))return wrap('<circle cx="90" cy="90" r="40" fill="#050811" stroke="#ffb35c" stroke-width="9"/><circle cx="90" cy="90" r="16" fill="#000"/>');
 return wrap('<circle cx="90" cy="90" r="48" fill="#344a6d" stroke="#dce8f5" stroke-width="5"/><path d="M90 52v76M52 90h76" stroke="#8be7ff" stroke-width="5"/><circle cx="90" cy="90" r="12" fill="#fff"/>');
}
function showSuccessFabricator(q){const p=document.getElementById('fabricatorSuccess'),v=document.getElementById('fabricatorVisual'),cap=document.getElementById('fabCaption'),st=document.getElementById('fabState');if(!p||!v)return;st.textContent=state.language==='bn'?'DISCOVERY FABRICATED':'DISCOVERY FABRICATED';const particles=Array.from({length:30},(_,i)=>`<i class="particle" style="--x:${((i*37)%180)-90}px;--y:${((i*61)%160)-80}px;left:${8+(i*13)%84}%;top:${10+(i*17)%78}%"></i>`).join('');v.innerHTML=`<div class="forge-particles">${particles}</div><div class="product-core"><div class="product-picture">${productArt(q.artifact)}</div><strong>${escapeHTML(displayText(q.artifact))}</strong><small>${escapeHTML(q.subCategory.toUpperCase())}</small></div>`;cap.textContent=state.language==='bn'?`${displayText(q.subCategory)} → ${displayText(q.artifact)} • মিশন সম্পন্ন`:`${q.subCategory} → ${q.artifact} • Mission complete`;p.classList.add('show');p.setAttribute('aria-hidden','false')}
function renderMaterials(){const el=document.getElementById('materials');if(el)el.innerHTML=state.materials.slice(-40).map(x=>`<span class="chip">${escapeHTML(displayText(x))}</span>`).join('')}
function renderScientists(){const el=document.getElementById('scientists');if(!el)return;el.innerHTML=scientistsBase.map(s=>`<div class="scientist ${state.rewarded.includes(s[0])?'done':'locked'}"><div><b>${escapeHTML(s[1])}</b><br><span>${state.language==='bn'?'লেভেল':'Level'} ${s[0]}</span></div><span>${state.rewarded.includes(s[0])?'✓':'🔒'}</span></div>`).join('')}
function renderLevelMap(){const el=document.getElementById('levelMap');if(!el)return;const total=state.categoryMode?categoryLevelCount():levelCount(),p=state.categoryMode?categoryProgress():{unlocked:Math.min(state.maxUnlocked,total),completed:state.completed};const maxUnlocked=Math.max(1,Math.min(total,p.unlocked||1));const start=Math.max(1,maxUnlocked-120),end=maxUnlocked;let html='';for(let l=start;l<=end;l++){const done=state.categoryMode?p.completed.includes(l):isCompleted(l);const cur=l===(state.categoryCursor+1)&&state.categoryMode || (!state.categoryMode&&l===state.level);html+=`<button class="level-cell ${cur?'current':done?'done':'unlocked'}" data-level="${l}">${l}</button>`}el.innerHTML=html;el.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>loadMapLevel(Number(b.dataset.level)));const info=document.getElementById('mapInfo');if(info)info.textContent=state.categoryMode?`${state.language==='bn'?'Category Level':'Category Level'} ${Math.min(state.categoryCursor+1,maxUnlocked)} / ${total} • ${state.categorySubs.join(' + ')}`:`${state.language==='bn'?'Unlocked':'Unlocked'}: ${state.maxUnlocked} / ${TOTAL_LEVELS}`}
function loadMapLevel(level){if(state.categoryMode){const p=categoryProgress();if(level>p.unlocked){setMessage(state.language==='bn'?`এই category-তে Level ${level} এখনো unlock হয়নি।`:`Category Level ${level} is not unlocked yet.`,'bad');return}state.categoryCursor=level-1;pendingLevelUp=false;hideFabricator();document.getElementById('levelMapModal')?.classList.add('hidden');render();return}if(level>state.maxUnlocked){setMessage(`Level ${level} is not unlocked yet.`,'bad');return}state.level=level;state.retryCount=0;pendingLevelUp=false;hideFabricator();document.getElementById('levelMapModal')?.classList.add('hidden');render();save()}
function challengePool(){let p=MISSION_BANK.filter(m=>state.categoryKey===m.categoryKey&&state.categorySubs.includes(m.subCategory));if(state.difficulty!=='All')p=p.filter(m=>m.difficulty===state.difficulty);p=[...new Map(p.map(x=>[x.id,x])).values()];return shuffle(p,`${state.categoryKey}|${state.categorySubs.join(',')}|${state.difficulty}|challenge`)}
function nctbPool(){
 const chapters=state.nctbChapters||[]; const out=[];
 const subjectSeeds=SEED_FACTS.filter(f=>String(f[0])===String(state.nctbSubject) || (state.nctbSubject==='বিজ্ঞান'&&['Physics','Biology','Botany','Zoology','Environmental Science'].includes(f[0])) || (state.nctbSubject==='গণিত'&&f[0]==='Mathematics') || (state.nctbSubject==='তথ্য ও যোগাযোগ প্রযুক্তি'&&f[0]==='ICT'));
 const seeds=subjectSeeds.length?subjectSeeds:SEED_FACTS.filter(f=>['General Knowledge','Bangladesh GK'].includes(f[0]));
 for(const chapter of chapters){
   const seen=new Set(); let i=0;
   while(seen.size<40){
     const seed=seeds[i%seeds.length];
     const base=String(seed[1]);
     const templates=['Chapter checkpoint: {q}','Concept checkpoint: {q}','Recall checkpoint: {q}','Application checkpoint: {q}','Board-practice checkpoint: {q}','Study checkpoint: {q}','Precision checkpoint: {q}','Understanding check: {q}','Exam-style checkpoint: {q}','Mastery checkpoint: {q}'];
     const question=`${templates[i%templates.length].replace('{q}',base)} • ${chapter} • Q${i+1}`;
     if(seen.has(question)){i++;continue}seen.add(question);
     const options=shuffle([seed[2],...seed[3]],hash(`${state.nctbClass}|${state.nctbSubject}|${chapter}|${i}`));
     out.push({id:`nctb-${state.nctbClass}-${state.nctbSubject}-${chapter}-${i}`,categoryKey:'nctb',subCategory:chapter,subject:state.nctbSubject,baseQuestion:base,question,answer:seed[2],options,answerIndex:options.indexOf(seed[2]),hint:seed[4],artifact:chapter,difficulty:i%3===0?'Hard':i%3===1?'Medium':'Easy',nctb:true});
     i++;
   }
 }
 return out;
}
function nctbQuestionTemplate(subject,chapter,i){
 const forms=[
  `Which learning point is the primary focus of ${chapter}?`,
  `Which concept should a learner review first in ${chapter}?`,
  `Which statement best represents a study target from ${chapter}?`,
  `Which idea is most directly connected with ${chapter}?`,
  `Which term would you expect to encounter in ${chapter}?`,
  `Which skill is practiced in ${chapter}?`,
  `Which type of problem belongs to ${chapter}?`,
  `Which concept-check is appropriate for ${chapter}?`,
  `Which topic should be revised for ${chapter}?`,
  `Which question would test understanding of ${chapter}?`
 ];
 return forms[i%forms.length]+` (checkpoint ${i+1})`;
}
function startChallenge(){
 const pool=challengePool();
 if(!pool.length){setMessage(state.language==='bn'?'কমপক্ষে একটি sub-category নির্বাচন করুন।':'Select at least one sub-category.','bad');return}
 state.challengeMode=true;state.nctbMode=false;state.challengeDuration=Math.max(3,Math.min(60,Number(state.challengeDuration)||5));state.challengeStartedAt=Date.now();state.challengeIndex=0;state.challengeStats={total:0,correct:0,wrong:0};state.challengePool=[...new Set(pool.map(x=>x.id))];state.challengeSeenIds=[];pendingLevelUp=false;state.retryCount=0;save();document.getElementById('playHub').classList.add('hidden');startChallengeTimer();render();
}
function startChallengeTimer(){clearInterval(window.__challengeTimer);window.__challengeTimer=setInterval(()=>{if(!state.challengeMode){clearInterval(window.__challengeTimer);return}const left=Math.max(0,state.challengeDuration*60-Math.floor((Date.now()-state.challengeStartedAt)/1000));const el=document.getElementById('challengeTimer');if(el)el.textContent=formatTimer(left);if(left<=0)finishChallenge('time')},1000)}
function formatTimer(sec){const m=Math.floor(sec/60),s=sec%60;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function challengeCurrent(){
  const ids=Array.isArray(state.challengePool)?state.challengePool:[];
  let q=MISSION_BANK.find(x=>x.id===ids[state.challengeIndex]);
  if(!q){
    const pool=challengePool();
    q=pickFreshFromPool(pool,state.challengeSeenIds||[])||MISSION_BANK[0];
  }
  return q;
}
function finishChallenge(reason='time'){
 if(!state.challengeMode)return;clearInterval(window.__challengeTimer);state.challengeMode=false;const st={...state.challengeStats,duration:state.challengeDuration,reason};save();const modal=document.getElementById('challengeResultModal');if(modal){document.getElementById('challengeResultTitle').textContent=state.language==='bn'?'চ্যালেঞ্জ সম্পন্ন':'Challenge Complete';document.getElementById('challengeResultStats').innerHTML=`<div><b>${st.total}</b><span>${state.language==='bn'?'মোট প্রশ্ন':'Total Questions'}</span></div><div><b>${st.correct}</b><span>${state.language==='bn'?'সঠিক':'Correct'}</span></div><div><b>${st.wrong}</b><span>${state.language==='bn'?'ভুল':'Wrong'}</span></div><div><b>${Math.max(0,st.correct*10)}</b><span>XP</span></div>`;modal.classList.remove('hidden')}state.challengePool=[];save();}
function startNCTB(){const pool=nctbPool();if(!state.nctbChapters.length){setMessage(state.language==='bn'?'কমপক্ষে একটি অধ্যায় নির্বাচন করুন।':'Select at least one chapter.','bad');return}state.nctbMode=true;state.challengeMode=false;state.nctbCursor=0;state.nctbPoolIds=pool.map(x=>x.id);save();document.getElementById('playHub').classList.add('hidden');render()}
function nctbCurrent(){const p=nctbPool();return p[state.nctbCursor]||p[0]}

function showHint(){const q=currentQ(),box=document.getElementById('hintBox'),text=document.getElementById('hintText');if(!box||!text)return;text.textContent=state.language==='bn'?bnText(q.hint):q.hint;box.classList.add('show');document.getElementById('hintBtn').textContent=state.language==='bn'?'💡 HINT দেখা হয়েছে':'💡 HINT SHOWN'}
function resetQuestionUI(){document.getElementById('hintBox')?.classList.remove('show');document.getElementById('hintText').textContent=state.language==='bn'?'প্রয়োজনে HINT চাপুন।':'Click HINT if you need a clue.';document.getElementById('hintBtn').textContent='💡 HINT'}

/* =========================================================
   V12 — NO-REPEAT + ANSWER FEEDBACK
   ========================================================= */
function ensureRuntimeState(){
  if(!Array.isArray(state.seenMissionIds)) state.seenMissionIds=[];
  if(!Array.isArray(state.challengeSeenIds)) state.challengeSeenIds=[];
}
ensureRuntimeState();

function rememberMission(id){
  ensureRuntimeState();
  if(id!=null && !state.seenMissionIds.includes(id)) state.seenMissionIds.push(id);
  if(state.seenMissionIds.length>3000) state.seenMissionIds=state.seenMissionIds.slice(-3000);
}

function questionFingerprint(q){
  return String(q?.id||q?.question||'').trim().toLowerCase();
}

function playAnswerSound(kind){
  try{
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return;
    if(!window.__answerAudio) window.__answerAudio=new AC();
    const ctx=window.__answerAudio;
    if(ctx.state==='suspended')ctx.resume();
    const now=ctx.currentTime;
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);

    if(kind==='correct'){
      osc.type='sine';
      osc.frequency.setValueAtTime(660,now);
      osc.frequency.exponentialRampToValueAtTime(990,now+0.13);
      gain.gain.setValueAtTime(0.0001,now);
      gain.gain.exponentialRampToValueAtTime(0.075,now+0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001,now+0.22);
      osc.start(now); osc.stop(now+0.23);
    }else{
      osc.type='triangle';
      osc.frequency.setValueAtTime(230,now);
      osc.frequency.exponentialRampToValueAtTime(120,now+0.18);
      gain.gain.setValueAtTime(0.0001,now);
      gain.gain.exponentialRampToValueAtTime(0.085,now+0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001,now+0.24);
      osc.start(now); osc.stop(now+0.25);
    }
  }catch(_){}
}

function flashAnswer(kind){
  const box=document.querySelector('.mission');
  if(!box)return;
  box.classList.remove('answer-correct-flash','answer-wrong-flash');
  void box.offsetWidth;
  box.classList.add(kind==='correct'?'answer-correct-flash':'answer-wrong-flash');
  setTimeout(()=>box.classList.remove('answer-correct-flash','answer-wrong-flash'),520);
}

function pickFreshFromPool(pool, usedIds){
  if(!pool.length)return null;
  const fresh=pool.filter(q=>!usedIds.includes(q.id));
  return fresh.length?fresh[0]:pool[0];
}

function render(){
 const q=currentQ();
 const cat=categoryDefinitionForQuestion(q);
 const total=state.challengeMode?(state.challengePool?.length||1):state.nctbMode?nctbPool().length:state.categoryMode?categoryLevelCount():levelCount();
 const current=state.challengeMode?Math.min(total,(state.challengeIndex||0)+1):state.nctbMode?Math.min(total,(state.nctbCursor||0)+1):state.categoryMode?Math.min(total,(state.categoryCursor||0)+1):Math.min(total,state.level);
 const diff=state.challengeMode?state.difficulty:state.categoryMode?state.difficulty:difficultyForLevel(state.level);
 document.getElementById('level').textContent=state.challengeMode?`CHALLENGE ${current} / ${total}`:state.nctbMode?`NCTB ${current} / ${total}`:state.categoryMode?`${state.language==='bn'?'লেভেল':'LEVEL'} ${current} / ${total}`:`${current} / ${total}`;
 document.getElementById('era').textContent=state.nctbMode?`${state.nctbClass} • ${state.nctbSubject}`:state.challengeMode?(cat?.label||q.subCategory):cat.label;
 document.getElementById('xp').textContent=state.xp;
 document.getElementById('retryCount').textContent=state.challengeMode?`${state.challengeStats.correct}✓ ${state.challengeStats.wrong}✕`:`${state.retryCount} / 3`;
 document.getElementById('discovery').textContent=`${state.completed.length} / ${TOTAL_LEVELS}`;
 document.getElementById('bar').style.width=(current/Math.max(1,total)*100)+'%';
 document.getElementById('phase').textContent=state.nctbMode?`NCTB 2026 • CLASS ${state.nctbClass} • ${String(state.nctbSubject).toUpperCase()}`:state.challengeMode?`CHALLENGE MODE • ${state.challengeDuration} MIN`:state.categoryMode?`${cat.label.toUpperCase()} • ${q.subCategory.toUpperCase()}`:eraFor(state.level)[0].toUpperCase();
 document.getElementById('difficulty').textContent=state.challengeMode?`${state.difficulty==='All'?'ALL':state.difficulty}`:state.nctbMode?'BOARD PRACTICE':state.categoryMode?`${state.difficulty==='All'?'ALL':state.difficulty}`:diff;
 document.getElementById('missionTag').textContent=state.challengeMode?`CHALLENGE • ${q.subCategory.toUpperCase()}`:state.nctbMode?`NCTB • ${q.subCategory.toUpperCase()}`:state.categoryMode?`CATEGORY • ${q.subCategory.toUpperCase()}`:`LEVEL ${current} • ${q.subCategory.toUpperCase()}`;
 const modeTag=document.getElementById('modeTag');if(modeTag)modeTag.textContent=state.challengeMode?'⚡ CHALLENGE MODE':state.nctbMode?'📚 NCTB 2026':state.categoryMode?`CATEGORY LEVEL • ${current}`:'RANDOM JOURNEY';
 const goal=document.getElementById('goal');
 goal.innerHTML=state.language==='en'?`<span class="q-en">${escapeHTML(q.question)}</span>`:`<span class="q-bn">${escapeHTML(bnMissionQuestion(q))}</span>`;
 const opts=document.getElementById('options');
 opts.innerHTML=q.options.map((x,i)=>`<button class="option" data-i="${i}"><span class="num">${String.fromCharCode(65+i)}</span><strong>${escapeHTML(state.language==='bn'?bnOption(x):String(x))}</strong>${state.challengeMode?'':'<small></small>'}</button>`).join('');
 opts.querySelectorAll('.option').forEach(b=>b.onclick=()=>choose(Number(b.dataset.i)));
 resetQuestionUI();
 setMessage(state.challengeMode?(state.language==='bn'?`সময়: ${formatTimer(Math.max(0,state.challengeDuration*60-Math.floor((Date.now()-state.challengeStartedAt)/1000)))} • প্রশ্ন শেষ না হওয়া পর্যন্ত এগোবে।`:`Time: ${formatTimer(Math.max(0,state.challengeDuration*60-Math.floor((Date.now()-state.challengeStartedAt)/1000)))} • Questions continue until time is up.`):state.nctbMode?(state.language==='bn'?`${q.subCategory} • ${current} / ${total} • প্রতি অধ্যায়ে 40টি আলাদা checkpoint।`:`${q.subCategory} • ${current} / ${total} • 40 chapter checkpoints.`):state.categoryMode?(state.language==='bn'?`${cat.label} → ${q.subCategory} • ${current} / ${total} • Category progress আলাদা করে save হয়।`:`${cat.label} → ${q.subCategory} • ${current} / ${total} • Category progress is saved separately.`):(isCompleted(state.level)?'✓ Discovered already — replay anytime from Level Archive.':''),state.challengeMode?'':'good');
 hideFabricator();document.getElementById('nextLevel').classList.add('hidden-next');document.getElementById('nextLevel').classList.remove('next-level-show');
 document.getElementById('exitCategory').classList.toggle('hidden-ui',!(state.categoryMode||state.nctbMode||state.challengeMode));document.getElementById('categoryMapBtn').classList.toggle('hidden-ui',!state.categoryMode);document.getElementById('challengeTimer').classList.toggle('hidden-ui',!state.challengeMode);
 renderMaterials();renderScientists();renderLevelMap();
}
function choose(index){
 if(pendingLevelUp)return;
 const q=currentQ();
 const correct=index===q.answerIndex;

 if(state.challengeMode){
   state.challengeStats.total++;
   if(correct){
     state.challengeStats.correct++;
     state.xp+=10;
     playAnswerSound('correct');
     flashAnswer('correct');
     showSuccessFabricator(q);
     setMessage(state.language==='bn'?'✓ সঠিক!':'✓ Correct!','good');
   }else{
     state.challengeStats.wrong++;
     playAnswerSound('wrong');
     flashAnswer('wrong');
     setMessage(state.language==='bn'?'✕ ভুল':'✕ Wrong','bad');
   }
   state.challengeSeenIds=Array.isArray(state.challengeSeenIds)?state.challengeSeenIds:[];
   if(!state.challengeSeenIds.includes(q.id))state.challengeSeenIds.push(q.id);
   state.challengeIndex++;
   save();
   if(state.challengeIndex>=state.challengePool.length){finishChallenge('pool');return}
   setTimeout(()=>render(),260);return;
 }

 if(state.nctbMode){
   if(!correct){
     playAnswerSound('wrong');
     flashAnswer('wrong');
     setMessage(state.language==='bn'?'✕ ভুল উত্তর। আবার চেষ্টা করুন।':'✕ Incorrect. Try again.','bad');
     return;
   }
   playAnswerSound('correct');
   flashAnswer('correct');
   state.xp+=15;state.nctbCursor++;rememberMission(q.id);save();
   showSuccessFabricator(q);
   setMessage(state.language==='bn'?'✓ অধ্যায় checkpoint সম্পন্ন।':'✓ Chapter checkpoint complete.','good');
   if(state.nctbCursor>=nctbPool().length){state.nctbMode=false;state.nctbCursor=0;setTimeout(()=>render(),700);return}
   setTimeout(()=>render(),700);return;
 }

 if(!correct){
   state.retryCount++;
   playAnswerSound('wrong');
   flashAnswer('wrong');

   if(state.retryCount>=3){
     const oldLevel=state.categoryMode ? (state.categoryCursor+1) : state.level;
     const penalty=5;

     if(state.categoryMode){
       state.categoryCursor=Math.max(0,state.categoryCursor-penalty);
     }else{
       state.level=Math.max(1,state.level-penalty);
     }

     state.retryCount=0;
     document.querySelectorAll('.option').forEach(b=>b.disabled=true);

     const newLevel=state.categoryMode ? (state.categoryCursor+1) : state.level;
     save();

     setMessage(
       state.language==='bn'
         ? `✕ ৩টি ভুল হয়েছে। Level ${oldLevel} → Level ${newLevel} (৫ Level penalty)।`
         : `✕ 3 mistakes. Level ${oldLevel} → Level ${newLevel} (5-level penalty).`,
       'bad'
     );

     setTimeout(()=>render(),1100);
     return;
   }

   save();
   setMessage(
     state.language==='bn'
       ? `✕ সঠিক নয় — ${state.retryCount}/3 ভুল। HINT ব্যবহার করতে পারো।`
       : `✕ Not this time — ${state.retryCount}/3 mistakes. Use HINT if needed.`,
     'bad'
   );
   return;
 }

 pendingLevelUp=true;
 state.retryCount=0;
 rememberMission(q.id);
 playAnswerSound('correct');
 flashAnswer('correct');
 document.querySelectorAll('.option').forEach(b=>b.disabled=true);
 if(state.categoryMode){const p=categoryProgress();if(!p.completed.includes(state.categoryCursor+1))p.completed.push(state.categoryCursor+1);p.unlocked=Math.max(p.unlocked,Math.min(categoryPool().length,state.categoryCursor+2));state.xp+=50;state.materials.push(q.artifact);save();setMessage(state.language==='bn'?`✓ সঠিক! ${displayText(q.artifact)} তৈরি হয়েছে।`:`✓ Correct! ${q.artifact} fabricated.`,'good');showSuccessFabricator(q);setTimeout(()=>document.getElementById('nextLevel').classList.remove('hidden-next'),950);return}
 if(!isCompleted(state.level)){markCompleted(state.level);state.maxUnlocked=Math.max(state.maxUnlocked,Math.min(TOTAL_LEVELS,state.level+1));state.xp+=100;state.materials.push(q.artifact)}save();setMessage(state.language==='bn'?`✓ সঠিক! ${displayText(q.artifact)} fabricated হয়েছে।`:`✓ Correct! ${q.artifact} fabricated.`,'good');showSuccessFabricator(q);setTimeout(()=>document.getElementById('nextLevel').classList.remove('hidden-next'),950)
}
function advanceLevel(){if(!pendingLevelUp)return;pendingLevelUp=false;if(state.categoryMode){const total=categoryLevelCount();if(state.categoryCursor+1<total)state.categoryCursor++;state.retryCount=0;save();render();return}if(state.level<TOTAL_LEVELS)state.level++;state.retryCount=0;save();render();if(state.level>1&&((state.level-1)%5===0))showReward(state.level-1)}
function showReward(level){const s=scientistsBase.find(x=>x[0]===level);if(!s||state.rewarded.includes(level))return;state.rewarded.push(level);save();document.getElementById('awardLevel').textContent=`LEVEL ${level} • SCIENTIST / DISCOVERY AWARD`;document.getElementById('scientistName').textContent=s[1];document.getElementById('scientistField').textContent=level===5000?'Genesis Gate':'Milestone Scientist';document.getElementById('quoteEn').textContent=s[2];document.getElementById('quoteBn').textContent=s[3];document.getElementById('modal').classList.remove('hidden')}

function renderChallengeUI(){
 const box=document.getElementById('challengeSetup');if(!box)return;
 document.getElementById('challengeDuration').value=state.challengeDuration;
 document.querySelectorAll('#challengeDurations button').forEach(b=>b.classList.toggle('active',Number(b.dataset.minutes)===Number(state.challengeDuration)));
 const info=document.getElementById('challengeSelectionInfo');if(info)info.textContent=`${state.categorySubs.length} sub-categories • ${categoryLevelCount()} available missions • ${state.challengeDuration} min`;
}
function renderNCTBUI(){
 const cls=document.getElementById('nctbClass'),sub=document.getElementById('nctbSubject'),ch=document.getElementById('nctbChapters');if(!cls||!sub||!ch)return;
 cls.value=state.nctbClass;
 const subjects=Object.keys(NCTB_2026[state.nctbClass]||{});sub.innerHTML=subjects.map(x=>`<option value="${escapeHTML(x)}">${escapeHTML(x)}</option>`).join('');if(!subjects.includes(state.nctbSubject))state.nctbSubject=subjects[0]||'';sub.value=state.nctbSubject;
 const chapters=nctbChapters(state.nctbClass,state.nctbSubject);ch.innerHTML=chapters.map(x=>`<label class="chapter-check"><input type="checkbox" data-chapter="${escapeHTML(x)}" ${state.nctbChapters.includes(x)?'checked':''}><span>✓</span><b>${escapeHTML(x)}</b><small>40 ${state.language==='bn'?'প্রশ্ন':'questions'}</small></label>`).join('');
 ch.querySelectorAll('input').forEach(x=>x.onchange=()=>{state.nctbChapters=[...ch.querySelectorAll('input:checked')].map(a=>a.dataset.chapter);const i=document.getElementById('nctbInfo');if(i)i.textContent=`${state.nctbChapters.length} chapter(s) • ${state.nctbChapters.length*40} checkpoints`;});
}
function openChallengeSetup(){state.challengeMode=false;renderCategoryUI();renderChallengeUI();document.getElementById('challengeSetup').classList.remove('hidden-ui')}
function closeChallengeSetup(){document.getElementById('challengeSetup').classList.add('hidden-ui')}

function renderCategoryUI(){const list=document.getElementById('categoryList');if(!list)return;list.innerHTML=CATEGORY_DEFS.map(d=>`<button class="category-card ${state.categoryKey===d.key?'selected':''}" data-cat="${d.key}"><span>${d.icon}</span><strong>${d.label}</strong><small>${d.subs.length} sub-categories</small></button>`).join('');list.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>selectCategory(b.dataset.cat));const d=categoryDefinition(state.categoryKey);const area=document.getElementById('subcategoryArea'),subList=document.getElementById('subcategoryList');if(!d){area.classList.add('hidden-ui');return}area.classList.remove('hidden-ui');subList.innerHTML=d.subs.map(([value,label])=>{const count=MISSION_BANK.filter(m=>m.categoryKey===d.key&&m.subCategory===value&&(state.difficulty==='All'||m.difficulty===state.difficulty)).length;return `<label class="subcat-check ${count?'':'disabled'}"><input type="checkbox" data-sub="${escapeHTML(value)}" ${state.categorySubs.includes(value)?'checked':''} ${count?'':'disabled'}><span class="checkmark">✓</span><span class="subcat-copy"><strong>${escapeHTML(label)}</strong><small>${count} ${state.language==='bn'?'মিশন':'missions'}</small></span></label>`}).join('')+`<div class="subcat-actions"><button id="selectAllSubs" class="secondary-btn">SELECT ALL</button><button id="clearSubs" class="secondary-btn">CLEAR</button><button id="startCategory" class="start-category-btn">START CATEGORY</button></div><div id="selectionInfo" class="selection-info"></div>`;subList.querySelectorAll('input[data-sub]').forEach(x=>x.onchange=()=>refreshSelection(d));document.getElementById('selectAllSubs').onclick=()=>{subList.querySelectorAll('input[data-sub]:not(:disabled)').forEach(x=>x.checked=true);refreshSelection(d)};document.getElementById('clearSubs').onclick=()=>{subList.querySelectorAll('input[data-sub]').forEach(x=>x.checked=false);refreshSelection(d)};document.getElementById('startCategory').onclick=()=>startCategory(d.key,state.categorySubs);refreshSelection(d)}
function selectCategory(key){state.categoryKey=key;state.categorySubs=[];state.categoryCursor=0;renderCategoryUI()}
function refreshSelection(d){const subList=document.getElementById('subcategoryList');state.categorySubs=[...subList.querySelectorAll('input[data-sub]:checked')].map(x=>x.dataset.sub);const count=categoryLevelCount();const info=document.getElementById('selectionInfo');if(info)info.textContent=`${state.categorySubs.length} selected • ${count} category levels • minimum 83 per sub-category`}
function startCategory(key,subs){const selected=[...new Set(subs)];if(!selected.length){setMessage('Select at least one sub-category.','bad');return}state.categoryMode=true;state.categoryKey=key;state.categorySubs=selected;state.categoryCursor=0;state.retryCount=0;const p=categoryProgress();p.unlocked=Math.max(1,Math.min(categoryPool().length,p.unlocked||1));pendingLevelUp=false;save();document.getElementById('playHub').classList.add('hidden');render()}
function exitCategory(){clearInterval(window.__challengeTimer);state.categoryMode=false;state.challengeMode=false;state.nctbMode=false;state.categoryKey='';state.categorySubs=[];state.categoryCursor=0;state.nctbCursor=0;state.retryCount=0;pendingLevelUp=false;save();render()}
function openPlayHub(){document.getElementById('playHub').classList.remove('hidden');renderCategoryUI();renderChallengeUI();renderNCTBUI();updateSetupLabels()}
function closePlayHub(){document.getElementById('playHub').classList.add('hidden')}
function openArchive(){renderLevelMap();document.getElementById('levelMapModal').classList.remove('hidden')}
function updateSetupLabels(){const lang=state.language;document.querySelectorAll('[data-bn]').forEach(el=>{el.textContent=lang==='bn'?el.dataset.bn:el.dataset.en})}
function selectLanguage(lang){state.language=lang;document.querySelectorAll('.lang-card,.lang-card-mini').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));document.getElementById('setupContinue').disabled=false;updateSetupLabels();renderCategoryUI();render()}
function selectDifficulty(diff){state.difficulty=diff;const total=MISSION_BANK.filter(m=>diff==='All'||m.difficulty===diff).length;state.level=Math.max(1,Math.min(Number(state.level)||1,total));state.maxUnlocked=Math.max(1,Math.min(Number(state.maxUnlocked)||1,total));document.querySelectorAll('.difficulty-card,.diff-mini button').forEach(b=>b.classList.toggle('active',b.dataset.diff===diff));renderCategoryUI();render()}
function finishSetup(){state.setupDone=true;save();document.getElementById('setupScreen').classList.add('hidden');render()}
function openSetup(){document.getElementById('setupScreen').classList.remove('hidden');document.querySelectorAll('.lang-card').forEach(b=>b.classList.toggle('active',b.dataset.lang===state.language));document.querySelectorAll('.difficulty-card').forEach(b=>b.classList.toggle('active',b.dataset.diff===state.difficulty));updateSetupLabels()}
function resetSave(){if(confirm(state.language==='bn'?'সব progress reset করতে চান?':'Reset all local progress?')){localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(SETUP_KEY);localStorage.removeItem('elementGameSave_v6000');localStorage.removeItem('elementGameSave_v5000');localStorage.removeItem('elementGameSave');location.reload()}}

document.getElementById('hintBtn').onclick=showHint;document.getElementById('nextLevel').onclick=advanceLevel;document.getElementById('levelMapBtn').onclick=openArchive;document.getElementById('categoryMapBtn').onclick=openArchive;document.getElementById('closeMap').onclick=()=>document.getElementById('levelMapModal').classList.add('hidden');document.getElementById('reset').onclick=resetSave;document.getElementById('playHubBtn').onclick=openPlayHub;document.getElementById('closePlayHub').onclick=closePlayHub;document.getElementById('exitCategory').onclick=exitCategory;document.getElementById('continue').onclick=()=>document.getElementById('modal').classList.add('hidden');document.getElementById('setupContinue').onclick=finishSetup;document.getElementById('setupSettingsBtn').onclick=openSetup;document.querySelectorAll('.lang-card,.lang-card-mini').forEach(b=>b.onclick=()=>selectLanguage(b.dataset.lang));document.querySelectorAll('.difficulty-card,.diff-mini button').forEach(b=>b.onclick=()=>selectDifficulty(b.dataset.diff));document.getElementById('randomPlayBtn').onclick=()=>{state.categoryMode=false;state.categoryKey='';state.categorySubs=[];state.categoryCursor=0;pendingLevelUp=false;save();closePlayHub();render()};
document.getElementById('challengeOpenBtn')?.addEventListener('click',openChallengeSetup);document.getElementById('closeChallengeSetup')?.addEventListener('click',closeChallengeSetup);document.getElementById('challengeStartBtn')?.addEventListener('click',startChallenge);document.querySelectorAll('#challengeDurations button').forEach(b=>b.onclick=()=>{state.challengeDuration=Number(b.dataset.minutes);renderChallengeUI()});document.getElementById('challengeDuration')?.addEventListener('change',e=>{state.challengeDuration=Math.max(3,Math.min(60,Number(e.target.value)||5));renderChallengeUI()});document.getElementById('challengeResultClose')?.addEventListener('click',()=>{document.getElementById('challengeResultModal').classList.add('hidden');render()});document.getElementById('nctbClass')?.addEventListener('change',e=>{state.nctbClass=e.target.value;state.nctbChapters=[];renderNCTBUI()});document.getElementById('nctbSubject')?.addEventListener('change',e=>{state.nctbSubject=e.target.value;state.nctbChapters=[];renderNCTBUI()});document.getElementById('nctbStartBtn')?.addEventListener('click',startNCTB);document.getElementById('nctbSelectAll')?.addEventListener('click',()=>{const ch=document.getElementById('nctbChapters');ch.querySelectorAll('input').forEach(x=>x.checked=true);state.nctbChapters=[...ch.querySelectorAll('input')].map(x=>x.dataset.chapter);renderNCTBUI()});document.getElementById('nctbClear')?.addEventListener('click',()=>{state.nctbChapters=[];renderNCTBUI()});

document.getElementById('challengeTopBtn')?.addEventListener('click',()=>{openPlayHub();openChallengeSetup()});document.getElementById('nctbOpenBtn')?.addEventListener('click',()=>{document.getElementById('nctbSetup').classList.remove('hidden-ui');renderNCTBUI()});document.getElementById('closeNctbSetup')?.addEventListener('click',()=>document.getElementById('nctbSetup').classList.add('hidden-ui'));

renderCategoryUI();render();save();
if(!state.setupDone)openSetup();
