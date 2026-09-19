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

// V13 EXPANDED UNIQUE ANIME QUESTION SEEDS — replaces tiny 3/2-question pools.
const V13_ANIME_EXPANSION=[
["Anime • One Piece", "Who is the captain of the Straw Hat Pirates?", "Monkey D. Luffy", ["Roronoa Zoro", "Trafalgar Law", "Portgas D. Ace"], "His dream is to become the Pirate King.", "Luffy"],
["Anime • One Piece", "What is the name of Luffy’s signature straw hat?", "Straw Hat", ["Red Crown", "Sun Hat", "Pirate Cap"], "It gives the crew their famous nickname.", "Straw Hat"],
["Anime • One Piece", "Which swordsman is a core member of the Straw Hat crew?", "Roronoa Zoro", ["Sanji", "Usopp", "Brook"], "He fights mainly with swords and dreams of becoming the greatest swordsman.", "Zoro"],
["Anime • One Piece", "Which Straw Hat member is the crew’s navigator?", "Nami", ["Robin", "Vivi", "Perona"], "She is the crew's navigator and loves treasure.", "Nami"],
["Anime • One Piece", "Which Straw Hat member is the crew’s cook?", "Sanji", ["Zoro", "Franky", "Usopp"], "He is the crew's chef and uses powerful kicks in combat.", "Sanji"],
["Anime • One Piece", "Who is the archaeologist of the Straw Hat Pirates?", "Nico Robin", ["Nami", "Boa Hancock", "Carrot"], "She can read ancient scripts and studies the history of the world.", "Robin"],
["Anime • One Piece", "Who is the sniper of the Straw Hat Pirates?", "Usopp", ["Franky", "Brook", "Chopper"], "He is known for long-range attacks and storytelling.", "Usopp"],
["Anime • One Piece", "Who is the doctor of the Straw Hat Pirates?", "Tony Tony Chopper", ["Law", "Marco", "Hogback"], "He is a reindeer who became the crew's doctor.", "Chopper"],
["Anime • One Piece", "Who is the shipwright of the Straw Hat Pirates?", "Franky", ["Iceburg", "Usopp", "Jinbe"], "He builds and repairs ships and is a cyborg.", "Franky"],
["Anime • One Piece", "Who is the musician of the Straw Hat Pirates?", "Brook", ["Sanji", "Franky", "Jinbe"], "He is a living skeleton who plays music.", "Brook"],
["Anime • One Piece", "What is the name of the Straw Hat crew’s first major ship?", "Going Merry", ["Thousand Sunny", "Red Force", "Oro Jackson"], "It was the crew's beloved ship before the Thousand Sunny.", "Going Merry"],
["Anime • One Piece", "What is the name of the Straw Hat crew’s current ship?", "Thousand Sunny", ["Going Merry", "Moby Dick", "Polar Tang"], "It was built by Franky and the Water 7 shipwrights.", "Thousand Sunny"],
["Anime • One Piece", "Who was the first captain of the Roger Pirates?", "Gol D. Roger", ["Shanks", "Whitebeard", "Rayleigh"], "He became known as the Pirate King.", "Roger"],
["Anime • One Piece", "What title is associated with Gol D. Roger?", "Pirate King", ["Fleet Admiral", "Warlord", "Dark King"], "He reached the end of the Grand Line and gained this title.", "Pirate King"],
["Anime • One Piece", "What is the name of the sea route where the greatest pirate adventure unfolds?", "Grand Line", ["East Blue", "North Blue", "Red Line"], "It is the dangerous route crossing the world's seas.", "Grand Line"],
["Anime • One Piece", "What is the name of the huge landmass that circles the One Piece world?", "Red Line", ["Grand Line", "Calm Belt", "Sky Island"], "It is a massive continent-like line around the planet.", "Red Line"],
["Anime • One Piece", "What special power system allows characters to sense or dominate with willpower?", "Haki", ["Nen", "Chakra", "Reiatsu"], "It is a spiritual power used by many strong fighters.", "Haki"],
["Anime • One Piece", "Which type of Haki allows a user to sense presence and intent?", "Observation Haki", ["Armament Haki", "Conqueror’s Haki", "Fish-Man Karate"], "It enhances perception and awareness.", "Observation Haki"],
["Anime • One Piece", "Which type of Haki hardens the body or weapons?", "Armament Haki", ["Observation Haki", "Conqueror’s Haki", "Six Powers"], "It can be used to harden the body or weapons.", "Armament Haki"],
["Anime • One Piece", "Which rare Haki is associated with overwhelming the will of others?", "Conqueror’s Haki", ["Observation Haki", "Armament Haki", "Rokushiki"], "Only a small fraction of people are born with it.", "Conqueror’s Haki"],
["Anime • One Piece", "What are Devil Fruits?", "Fruits that grant supernatural abilities", ["Magic swords", "Sea-stone weapons", "Government licenses"], "They give unusual powers but traditionally weaken users in seawater.", "Devil Fruit"],
["Anime • One Piece", "What weakness is commonly associated with Devil Fruit users?", "They cannot swim normally", ["They lose their memory", "They cannot use weapons", "They cannot eat meat"], "The sea is especially dangerous to Devil Fruit users.", "Sea weakness"],
["Anime • One Piece", "Which organization is the main military force of the World Government?", "Marines", ["Revolutionary Army", "Baroque Works", "Cross Guild"], "They enforce World Government authority on the seas.", "Marines"],
["Anime • One Piece", "Who is the red-haired pirate captain known as Shanks?", "Red-Haired Shanks", ["Blackbeard", "Buggy", "Mihawk"], "He is a famous Yonko and an important figure in Luffy's story.", "Shanks"],
["Anime • One Piece", "Who is known as the world’s greatest swordsman?", "Dracule Mihawk", ["Zoro", "Shanks", "Vista"], "He is the swordsman Zoro aims to surpass.", "Mihawk"],
["Anime • One Piece", "What is Zoro’s long-term ambition?", "Become the world’s greatest swordsman", ["Become Pirate King", "Find the All Blue", "Become a Marine"], "It connects directly to his promise to Kuina.", "Zoro’s dream"],
["Anime • One Piece", "What is Sanji’s dream concerning the sea?", "Find the All Blue", ["Find Laugh Tale", "Become Fleet Admiral", "Find the One Piece alone"], "He searches for a legendary sea said to contain fish from all oceans.", "All Blue"],
["Anime • One Piece", "What is Nami’s major personal goal?", "Draw a map of the world", ["Become Pirate King", "Find the All Blue", "Become a Marine"], "Her dream is connected to her skill as a navigator.", "Nami’s dream"],
["Anime • One Piece", "What is Robin trying to uncover through the Poneglyphs?", "The true history", ["The location of the All Blue", "A Devil Fruit recipe", "Marine ranks"], "Her archaeological research focuses on the world's hidden past.", "True History"],
["Anime • One Piece", "What are Poneglyphs?", "Ancient stone inscriptions", ["Devil Fruits", "Living ships", "Marine flags"], "They preserve information from the distant past.", "Poneglyph"],
["Anime • One Piece", "What is Laugh Tale?", "The final island associated with the One Piece", ["A Marine base", "Zoro’s village", "A Devil Fruit"], "Roger reached the island at the end of his journey.", "Laugh Tale"],
["Anime • One Piece", "What is the treasure called One Piece?", "The legendary treasure associated with the Pirate King’s journey", ["A Devil Fruit", "A sword", "A Marine medal"], "Its exact nature is central to the series mystery.", "One Piece treasure"],
["Anime • One Piece", "Who is Luffy’s older brother who was a commander of Whitebeard’s crew?", "Portgas D. Ace", ["Sabo", "Marco", "Coby"], "He was the son of Gol D. Roger and brother of Luffy and Sabo.", "Ace"],
["Anime • One Piece", "Who is the revolutionary associated with Luffy as his sworn brother?", "Sabo", ["Ace", "Law", "Smoker"], "He later became a major officer of the Revolutionary Army.", "Sabo"],
["Anime • One Piece", "Who is Luffy’s grandfather?", "Monkey D. Garp", ["Sengoku", "Dragon", "Rayleigh"], "He is a legendary Marine hero.", "Garp"],
["Anime • One Piece", "Who is Luffy’s father?", "Monkey D. Dragon", ["Garp", "Shanks", "Sabo"], "He is the leader of the Revolutionary Army.", "Dragon"],
["Anime • One Piece", "What is the name of the government organization led by the Five Elders?", "World Government", ["Whitebeard Pirates", "Cross Guild", "Baroque Works"], "It is the dominant political authority in the One Piece world.", "World Government"],
["Anime • One Piece", "What are the Five Elders commonly called?", "Gorosei", ["Yonko", "Shichibukai", "Cipher Pol"], "They are the highest-ranking political figures shown in the World Government.", "Gorosei"],
["Anime • One Piece", "What is the name of the giant elephant carrying Zou?", "Zunesha", ["Laboon", "Surume", "Sea King"], "The Mink homeland is located on its back.", "Zunesha"],
["Anime • One Piece", "What is the name of the island-city where Water 7 is located?", "Water 7", ["Dressrosa", "Wano", "Whole Cake Island"], "It is a major shipbuilding city.", "Water 7"],
["Anime • One Piece", "Which crew member is especially famous for his cyborg modifications?", "Franky", ["Usopp", "Brook", "Chopper"], "He rebuilt much of his body with mechanical parts.", "Franky"],
["Anime • One Piece", "Which Straw Hat uses the Three-Sword Style?", "Roronoa Zoro", ["Sanji", "Brook", "Franky"], "He fights with three swords, including one held in his mouth.", "Three-Sword Style"],
["Anime • One Piece", "What is Luffy’s Devil Fruit power traditionally known as?", "Gum-Gum Fruit", ["Flame-Flame Fruit", "Sand-Sand Fruit", "Dark-Dark Fruit"], "Its well-known historical name is tied to Luffy's rubber-like body.", "Gum-Gum Fruit"],
["Anime • One Piece", "Which pirate is associated with the Flame-Flame Fruit after Ace?", "Sabo", ["Zoro", "Usopp", "Smoker"], "He gained Ace's former Devil Fruit power.", "Sabo"],
["Anime • One Piece", "What is the name of the powerful sword technique associated with Zoro’s three-sword style?", "Santoryu", ["Rokushiki", "Geppo", "Diable Jambe"], "The Japanese term literally refers to three swords.", "Santoryu"],
["Anime • One Piece", "What is the nickname of Trafalgar Law?", "Surgeon of Death", ["Dark King", "Pirate Hunter", "Red-Haired"], "He is a doctor and pirate captain.", "Law"],
["Anime • One Piece", "What is Trafalgar Law’s crew called?", "Heart Pirates", ["Kid Pirates", "Fire Tank Pirates", "Beasts Pirates"], "Their Jolly Roger is based around a heart motif.", "Heart Pirates"],
["Anime • One Piece", "Who is the captain of the Heart Pirates?", "Trafalgar D. Water Law", ["Eustass Kid", "Marco", "Killer"], "He is a pirate captain and surgeon.", "Law"],
["Anime • One Piece", "Who is the captain of the Kid Pirates?", "Eustass Kid", ["Law", "Shanks", "Drake"], "He is a rival pirate captain with a magnetic Devil Fruit power.", "Kid"],
["Anime • One Piece", "What is the nickname of Eustass Kid?", "Captain Kid", ["Pirate Hunter", "Surgeon of Death", "Black Leg"], "His pirate identity is shortened to this nickname.", "Kid"],
["Anime • One Piece", "What is the name of the giant prison where many major criminals are held?", "Impel Down", ["Enies Lobby", "Marineford", "Punk Hazard"], "It is the World Government's underwater prison.", "Impel Down"],
["Anime • One Piece", "What is Marineford?", "A major Marine headquarters and battlefield", ["A pirate island", "A sky island", "A Wano province"], "It became the site of a major war involving Whitebeard and the Marines.", "Marineford"],
["Anime • One Piece", "Which pirate was known as the strongest man in the world?", "Edward Newgate", ["Kaido", "Shanks", "Buggy"], "His epithet was Whitebeard.", "Whitebeard"],
["Anime • One Piece", "What was Edward Newgate’s famous epithet?", "Whitebeard", ["Blackbeard", "Red-Haired", "Straw Hat"], "He was one of the legendary Yonko.", "Whitebeard"],
["Anime • One Piece", "Who is known as Blackbeard?", "Marshall D. Teach", ["Edward Newgate", "Shanks", "Buggy"], "He is a major pirate antagonist who uses multiple Devil Fruit powers.", "Blackbeard"],
["Anime • One Piece", "What is the name of the pirate crew led by Blackbeard?", "Blackbeard Pirates", ["Whitebeard Pirates", "Heart Pirates", "Straw Hat Pirates"], "Marshall D. Teach commands this crew.", "Blackbeard Pirates"],
["Anime • One Piece", "Which character is called the Black Leg?", "Sanji", ["Zoro", "Law", "Usopp"], "His fighting style relies heavily on powerful kicks.", "Black Leg"],
["Anime • One Piece", "Which Straw Hat is a reindeer?", "Tony Tony Chopper", ["Brook", "Franky", "Jinbe"], "He is a reindeer who gained human-like abilities through a Devil Fruit.", "Chopper"],
["Anime • One Piece", "Which former Warlord is a fish-man and later joins Luffy’s crew?", "Jinbe", ["Crocodile", "Doflamingo", "Moria"], "He is a master of Fish-Man Karate.", "Jinbe"],
["Anime • One Piece", "What fighting art is strongly associated with Jinbe?", "Fish-Man Karate", ["Three-Sword Style", "Black Leg", "Rokushiki"], "It uses water and martial-arts techniques.", "Fish-Man Karate"],
["Anime • One Piece", "What is the name of the ancient weapons category in One Piece?", "Ancient Weapons", ["Sacred Treasures", "Sea Weapons", "World Swords"], "Pluton, Poseidon and Uranus are associated with this category.", "Ancient Weapons"],
["Anime • One Piece", "Which ancient weapon is connected with Shirahoshi?", "Poseidon", ["Pluton", "Uranus", "Enma"], "Its ability is connected with Sea Kings.", "Poseidon"],
["Anime • One Piece", "Who is Shirahoshi?", "The mermaid princess of Fish-Man Island", ["A Marine admiral", "A Yonko", "A Straw Hat"], "She is the daughter of Neptune.", "Shirahoshi"],
["Anime • One Piece", "What is the name of the giant creatures controlled by Poseidon?", "Sea Kings", ["Pacifistas", "Zombies", "Homies"], "They are enormous sea creatures that can be commanded by Poseidon.", "Sea Kings"],
["Anime • One Piece", "What is the name of the country associated with samurai and Kaido’s long rule?", "Wano Country", ["Dressrosa", "Water 7", "Alabasta"], "It is a closed country with a strong samurai tradition.", "Wano"],
["Anime • One Piece", "Who is the ruler of Wano before the current era’s major conflict?", "Kozuki Momonosuke", ["Coby", "Koby", "Vivi"], "He is the heir of the Kozuki family and later becomes shogun.", "Momonosuke"],
["Anime • One Piece", "Which character is known as the Pirate Hunter?", "Roronoa Zoro", ["Sanji", "Law", "Smoker"], "This is Zoro's famous epithet.", "Pirate Hunter"],
["Anime • One Piece", "What is the name of the island where Luffy trained during the two-year timeskip?", "Rusukaina", ["Wano", "Zou", "Drum Island"], "It is near Amazon Lily and has dangerous wildlife.", "Rusukaina"],
["Anime • Death Note", "What is the name of the supernatural notebook in Death Note?", "Death Note", ["Black Ledger", "Soul Book", "Judgment Diary"], "Its title is also the series name.", "Death Note"],
["Anime • Death Note", "What is the detective alias used by the genius investigator in Death Note?", "L", ["N", "K", "M"], "It is a single-letter alias.", "L"],
["Anime • Death Note", "Who is the main human protagonist of Death Note?", "Light Yagami", ["L Lawliet", "Near", "Mello"], "He discovers the notebook at the beginning of the story.", "Light"],
["Anime • Death Note", "Who is the Shinigami who accompanies Light?", "Ryuk", ["Rem", "Gelus", "Sidoh"], "He drops the notebook into the human world.", "Ryuk"],
["Anime • Death Note", "What are supernatural beings associated with the Death Note?", "Shinigami", ["Titans", "Devils", "Espers"], "They are death gods in the series world.", "Shinigami"],
["Anime • Death Note", "What is the name of the female idol who becomes the Second Kira?", "Misa Amane", ["Kiyomi Takada", "Naomi Misora", "Sayu Yagami"], "She possesses another Death Note and has Shinigami Eyes.", "Misa"],
["Anime • Death Note", "What is the nickname used for Light’s public identity as the killer?", "Kira", ["L", "N", "X-Kira"], "It comes from the Japanese pronunciation of 'killer'.", "Kira"],
["Anime • Death Note", "What ability do Shinigami Eyes provide?", "Seeing a human’s name and remaining lifespan", ["Reading minds", "Stopping time", "Changing memories"], "The ability reveals information normally hidden from humans.", "Shinigami Eyes"],
["Anime • Death Note", "What must be known to kill someone using the Death Note?", "The person’s name and face", ["Only the address", "Only the age", "Only the blood type"], "The user needs identifying information and can then specify conditions.", "Death Note rule"],
["Anime • Death Note", "Who is the successor to L who leads the SPK?", "Near", ["Mello", "Matt", "Aizawa"], "He is one of the two major successors to L.", "Near"],
["Anime • Death Note", "Who is L’s other major successor and rival to Near?", "Mello", ["Near", "Matsuda", "Watari"], "He pursues Kira independently and uses criminal connections.", "Mello"],
["Anime • Death Note", "What does SPK stand for in Death Note?", "Special Provision for Kira", ["Special Police Kingdom", "Supernatural Power Keepers", "Strategic Police Kira"], "It is an international group formed to investigate Kira.", "SPK"],
["Anime • Death Note", "Who is the second Shinigami strongly connected with Misa?", "Rem", ["Ryuk", "Gelus", "Sidoh"], "Rem becomes protective of Misa.", "Rem"],
["Anime • Death Note", "Which Shinigami sacrifices itself for Misa?", "Gelus", ["Ryuk", "Rem", "Sidoh"], "Gelus dies after using the notebook to save Misa.", "Gelus"],
["Anime • Death Note", "What is Light Yagami’s father’s name?", "Soichiro Yagami", ["Shuichi Aizawa", "Touta Matsuda", "Teru Mikami"], "He is the chief of the Japanese investigation team for much of the story.", "Soichiro"],
["Anime • Death Note", "What is Light’s sister’s name?", "Sayu Yagami", ["Misa Yagami", "Naomi Yagami", "Kiyomi Yagami"], "She is Light's younger sister.", "Sayu"],
["Anime • Death Note", "Who is the police officer and investigator known for being energetic and impulsive?", "Touta Matsuda", ["Watari", "Aizawa", "Ide"], "He is a member of the Japanese task force.", "Matsuda"],
["Anime • Death Note", "Who is L’s trusted assistant and caretaker?", "Watari", ["Mello", "Matsuda", "Near"], "He supports L with logistics and technology.", "Watari"],
["Anime • Death Note", "What is L’s unusual sitting posture often called?", "Squatting", ["Meditation pose", "Cross-legged lotus", "Standing stance"], "L frequently sits with his knees drawn up.", "L"],
["Anime • Death Note", "What food does L famously enjoy?", "Sweets", ["Spicy curry", "Sushi only", "Apples"], "He is frequently shown eating cakes and other sweets.", "L"],
["Anime • Death Note", "What fruit does Ryuk especially enjoy?", "Apples", ["Bananas", "Grapes", "Oranges"], "He repeatedly asks Light for this fruit.", "Ryuk"],
["Anime • Death Note", "What does Ryuk find especially entertaining about humans?", "Human behavior and unpredictability", ["Their sports skills", "Their cooking", "Their technology"], "His main motivation for dropping the notebook is boredom and amusement.", "Ryuk"],
["Anime • Death Note", "What is the name of the company group used by Light after a certain point?", "Yotsuba Group", ["SPK", "Wammy’s House", "Task Force"], "Kira's influence reaches a corporate group in the story.", "Yotsuba"],
["Anime • Death Note", "Who becomes known as X-Kira?", "Teru Mikami", ["Mello", "Matsuda", "Aizawa"], "He becomes a devoted supporter of Kira.", "Mikami"],
["Anime • Death Note", "What profession does Teru Mikami have?", "Prosecutor", ["Detective", "Doctor", "Journalist"], "His legal profession fits his intense sense of judgment.", "Mikami"],
["Anime • Death Note", "Who is Kiyomi Takada?", "A television announcer associated with Light", ["A police detective", "A Shinigami", "A Wammy’s House student"], "She becomes an important public and personal connection for Light.", "Takada"],
["Anime • Death Note", "What is Wammy’s House?", "An orphanage and institution for gifted children", ["A police station", "A Shinigami realm", "A television network"], "It is associated with L and his successors.", "Wammy’s House"],
["Anime • Death Note", "Who founded Wammy’s House?", "Watari", ["L", "Light", "Near"], "Watari created the institution that raised gifted successors.", "Watari"],
["Anime • Death Note", "What is L’s real name?", "L Lawliet", ["Light Yagami", "Near River", "Mello Kheel"], "His full name is revealed later in official material.", "L Lawliet"],
["Anime • Death Note", "What is Near’s real name?", "Nate River", ["Mihael Keehl", "Lawliet", "Teru Mikami"], "Near is the successor associated with this name.", "Nate River"],
["Anime • Death Note", "What is Mello’s real name?", "Mihael Keehl", ["Nate River", "L Lawliet", "Soichiro Yagami"], "Mello is the rival successor associated with this name.", "Mihael Keehl"],
["Anime • Death Note", "What is the name of the Shinigami realm?", "Shinigami Realm", ["Wammy’s House", "Kira Kingdom", "Death Archive"], "It is the world where the death gods live.", "Shinigami Realm"],
["Anime • Death Note", "What happens to a human after their lifespan ends according to the notebook rules?", "They die according to the rules of the Death Note world", ["They become a Shinigami automatically", "They become immortal", "They lose all memories"], "The series establishes supernatural rules around human lifespans and death.", "Death Note rules"],
["Anime • Death Note", "Can a Death Note user normally write a name without knowing the face?", "No", ["Yes, always", "Only on a full moon", "Only with Shinigami Eyes"], "Knowing the face is one of the stated requirements.", "Death Note rule"],
["Anime • Death Note", "What happens when a Shinigami kills a human to extend another human’s life?", "The Shinigami dies", ["The human becomes a Shinigami", "Nothing happens", "The notebook disappears"], "This is a central rule demonstrated by Gelus and Rem.", "Shinigami rule"],
["Anime • Death Note", "What is one major limitation of the Death Note?", "The user must know the target’s name and face", ["It only works on criminals", "It cannot specify time", "It works only once"], "The identification rule prevents arbitrary use without knowledge.", "Death Note limitation"],
["Anime • Death Note", "What is the 13-day rule?", "A false rule inserted into the notebook's rules", ["A rule about Shinigami births", "A rule about L's lifespan", "A rule about Misa's age"], "It becomes important in the investigation and manipulation of the task force.", "13-day rule"],
["Anime • Death Note", "Who investigates Kira with the Japanese task force?", "L and the Japanese police task force", ["Only Near", "Only Mello", "Only the Shinigami"], "The investigation combines L's reasoning with police work.", "Kira investigation"],
["Anime • Death Note", "What is Light’s father’s position for much of the story?", "Chief of the Japanese task force", ["Prime Minister", "School principal", "Shinigami leader"], "Soichiro leads the official investigation team.", "Task Force"],
["Anime • Death Note", "Which character is a skilled investigator and L’s successor candidate?", "Near", ["Misa", "Takada", "Sayu"], "He was raised at Wammy's House.", "Near"],
["Anime • Death Note", "Which character often works with criminal organizations to pursue Kira?", "Mello", ["Near", "Matsuda", "Watari"], "Mello takes a more aggressive and unconventional route.", "Mello"],
["Anime • Death Note", "What is the central conflict of Death Note?", "A supernatural killer versus investigators seeking to identify him", ["Pirates versus Marines", "Humans versus Titans", "Heroes versus aliens"], "The story revolves around Kira's killings and the investigation.", "Kira conflict"],
["Anime • Death Note", "What is Light’s stated goal after obtaining the notebook?", "Create a world without crime under his judgment", ["Become a detective", "Destroy the Shinigami realm", "Become a police chief"], "Light frames Kira's actions as a plan to reshape society.", "Light’s goal"],
["Anime • Death Note", "What is the nickname for Light’s supernatural execution persona?", "Kira", ["L", "Ryuk", "Near"], "The public uses this name for the mysterious killer.", "Kira"],
["Anime • Death Note", "Who owns the Death Note before Ryuk drops it into the human world?", "Ryuk", ["L", "Rem", "Near"], "Ryuk is the Shinigami who deliberately drops his notebook.", "Ryuk"],
["Anime • Death Note", "Why does Ryuk initially drop his notebook?", "He is bored", ["He wants to become human", "He is ordered by L", "He loses a bet"], "Boredom is his stated motivation for creating the human-world experiment.", "Ryuk"],
["Anime • Death Note", "What is the name of Misa’s Shinigami who loves her?", "Rem", ["Ryuk", "Gelus", "Sidoh"], "Rem becomes emotionally attached to Misa's safety.", "Rem"],
["Anime • Death Note", "Who is Naomi Misora?", "A former FBI agent and investigator", ["A Shinigami", "A schoolmate of Light", "A Yotsuba executive"], "She investigates the Kira case after the death of her fiancé.", "Naomi Misora"],
["Anime • Death Note", "Who was Naomi Misora’s fiancé?", "Raye Penber", ["Soichiro Yagami", "Aizawa", "Watari"], "He was an FBI agent assigned to monitor suspects.", "Raye Penber"],
["Anime • Death Note", "What was Raye Penber’s job?", "FBI agent", ["Police chief", "Prosecutor", "Journalist"], "He is assigned to investigate people connected to the Kira case.", "Raye Penber"],
["Anime • Death Note", "What is the name of the notebook’s supernatural owner who likes apples?", "Ryuk", ["Rem", "Gelus", "Sidoh"], "He is the Shinigami who watches Light's experiment.", "Ryuk"],
["Anime • Death Note", "What is the primary purpose of L’s investigation?", "Identify and stop Kira", ["Find One Piece", "Destroy the Shinigami realm", "Join the police"], "L focuses on discovering Kira's identity and preventing further killings.", "L investigation"],
["Anime • Death Note", "What is Light’s relationship to L in the investigation?", "They are allies and rivals in the same investigation", ["They are brothers", "They are both Shinigami", "They never meet"], "Light joins the investigation while secretly being Kira.", "Light and L"],
["Anime • Death Note", "What happens when a human gives up ownership of a Death Note?", "They lose memories associated with that notebook", ["They become immortal", "They gain Shinigami Eyes automatically", "They become a Shinigami"], "Loss of ownership can affect memories under the notebook's rules.", "Ownership rule"],
["Anime • Death Note", "What is the name of the organization created to oppose Kira internationally?", "SPK", ["Yotsuba", "Wammy’s House", "Task Force"], "Near leads this group during the later investigation.", "SPK"],
["Anime • Death Note", "Who is Matt in Death Note?", "A former Wammy’s House student who assists Mello", ["A Shinigami", "Light’s brother", "An FBI director"], "He is associated with Mello during the final part of the story.", "Matt"],
["Anime • Death Note", "What is the role of Shinigami Eyes in the story?", "They reveal names and lifespans", ["They reveal future events", "They erase memories", "They control police"], "Misa's deal with Rem gives her this ability.", "Shinigami Eyes"],
["Anime • Death Note", "What does Misa trade to obtain Shinigami Eyes?", "Half of her remaining lifespan", ["Her notebook permanently", "Her memories forever", "Her human identity"], "The Shinigami Eye deal costs half the user's remaining lifespan.", "Eye deal"],
["Anime • Death Note", "Can Shinigami Eyes reveal a person’s lifespan?", "Yes", ["No", "Only for Shinigami", "Only during daylight"], "That is their defining supernatural function.", "Shinigami Eyes"],
["Anime • Death Note", "What is the significance of the Death Note rules written in the notebook?", "They define how the notebook’s supernatural power works", ["They are school rules", "They are police laws", "They are cooking recipes"], "The rules govern names, faces, timing and ownership.", "Notebook rules"],
["Anime • Death Note", "What genre blend best describes Death Note?", "Psychological thriller and supernatural mystery", ["Sports comedy only", "Historical romance only", "Space opera only"], "The series combines supernatural elements with strategic psychological conflict.", "Death Note genre"],
["Anime • Death Note", "What is the central intellectual contest in Death Note?", "Light’s strategy versus L’s deduction", ["Zoro versus Sanji", "Titans versus humans", "Avengers versus X-Men"], "Much of the tension comes from the two characters trying to outthink each other.", "Mind game"],
["Anime • Death Note", "Which institution produces gifted successors to L?", "Wammy’s House", ["Yotsuba Group", "SPK headquarters", "Japanese task force"], "It is the institution created by Watari.", "Wammy’s House"],
["Anime • Death Note", "Who is the first major investigator to openly challenge Kira’s existence on television?", "L", ["Near", "Mello", "Matsuda"], "He publicly challenges Kira and provokes a response.", "L"]
];
SEED_FACTS.push(...V13_ANIME_EXPANSION);

const V15_ANIME_EXPANSION=[
["Anime • One Piece","What is the main treasure that gives the series its title?","The One Piece",["The All Blue","The Grand Line","The Red Line"],"It is the legendary treasure sought by pirates.","One Piece"],
["Anime • One Piece","What is Luffy’s family name?","Monkey D.",["Gol D.","Portgas D.","Donquixote D."],"His full name begins with Monkey D.","Luffy"],
["Anime • One Piece","What is Zoro’s fighting style famous for?","Three-Sword Style",["Two-Sword Style","Six-Sword Style","Bare-Hand Style"],"He uses a sword in each hand and one in his mouth.","Zoro"],
["Anime • One Piece","What is Nami’s role on the Straw Hat crew?","Navigator",["Doctor","Shipwright","Cook"],"She charts routes and reads weather patterns.","Nami"],
["Anime • One Piece","What is Sanji’s dream related to?","The All Blue",["Laugh Tale","Wano Country","Fish-Man Island"],"He searches for a legendary sea said to contain fish from every ocean.","Sanji"],
["Anime • One Piece","What ability lets Robin sprout copies of body parts?","Hana Hana no Mi",["Gomu Gomu no Mi","Mera Mera no Mi","Ope Ope no Mi"],"Her Devil Fruit allows her to bloom body parts on surfaces.","Robin"],
["Anime • One Piece","What is Chopper’s species?","Reindeer",["Wolf","Fox","Dog"],"He is a reindeer who gained human-like abilities through a Devil Fruit.","Chopper"],
["Anime • One Piece","What makes Franky unusual among the Straw Hats?","He is a cyborg shipwright",["He is a Shinigami","He is a giant","He is a Marine"],"His body contains extensive mechanical modifications.","Franky"],
["Anime • One Piece","What is Brook’s Devil Fruit?","Yomi Yomi no Mi",["Hana Hana no Mi","Bara Bara no Mi","Mera Mera no Mi"],"It allowed his soul to return after death.","Brook"],
["Anime • One Piece","Which power system includes Observation Haki?","Haki",["Nen","Quirk","Breathing Styles"],"Observation, Armament and Conqueror’s are types of Haki.","Haki"],
["Anime • One Piece","What does Armament Haki primarily allow a user to do?","Harden attacks or defenses",["Read minds","Teleport instantly","Control weather only"],"It can strengthen the body or weapons and affect certain Devil Fruit users.","Armament Haki"],
["Anime • One Piece","What is Conqueror’s Haki associated with?","Overwhelming the will of others",["Healing wounds","Reading Poneglyphs","Changing into a fish"],"It is a rare form of Haki associated with supreme will.","Conqueror’s Haki"],
["Anime • One Piece","What is a Poneglyph?","An ancient stone inscription",["A Marine ship","A Devil Fruit","A cooking recipe"],"These indestructible stones preserve important historical information.","Poneglyph"],
["Anime • One Piece","What is Laugh Tale?","The final island associated with the One Piece treasure",["A Marine headquarters","A village in East Blue","A ship"],"Roger reached the island at the end of his journey.","Laugh Tale"],
["Anime • One Piece","Who is Ace to Luffy?","His sworn older brother",["His biological son","His uncle","His navigator"],"Ace and Luffy formed a sworn brotherhood with Sabo.","Ace"],
["Anime • One Piece","Who is Sabo to Luffy?","His sworn brother",["His doctor","His father","His shipwright"],"Sabo, Ace and Luffy became sworn brothers.","Sabo"],
["Anime • One Piece","What is Garp’s position in the Marines?","Vice Admiral",["Pirate King","Yonko","Warlord"],"Garp is a legendary Marine hero and vice admiral.","Garp"],
["Anime • One Piece","What is Trafalgar Law’s Devil Fruit?","Ope Ope no Mi",["Mera Mera no Mi","Hana Hana no Mi","Yomi Yomi no Mi"],"It lets him create a surgical operating room-like space.","Law"],
["Anime • One Piece","What is Wano Country known for?","Its samurai culture",["Being a Marine base","Being a sky island","Being the Red Line"],"Wano is strongly associated with samurai and closed borders.","Wano"],
["Anime • One Piece","What is Marineford?","A major Marine headquarters and battlefield",["A pirate ship","A Poneglyph","A sky island"],"The Paramount War takes place there.","Marineford"],
["Anime • One Piece","What is the Calm Belt?","A sea region with little or no wind",["A mountain range","A desert","A city"],"It lies alongside the Grand Line and is dangerous for ships.","Calm Belt"],
["Anime • One Piece","Which organization is the World Government’s main military force?","Marines",["Straw Hats","Revolutionary Army only","Roger Pirates"],"The Marines enforce World Government authority at sea.","Marines"],
["Anime • One Piece","Who leads the Revolutionary Army?","Monkey D. Dragon",["Shanks","Dracule Mihawk","Buggy"],"Dragon is Luffy’s father and the Revolutionary Army leader.","Dragon"],
["Anime • One Piece","What is Dracule Mihawk famous for?","World’s greatest swordsman",["Being Pirate King","Being a Marine Admiral","Building ships"],"He is known for unmatched swordsmanship.","Mihawk"],
["Anime • One Piece","What is the Thousand Sunny made to do?","Serve as the Straw Hat crew’s main ship",["Transport Marines","Store Poneglyphs only","Guard Marineford"],"Franky built it as the crew’s next major ship.","Thousand Sunny"],
["Anime • One Piece","What is the Grand Line?","A dangerous sea route crossing the world",["A mountain","A government building","A Devil Fruit"],"It is the central maritime route of the story.","Grand Line"],
["Anime • One Piece","What is a Yonko?","One of the four powerful pirate emperors",["A Marine rank","A type of Devil Fruit","A sword"],"Yonko are among the most influential pirates.","Yonko"],
["Anime • One Piece","What is the Red Line?","A huge continent-like landmass circling the world",["A pirate crew","A sea current","A Devil Fruit"],"It intersects the Grand Line.","Red Line"],
["Anime • One Piece","What is the Void Century?","A mysterious century of erased world history",["A pirate festival","A Marine rank","A cooking era"],"Its history is connected to the Poneglyphs and World Government secrecy.","Void Century"],
["Anime • One Piece","What is the Revolutionary Army primarily opposing?","The World Government",["The Straw Hats","The Going Merry","The Grand Line"],"Its central conflict is against World Government authority.","Revolutionary Army"],

["Anime • Death Note","What is Light Yagami’s goal after obtaining the notebook?","To create a world he controls as Kira",["To become a detective","To join the SPK","To become a Shinigami"],"He adopts the identity of Kira and seeks to reshape society.","Light Yagami"],
["Anime • Death Note","What is L’s famous detective alias?","L",["Kira","K","Near"],"He conceals his real name behind the single-letter alias.","L"],
["Anime • Death Note","What must generally be known to use the Death Note on a person?","The person’s name and face",["Only their address","Only their age","Their blood type"],"The rules require knowledge of the name and a clear mental image of the face.","Death Note Rule"],
["Anime • Death Note","What happens if the cause of death is not specified within the allowed time?","The default heart attack rule applies",["The victim becomes a Shinigami","The notebook disappears","L dies"],"The notebook has default rules when no specific cause is set.","Death Note Rule"],
["Anime • Death Note","Who is Light’s father?","Soichiro Yagami",["Watari","Aizawa","Matsuda"],"He is a senior police officer involved in the Kira investigation.","Soichiro"],
["Anime • Death Note","Who is Misa Amane?","A model and Kira supporter",["An FBI director","A Shinigami","L’s sister"],"She becomes the Second Kira and receives Shinigami Eyes.","Misa"],
["Anime • Death Note","Which Shinigami is connected to Misa?","Rem",["Ryuk","Gelus only","Sidoh"],"Rem watches over Misa and cares about her safety.","Rem"],
["Anime • Death Note","Which Shinigami originally owned the notebook that reaches Light?","Ryuk",["Rem","Gelus","Sidoh"],"Ryuk drops the notebook into the human world out of boredom.","Ryuk"],
["Anime • Death Note","What does Ryuk especially enjoy eating?","Apples",["Oranges","Rice","Chocolate"],"Apples are a recurring joke and preference for Ryuk.","Ryuk"],
["Anime • Death Note","What is the cost of the Shinigami Eye deal?","Half of the human’s remaining lifespan",["All memories","Their notebook","Their identity"],"The deal trades half of the remaining lifespan for the ability.","Shinigami Eyes"],
["Anime • Death Note","Who is Near?","A successor candidate to L",["A Shinigami","Light’s father","An FBI agent"],"He is raised at Wammy’s House and later leads the SPK.","Near"],
["Anime • Death Note","Who is Mello?","Another Wammy’s House successor candidate",["A Shinigami","A police captain","Light’s cousin"],"Mello competes with Near to succeed L.","Mello"],
["Anime • Death Note","What does Wammy’s House do?","Educates gifted children",["Trains Marines","Creates Death Notes","Runs a hospital"],"It is the institution associated with L and his successors.","Wammy’s House"],
["Anime • Death Note","What is the SPK?","A group formed to investigate Kira",["A school","A Shinigami clan","A Japanese idol agency"],"Near leads the international investigation group.","SPK"],
["Anime • Death Note","Who is Teru Mikami?","A devoted Kira follower and prosecutor",["An FBI agent","A Shinigami","L’s assistant"],"Light uses Mikami as an important proxy in the later story.","Mikami"],
["Anime • Death Note","Who is Kiyomi Takada?","A television news presenter connected to Kira",["A police detective","A Shinigami","A Wammy student"],"She becomes an important intermediary for Light.","Takada"],
["Anime • Death Note","What is the Yotsuba Group connected to?","A corporate Kira investigation",["The Grand Line","Wammy’s House","The Marines"],"The Yotsuba arc involves a company executive using the Death Note.","Yotsuba"],
["Anime • Death Note","What happens when Light relinquishes ownership of the Death Note?","He loses memories connected to it",["He becomes a Shinigami","He gains immortality","He gains L’s memories"],"Ownership and memory are linked by the notebook rules.","Memory"],
["Anime • Death Note","What is the purpose of the fake L broadcast?","To provoke Kira and learn about Kira’s location or nature",["To advertise a school","To summon Ryuk","To destroy the notebook"],"L uses a deceptive broadcast as a test.","L Broadcast"],
["Anime • Death Note","What is Watari’s role?","L’s trusted assistant and support figure",["A Shinigami","Kira’s prosecutor","A pirate"],"Watari handles logistics and supports L.","Watari"],
["Anime • Death Note","What is the relationship between Light and the Japanese Task Force?","Light works with them while secretly being Kira",["They never meet","They are all Shinigami","They are all pirates"],"Light participates in the investigation while hiding his identity.","Task Force"],
["Anime • Death Note","What does the Death Note primarily cause?","The death of named humans under its rules",["Teleportation","Weather control","Time travel"],"The notebook is a supernatural killing tool.","Death Note"],
["Anime • Death Note","What is the main conflict between Light and L?","A battle of deduction and deception",["A cooking contest","A sports tournament","A pirate war"],"Both attempt to discover and outmaneuver the other.","Mind Game"],
["Anime • Death Note","What is Kira’s public image to some supporters?","A judge who punishes criminals",["A pirate king","A police chief","A Shinigami prince"],"Supporters view Kira’s killings as punishment of criminals.","Kira"],
["Anime • Death Note","What is the Shinigami Realm?","The world inhabited by Shinigami",["A human police station","A school","A pirate island"],"Shinigami originate from this supernatural realm.","Shinigami Realm"],
["Anime • Death Note","What happens if a human makes the Shinigami Eye deal?","They can see a person’s name and remaining lifespan",["They can read minds","They can revive anyone","They become immortal"],"The eyes reveal identifying information about humans.","Eye Deal"],
["Anime • Death Note","What is the central mystery L tries to solve?","Who Kira is",["Where the One Piece is","Who built the Titans","Who controls the Avengers"],"Identifying Kira is the core investigation.","Kira Investigation"],
["Anime • Death Note","Which character is associated with the name Kira before Light’s identity is fully established?","Light Yagami",["Mello","Watari","Soichiro"],"Light becomes the central human behind the Kira identity.","Kira"],
["Anime • Death Note","What is the role of Rem toward Misa?","Protective Shinigami",["Police detective","Wammy teacher","FBI agent"],"Rem has strong concern for Misa’s survival.","Rem"],
["Anime • Death Note","What is the notebook rule about writing a person’s name?","The writer must correctly identify the intended person",["Any nickname always works","Only fingerprints matter","The face is irrelevant"],"The rules connect the written name with the person’s face.","Notebook Rule"]
];
SEED_FACTS.push(...V15_ANIME_EXPANSION);


let TOTAL_LEVELS=0;
const STORAGE_KEY='elementGameSave_v9000';
const SETUP_KEY='elementGameSetup_v9000';

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
 return direct;
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

// Build the verified unique-question bank. No prefix/cycle is used to inflate the count.
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
const MISSION_BANK=[];
let missionId=0;
const GLOBAL_QUESTION_KEYS=new Set();
const GLOBAL_BASE_KEYS=new Set();

// STRICT NO-REPEAT BUILD: one authored factual question = one mission.
for(const cat of CATEGORY_DEFS){
  for(const [sub] of cat.subs){
    const seeds=sourceForSub(cat.key,sub);
    const seen=new Set();
    for(const seed of seeds){
      const base=String(seed[1]).replace(/\s+/g,' ').trim();
      const key=`${cat.key}|${sub}|${base.toLowerCase()}`;
      const baseKey=base.toLowerCase();
      if(seen.has(baseKey)||GLOBAL_BASE_KEYS.has(baseKey)||GLOBAL_QUESTION_KEYS.has(key))continue;
      seen.add(baseKey);
      GLOBAL_BASE_KEYS.add(baseKey);
      GLOBAL_QUESTION_KEYS.add(key);
      const m=makeMission(seed,0,++missionId,cat.key,sub);
      m.question=base;
      m.variant=0;
      m.difficulty=['Easy','Medium','Hard'][hash(`${key}|difficulty`)%3];
      MISSION_BANK.push(m);
    }
  }
}
TOTAL_LEVELS=MISSION_BANK.length;
if(!TOTAL_LEVELS)throw new Error('No unique missions available.');

/* =========================================================
   V16 — SEPARATE GENESIS GAME / 500 LEVEL BUILD JOURNEY
   The Game mode is independent from Random / Category / Challenge / NCTB.
   It keeps its own level, XP, discoveries and archive.
   ========================================================= */
const GAME_TOTAL_LEVELS=500;
const GAME_STAGES=[
  ['Stone Age Foundations',1,50,'পাথর, আগুন, আশ্রয় ও প্রথম সরঞ্জাম','Stone Shelter'],
  ['Fire & Early Tools',51,100,'আগুন, ধাতু, চাকা ও প্রাথমিক যন্ত্র','Bronze Workshop'],
  ['Machines & Electricity',101,150,'বিদ্যুৎ, টেলিগ্রাফ, মোটর ও রেডিও','Electric Motor'],
  ['Computer Genesis',151,200,'কম্পিউটার, ট্রানজিস্টর, চিপ ও টেলিফোন','Mobile Phone Prototype'],
  ['Smartphone Era',201,250,'মোবাইল, স্মার্টফোন, GPS, Web ও Internet','Smartphone'],
  ['Robotics & AI',251,300,'রোবট, machine learning, AI ও autonomous systems','AI Robot'],
  ['Biotech & Medicine',301,350,'DNA, vaccine, imaging, prosthetics ও biotech','Bioengineered Cell'],
  ['Space & Quantum',351,400,'রকেট, satellite, quantum processor ও deep space','Quantum Processor'],
  ['Future Energy & Worlds',401,450,'fusion, solar, VR, advanced materials ও clean energy','Fusion Core'],
  ['Multiverse & Omniverse',451,500,'multiverse, simulation, cosmic engineering ও omniverse','Omniverse Gate']
];
const GAME_MILESTONES={
  10:['Stone Shelter','প্রথম স্থায়ী আশ্রয়'],20:['Stone Axe','পাথরের কুঠার'],30:['Fire Hearth','নিয়ন্ত্রিত আগুন'],40:['Spear','শিকারি বর্শা'],50:['Wheel','চাকা'],
  60:['Pottery','মাটির পাত্র'],70:['Bronze Tool','ব্রোঞ্জ সরঞ্জাম'],80:['Iron Tool','লোহার সরঞ্জাম'],90:['Water Mill','জলচালিত মিল'],100:['Tesla Coil','টেসলা কয়েল'],
  110:['Telegraph','টেলিগ্রাফ'],120:['Electric Motor','ইলেকট্রিক মোটর'],130:['Radio','রেডিও'],140:['Vacuum Tube Computer','ভ্যাকুয়াম টিউব কম্পিউটার'],150:['Early Computer','প্রথমদিকের কম্পিউটার'],
  160:['Transistor','ট্রানজিস্টর'],170:['Integrated Circuit','ইন্টিগ্রেটেড সার্কিট'],180:['Microprocessor','মাইক্রোপ্রসেসর'],190:['Digital Camera','ডিজিটাল ক্যামেরা'],200:['Mobile Phone Prototype','মোবাইল ফোনের প্রোটোটাইপ'],
  210:['Cellular Network','সেলুলার নেটওয়ার্ক'],220:['Smartphone','স্মার্টফোন'],230:['Touchscreen Device','টাচস্ক্রিন ডিভাইস'],240:['GPS Navigator','GPS নেভিগেটর'],250:['Global Internet','গ্লোবাল ইন্টারনেট'],
  260:['Industrial Robot','ইন্ডাস্ট্রিয়াল রোবট'],270:['Machine Learning Model','মেশিন লার্নিং মডেল'],280:['AI Assistant','AI অ্যাসিস্ট্যান্ট'],290:['Autonomous Car','স্বয়ংক্রিয় গাড়ি'],300:['AI Research Lab','AI গবেষণাগার'],
  310:['DNA Sequencer','DNA সিকোয়েন্সার'],320:['mRNA Platform','mRNA প্ল্যাটফর্ম'],330:['Medical Imaging AI','মেডিকেল ইমেজিং AI'],340:['Bionic Prosthetic','বায়োনিক প্রস্থেটিক'],350:['Bioengineered Cell','বায়োইঞ্জিনিয়ার্ড কোষ'],
  360:['Reusable Rocket','পুনর্ব্যবহারযোগ্য রকেট'],370:['Earth Observation Satellite','পৃথিবী পর্যবেক্ষণ স্যাটেলাইট'],380:['Quantum Processor','কোয়ান্টাম প্রসেসর'],390:['Deep Space Probe','ডিপ-স্পেস প্রোব'],400:['Lunar Research Base','চন্দ্র গবেষণা ঘাঁটি'],
  410:['Perovskite Solar Cell','পেরোভস্কাইট সোলার সেল'],420:['Battery Grid','বড় স্কেলের ব্যাটারি গ্রিড'],430:['VR World','ভার্চুয়াল রিয়েলিটি ওয়ার্ল্ড'],440:['Advanced Composite','অ্যাডভান্সড কম্পোজিট'],450:['Fusion Core','ফিউশন কোর'],
  460:['Multiverse Simulator','মাল্টিভার্স সিমুলেটর'],470:['Quantum Network','কোয়ান্টাম নেটওয়ার্ক'],480:['Synthetic World Engine','সিন্থেটিক ওয়ার্ল্ড ইঞ্জিন'],490:['Cosmic Civilization','কসমিক সিভিলাইজেশন'],500:['Omniverse Gate','ওম্নিভার্স গেট']
};
const GAME_STAGE_SCIENTISTS={
  50:['Al-Jazari','Mechanical Engineering','Design becomes real when ideas are turned into precise machines.','ধারণাকে নির্ভুল যন্ত্রে রূপ দিলে নকশা বাস্তব হয়।'],
  100:['Nikola Tesla','Electrical Engineering','The electrical age changed what humanity could build.','বিদ্যুতের যুগ মানুষ কী নির্মাণ করতে পারে তা বদলে দিয়েছে।'],
  150:['Alan Turing','Computing','Computation gave machines a new language for solving problems.','কম্পিউটিং যন্ত্রকে সমস্যা সমাধানের নতুন ভাষা দিয়েছে।'],
  200:['Martin Cooper','Mobile Communication','Portable communication connected people beyond fixed places.','বহনযোগ্য যোগাযোগ মানুষকে নির্দিষ্ট স্থানের সীমা ছাড়িয়ে যুক্ত করেছে।'],
  250:['Tim Berners-Lee','World Wide Web','Open standards helped turn networks into a web of information.','উন্মুক্ত মান নেটওয়ার্ককে তথ্যের ওয়েবে রূপ দিতে সাহায্য করেছে।'],
  300:['Ada Lovelace','Computational Thinking','Algorithms turn ideas into repeatable procedures.','অ্যালগরিদম ধারণাকে পুনরাবৃত্তিযোগ্য প্রক্রিয়ায় রূপ দেয়।'],
  350:['Rosalind Franklin','Molecular Science','Careful measurement can reveal hidden structure.','সতর্ক পরিমাপ অদৃশ্য গঠনকে প্রকাশ করতে পারে।'],
  400:['Katherine Johnson','Space Science','Precise mathematics can guide exploration beyond Earth.','নির্ভুল গণিত পৃথিবীর বাইরের অনুসন্ধানকে পথ দেখাতে পারে।'],
  450:['Marie Curie','Radiation Science','Persistent measurement can open entirely new scientific fields.','অবিচল পরিমাপ নতুন বৈজ্ঞানিক ক্ষেত্রের দ্বার খুলতে পারে।'],
  500:['Genesis Gate','Multiverse / Omniverse','The journey ends where the next question begins.','যাত্রা শেষ হয় যেখানে পরের প্রশ্নের শুরু।']
};
const GAME_VARIANT_STEMS=[
  'Fabrication check: {q}',
  'Workshop check: {q}',
  'Build-system check: {q}',
  'Engineering checkpoint: {q}',
  'Discovery lab check: {q}',
  'Genesis builder question: {q}',
  'Prototype verification: {q}',
  'Technology gate: {q}',
  'Invention checkpoint: {q}',
  'Knowledge core check: {q}'
];
function gameStageFor(level){return GAME_STAGES.find(s=>level>=s[1]&&level<=s[2])||GAME_STAGES[GAME_STAGES.length-1]}
function gameArtifactFor(level){
  const m=GAME_MILESTONES[level];
  if(m)return m[0];
  const stage=gameStageFor(level), within=level-stage[1];
  const list=[stage[3].split(' ও ')[0],stage[4],`Prototype ${within+1}`,`Builder Module ${within+1}`];
  return list[(within)%list.length];
}
function makeGameLevel(base,index){
  const id=`G${index}`;
  const stem=index<=MISSION_BANK.length?String(base.question):GAME_VARIANT_STEMS[(index-MISSION_BANK.length-1)%GAME_VARIANT_STEMS.length].replace('{q}',String(base.question));
  const stage=gameStageFor(index);
  const artifact=gameArtifactFor(index);
  const variant=index<=MISSION_BANK.length?0:(index-MISSION_BANK.length);
  const options=shuffle(base.options,`game-${index}`);
  return {
    id, gameLevel:index, categoryKey:'game', subCategory:stage[0], subject:stage[0],
    baseQuestion:base.baseQuestion, question:stem, options, answerIndex:options.indexOf(base.answer),
    answer:base.answer, hint:base.hint||'Use the key scientific or engineering concept in the question.',
    artifact, difficulty: index<=150?'Easy':index<=300?'Medium':'Hard',
    gameStage:stage[0], gameDescription:stage[3], variant
  };
}
const GAME_LEVELS=[];
for(let i=1;i<=GAME_TOTAL_LEVELS;i++){
  const base=MISSION_BANK[(i-1)%MISSION_BANK.length];
  GAME_LEVELS.push(makeGameLevel(base,i));
}
if(new Set(GAME_LEVELS.map(x=>x.question)).size!==GAME_TOTAL_LEVELS)throw new Error('Game mode question keys are not unique.');


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
const NCTB_CHEM_BN={
'What does chemistry mainly study?':'রসায়ন প্রধানত কী নিয়ে অধ্যয়ন করে?','Which laboratory practice is safest when heating a test tube?':'টেস্ট টিউব গরম করার সময় কোন ল্যাবরেটরি পদ্ধতিটি সবচেয়ে নিরাপদ?','Which SI unit is commonly used for amount of substance?':'পদার্থের পরিমাণের জন্য সাধারণত কোন SI একক ব্যবহার করা হয়?','Which state has a fixed volume but no fixed shape?':'কোন অবস্থার নির্দিষ্ট আয়তন আছে কিন্তু নির্দিষ্ট আকার নেই?','Which state is highly compressible because particles are far apart?':'কোন অবস্থা অত্যন্ত সংকোচনীয়, কারণ কণাগুলো পরস্পর থেকে অনেক দূরে থাকে?','What happens to most substances when heated?':'বেশিরভাগ পদার্থকে উত্তপ্ত করলে কী ঘটে?','Which particle has a positive elementary charge?':'কোন কণার মৌলিক বৈদ্যুতিক আধান ধনাত্মক?','Which particle has no electric charge?':'কোন কণার কোনো বৈদ্যুতিক আধান নেই?','Which particle occupies the electron cloud?':'কোন কণা ইলেকট্রন মেঘে অবস্থান করে?','What is the atomic number of an element equal to?':'কোনো মৌলের পারমাণবিক সংখ্যা কিসের সমান?','What does the mass number represent?':'ভরসংখ্যা কী নির্দেশ করে?','What are atoms of the same element with different neutron numbers called?':'একই মৌলের কিন্তু ভিন্ন সংখ্যক নিউট্রনযুক্ত পরমাণুকে কী বলে?','Which scientist is associated with the nuclear model of the atom?':'পরমাণুর নিউক্লীয় মডেলের সঙ্গে কোন বিজ্ঞানীর নাম যুক্ত?','Who proposed the periodic law associated with the periodic table?':'পর্যায় সারণির সঙ্গে সম্পর্কিত পর্যায় সূত্র কে প্রস্তাব করেছিলেন?','What generally happens to atomic radius across a period from left to right?':'একটি পর্যায়ে বাম থেকে ডানে গেলে সাধারণত পারমাণবিক ব্যাসার্ধের কী পরিবর্তন হয়?','Which group contains the alkali metals?':'কোন গ্রুপে ক্ষার ধাতুগুলো রয়েছে?','Which group contains the halogens?':'কোন গ্রুপে হ্যালোজেনগুলো রয়েছে?','Which group contains the noble gases?':'কোন গ্রুপে নিষ্ক্রিয় গ্যাসগুলো রয়েছে?','What type of bond forms by transfer of electrons?':'ইলেকট্রন স্থানান্তরের মাধ্যমে কোন ধরনের বন্ধন গঠিত হয়?','What type of bond forms by sharing electron pairs?':'ইলেকট্রন জোড়া ভাগাভাগির মাধ্যমে কোন ধরনের বন্ধন গঠিত হয়?','What is the usual charge of a sodium ion?':'সোডিয়াম আয়নের সাধারণ আধান কত?','What is the usual charge of a chloride ion?':'ক্লোরাইড আয়নের সাধারণ আধান কত?','What does one mole contain approximately?':'এক মোলের মধ্যে আনুমানিক কতটি কণা থাকে?','What is molar mass measured in?':'মোলার ভর কোন এককে মাপা হয়?','What is the molar mass of water approximately?':'পানির মোলার ভর আনুমানিক কত?','Which equation represents a balanced chemical reaction?':'কোন সমীকরণটি একটি সুষম রাসায়নিক বিক্রিয়া নির্দেশ করে?','What is oxidation commonly associated with?':'জারণ সাধারণত কিসের সঙ্গে সম্পর্কিত?','What is reduction commonly associated with?':'বিজারণ সাধারণত কিসের সঙ্গে সম্পর্কিত?','What is a catalyst?':'অনুঘটক কী?','What does an exothermic reaction do?':'তাপমোচী বিক্রিয়া কী করে?','What does an endothermic reaction do?':'তাপশোষী বিক্রিয়া কী করে?','What is the pH of a neutral aqueous solution at 25°C?':'২৫°C তাপমাত্রায় নিরপেক্ষ জলীয় দ্রবণের pH কত?','A solution with pH 3 is how compared with pH 7?':'pH ৭-এর তুলনায় pH ৩-এর দ্রবণ কেমন?','Which ion is characteristic of acidic aqueous solutions?':'অম্লীয় জলীয় দ্রবণের বৈশিষ্ট্যসূচক আয়ন কোনটি?','Which ion is characteristic of basic aqueous solutions?':'ক্ষারীয় জলীয় দ্রবণের বৈশিষ্ট্যসূচক আয়ন কোনটি?','What is formed when an acid reacts with a base in neutralization?':'নিরপেক্ষকরণে অম্ল ও ক্ষার বিক্রিয়া করলে কী তৈরি হয়?','Which acid is commonly found in vinegar?':'ভিনেগারে সাধারণত কোন অম্ল থাকে?','Which gas is needed for ordinary combustion?':'সাধারণ দহনের জন্য কোন গ্যাস প্রয়োজন?','Rusting of iron requires oxygen and what else?':'লোহায় মরিচা ধরার জন্য অক্সিজেনের পাশাপাশি আর কী প্রয়োজন?','Which metal is commonly extracted from bauxite?':'বক্সাইট থেকে সাধারণত কোন ধাতু নিষ্কাশন করা হয়?','Which metal is commonly obtained from hematite?':'হেমাটাইট থেকে সাধারণত কোন ধাতু পাওয়া যায়?','Which non-metal is essential for respiration?':'শ্বসনের জন্য কোন অধাতু অপরিহার্য?','Which fossil fuel is a major source of hydrocarbons?':'কোন জীবাশ্ম জ্বালানি হাইড্রোকার্বনের একটি প্রধান উৎস?','What is the main combustible component of natural gas?':'প্রাকৃতিক গ্যাসের প্রধান দাহ্য উপাদান কী?','What is an organic compound mainly characterized by?':'জৈব যৌগ প্রধানত কী দ্বারা চিহ্নিত হয়?','Which hydrocarbon is saturated and contains only single C–C bonds?':'কোন হাইড্রোকার্বন সম্পৃক্ত এবং এতে শুধু একক C–C বন্ধন থাকে?','Which hydrocarbon contains a carbon-carbon double bond?':'কোন হাইড্রোকার্বনে কার্বন-কার্বন দ্বিবন্ধন থাকে?','Which hydrocarbon contains a carbon-carbon triple bond?':'কোন হাইড্রোকার্বনে কার্বন-কার্বন ত্রিবন্ধন থাকে?','Which alcohol is commonly represented by CH₃OH?':'CH₃OH দ্বারা সাধারণত কোন অ্যালকোহলকে প্রকাশ করা হয়?','Which alcohol is commonly present in alcoholic beverages?':'মদ্যপ পানীয়তে সাধারণত কোন অ্যালকোহল থাকে?','What is the main purpose of a fume hood in a laboratory?':'ল্যাবরেটরিতে ফিউম হুডের প্রধান উদ্দেশ্য কী?','Which instrument is commonly used to measure liquid volume accurately in a laboratory?':'ল্যাবরেটরিতে তরলের আয়তন নির্ভুলভাবে মাপতে কোন যন্ত্র ব্যবহার করা হয়?','Which instrument measures mass in a laboratory?':'ল্যাবরেটরিতে কোন যন্ত্র ভর মাপে?','What is a solution?':'দ্রবণ কী?','What is the solute in a solution?':'দ্রবণে দ্রব কী?','What is the solvent?':'দ্রাবক কী?','What does concentration describe?':'ঘনমাত্রা কী নির্দেশ করে?','Which process separates a soluble solid from a solution by removing solvent?':'দ্রাবক অপসারণ করে দ্রবণ থেকে দ্রবণীয় কঠিন পদার্থ আলাদা করার প্রক্রিয়া কোনটি?','Which method separates an insoluble solid from a liquid?':'তরল থেকে অদ্রবণীয় কঠিন পদার্থ আলাদা করার পদ্ধতি কোনটি?','Which method separates liquids using different boiling points?':'ভিন্ন স্ফুটনাঙ্ক ব্যবহার করে তরল পৃথক করার পদ্ধতি কোনটি?','What is a precipitate?':'অবক্ষেপ কী?'
};
const NCTB_CHEM_OPTION_BN={
'Chemistry':'রসায়ন','Matter and its changes':'পদার্থ ও এর পরিবর্তন','Only planets':'শুধু গ্রহ','Only living cells':'শুধু জীবন্ত কোষ','Only numbers':'শুধু সংখ্যা','Point it away from people':'মানুষের দিক থেকে দূরে ধরে','Hold it toward the face':'মুখের দিকে ধরে','Seal it tightly':'শক্ত করে বন্ধ করে','Touch the hot end':'গরম প্রান্তে হাত দিয়ে','Mole':'মোল','Gram':'গ্রাম','Litre':'লিটার','Kelvin':'কেলভিন','Liquid':'তরল','Solid':'কঠিন','Gas':'গ্যাস','Plasma':'প্লাজমা','Particles gain kinetic energy':'কণাগুলোর গতিশক্তি বৃদ্ধি পায়','Particles stop moving':'কণাগুলো চলা বন্ধ করে','Mass becomes zero':'ভর শূন্য হয়ে যায়','Atoms disappear':'পরমাণু অদৃশ্য হয়ে যায়','Proton':'প্রোটন','Electron':'ইলেকট্রন','Neutron':'নিউট্রন','Photon':'ফোটন','Number of protons':'প্রোটনের সংখ্যা','Number of neutrons':'নিউট্রনের সংখ্যা','Mass number':'ভরসংখ্যা','Only electrons':'শুধু ইলেকট্রন','Only protons':'শুধু প্রোটন','Only neutrons':'শুধু নিউট্রন','Isotopes':'আইসোটোপ','Ions':'আয়ন','Allotropes':'অ্যালোট্রপ','Molecules':'অণু','Ernest Rutherford':'আর্নেস্ট রাদারফোর্ড','Dmitri Mendeleev':'দিমিত্রি মেন্ডেলিভ','Avogadro':'অ্যাভোগাড্রো','Boyle':'বয়েল','It tends to decrease':'সাধারণত কমে','It always doubles':'সবসময় দ্বিগুণ হয়','It tends to increase greatly':'সাধারণত অনেক বেড়ে যায়','It becomes zero':'শূন্য হয়ে যায়','Group 1':'গ্রুপ ১','Group 2':'গ্রুপ ২','Group 17':'গ্রুপ ১৭','Group 18':'গ্রুপ ১৮','Ionic bond':'আয়নিক বন্ধন','Covalent bond':'সমযোজী বন্ধন','Metallic bond':'ধাতব বন্ধন','Nuclear bond':'নিউক্লীয় বন্ধন','+1':'+১','-1':'−১','+2':'+২','0':'০','6.022 × 10²³ particles':'৬.০২২ × ১০²³টি কণা','6.022 × 10² particles':'৬.০২২ × ১০²টি কণা','9.8 × 10²³ particles':'৯.৮ × ১০²³টি কণা','3.0 × 10⁸ particles':'৩.০ × ১০⁸টি কণা','g/mol':'গ্রাম/মোল','kg only':'শুধু কেজি','L/mol':'লিটার/মোল','mol/g²':'মোল/গ্রাম²','18 g/mol':'১৮ গ্রাম/মোল','2 g/mol':'২ গ্রাম/মোল','16 g/mol':'১৬ গ্রাম/মোল','44 g/mol':'৪৪ গ্রাম/মোল','2H₂ + O₂ → 2H₂O':'2H₂ + O₂ → 2H₂O','H₂ + O₂ → H₂O₂':'H₂ + O₂ → H₂O₂','H₂ + O₂ → H₂O':'H₂ + O₂ → H₂O','H₂ + 2O₂ → H₂O':'H₂ + 2O₂ → H₂O','Loss of electrons':'ইলেকট্রন ত্যাগ','Gain of protons':'প্রোটন গ্রহণ','Loss of neutrons':'নিউট্রন ত্যাগ','Gain of nuclei':'নিউক্লিয়াস গ্রহণ','Gain of electrons':'ইলেকট্রন গ্রহণ','A substance that changes reaction rate without being consumed overall':'সামগ্রিকভাবে ক্ষয় না হয়ে বিক্রিয়ার হার পরিবর্তন করে এমন পদার্থ','A permanent product':'স্থায়ী উৎপাদ','A solvent only':'শুধু দ্রাবক','A reactant that disappears completely':'সম্পূর্ণ বিলীন হয়ে যাওয়া বিক্রিয়ক','Releases heat to surroundings':'পরিবেশে তাপ ছেড়ে দেয়','Absorbs all heat':'সব তাপ শোষণ করে','Stops particle motion':'কণার গতি থামিয়ে দেয়','Creates matter':'পদার্থ সৃষ্টি করে','Absorbs heat from surroundings':'পরিবেশ থেকে তাপ শোষণ করে','Always releases heat':'সবসময় তাপ ছেড়ে দেয়','Destroys energy':'শক্তি ধ্বংস করে','Produces no energy change':'কোনো শক্তি পরিবর্তন ঘটায় না','More acidic':'আরও অম্লীয়','More basic':'আরও ক্ষারীয়','Neutral':'নিরপেক্ষ','Always salty':'সবসময় লবণাক্ত','H⁺':'H⁺','OH⁻':'OH⁻','Na⁺':'Na⁺','Cl⁻':'Cl⁻','Salt and water':'লবণ ও পানি','Only oxygen':'শুধু অক্সিজেন','Only metal':'শুধু ধাতু','Only hydrogen gas':'শুধু হাইড্রোজেন গ্যাস','Acetic acid':'অ্যাসিটিক অ্যাসিড','Sulfuric acid':'সালফিউরিক অ্যাসিড','Nitric acid':'নাইট্রিক অ্যাসিড','Hydrochloric acid':'হাইড্রোক্লোরিক অ্যাসিড','Oxygen':'অক্সিজেন','Nitrogen':'নাইট্রোজেন','Helium':'হিলিয়াম','Neon':'নিয়ন','Moisture':'আর্দ্রতা','Pure nitrogen':'বিশুদ্ধ নাইট্রোজেন','Only sunlight':'শুধু সূর্যালোক','Aluminium':'অ্যালুমিনিয়াম','Copper':'তামা','Iron':'লোহা','Sodium':'সোডিয়াম','Calcium':'ক্যালসিয়াম','Petroleum':'পেট্রোলিয়াম','Quartz':'কোয়ার্টজ','Limestone only':'শুধু চুনাপাথর','Salt':'লবণ','Methane':'মিথেন','Carbon monoxide':'কার্বন মনোক্সাইড','Carbon-based molecular frameworks':'কার্বনভিত্তিক আণবিক কাঠামো','Only metals':'শুধু ধাতু','Only salts':'শুধু লবণ','Only water':'শুধু পানি','Alkane':'অ্যালকেন','Alkene':'অ্যালকিন','Alkyne':'অ্যালকাইন','Arene only':'শুধু অ্যারিন','Alcohol':'অ্যালকোহল','Methanol':'মিথানল','Ethanol':'ইথানল','Propanol':'প্রোপানল','Ethanoic acid':'ইথানোইক অ্যাসিড','To remove hazardous vapours from the breathing zone':'শ্বাস নেওয়ার এলাকার ক্ষতিকর বাষ্প দূর করতে','To increase flame temperature':'শিখার তাপমাত্রা বাড়াতে','To store books':'বই রাখতে','To measure pH':'pH মাপতে','Graduated cylinder':'গ্র্যাজুয়েটেড সিলিন্ডার','Thermometer':'থার্মোমিটার','Balance only':'শুধু ব্যালেন্স','Microscope':'মাইক্রোস্কোপ','Balance':'ব্যালেন্স','Burette':'বিউরেট','pH paper':'pH পেপার','A homogeneous mixture':'সমসত্ত্ব মিশ্রণ','A pure element only':'শুধু বিশুদ্ধ মৌল','A solid crystal only':'শুধু কঠিন স্ফটিক','A gas atom only':'শুধু গ্যাস পরমাণু','The substance that is dissolved':'যে পদার্থ দ্রবীভূত হয়','The container':'পাত্র','Only the solvent':'শুধু দ্রাবক','The thermometer':'থার্মোমিটার','The component that dissolves the solute':'যে উপাদান দ্রবকে দ্রবীভূত করে','Only the solid product':'শুধু কঠিন উৎপাদ','Only the gas':'শুধু গ্যাস','The precipitate':'অবক্ষেপ','Amount of solute relative to a given amount of solution or solvent':'নির্দিষ্ট পরিমাণ দ্রবণ বা দ্রাবকের তুলনায় দ্রবের পরিমাণ','Only colour':'শুধু রং','Only temperature':'শুধু তাপমাত্রা','Only pressure':'শুধু চাপ','Evaporation':'বাষ্পীভবন','Filtration only':'শুধু পরিস্রবণ','Magnetism':'চুম্বকত্ব','Sedimentation only':'শুধু অবক্ষেপণ','Filtration':'পরিস্রবণ','Distillation only':'শুধু পাতন','Chromatography only':'শুধু ক্রোমাটোগ্রাফি','Sublimation only':'শুধু ঊর্ধ্বপাতন','Distillation':'পাতন','Magnetic separation':'চৌম্বকীয় পৃথকীকরণ','Decantation only':'শুধু ডিক্যান্টেশন','An insoluble solid formed in a solution reaction':'দ্রবণ বিক্রিয়ায় তৈরি অদ্রবণীয় কঠিন পদার্থ','A dissolved gas':'দ্রবীভূত গ্যাস','A pure solvent':'বিশুদ্ধ দ্রাবক','A catalyst only':'শুধু অনুঘটক'
};
function nctbChemBnOption(v){return NCTB_CHEM_OPTION_BN[String(v)]||bnOption(v)}

function bnQuestion(text){
 let s=String(text||'').trim();
 if(BN_DIRECT[s])return BN_DIRECT[s];
 if(/[\u0980-\u09FF]/.test(s))return s;
 const exact={
  'Which swordsman is a core member of the Straw Hat crew?':'স্ট্র হ্যাট ক্রু-এর কোন তলোয়ারযোদ্ধা মূল সদস্য?',
  'Which Straw Hat member is the crew’s navigator?':'স্ট্র হ্যাট ক্রু-এর কোন সদস্য নেভিগেটর?',
  'Which Straw Hat member is the crew’s cook?':'স্ট্র হ্যাট ক্রু-এর কোন সদস্য রাঁধুনি?',
  'Who is the captain of the Straw Hat Pirates?':'স্ট্র হ্যাট পাইরেটস-এর অধিনায়ক কে?',
  'Who is the archaeologist of the Straw Hat Pirates?':'স্ট্র হ্যাট পাইরেটস-এর প্রত্নতাত্ত্বিক কে?',
  'Who is the sniper of the Straw Hat Pirates?':'স্ট্র হ্যাট পাইরেটস-এর নিশানাবাজ কে?',
  'Who is the doctor of the Straw Hat Pirates?':'স্ট্র হ্যাট পাইরেটস-এর চিকিৎসক কে?',
  'Who is the shipwright of the Straw Hat Pirates?':'স্ট্র হ্যাট পাইরেটস-এর জাহাজ নির্মাতা কে?',
  'Who is the musician of the Straw Hat Pirates?':'স্ট্র হ্যাট পাইরেটস-এর সংগীতশিল্পী কে?',
  'What are Devil Fruits?':'ডেভিল ফ্রুট কী?',
  'What are Poneglyphs?':'পোনেগ্লিফ কী?',
  'What is Laugh Tale?':'লাফ টেল কী?',
  'What is Marineford?':'মেরিনফোর্ড কী?',
  'What is Wammy’s House?':'ওয়াম্মি’স হাউস কী?',
  'What is L’s real name?':'L-এর আসল নাম কী?',
  'What is Near’s real name?':'নিয়ার-এর আসল নাম কী?',
  'What is Mello’s real name?':'মেলো-এর আসল নাম কী?',
  'Can Shinigami Eyes reveal a person’s lifespan?':'শিনিগামি আইজ কি কোনো ব্যক্তির আয়ুষ্কাল দেখাতে পারে?',
  'What does SPK stand for in Death Note?':'Death Note-এ SPK-এর পূর্ণরূপ কী?'
 };
 if(exact[s])return exact[s];
 let t=s.replace(/^Scenario \d+:\s*/,'');
 const animeTerms=[
  [/Straw Hat Pirates/gi,'স্ট্র হ্যাট পাইরেটস'],[/Straw Hat crew/gi,'স্ট্র হ্যাট ক্রু'],[/Luffy’s/gi,'Luffy-এর'],[/Zoro’s/gi,'Zoro-এর'],[/Nami’s/gi,'Nami-এর'],[/Sanji’s/gi,'Sanji-এর'],[/Robin’s/gi,'Robin-এর'],[/signature straw hat/gi,'বিশেষ স্ট্র হ্যাট'],[/straw hat/gi,'স্ট্র হ্যাট'],[/major ship/gi,'প্রধান জাহাজ'],[/current ship/gi,'বর্তমান জাহাজ'],[/sea route/gi,'সমুদ্রপথ'],[/huge landmass/gi,'বিশাল স্থলভাগ'],[/special power system/gi,'বিশেষ ক্ষমতা ব্যবস্থা'],[/Devil Fruits/gi,'ডেভিল ফ্রুট'],[/Devil Fruit/gi,'ডেভিল ফ্রুট'],[/World Government/gi,'World Government'],[/Pirate King/gi,'পাইরেট কিং'],[/greatest swordsman/gi,'শ্রেষ্ঠ তলোয়ারযোদ্ধা'],[/long-term ambition/gi,'দীর্ঘমেয়াদি লক্ষ্য'],[/personal goal/gi,'ব্যক্তিগত লক্ষ্য'],[/Poneglyphs/gi,'পোনেগ্লিফ'],[/Laugh Tale/gi,'লাফ টেল'],[/One Piece/gi,'ওয়ান পিস'],[/older brother/gi,'বড় ভাই'],[/sworn brother/gi,'শপথ নেওয়া ভাই'],[/grandfather/gi,'দাদা'],[/father/gi,'বাবা'],[/giant elephant/gi,'বিশাল হাতি'],[/island-city/gi,'দ্বীপ-নগরী'],[/cyborg modifications/gi,'সাইবর্গ পরিবর্তন'],[/Three-Sword Style/gi,'থ্রি-সোর্ড স্টাইল'],[/power/gi,'ক্ষমতা'],[/technique/gi,'কৌশল'],[/nickname/gi,'ডাকনাম'],[/crew/gi,'ক্রু'],[/captain/gi,'অধিনায়ক'],[/navigator/gi,'নেভিগেটর'],[/cook/gi,'রাঁধুনি'],[/archaeologist/gi,'প্রত্নতাত্ত্বিক'],[/sniper/gi,'নিশানাবাজ'],[/doctor/gi,'চিকিৎসক'],[/shipwright/gi,'জাহাজ নির্মাতা'],[/musician/gi,'সংগীতশিল্পী'],[/swordsman/gi,'তলোয়ারযোদ্ধা'],[/member/gi,'সদস্য'],[/organization/gi,'সংগঠন'],[/military force/gi,'সামরিক বাহিনী'],[/world’s/gi,'বিশ্বের'],[/sea/gi,'সমুদ্র'],[/island/gi,'দ্বীপ'],[/country/gi,'দেশ'],[/ruler/gi,'শাসক'],[/island where/gi,'যে দ্বীপে'],[/trained during/gi,'প্রশিক্ষণ নিয়েছিল যে সময়ে']
 ];
 for(const [re,r] of animeTerms)t=t.replace(re,r);
 const replacements=[
  [/\bswordsman\b/gi,'তলোয়ারযোদ্ধা'],[/\bcore member\b/gi,'মূল সদস্য'],[/\bmember\b/gi,'সদস্য'],[/\bcrew\b/gi,'ক্রু'],[/\bcaptain\b/gi,'অধিনায়ক'],[/\bnavigator\b/gi,'নেভিগেটর'],[/\bcook\b/gi,'রাঁধুনি'],[/\barchaeologist\b/gi,'প্রত্নতাত্ত্বিক'],[/\bsniper\b/gi,'নিশানাবাজ'],[/\bdoctor\b/gi,'চিকিৎসক'],[/\bshipwright\b/gi,'জাহাজ নির্মাতা'],[/\bmusician\b/gi,'সংগীতশিল্পী'],[/\bfirst major ship\b/gi,'প্রথম প্রধান জাহাজ'],[/\bcurrent ship\b/gi,'বর্তমান জাহাজ'],[/\bpower system\b/gi,'ক্ষমতা ব্যবস্থা'],[/\bwillpower\b/gi,'ইচ্ছাশক্তি'],[/\bsense presence and intent\b/gi,'উপস্থিতি ও অভিপ্রায় অনুভব'],[/\bhardens the body or weapons\b/gi,'শরীর বা অস্ত্রকে শক্ত করে'],[/\boverwhelming the will of others\b/gi,'অন্যের ইচ্ছাশক্তিকে প্রভাবিত করা'],[/\borganization\b/gi,'সংগঠন'],[/\bmain military force\b/gi,'প্রধান সামরিক বাহিনী'],[/\bgreatest swordsman\b/gi,'শ্রেষ্ঠ তলোয়ারযোদ্ধা'],[/\blong-term ambition\b/gi,'দীর্ঘমেয়াদি লক্ষ্য'],[/\bdream\b/gi,'স্বপ্ন'],[/\bgoal\b/gi,'লক্ষ্য'],[/\bolder brother\b/gi,'বড় ভাই'],[/\bgrandfather\b/gi,'দাদা'],[/\bfather\b/gi,'বাবা'],[/\bdetective alias\b/gi,'গোয়েন্দা ছদ্মনাম'],[/\bgenius investigator\b/gi,'প্রতিভাবান তদন্তকারী'],[/\bmain human protagonist\b/gi,'প্রধান মানব চরিত্র'],[/\bsupernatural beings\b/gi,'অতিপ্রাকৃত সত্তা'],[/\bfemale idol\b/gi,'নারী আইডল'],[/\bnickname\b/gi,'ডাকনাম'],[/\bability\b/gi,'ক্ষমতা'],[/\bsuccessor\b/gi,'উত্তরসূরি'],[/\brival\b/gi,'প্রতিদ্বন্দ্বী'],[/\bpolice officer\b/gi,'পুলিশ কর্মকর্তা'],[/\binvestigator\b/gi,'তদন্তকারী'],[/\bassistant\b/gi,'সহকারী'],[/\bprofession\b/gi,'পেশা'],[/\breal name\b/gi,'আসল নাম'],[/\brealm\b/gi,'জগত'],[/\blifespan\b/gi,'আয়ুষ্কাল'],[/\blimitation\b/gi,'সীমাবদ্ধতা'],[/\binvestigation\b/gi,'তদন্ত'],[/\bposition\b/gi,'পদ'],[/\bconflict\b/gi,'দ্বন্দ্ব'],[/\bnotebook\b/gi,'নোটবুক']
 ];
 for(const [re,r] of replacements)t=t.replace(re,r);
 t=t.replace(/^Who is (.+)\?$/i,'$1 কে?');
 t=t.replace(/^What is the name of (.+)\?$/i,'$1-এর নাম কী?');
 t=t.replace(/^What is (.+)\?$/i,'$1 কী?');
 t=t.replace(/^What are (.+)\?$/i,'$1 কী?');
 t=t.replace(/^Which (.+)\?$/i,'কোন $1?');
 t=t.replace(/^Who was (.+)\?$/i,'$1 কে ছিলেন?');
 return t;
}
function bnMissionQuestion(q){
 const base=String(q.baseQuestion||q.question||'');
 const translatedBase=bnQuestion(base);
 const v=Math.abs(Number(q.variant)||0);
 const stem=BN_MISSION_STEMS[v%BN_MISSION_STEMS.length];
 const cycle=Math.floor(v/BN_MISSION_STEMS.length);
 const body=stem.replace('{q}',translatedBase);
 // The factual question stays intact, while every generated mission remains visibly unique.
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
  '9-10|রসায়ন':['রসায়নের ধারণা','পদার্থের অবস্থা','পদার্থের গঠন','পর্যায় সারণি','রাসায়নিক বন্ধন','মোলের ধারণা ও রাসায়নিক গণনা','রাসায়নিক বিক্রিয়া','রসায়ন ও শক্তি','এসিড-ক্ষার সমতা','খনিজ সম্পদ: ধাতু ও অধাতু','খনিজ সম্পদ: জীবাশ্ম','আমাদের জীবনে রসায়ন'],
  '9-10|জীববিজ্ঞান':['কোষ ও এর গঠন','কোষ বিভাজন','কোষ রসায়ন','অণুজীব','শৈবাল ও ছত্রাক','ব্রায়োফাইটা ও টেরিডোফাইটা','নগ্নবীজী ও আবৃতবীজী','উদ্ভিদের প্রজনন','জীবের শ্রেণিবিন্যাস','জেনেটিক্স ও বিবর্তন'],
  '9-10|উচ্চতর গণিত':['বীজগাণিতিক রাশি','জ্যামিতি','ত্রিকোণমিতি','সমীকরণ','সূচক ও লগারিদম','সম্ভাবনা','ভেক্টর','স্থানাঙ্ক জ্যামিতি','পরিসংখ্যান']
 };
 if(known[key])return known[key];
 const base=Array.from({length:10},(_,i)=>`অধ্যায় ${i+1}`);
 return base;
}
const NCTB_SUBJECT_SEED_MAP={
  'বাংলা':['Bangla Grammar'],
  'English':['English Grammar'],
  'গণিত':['Mathematics'],
  'উচ্চতর গণিত':['Mathematics'],
  'বিজ্ঞান':['Physics','Biology','Botany','Zoology','Environmental Science'],
  'পদার্থবিজ্ঞান':['Physics'],
  'রসায়ন':['Chemistry'],
  'জীববিজ্ঞান':['Biology','Botany','Zoology','Biotechnology','Microbiology','Molecular Biology'],
  'তথ্য ও যোগাযোগ প্রযুক্তি':['ICT'],
  'ডিজিটাল প্রযুক্তি':['ICT'],
  'বাংলাদেশ ও বিশ্বপরিচয়':['Bangladesh GK'],
  'ইসলাম শিক্ষা':['Islamic Knowledge','Hadith Studies'],
  'ইসলাম ও নৈতিক শিক্ষা':['Islamic Knowledge','Hadith Studies'],
  'ক্যারিয়ার শিক্ষা':['Job Prep','Teacher Prep','Primary Teacher']
};

// 2026 Class 9-10 Chemistry practice bank. These are original MCQs aligned to the chapter themes;
// they are not copied textbook passages. The NCTB engine uses Chemistry-only seeds for the Chemistry subject.
const NCTB_CHEMISTRY_PACK=[
['What does chemistry mainly study?','Matter and its changes',['Only planets','Only living cells','Only numbers'],'Chemistry deals with composition, properties and transformations of matter.','Chemistry'],
['Which laboratory practice is safest when heating a test tube?','Point it away from people',['Hold it toward the face','Seal it tightly','Touch the hot end'],'Heated contents can suddenly eject.','Lab Safety'],
['Which SI unit is commonly used for amount of substance?','Mole',['Gram','Litre','Kelvin'],'Amount of substance is measured in moles.','Mole'],
['Which state has a fixed volume but no fixed shape?','Liquid',['Solid','Gas','Plasma'],'A liquid flows and takes the container shape.','Matter'],
['Which state is highly compressible because particles are far apart?','Gas',['Solid','Liquid','Crystal'],'Gas particles have large average separations.','Gas'],
['What happens to most substances when heated?','Particles gain kinetic energy',['Particles stop moving','Mass becomes zero','Atoms disappear'],'Heating generally increases particle motion.','Heat'],
['Which particle has a positive elementary charge?','Proton',['Electron','Neutron','Photon'],'The proton is positively charged.','Proton'],
['Which particle has no electric charge?','Neutron',['Proton','Electron','Positron'],'A neutron is electrically neutral.','Neutron'],
['Which particle occupies the electron cloud?','Electron',['Proton','Neutron','Nucleus'],'Electrons are found outside the nucleus.','Electron'],
['What is the atomic number of an element equal to?','Number of protons',['Number of neutrons','Mass number','Number of shells'],'Atomic number is defined by proton count.','Atomic Number'],
['What does the mass number represent?','Protons plus neutrons',['Only electrons','Only protons','Only neutrons'],'Mass number counts nucleons.','Mass Number'],
['What are atoms of the same element with different neutron numbers called?','Isotopes',['Ions','Allotropes','Molecules'],'Isotopes share proton number but differ in neutrons.','Isotope'],
['Which scientist is associated with the nuclear model of the atom?','Ernest Rutherford',['Dmitri Mendeleev','Avogadro','Boyle'],'Rutherford’s scattering experiment supported a nuclear atom.','Rutherford'],
['Who proposed the periodic law associated with the periodic table?','Dmitri Mendeleev',['Rutherford','Faraday','Pasteur'],'Mendeleev organized elements by recurring properties.','Periodic Table'],
['What generally happens to atomic radius across a period from left to right?','It tends to decrease',['It always doubles','It tends to increase greatly','It becomes zero'],'Effective nuclear attraction generally increases across a period.','Atomic Radius'],
['Which group contains the alkali metals?','Group 1',['Group 2','Group 17','Group 18'],'Lithium, sodium and potassium are Group 1 elements.','Alkali Metals'],
['Which group contains the halogens?','Group 17',['Group 1','Group 2','Group 18'],'Fluorine and chlorine are halogens.','Halogens'],
['Which group contains the noble gases?','Group 18',['Group 1','Group 17','Group 16'],'Helium, neon and argon are noble gases.','Noble Gases'],
['What type of bond forms by transfer of electrons?','Ionic bond',['Covalent bond','Metallic bond','Hydrogen bond'],'Ionic bonding involves oppositely charged ions.','Ionic Bond'],
['What type of bond forms by sharing electron pairs?','Covalent bond',['Ionic bond','Metallic bond','Nuclear bond'],'Covalent bonds involve shared electron pairs.','Covalent Bond'],
['What is the usual charge of a sodium ion?','+1',['-1','+2','0'],'Sodium loses one valence electron.','Sodium Ion'],
['What is the usual charge of a chloride ion?','-1',['+1','+2','0'],'Chlorine commonly gains one electron.','Chloride Ion'],
['What does one mole contain approximately?','6.022 × 10²³ particles',['6.022 × 10² particles','9.8 × 10²³ particles','3.0 × 10⁸ particles'],'This is Avogadro’s constant.','Avogadro Constant'],
['What is molar mass measured in?','g/mol',['kg only','L/mol','mol/g²'],'Molar mass is mass per mole.','Molar Mass'],
['What is the molar mass of water approximately?','18 g/mol',['2 g/mol','16 g/mol','44 g/mol'],'H₂O has two H atoms and one O atom.','Water'],
['Which equation represents a balanced chemical reaction?','2H₂ + O₂ → 2H₂O',['H₂ + O₂ → H₂O₂','H₂ + O₂ → H₂O','H₂ + 2O₂ → H₂O'],'The number of each atom is conserved.','Balanced Equation'],
['What is oxidation commonly associated with?','Loss of electrons',['Gain of protons','Loss of neutrons','Gain of nuclei'],'In electron-transfer terms, oxidation is loss of electrons.','Oxidation'],
['What is reduction commonly associated with?','Gain of electrons',['Loss of electrons','Gain of protons','Loss of nuclei'],'Reduction is electron gain.','Reduction'],
['What is a catalyst?','A substance that changes reaction rate without being consumed overall',['A permanent product','A solvent only','A reactant that disappears completely'],'Catalysts provide an alternative reaction pathway.','Catalyst'],
['What does an exothermic reaction do?','Releases heat to surroundings',['Absorbs all heat','Stops particle motion','Creates matter'],'Exothermic reactions release energy as heat.','Exothermic'],
['What does an endothermic reaction do?','Absorbs heat from surroundings',['Always releases heat','Destroys energy','Produces no energy change'],'Endothermic processes require energy input.','Endothermic'],
['What is the pH of a neutral aqueous solution at 25°C?','7',['0','5','14'],'Neutral water is approximately pH 7 at 25°C.','pH'],
['A solution with pH 3 is how compared with pH 7?','More acidic',['More basic','Neutral','Always salty'],'Lower pH indicates greater acidity in the usual aqueous scale.','Acidity'],
['Which ion is characteristic of acidic aqueous solutions?','H⁺',['OH⁻ only','Na⁺ only','Cl⁻ only'],'Acidity is associated with hydrogen ions.','Acid'],
['Which ion is characteristic of basic aqueous solutions?','OH⁻',['H⁺ only','Na⁺ only','Cl⁻ only'],'Bases in water are associated with hydroxide ions.','Base'],
['What is formed when an acid reacts with a base in neutralization?','Salt and water',['Only oxygen','Only metal','Only hydrogen gas'],'Neutralization commonly forms salt and water.','Neutralization'],
['Which acid is commonly found in vinegar?','Acetic acid',['Sulfuric acid','Nitric acid','Hydrochloric acid'],'Acetic acid gives vinegar its characteristic acidity.','Acetic Acid'],
['Which gas is needed for ordinary combustion?','Oxygen',['Nitrogen','Helium','Neon'],'Oxygen is the common atmospheric oxidizer for combustion.','Combustion'],
['Rusting of iron requires oxygen and what else?','Moisture',['Helium','Pure nitrogen','Only sunlight'],'Water/moisture is involved in ordinary rusting.','Rust'],
['Which metal is commonly extracted from bauxite?','Aluminium',['Copper','Iron','Sodium'],'Bauxite is the principal ore of aluminium.','Aluminium'],
['Which metal is commonly obtained from hematite?','Iron',['Aluminium','Sodium','Calcium'],'Hematite is an iron ore.','Iron Ore'],
['Which non-metal is essential for respiration?','Oxygen',['Neon','Argon','Helium'],'Aerobic respiration uses oxygen.','Oxygen'],
['Which fossil fuel is a major source of hydrocarbons?','Petroleum',['Quartz','Limestone only','Salt'],'Petroleum is a mixture rich in hydrocarbons.','Petroleum'],
['What is the main combustible component of natural gas?','Methane',['Oxygen','Nitrogen','Carbon monoxide'],'Methane is the main component of natural gas.','Methane'],
['What is an organic compound mainly characterized by?','Carbon-based molecular frameworks',['Only metals','Only salts','Only water'],'Organic chemistry primarily studies carbon compounds.','Organic Chemistry'],
['Which hydrocarbon is saturated and contains only single C–C bonds?','Alkane',['Alkene','Alkyne','Arene only'],'Alkanes are saturated hydrocarbons.','Alkane'],
['Which hydrocarbon contains a carbon-carbon double bond?','Alkene',['Alkane','Alkyne','Salt'],'Alkenes contain at least one C=C bond.','Alkene'],
['Which hydrocarbon contains a carbon-carbon triple bond?','Alkyne',['Alkane','Alkene','Alcohol'],'Alkynes contain at least one C≡C bond.','Alkyne'],
['Which alcohol is commonly represented by CH₃OH?','Methanol',['Ethanol','Propanol','Ethanoic acid'],'CH₃OH is methanol.','Methanol'],
['Which alcohol is commonly present in alcoholic beverages?','Ethanol',['Methanol','Propanol only','Ethanoic acid'],'Ethanol is the principal beverage alcohol.','Ethanol'],
['What is the main purpose of a fume hood in a laboratory?','To remove hazardous vapours from the breathing zone',['To increase flame temperature','To store books','To measure pH'],'A fume hood controls exposure to volatile hazards.','Fume Hood'],
['Which instrument is commonly used to measure liquid volume accurately in a laboratory?','Graduated cylinder',['Thermometer','Balance only','Microscope'],'A graduated cylinder is designed for liquid-volume measurement.','Graduated Cylinder'],
['Which instrument measures mass in a laboratory?','Balance',['Burette','Thermometer','pH paper'],'A balance measures mass.','Laboratory Balance'],
['What is a solution?','A homogeneous mixture',['A pure element only','A solid crystal only','A gas atom only'],'A solution is homogeneous at the macroscopic level.','Solution'],
['What is the solute in a solution?','The substance that is dissolved',['The container','Only the solvent','The thermometer'],'The solute is dispersed in the solvent.','Solute'],
['What is the solvent?','The component that dissolves the solute',['Only the solid product','Only the gas','The precipitate'],'The solvent is the dissolving medium.','Solvent'],
['What does concentration describe?','Amount of solute relative to a given amount of solution or solvent',['Only colour','Only temperature','Only pressure'],'Concentration quantifies how much solute is present.','Concentration'],
['Which process separates a soluble solid from a solution by removing solvent?','Evaporation',['Filtration only','Magnetism','Sedimentation only'],'Evaporation leaves dissolved solid behind.','Evaporation'],
['Which method separates an insoluble solid from a liquid?','Filtration',['Distillation only','Chromatography only','Sublimation only'],'A filter retains insoluble solid particles.','Filtration'],
['Which method separates liquids using different boiling points?','Distillation',['Filtration','Magnetic separation','Decantation only'],'Distillation relies on vaporization and condensation.','Distillation'],
['What is a precipitate?','An insoluble solid formed in a solution reaction',['A dissolved gas','A pure solvent','A catalyst only'],'A precipitate separates as a solid from solution.','Precipitate']
];

const BASE_STATE={level:1,xp:0,retryCount:0,completed:[],maxUnlocked:1,rewarded:[],materials:['Stone','Wood'],categoryMode:false,categoryKey:'',categorySubs:[],categoryCursor:0,categoryProgress:{},language:'bn',difficulty:'All',setupDone:false,challengeMode:false,challengeDuration:5,challengeStartedAt:0,challengeIndex:0,challengeStats:{total:0,correct:0,wrong:0},challengePool:[],gameMode:false,gameLevel:1,gameXp:0,gameRetryCount:0,gameCompleted:[],gameMaxUnlocked:1,gameRewarded:[],gameSeenIds:[],gameMaterials:['Stone','Wood'],nctbMode:false,nctbClass:'6',nctbSubject:'গণিত',nctbChapters:[],nctbCursor:0,replayLevel:false};
let state={...BASE_STATE};
try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||localStorage.getItem('elementGameSave_v8000')||'null');if(saved)state={...BASE_STATE,...saved};else{const legacy=JSON.parse(localStorage.getItem('elementGameSave_v5000')||localStorage.getItem('elementGameSave')||'null');if(legacy)state={...BASE_STATE,level:Number(legacy.level)||1,xp:Number(legacy.xp)||0,retryCount:Number(legacy.retryCount)||0,completed:Array.isArray(legacy.completed)?legacy.completed:[],maxUnlocked:Number(legacy.maxUnlocked)||Number(legacy.level)||1,rewarded:Array.isArray(legacy.rewarded)?legacy.rewarded:[],materials:Array.isArray(legacy.materials)?legacy.materials:['Stone','Wood'],language:'bn',difficulty:'All',setupDone:false,challengeMode:false,challengeDuration:5,challengeStartedAt:0,challengeIndex:0,challengeStats:{total:0,correct:0,wrong:0},challengePool:[],gameMode:false,gameLevel:1,gameXp:0,gameRetryCount:0,gameCompleted:[],gameMaxUnlocked:1,gameRewarded:[],gameSeenIds:[],gameMaterials:['Stone','Wood'],nctbMode:false,nctbClass:'6',nctbSubject:'গণিত',nctbChapters:[],nctbCursor:0,replayLevel:false};}}catch(e){}
state.completed=Array.isArray(state.completed)?state.completed:[];state.categorySeenBase=state.categorySeenBase&&typeof state.categorySeenBase==='object'?state.categorySeenBase:{};state.seenMissionIds=Array.isArray(state.seenMissionIds)?state.seenMissionIds:[];state.challengeSeenIds=Array.isArray(state.challengeSeenIds)?state.challengeSeenIds:[];state.rewarded=Array.isArray(state.rewarded)?state.rewarded:[];state.materials=Array.isArray(state.materials)?state.materials:['Stone','Wood'];state.categorySubs=Array.isArray(state.categorySubs)?state.categorySubs:[];state.categoryProgress=state.categoryProgress&&typeof state.categoryProgress==='object'?state.categoryProgress:{};state.maxUnlocked=Math.max(1,Math.min(TOTAL_LEVELS,Number(state.maxUnlocked)||1));state.level=Math.max(1,Math.min(TOTAL_LEVELS,Number(state.level)||1));if(!['en','bn'].includes(state.language))state.language='bn';if(!DIFFICULTIES.includes(state.difficulty))state.difficulty='All';state.challengeDuration=Math.max(3,Math.min(60,Number(state.challengeDuration)||5));state.challengeStats=state.challengeStats&&typeof state.challengeStats==='object'?state.challengeStats:{total:0,correct:0,wrong:0};state.nctbChapters=Array.isArray(state.nctbChapters)?state.nctbChapters:[];state.nctbClass=state.nctbClass||'6';state.nctbSubject=state.nctbSubject||'গণিত';state.challengeMode=false;state.gameMode=Boolean(state.gameMode);state.gameLevel=Math.max(1,Math.min(GAME_TOTAL_LEVELS,Number(state.gameLevel)||1));state.gameXp=Math.max(0,Number(state.gameXp)||0);state.gameRetryCount=Math.max(0,Number(state.gameRetryCount)||0);state.gameCompleted=Array.isArray(state.gameCompleted)?state.gameCompleted:[];state.gameMaxUnlocked=Math.max(1,Math.min(GAME_TOTAL_LEVELS,Number(state.gameMaxUnlocked)||1));state.gameRewarded=Array.isArray(state.gameRewarded)?state.gameRewarded:[];state.gameSeenIds=Array.isArray(state.gameSeenIds)?state.gameSeenIds:[];state.gameMaterials=Array.isArray(state.gameMaterials)?state.gameMaterials:['Stone','Wood'];state.nctbMode=false;state.replayLevel=Boolean(state.replayLevel);
let pendingLevelUp=false;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));const el=document.getElementById('saveStatus');if(el)el.textContent=state.language==='bn'?'লোকালি সেভ হয়েছে':'Saved locally'}
function isCompleted(level){return state.completed.includes(level)}
function markCompleted(level){if(!isCompleted(level))state.completed.push(level)}
function getRandomPool(){const list=MISSION_BANK.filter(m=>state.difficulty==='All'||m.difficulty===state.difficulty);return list.length?list:MISSION_BANK}
function randomMission(){
 const pool=getRandomPool();
 if(!pool.length)return null;
 const idx=Math.max(0,Math.min(pool.length-1,state.level-1));
 const direct=pool[idx];
 if(state.replayLevel)return direct;
 if(direct && !state.seenMissionIds.includes(direct.id))return direct;
 const fresh=pool.filter(q=>!state.seenMissionIds.includes(q.id));
 return fresh[0]||null;
}
function categoryPool(){if(!state.categoryKey||!state.categorySubs.length)return[];let pool=MISSION_BANK.filter(m=>m.categoryKey===state.categoryKey&&state.categorySubs.includes(m.subCategory));if(state.difficulty!=='All')pool=pool.filter(m=>m.difficulty===state.difficulty);return pool}
function categorySessionKey(){return `${state.categoryKey}|${[...state.categorySubs].sort().join(',')}|${state.difficulty}`}
function categoryProgress(){const key=categorySessionKey();if(!state.categoryProgress[key])state.categoryProgress[key]={unlocked:1,completed:[],seenIds:[],seenBases:[]};const p=state.categoryProgress[key];p.seenIds=Array.isArray(p.seenIds)?p.seenIds:[];p.seenBases=Array.isArray(p.seenBases)?p.seenBases:[];p.unlocked=Math.max(1,Math.min(categoryPool().length||1,Number(p.unlocked)||1));p.completed=Array.isArray(p.completed)?p.completed:[];return p}
function gameCurrent(){const q=GAME_LEVELS[Math.max(0,Math.min(GAME_TOTAL_LEVELS-1,state.gameLevel-1))];return q||GAME_LEVELS[0]}
function currentQ(){
 if(state.gameMode)return gameCurrent();
 if(state.challengeMode)return challengeCurrent();
 if(state.nctbMode)return nctbCurrent();
 if(!state.categoryMode)return randomMission();
 const pool=categoryPool();
 const idx=Math.max(0,Math.min(pool.length-1,(Number(state.categoryCursor)||0)));
 const direct=pool[idx];
 const p=categoryProgress();
 if(state.replayLevel)return direct||pool[0]||randomMission();
 if(direct && !p.seenIds.includes(direct.id))return direct;
 const fresh=pool.filter(x=>!p.seenIds.includes(x.id));
 return fresh[0]||null;
}
function displayText(text){return state.language==='bn'?bnText(text):String(text??'')}
function displayQuestion(q){if(state.gameMode){return state.language==='bn'?bnMissionQuestion(q):q.question}if(state.nctbMode){const core=state.language==='bn'?nctbChemBnQuestion(q.baseQuestion):String(q.baseQuestion||q.question);return `${state.language==='bn'?'অধ্যায়':'Chapter'}: ${q.subCategory} — ${core}`}if(state.language==='bn')return bnMissionQuestion(q);return q.question}
function nctbChemBnQuestion(text){return NCTB_CHEM_BN[String(text)]||bnQuestion(text)}
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
function gameArtifactDisplay(q){if(!state.gameMode)return displayText(q.artifact);const m=GAME_MILESTONES[q.gameLevel];if(state.language==='bn'&&m)return m[1];return String(q.artifact||'')}
function gameStageDisplay(level){const s=gameStageFor(level);return state.language==='bn'?s[3]:s[0]}
function showSuccessFabricator(q){const p=document.getElementById('fabricatorSuccess'),v=document.getElementById('fabricatorVisual'),cap=document.getElementById('fabCaption'),st=document.getElementById('fabState');if(!p||!v)return;const artifactLabel=gameArtifactDisplay(q),stageLabel=state.gameMode?gameStageDisplay(q.gameLevel):displayText(q.subCategory);st.textContent=state.language==='bn'?'DISCOVERY FABRICATED':'DISCOVERY FABRICATED';const particles=Array.from({length:30},(_,i)=>`<i class="particle" style="--x:${((i*37)%180)-90}px;--y:${((i*61)%160)-80}px;left:${8+(i*13)%84}%;top:${10+(i*17)%78}%"></i>`).join('');v.innerHTML=`<div class="forge-particles">${particles}</div><div class="product-core"><div class="product-picture">${productArt(q.artifact)}</div><strong>${escapeHTML(artifactLabel)}</strong><small>${escapeHTML(stageLabel.toUpperCase())}</small></div>`;cap.textContent=state.language==='bn'?`${stageLabel} → ${artifactLabel} • মিশন সম্পন্ন`:`${stageLabel} → ${artifactLabel} • Mission complete`;p.classList.add('show');p.setAttribute('aria-hidden','false')}
function renderMaterials(){const el=document.getElementById('materials');if(!el)return;const items=state.gameMode?state.gameMaterials:state.materials;el.innerHTML=items.slice(-40).map(x=>`<span class="chip">${escapeHTML(displayText(x))}</span>`).join('')}
function renderScientists(){const el=document.getElementById('scientists');if(!el)return;el.innerHTML=scientistsBase.map(s=>`<div class="scientist ${state.rewarded.includes(s[0])?'done':'locked'}"><div><b>${escapeHTML(s[1])}</b><br><span>${state.language==='bn'?'লেভেল':'Level'} ${s[0]}</span></div><span>${state.rewarded.includes(s[0])?'✓':'🔒'}</span></div>`).join('')}
function renderLevelMap(){const el=document.getElementById('levelMap');if(!el)return;const game=state.gameMode;const total=game?GAME_TOTAL_LEVELS:(state.categoryMode?categoryLevelCount():levelCount());const p=state.categoryMode?categoryProgress():{unlocked:Math.min(game?state.gameMaxUnlocked:state.maxUnlocked,total),completed:game?state.gameCompleted:state.completed};const maxUnlocked=Math.max(1,Math.min(total,p.unlocked||1));const start=Math.max(1,maxUnlocked-120),end=maxUnlocked;let html='';for(let l=start;l<=end;l++){const done=game?p.completed.includes(l):state.categoryMode?p.completed.includes(l):isCompleted(l);const cur=game?l===state.gameLevel:(l===(state.categoryCursor+1)&&state.categoryMode || (!state.categoryMode&&l===state.level));html+=`<button class="level-cell ${cur?'current':done?'done':'unlocked'}" data-level="${l}">${l}</button>`}el.innerHTML=html;el.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>loadMapLevel(Number(b.dataset.level)));const info=document.getElementById('mapInfo');if(info)info.textContent=game?`${state.language==='bn'?'Game Unlocked':'Game Unlocked'}: ${state.gameMaxUnlocked} / ${GAME_TOTAL_LEVELS}`:state.categoryMode?`${state.language==='bn'?'Category Level':'Category Level'} ${Math.min(state.categoryCursor+1,maxUnlocked)} / ${total} • ${state.categorySubs.join(' + ')}`:`${state.language==='bn'?'Unlocked':'Unlocked'}: ${state.maxUnlocked} / ${TOTAL_LEVELS}`}
function loadMapLevel(level){if(state.gameMode){if(level>state.gameMaxUnlocked){setMessage(state.language==='bn'?`Game Level ${level} এখনো unlock হয়নি।`:`Game Level ${level} is not unlocked yet.`,'bad');return}state.gameLevel=level;state.replayLevel=true;state.gameRetryCount=0;pendingLevelUp=false;hideFabricator();document.getElementById('levelMapModal')?.classList.add('hidden');render();save();return}if(state.categoryMode){const p=categoryProgress();if(level>p.unlocked){setMessage(state.language==='bn'?`এই category-তে Level ${level} এখনো unlock হয়নি।`:`Category Level ${level} is not unlocked yet.`,'bad');return}state.categoryCursor=level-1;state.replayLevel=true;pendingLevelUp=false;hideFabricator();document.getElementById('levelMapModal')?.classList.add('hidden');render();return}if(level>state.maxUnlocked){setMessage(`Level ${level} is not unlocked yet.`,'bad');return}state.level=level;state.replayLevel=true;state.retryCount=0;pendingLevelUp=false;hideFabricator();document.getElementById('levelMapModal')?.classList.add('hidden');render();save()}
function challengePool(){let p=MISSION_BANK.filter(m=>state.categoryKey===m.categoryKey&&state.categorySubs.includes(m.subCategory));if(state.difficulty!=='All')p=p.filter(m=>m.difficulty===state.difficulty);p=[...new Map(p.map(x=>[x.id,x])).values()];return shuffle(p,`${state.categoryKey}|${state.categorySubs.join(',')}|${state.difficulty}|challenge`)}
function nctbSubjectSeeds(){
 const mapped=NCTB_SUBJECT_SEED_MAP[state.nctbSubject]||[state.nctbSubject];
 if(state.nctbSubject==='রসায়ন') return NCTB_CHEMISTRY_PACK.map((x,i)=>['Chemistry',x[0],x[1],x[2],x[3],x[4],i]);
 let seeds=[];
 for(const subject of mapped) seeds.push(...SEED_FACTS.filter(f=>String(f[0])===subject));
 return seeds;
}
function nctbPool(){
 const chapters=state.nctbChapters||[]; const out=[];
 const seeds=nctbSubjectSeeds();
 if(!chapters.length||!seeds.length)return out;
 const forms=state.nctbSubject==='রসায়ন' ? [
  'Board practice: {q}', 'Concept check: {q}', 'Chapter mastery: {q}', 'Exam checkpoint: {q}',
  'Application check: {q}', 'Recall test: {q}', 'Precision check: {q}', 'Understanding check: {q}',
  'MCQ checkpoint: {q}', 'Scholar checkpoint: {q}'
 ] : [
  'Board practice: {q}', 'Concept check: {q}', 'Chapter mastery: {q}', 'Exam checkpoint: {q}',
  'Application check: {q}', 'Recall test: {q}', 'Precision check: {q}', 'Understanding check: {q}',
  'MCQ checkpoint: {q}', 'Scholar checkpoint: {q}'
 ];
 chapters.forEach((chapter,chapterIndex)=>{
   const seen=new Set();
   // Always create exactly 40 unique displayed questions per selected chapter when a subject pack exists.
   for(let i=0;i<40;i++){
     const seed=seeds[(i+chapterIndex*17)%seeds.length];
     const form=forms[(i+chapterIndex)%forms.length];
     const base=String(seed[1]);
     const question=`${form.replace('{q}',base)} • ${chapter} • ${i+1}`;
     const fingerprint=question.toLowerCase();
     if(seen.has(fingerprint)){continue}
     seen.add(fingerprint);
     const options=shuffle([seed[2],...seed[3]],hash(`nctb-v15|${state.nctbClass}|${state.nctbSubject}|${chapter}|${i}`));
     out.push({
       id:`nctb-v15-${state.nctbClass}-${hash(state.nctbSubject)}-${hash(chapter)}-${i}`,
       categoryKey:'nctb',subCategory:chapter,subject:state.nctbSubject,
       baseQuestion:base,question,answer:seed[2],options,answerIndex:options.indexOf(seed[2]),
       hint:seed[4],artifact:seed[5]||chapter,difficulty:i%3===0?'Hard':i%3===1?'Medium':'Easy',nctb:true,
       nctbChapterIndex:chapterIndex,nctbQuestionNo:i+1
     });
   }
 });
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
 state.gameMode=false;state.challengeMode=true;state.nctbMode=false;state.challengeDuration=Math.max(3,Math.min(60,Number(state.challengeDuration)||5));state.challengeStartedAt=Date.now();state.challengeIndex=0;state.challengeStats={total:0,correct:0,wrong:0};state.challengePool=[...new Set(pool.map(x=>x.id))];state.challengeSeenIds=[];pendingLevelUp=false;state.retryCount=0;save();document.getElementById('playHub').classList.add('hidden');startChallengeTimer();render();
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
function startNCTB(){const pool=nctbPool();if(!state.nctbChapters.length){setMessage(state.language==='bn'?'কমপক্ষে একটি অধ্যায় নির্বাচন করুন।':'Select at least one chapter.','bad');return}state.gameMode=false;state.nctbMode=true;state.challengeMode=false;state.nctbCursor=0;state.nctbPoolIds=pool.map(x=>x.id);save();document.getElementById('playHub').classList.add('hidden');render()}
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
  return fresh.length?fresh[0]:null;
}

function render(){
 const q=currentQ();
 if(!q){const msg=state.language==='bn'?'এই মোডের সব আলাদা প্রশ্ন সম্পন্ন হয়েছে। নতুন প্রশ্নের জন্য অন্য category/sub-category বেছে নিন।':'All unique questions in this mode are complete. Choose another category/sub-category for new questions.';setMessage(msg,'good');const goal=document.getElementById('goal');if(goal)goal.textContent=msg;const opts=document.getElementById('options');if(opts)opts.innerHTML='';return}
 const cat=categoryDefinitionForQuestion(q);
 const total=state.gameMode?GAME_TOTAL_LEVELS:state.challengeMode?(state.challengePool?.length||1):state.nctbMode?nctbPool().length:state.categoryMode?categoryLevelCount():levelCount();
 const current=state.gameMode?state.gameLevel:state.challengeMode?Math.min(total,(state.challengeIndex||0)+1):state.nctbMode?Math.min(total,(state.nctbCursor||0)+1):state.categoryMode?Math.min(total,(state.categoryCursor||0)+1):Math.min(total,state.level);
 const diff=state.challengeMode?state.difficulty:state.categoryMode?state.difficulty:difficultyForLevel(state.level);
 document.getElementById('level').textContent=state.gameMode?`GAME ${current} / ${GAME_TOTAL_LEVELS}`:state.challengeMode?`CHALLENGE ${current} / ${total}`:state.nctbMode?`NCTB ${current} / ${total}`:state.categoryMode?`${state.language==='bn'?'লেভেল':'LEVEL'} ${current} / ${total}`:`${current} / ${total}`;
 document.getElementById('era').textContent=state.gameMode?gameStageDisplay(state.gameLevel):state.nctbMode?`${state.nctbClass} • ${state.nctbSubject}`:state.challengeMode?(cat?.label||q.subCategory):cat.label;
 document.getElementById('xp').textContent=state.gameMode?state.gameXp:state.xp;
 document.getElementById('retryCount').textContent=state.gameMode?`${state.gameRetryCount} / 3`:state.challengeMode?`${state.challengeStats.correct}✓ ${state.challengeStats.wrong}✕`:`${state.retryCount} / 3`;
 document.getElementById('discovery').textContent=state.gameMode?`${state.gameCompleted.length} / ${GAME_TOTAL_LEVELS}`:`${state.completed.length} / ${TOTAL_LEVELS}`;
 document.getElementById('bar').style.width=(current/Math.max(1,total)*100)+'%';
 document.getElementById('phase').textContent=state.gameMode?gameStageFor(state.gameLevel)[0].toUpperCase():state.nctbMode?`NCTB 2026 • CLASS ${state.nctbClass} • ${String(state.nctbSubject).toUpperCase()}`:state.challengeMode?`CHALLENGE MODE • ${state.challengeDuration} MIN`:state.categoryMode?`${cat.label.toUpperCase()} • ${q.subCategory.toUpperCase()}`:eraFor(state.level)[0].toUpperCase();
 document.getElementById('difficulty').textContent=state.gameMode?'BUILD MODE':state.challengeMode?`${state.difficulty==='All'?'ALL':state.difficulty}`:state.nctbMode?'BOARD PRACTICE':state.categoryMode?`${state.difficulty==='All'?'ALL':state.difficulty}`:diff;
 document.getElementById('missionTag').textContent=state.gameMode?`GAME • LEVEL ${current}`:state.challengeMode?`CHALLENGE • ${q.subCategory.toUpperCase()}`:state.nctbMode?`NCTB • ${q.subCategory.toUpperCase()}`:state.categoryMode?`CATEGORY • ${q.subCategory.toUpperCase()}`:`LEVEL ${current} • ${q.subCategory.toUpperCase()}`;
 const modeTag=document.getElementById('modeTag');if(modeTag)modeTag.textContent=state.gameMode?'🎮 GENESIS GAME':state.challengeMode?'⚡ CHALLENGE MODE':state.nctbMode?'📚 NCTB 2026':state.categoryMode?`CATEGORY LEVEL • ${current}`:'RANDOM JOURNEY';
 const goal=document.getElementById('goal');
 goal.innerHTML=`<span class="q-${state.language}">${escapeHTML(displayQuestion(q))}</span>`;
 const opts=document.getElementById('options');
 opts.innerHTML=q.options.map((x,i)=>`<button class="option" data-i="${i}"><span class="num">${String.fromCharCode(65+i)}</span><strong>${escapeHTML(state.language==='bn'?(state.nctbMode&&state.nctbSubject==='রসায়ন'?nctbChemBnOption(x):bnOption(x)):String(x))}</strong>${state.challengeMode?'':'<small></small>'}</button>`).join('');
 opts.querySelectorAll('.option').forEach(b=>b.onclick=()=>choose(Number(b.dataset.i)));
 resetQuestionUI();
 setMessage(state.challengeMode?(state.language==='bn'?`সময়: ${formatTimer(Math.max(0,state.challengeDuration*60-Math.floor((Date.now()-state.challengeStartedAt)/1000)))} • প্রশ্ন শেষ না হওয়া পর্যন্ত এগোবে।`:`Time: ${formatTimer(Math.max(0,state.challengeDuration*60-Math.floor((Date.now()-state.challengeStartedAt)/1000)))} • Questions continue until time is up.`):state.nctbMode?(state.language==='bn'?`${q.subCategory} • ${current} / ${total} • প্রতি অধ্যায়ে 40টি আলাদা checkpoint।`:`${q.subCategory} • ${current} / ${total} • 40 chapter checkpoints.`):state.categoryMode?(state.language==='bn'?`${cat.label} → ${q.subCategory} • ${current} / ${total} • Category progress আলাদা করে save হয়।`:`${cat.label} → ${q.subCategory} • ${current} / ${total} • Category progress is saved separately.`):(isCompleted(state.level)?'✓ Discovered already — replay anytime from Level Archive.':''),state.challengeMode?'':'good');
 const build=document.getElementById('gameBuildTrack');if(build){build.classList.toggle('hidden-ui',!state.gameMode);if(state.gameMode){const gs=gameStageFor(state.gameLevel),next=GAME_MILESTONES[state.gameLevel]||GAME_MILESTONES[Math.min(GAME_TOTAL_LEVELS,Math.ceil(state.gameLevel/10)*10)];document.getElementById('gameBuildTitle').textContent=state.language==='bn'?gs[3]:gs[0];document.getElementById('gameBuildNext').textContent=next?(state.language==='bn'?next[1]:next[0]):gs[4];document.getElementById('gameBuildLevel').textContent=`${state.gameLevel} / ${GAME_TOTAL_LEVELS}`}}hideFabricator();document.getElementById('nextLevel').classList.add('hidden-next');document.getElementById('nextLevel').classList.remove('next-level-show');
 document.getElementById('exitCategory').classList.toggle('hidden-ui',!(state.gameMode||state.categoryMode||state.nctbMode||state.challengeMode));if(state.gameMode)document.getElementById('exitCategory').textContent=state.language==='bn'?'← PLAY HUB':'← PLAY HUB';else if(state.categoryMode)document.getElementById('exitCategory').textContent=state.language==='bn'?'← RANDOM JOURNEY':'← BACK TO RANDOM JOURNEY';document.getElementById('categoryMapBtn').classList.toggle('hidden-ui',!state.categoryMode);document.getElementById('gameMapBtn').classList.toggle('hidden-ui',!state.gameMode);document.getElementById('challengeTimer').classList.toggle('hidden-ui',!state.challengeMode);
 renderMaterials();renderScientists();renderLevelMap();
}
function choose(index){
 if(pendingLevelUp)return;
 const q=currentQ();
 const correct=index===q.answerIndex;

 if(state.gameMode){
   if(!correct){state.gameRetryCount++;playAnswerSound('wrong');flashAnswer('wrong');if(state.gameRetryCount>=3){const old=state.gameLevel;state.gameLevel=Math.max(1,old-5);state.gameRetryCount=0;save();document.querySelectorAll('.option').forEach(b=>b.disabled=true);setMessage(state.language==='bn'?`✕ ৩টি ভুল হয়েছে। Game Level ${old} → ${state.gameLevel} (৫ Level penalty)।`:`✕ 3 mistakes. Game Level ${old} → ${state.gameLevel} (5-level penalty).`,'bad');setTimeout(()=>render(),1100)}else{save();setMessage(state.language==='bn'?`✕ ভুল — ${state.gameRetryCount}/3। HINT ব্যবহার করতে পারো।`:`✕ Incorrect — ${state.gameRetryCount}/3. Use HINT.`,'bad')}return}
   pendingLevelUp=true;state.gameRetryCount=0;playAnswerSound('correct');flashAnswer('correct');document.querySelectorAll('.option').forEach(b=>b.disabled=true);const freshGame=!state.gameCompleted.includes(state.gameLevel);if(freshGame)state.gameCompleted.push(state.gameLevel);state.gameMaxUnlocked=Math.max(state.gameMaxUnlocked,Math.min(GAME_TOTAL_LEVELS,state.gameLevel+1));if(freshGame){state.gameXp+=100;state.gameMaterials.push(q.artifact)}if(!state.gameSeenIds.includes(q.id))state.gameSeenIds.push(q.id);save();setMessage(state.language==='bn'?`✓ সঠিক! ${gameArtifactDisplay(q)} তৈরি হয়েছে।`:`✓ Correct! ${q.artifact} fabricated.`,'good');showSuccessFabricator(q);const next=document.getElementById('nextLevel');next.textContent=state.gameLevel>=GAME_TOTAL_LEVELS?'CLAIM OMNIVERSE ★':'NEXT BUILD →';setTimeout(()=>next.classList.remove('hidden-next'),950);return}

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
     state.retryCount++;
     playAnswerSound('wrong');
     flashAnswer('wrong');
     setMessage(state.language==='bn'?'✕ ভুল উত্তর। আবার চেষ্টা করুন।':'✕ Incorrect. Try again.','bad');
     return;
   }
   playAnswerSound('correct');
   flashAnswer('correct');
   state.xp+=15;state.nctbCursor++;state.retryCount=0;rememberMission(q.id);save();
   showSuccessFabricator(q);
   setMessage(state.language==='bn'?'✓ অধ্যায় checkpoint সম্পন্ন।':'✓ Chapter checkpoint complete.','good');
   if(state.nctbCursor>=nctbPool().length){state.nctbMode=false;state.nctbCursor=0;setTimeout(()=>render(),700);return}
   setTimeout(()=>render(),700);return;
 }

 if(!correct){
   state.retryCount++;
   playAnswerSound('wrong');

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
 if(state.categoryMode){const p=categoryProgress();if(!p.completed.includes(state.categoryCursor+1))p.completed.push(state.categoryCursor+1);if(!p.seenIds.includes(q.id))p.seenIds.push(q.id);p.unlocked=Math.max(p.unlocked,Math.min(categoryPool().length,state.categoryCursor+2));state.replayLevel=false;state.xp+=50;state.materials.push(q.artifact);save();setMessage(state.language==='bn'?`✓ সঠিক! ${displayText(q.artifact)} তৈরি হয়েছে।`:`✓ Correct! ${q.artifact} fabricated.`,'good');showSuccessFabricator(q);setTimeout(()=>document.getElementById('nextLevel').classList.remove('hidden-next'),950);return}
 if(!isCompleted(state.level)){markCompleted(state.level);state.maxUnlocked=Math.max(state.maxUnlocked,Math.min(TOTAL_LEVELS,state.level+1));state.xp+=100;state.materials.push(q.artifact)}save();setMessage(state.language==='bn'?`✓ সঠিক! ${displayText(q.artifact)} fabricated হয়েছে।`:`✓ Correct! ${q.artifact} fabricated.`,'good');showSuccessFabricator(q);setTimeout(()=>document.getElementById('nextLevel').classList.remove('hidden-next'),950)
}
function advanceLevel(){if(!pendingLevelUp)return;pendingLevelUp=false;state.replayLevel=false;if(state.gameMode){const l=state.gameLevel;if(l>=GAME_TOTAL_LEVELS){showGameReward(GAME_TOTAL_LEVELS);return}state.gameLevel=l+1;state.gameRetryCount=0;save();render();if(state.gameLevel>1&&((state.gameLevel-1)%10===0))showGameReward(state.gameLevel-1);return}if(state.categoryMode){const total=categoryLevelCount();if(state.categoryCursor+1<total){state.categoryCursor++;state.retryCount=0;save();render();return}state.categoryMode=false;state.categoryCursor=0;state.retryCount=0;save();render();setMessage(state.language==='bn'?'🎉 Category-এর সব আলাদা প্রশ্ন সম্পন্ন হয়েছে।':'🎉 All unique questions in this category are complete.','good');return}if(state.level<TOTAL_LEVELS)state.level++;state.retryCount=0;save();render();if(state.level>1&&((state.level-1)%5===0))showReward(state.level-1)}
function showGameReward(level){const s=GAME_STAGE_SCIENTISTS[level]||['Genesis Builder','Invention & Discovery','Every build unlocks the next question.','প্রতিটি নির্মাণ পরের প্রশ্নের দরজা খুলে দেয়।'];const art=GAME_MILESTONES[level]||[gameArtifactFor(level),'Discovery'];if(!state.gameRewarded.includes(level))state.gameRewarded.push(level);save();document.getElementById('rewardEyebrow').textContent=state.language==='bn'?'🎮 GAME DISCOVERY MILESTONE':'🎮 GAME DISCOVERY MILESTONE';document.getElementById('awardLevel').textContent=`GAME LEVEL ${level} • ${state.language==='bn'?'আবিষ্কার':'DISCOVERY'}`;document.getElementById('scientistName').textContent=state.language==='bn'?art[1]:art[0];document.getElementById('scientistField').textContent=state.language==='bn'?s[0]:s[1];document.getElementById('quoteEn').textContent=state.language==='bn'?`পরবর্তী নির্মাণ: ${art[1]}`:`Next build: ${art[0]}`;document.getElementById('quoteBn').textContent=state.language==='bn'?s[3]:s[2];document.getElementById('modal').classList.remove('hidden')}
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
 const subjects=Object.keys(NCTB_2026[state.nctbClass]||{});
 if(!subjects.includes(state.nctbSubject))state.nctbSubject=subjects[0]||'';
 sub.innerHTML=subjects.map(x=>`<option value="${escapeHTML(x)}">${escapeHTML(x)}</option>`).join('');sub.value=state.nctbSubject;
 const classBox=document.getElementById('nctbClassChoices');
 if(classBox){classBox.innerHTML=Object.keys(NCTB_2026).map(x=>`<button type="button" class="nctb-choice ${state.nctbClass===x?'active':''}" data-class="${escapeHTML(x)}">${x==='9-10'?'Class 9–10':'Class '+x}</button>`).join('');classBox.querySelectorAll('[data-class]').forEach(b=>b.onclick=()=>{state.nctbClass=b.dataset.class;state.nctbChapters=[];renderNCTBUI()});}
 const subBox=document.getElementById('nctbSubjectChoices');
 if(subBox){subBox.innerHTML=subjects.map(x=>`<button type="button" class="nctb-choice subject-choice ${state.nctbSubject===x?'active':''}" data-subject="${escapeHTML(x)}">${escapeHTML(x)}</button>`).join('');subBox.querySelectorAll('[data-subject]').forEach(b=>b.onclick=()=>{state.nctbSubject=b.dataset.subject;state.nctbChapters=[];renderNCTBUI()});}
 const chapters=nctbChapters(state.nctbClass,state.nctbSubject);
 ch.innerHTML=chapters.map((x,i)=>`<label class="chapter-check ${state.nctbChapters.includes(x)?'selected':''}"><input type="checkbox" data-chapter="${escapeHTML(x)}" ${state.nctbChapters.includes(x)?'checked':''}><span class="chapter-checkmark">✓</span><div><b>${escapeHTML(x)}</b><small>${state.language==='bn'?'৪০টি আলাদা প্রশ্ন':'40 unique questions'}</small></div><em>${String(i+1).padStart(2,'0')}</em></label>`).join('');
 const sync=()=>{state.nctbChapters=[...ch.querySelectorAll('input:checked')].map(a=>a.dataset.chapter);ch.querySelectorAll('.chapter-check').forEach(card=>card.classList.toggle('selected',card.querySelector('input').checked));const i=document.getElementById('nctbInfo');if(i)i.textContent=state.language==='bn'?`${state.nctbChapters.length}টি অধ্যায় • ${state.nctbChapters.length*40}টি প্রশ্ন`:`${state.nctbChapters.length} chapter(s) • ${state.nctbChapters.length*40} unique questions`;};
 ch.querySelectorAll('input').forEach(x=>x.onchange=sync);
 sync();
}

function startGameMode(){state.gameMode=true;state.categoryMode=false;state.challengeMode=false;state.nctbMode=false;state.replayLevel=false;state.gameRetryCount=0;pendingLevelUp=false;save();document.getElementById('playHub').classList.add('hidden');render()}
function openGameArchive(){state.gameMode=true;renderLevelMap();document.getElementById('levelMapModal').classList.remove('hidden')}
function openChallengeSetup(){state.challengeMode=false;renderCategoryUI();renderChallengeUI();document.getElementById('challengeSetup').classList.remove('hidden-ui')}
function closeChallengeSetup(){document.getElementById('challengeSetup').classList.add('hidden-ui')}

function renderCategoryUI(){const list=document.getElementById('categoryList');if(!list)return;list.innerHTML=CATEGORY_DEFS.map(d=>`<button class="category-card ${state.categoryKey===d.key?'selected':''}" data-cat="${d.key}"><span>${d.icon}</span><strong>${d.label}</strong><small>${d.subs.length} sub-categories</small></button>`).join('');list.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>selectCategory(b.dataset.cat));const d=categoryDefinition(state.categoryKey);const area=document.getElementById('subcategoryArea'),subList=document.getElementById('subcategoryList');if(!d){area.classList.add('hidden-ui');return}area.classList.remove('hidden-ui');subList.innerHTML=d.subs.map(([value,label])=>{const count=MISSION_BANK.filter(m=>m.categoryKey===d.key&&m.subCategory===value&&(state.difficulty==='All'||m.difficulty===state.difficulty)).length;return `<label class="subcat-check ${count?'':'disabled'}"><input type="checkbox" data-sub="${escapeHTML(value)}" ${state.categorySubs.includes(value)?'checked':''} ${count?'':'disabled'}><span class="checkmark">✓</span><span class="subcat-copy"><strong>${escapeHTML(label)}</strong><small>${count} ${state.language==='bn'?'মিশন':'missions'}</small></span></label>`}).join('')+`<div class="subcat-actions"><button id="selectAllSubs" class="secondary-btn">SELECT ALL</button><button id="clearSubs" class="secondary-btn">CLEAR</button><button id="startCategory" class="start-category-btn">START CATEGORY</button></div><div id="selectionInfo" class="selection-info"></div>`;subList.querySelectorAll('input[data-sub]').forEach(x=>x.onchange=()=>refreshSelection(d));document.getElementById('selectAllSubs').onclick=()=>{subList.querySelectorAll('input[data-sub]:not(:disabled)').forEach(x=>x.checked=true);refreshSelection(d)};document.getElementById('clearSubs').onclick=()=>{subList.querySelectorAll('input[data-sub]').forEach(x=>x.checked=false);refreshSelection(d)};document.getElementById('startCategory').onclick=()=>startCategory(d.key,state.categorySubs);refreshSelection(d)}
function selectCategory(key){state.categoryKey=key;state.categorySubs=[];state.categoryCursor=0;renderCategoryUI()}
function refreshSelection(d){const subList=document.getElementById('subcategoryList');state.categorySubs=[...subList.querySelectorAll('input[data-sub]:checked')].map(x=>x.dataset.sub);const count=categoryLevelCount();const selectedCounts=state.categorySubs.map(sub=>MISSION_BANK.filter(m=>m.categoryKey===d.key&&m.subCategory===sub&&(state.difficulty==='All'||m.difficulty===state.difficulty)).length);const minCount=selectedCounts.length?Math.min(...selectedCounts):0;const info=document.getElementById('selectionInfo');if(info)info.textContent=`${state.categorySubs.length} selected • ${count} unique category levels • smallest selected sub-category: ${minCount}`}
function startCategory(key,subs){const selected=[...new Set(subs)];if(!selected.length){setMessage('Select at least one sub-category.','bad');return}state.gameMode=false;state.categoryMode=true;state.categoryKey=key;state.categorySubs=selected;state.categoryCursor=0;state.replayLevel=false;state.retryCount=0;const p=categoryProgress();p.unlocked=Math.max(1,Math.min(categoryPool().length,p.unlocked||1));if(categoryPool().every(x=>p.seenIds.includes(x.id))){state.categoryMode=false;setMessage(state.language==='bn'?'এই selection-এর সব আলাদা প্রশ্ন আগেই সম্পন্ন হয়েছে।':'All unique questions in this selection were already completed.','good');return}pendingLevelUp=false;save();document.getElementById('playHub').classList.add('hidden');render()}
function exitCategory(){clearInterval(window.__challengeTimer);state.categoryMode=false;state.challengeMode=false;state.gameMode=false;state.nctbMode=false;state.categoryKey='';state.categorySubs=[];state.categoryCursor=0;state.nctbCursor=0;state.retryCount=0;pendingLevelUp=false;save();render()}
function openPlayHub(){document.getElementById('playHub').classList.remove('hidden');renderCategoryUI();renderChallengeUI();renderNCTBUI();updateSetupLabels()}
function closePlayHub(){document.getElementById('playHub').classList.add('hidden')}
function openArchive(){renderLevelMap();document.getElementById('levelMapModal').classList.remove('hidden')}
function updateSetupLabels(){const lang=state.language;document.querySelectorAll('[data-bn]').forEach(el=>{el.textContent=lang==='bn'?el.dataset.bn:el.dataset.en})}
function selectLanguage(lang){state.language=lang;document.querySelectorAll('.lang-card,.lang-card-mini').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));document.getElementById('setupContinue').disabled=false;updateSetupLabels();renderCategoryUI();render()}
function selectDifficulty(diff){state.difficulty=diff;const total=MISSION_BANK.filter(m=>diff==='All'||m.difficulty===diff).length;state.level=Math.max(1,Math.min(Number(state.level)||1,total));state.maxUnlocked=Math.max(1,Math.min(Number(state.maxUnlocked)||1,total));document.querySelectorAll('.difficulty-card,.diff-mini button').forEach(b=>b.classList.toggle('active',b.dataset.diff===diff));renderCategoryUI();render()}
function finishSetup(){const pc=document.getElementById('setupPoolCount');if(pc)pc.textContent=String(MISSION_BANK.length).replace(/\B(?=(\d{3})+(?!\d))/g,',');state.setupDone=true;save();document.getElementById('setupScreen').classList.add('hidden');render()}
function openSetup(){const pc=document.getElementById('setupPoolCount');if(pc)pc.textContent=String(MISSION_BANK.length).replace(/\B(?=(\d{3})+(?!\d))/g,',');document.getElementById('setupScreen').classList.remove('hidden');document.querySelectorAll('.lang-card').forEach(b=>b.classList.toggle('active',b.dataset.lang===state.language));document.querySelectorAll('.difficulty-card').forEach(b=>b.classList.toggle('active',b.dataset.diff===state.difficulty));updateSetupLabels()}
function resetSave(){if(confirm(state.language==='bn'?'সব progress reset করতে চান?':'Reset all local progress?')){localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(SETUP_KEY);localStorage.removeItem('elementGameSave_v9000');localStorage.removeItem('elementGameSave_v8000');localStorage.removeItem('elementGameSave_v7000');localStorage.removeItem('elementGameSetup_v9000');localStorage.removeItem('elementGameSetup_v8000');localStorage.removeItem('elementGameSave_v6000');localStorage.removeItem('elementGameSave_v5000');localStorage.removeItem('elementGameSave');location.reload()}}

document.getElementById('hintBtn').onclick=showHint;document.getElementById('nextLevel').onclick=advanceLevel;document.getElementById('levelMapBtn').onclick=openArchive;document.getElementById('categoryMapBtn').onclick=openArchive;document.getElementById('closeMap').onclick=()=>document.getElementById('levelMapModal').classList.add('hidden');document.getElementById('reset').onclick=resetSave;document.getElementById('playHubBtn').onclick=openPlayHub;document.getElementById('closePlayHub').onclick=closePlayHub;document.getElementById('exitCategory').onclick=exitCategory;document.getElementById('continue').onclick=()=>{document.getElementById('modal').classList.add('hidden');pendingLevelUp=false;if(state.gameMode){state.gameRetryCount=0;save();render()}};document.getElementById('setupContinue').onclick=finishSetup;document.getElementById('setupSettingsBtn').onclick=openSetup;document.querySelectorAll('.lang-card,.lang-card-mini').forEach(b=>b.onclick=()=>selectLanguage(b.dataset.lang));document.querySelectorAll('.difficulty-card,.diff-mini button').forEach(b=>b.onclick=()=>selectDifficulty(b.dataset.diff));document.getElementById('gameModeBtn')?.addEventListener('click',startGameMode);document.getElementById('gameTopBtn')?.addEventListener('click',startGameMode);document.getElementById('gameMapBtn')?.addEventListener('click',openGameArchive);document.getElementById('randomPlayBtn').onclick=()=>{state.gameMode=false;state.categoryMode=false;state.categoryKey='';state.categorySubs=[];state.categoryCursor=0;state.replayLevel=false;pendingLevelUp=false;save();closePlayHub();render()};
document.getElementById('challengeOpenBtn')?.addEventListener('click',openChallengeSetup);document.getElementById('closeChallengeSetup')?.addEventListener('click',closeChallengeSetup);document.getElementById('challengeStartBtn')?.addEventListener('click',startChallenge);document.querySelectorAll('#challengeDurations button').forEach(b=>b.onclick=()=>{state.challengeDuration=Number(b.dataset.minutes);renderChallengeUI()});document.getElementById('challengeDuration')?.addEventListener('change',e=>{state.challengeDuration=Math.max(3,Math.min(60,Number(e.target.value)||5));renderChallengeUI()});document.getElementById('challengeResultClose')?.addEventListener('click',()=>{document.getElementById('challengeResultModal').classList.add('hidden');render()});document.getElementById('nctbClass')?.addEventListener('change',e=>{state.nctbClass=e.target.value;state.nctbChapters=[];renderNCTBUI()});document.getElementById('nctbSubject')?.addEventListener('change',e=>{state.nctbSubject=e.target.value;state.nctbChapters=[];renderNCTBUI()});document.getElementById('nctbStartBtn')?.addEventListener('click',startNCTB);document.getElementById('nctbSelectAll')?.addEventListener('click',()=>{const ch=document.getElementById('nctbChapters');ch.querySelectorAll('input').forEach(x=>x.checked=true);state.nctbChapters=[...ch.querySelectorAll('input')].map(x=>x.dataset.chapter);renderNCTBUI()});document.getElementById('nctbClear')?.addEventListener('click',()=>{state.nctbChapters=[];renderNCTBUI()});

document.getElementById('challengeTopBtn')?.addEventListener('click',()=>{openPlayHub();openChallengeSetup()});document.getElementById('nctbOpenBtn')?.addEventListener('click',()=>{document.getElementById('nctbSetup').classList.remove('hidden-ui');renderNCTBUI()});document.getElementById('closeNctbSetup')?.addEventListener('click',()=>document.getElementById('nctbSetup').classList.add('hidden-ui'));

renderCategoryUI();render();save();
if(!state.setupDone)openSetup();
