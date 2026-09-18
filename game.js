const eras=[
["Stone Age",1,10],["Bronze & Iron",11,20],["Classical Engineering",21,30],["Scientific Revolution",31,40],
["Industrial Age",41,50],["Electrical Age",51,60],["Atomic Age",61,70],["Space Age",71,80],
["Quantum Age",81,90],["Spacetime & Multiverse",91,100]
];
const scientists=[
[5,"Archimedes","You discovered the logic of machines."],[10,"Isaac Newton","The Earth era is complete. Motion and gravity await."],
[15,"Michael Faraday","Fields can become technology."],[20,"James Watt","Engineering turns ideas into power."],
[25,"Charles Darwin","Observe patterns; test every assumption."],[30,"Galileo Galilei","Measure the world, then question it."],
[35,"Antoine Lavoisier","Matter changes form, but accounting matters."],[40,"James Clerk Maxwell","Electricity and magnetism speak one language."],
[45,"Thomas Edison","Practical invention changes daily life."],[50,"Nikolaus Otto","Engines convert controlled energy into motion."],
[55,"Nikola Tesla","Alternating current opens a new electrical age."],[60,"Marie Curie","The atom hides astonishing energy."],
[65,"Ernest Rutherford","The atom has a nucleus."],[70,"Niels Bohr","Quantized structure changes our picture of matter."],
[75,"Katherine Johnson","Precise mathematics can navigate space."],[80,"Alan Turing","Information itself can be engineered."],
[85,"Richard Feynman","Nature does not have to be intuitive to be calculable."],[90,"Albert Einstein","Space and time are part of one structure."],
[95,"Stephen Hawking","The universe challenges every boundary."],[100,"Nikola Tesla","You reached the Multiverse frontier."]
];

// 100 levels, 5 choices each. Correct choice is randomized by a deterministic formula.
const base=[
["Stone Axe","Stone + Wood","Axe","cutting tool"],["Fire","Wood + Heat","Fire","energy"],["Clay Brick","Clay + Fire","Brick","construction"],["Copper Tool","Copper + Stone","Copper Tool","metallurgy"],["Bronze","Copper + Tin","Bronze","alloy"],
["Iron","Iron Ore + Fire","Iron","metal"],["Steel","Iron + Carbon","Steel","alloy"],["Glass","Sand + Fire","Glass","material"],["Wheel","Wood + Stone","Wheel","mechanics"],["Lever","Wood + Stone","Lever","mechanics"],
["Plough","Wood + Iron","Plough","agriculture"],["Concrete","Limestone + Water","Concrete","construction"],["Paper","Plant Fiber + Water","Paper","material"],["Ink","Carbon + Water","Ink","writing"],["Compass","Iron + Magnetism","Compass","navigation"],
["Clock","Gear + Spring","Clock","precision"],["Printing Press","Paper + Ink","Printing Press","information"],["Steam Engine","Water + Heat","Steam Engine","power"],["Battery","Copper + Zinc + Acid","Battery","electricity"],["Telegraph","Wire + Battery","Telegraph","communication"],
["Light Bulb","Glass + Wire + Vacuum","Light Bulb","electricity"],["Motor","Magnet + Wire + Electricity","Motor","electromagnetism"],["Generator","Coil + Magnet + Motion","Generator","induction"],["Radio","Electricity + Antenna","Radio","waves"],["Telephone","Electricity + Membrane","Telephone","communication"],
["Transformer","Coil + Iron Core + AC","Transformer","power"],["Electron Tube","Vacuum + Metal + Voltage","Electron Tube","electronics"],["X-ray","Electron + Target + Vacuum","X-ray","radiation"],["Photocell","Light + Semiconductor","Photocell","electronics"],["Computer","Logic + Memory + Electricity","Computer","information"],
["Transistor","Silicon + Doping + Voltage","Transistor","semiconductor"],["Integrated Circuit","Silicon + Transistors","Integrated Circuit","microelectronics"],["Laser","Atom + Cavity + Energy","Laser","photonics"],["Satellite","Rocket + Computer + Radio","Satellite","space"],["Rocket","Fuel + Oxidizer + Engine","Rocket","propulsion"],
["Solar Cell","Silicon + Light","Solar Cell","energy"],["Nuclear Reactor","Uranium + Neutrons + Control","Nuclear Reactor","nuclear"],["Nuclear Bomb","Uranium + Neutron + Critical Mass","Nuclear Device","nuclear"],["Fusion Reactor","Plasma + Magnetic Field","Fusion Reactor","fusion"],["Particle Accelerator","Magnets + Vacuum + RF","Particle Accelerator","physics"],
["Space Telescope","Mirror + Sensor + Orbit","Space Telescope","astronomy"],["GPS","Satellites + Atomic Clock + Radio","GPS","navigation"],["Space Station","Modules + Orbit + Life Support","Space Station","space"],["Ion Engine","Electric Field + Plasma","Ion Engine","propulsion"],["Quantum Computer","Qubit + Control + Cryogenics","Quantum Computer","quantum"],
["Quantum Sensor","Qubit + Measurement","Quantum Sensor","quantum"],["Nanobot","Nano Machine + Control","Nanobot","nanotech"],["Graphene","Carbon + Layer + Energy","Graphene","materials"],["Artificial Intelligence","Computer + Data + Learning","AI","computing"],["Fusion Drive","Fusion + Magnetic Nozzle","Fusion Drive","propulsion"],
["Antimatter Trap","Antimatter + Magnetic Field + Vacuum","Antimatter Trap","particle physics"],["Warp Metric","Energy + Spacetime Geometry","Warp Metric","relativity"],["Wormhole","Spacetime + Extreme Energy","Wormhole","spacetime"],["Time Dilation Engine","Velocity + Gravity + Atomic Clock","Time Dilation Engine","relativity"],["Time Machine","Causal Loop + Spacetime + Energy","Time Machine","time"],["Chronon Detector","Quantum Clock + Spacetime","Chronon Detector","time"],["Past Probe","Time Machine + Stable Coordinate","Past Probe","time"],["Future Probe","Time Machine + Future Coordinate","Future Probe","time"],["Causal Shield","Time Field + Information Barrier","Causal Shield","time"],["Multiverse Detector","Quantum Branch + Sensor","Multiverse Detector","multiverse"],
["Branch Navigator","Multiverse Detector + AI","Branch Navigator","multiverse"],["Universe Hopper","Branch Navigator + Wormhole","Universe Hopper","multiverse"],["Parallel Matter","Matter + Branch Coordinate","Parallel Matter","multiverse"],["Reality Anchor","Exotic Matter + Spacetime","Reality Anchor","multiverse"],["Dimensional Map","Universe Data + Quantum Computer","Dimensional Map","multiverse"],["Multiverse Radio","Antenna + Branch Navigator","Multiverse Radio","multiverse"],["Alternate Earth","Universe Hopper + Earth Coordinate","Alternate Earth","multiverse"],["Timeline Library","Past Probe + Future Probe","Timeline Library","time"],["Causality Engine","Timeline Library + Reality Anchor","Causality Engine","causality"],
["Quantum Gate","Qubit + Wormhole","Quantum Gate","quantum"],["Vacuum Energy Cell","Vacuum + Quantum Field","Vacuum Energy Cell","quantum field"],["Dark Matter Sensor","Gravity + Unknown Mass","Dark Matter Sensor","cosmology"],["Dark Energy Meter","Expansion + Precision Clock","Dark Energy Meter","cosmology"],["Black Hole Probe","Gravity + Shield + Sensor","Black Hole Probe","astrophysics"],["Hawking Radiation Lab","Black Hole + Quantum Sensor","Hawking Lab","quantum gravity"],["Graviton Detector","Mass + Quantum Sensor","Graviton Detector","quantum gravity"],["Planck Engine","Planck Scale + Energy","Planck Engine","quantum gravity"],["Spacetime Computer","Quantum Computer + Spacetime","Spacetime Computer","computation"],["Reality Simulator","Spacetime Computer + Universe Data","Reality Simulator","simulation"],
["Universe Seed","Matter + Energy + Information","Universe Seed","cosmology"],["Universe Forge","Universe Seed + Causality Engine","Universe Forge","cosmology"],["Dimension Bridge","Universe Forge + Wormhole","Dimension Bridge","dimensions"],["Higher-Dimensional Lens","Dimension Bridge + Sensor","HD Lens","dimensions"],["Temporal Observatory","Timeline Library + HD Lens","Temporal Observatory","time"],["Infinite Archive","Timeline Library + Multiverse Radio","Infinite Archive","information"],["Causal Compiler","Information + Causality","Causal Compiler","computation"],["Reality Compiler","Causal Compiler + Universe Forge","Reality Compiler","reality"],["Multiverse Engine","Reality Compiler + Dimension Bridge","Multiverse Engine","multiverse"],["Omniverse Key","Multiverse Engine + Reality Anchor","Omniverse Key","multiverse"],
["Time Traveler","Omniverse Key + Time Machine","Time Traveler","time"],["Timeline Repairer","Time Traveler + Causal Shield","Timeline Repairer","time"],["Universe Builder","Reality Compiler + Universe Seed","Universe Builder","cosmology"],["Parallel Civilization","Universe Builder + Alternate Earth","Parallel Civilization","civilization"],["Multiverse Civilization","Parallel Civilization + Universe Hopper","Multiverse Civilization","civilization"],["Cosmic Network","Multiverse Radio + Infinite Archive","Cosmic Network","communication"],["Causal Network","Cosmic Network + Causal Compiler","Causal Network","causality"],["Reality Stabilizer","Causal Network + Reality Anchor","Reality Stabilizer","reality"],["Multiverse Portal","Reality Stabilizer + Dimension Bridge","Multiverse Portal","multiverse"],["THE FINAL MACHINE","Multiverse Portal + Omniverse Key + Tesla Principle","Chrono-Multiverse Engine","final"]
];
const decoys=["Wood + Water","Stone + Air","Iron + Fire","Sand + Water","Copper + Wood","Carbon + Ice","Glass + Stone","Steam + Wood","Magnet + Paper","Salt + Metal","Air + Oil","Clay + Wood","Gold + Water","Light + Stone","Smoke + Ice","Hydrogen + Sand","Limestone + Metal","Plasma + Wood","Gravity + Paper","Energy + Clay"];

let state=JSON.parse(localStorage.getItem("elementGameSave")||"null")||{level:1,xp:0,materials:["Wood","Stone"],rewarded:[]};
if(typeof state.retryCount!=="number") state.retryCount=0;

function save(){localStorage.setItem("elementGameSave",JSON.stringify(state));document.getElementById("saveStatus").textContent="Saved locally";}
function eraFor(l){return eras.find(e=>l>=e[1]&&l<=e[2])||eras[9]}
function currentRecipe(){return base[state.level-1]}

const visualData={
"Stone":"🪨","Wood":"🪵","Clay":"🟤","Fire":"🔥","Water":"💧","Heat":"♨️","Copper":"Cu","Tin":"Sn","Iron":"Fe","Carbon":"C",
"Sand":"⌛","Magnetism":"🧲","Electricity":"⚡","Wire":"〰️","Vacuum":"◌","Silicon":"Si","Light":"☀️","Uranium":"U","Neutrons":"n",
"Plasma":"🟣","Gravity":"🌐","Computer":"💻","Data":"▦","Learning":"🧠","Qubit":"Q","Cryogenics":"❄️","Quantum Field":"∿",
"Spacetime":"🌀","Wormhole":"🕳️","Energy":"⚡","AI":"🤖","Universe Data":"🌌","Branch Coordinate":"⌘","Exotic Matter":"✦",
"Planck Scale":"ℏ","Causality":"⏳","Reality":"◈","Dimension":"◇","Time Machine":"⏱️","Multiverse":"🌌"
};
function iconFor(name){
  if(visualData[name]) return visualData[name];
  const n=(name||"").toLowerCase();
  if(n.includes("water")) return "💧"; if(n.includes("fire")||n.includes("heat")) return "🔥";
  if(n.includes("wood")) return "🪵"; if(n.includes("stone")||n.includes("ore")) return "🪨";
  if(n.includes("glass")) return "🔷"; if(n.includes("paper")) return "📜"; if(n.includes("engine")) return "⚙️";
  if(n.includes("rocket")) return "🚀"; if(n.includes("satellite")) return "🛰️"; if(n.includes("computer")) return "💻";
  if(n.includes("quantum")) return "⚛️"; if(n.includes("universe")||n.includes("multiverse")) return "🌌";
  if(n.includes("time")) return "⏱️"; if(n.includes("black hole")) return "🕳️";
  return "◆";
}

// Real product illustrations are drawn as inline SVGs so the game remains fully offline.
function productArt(name){
  const n=(name||"").toLowerCase();
  const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
  const wrap=(body,extra="")=>`<svg class="product-art" viewBox="0 0 180 180" role="img" aria-label="${esc(name)}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8ea8ff"/><stop offset="1" stop-color="#38d9ff"/></linearGradient><radialGradient id="gl"><stop stop-color="#fff"/><stop offset="1" stop-color="#6d7cff" stop-opacity="0"/></radialGradient></defs>${body}${extra}</svg>`;
  const glow=`<circle cx="90" cy="88" r="62" fill="url(#gl)" opacity=".22"/>`;
  if(n.includes("stone axe")) return wrap(glow+`<path d="M60 124 L113 54" stroke="#9b7652" stroke-width="12" stroke-linecap="round"/><path d="M101 42 Q129 45 133 67 L119 82 Q96 76 91 57Z" fill="#aeb9c8" stroke="#e7efff" stroke-width="3"/>`);
  if(n==="fire") return wrap(glow+`<path d="M90 145 C52 139 52 107 78 88 C70 65 88 46 99 31 C100 55 123 66 121 91 C141 111 124 141 90 145Z" fill="#ffb347" stroke="#ffe7a0" stroke-width="3"/><path d="M91 128 C72 123 75 105 89 94 C88 82 96 74 101 68 C102 85 113 92 110 107 C119 119 108 129 91 128Z" fill="#fff1a8"/>`);
  if(n.includes("clay brick")) return wrap(glow+`<g fill="#b96f55" stroke="#f2b49b" stroke-width="3"><rect x="36" y="62" width="50" height="30" rx="4"/><rect x="94" y="62" width="50" height="30" rx="4"/><rect x="48" y="96" width="50" height="30" rx="4"/><rect x="106" y="96" width="38" height="30" rx="4"/></g>`);
  if(n.includes("copper tool")) return wrap(glow+`<path d="M48 124 L116 55" stroke="#b87333" stroke-width="13" stroke-linecap="round"/><path d="M108 48 L141 81" stroke="#e8a15f" stroke-width="15" stroke-linecap="round"/>`);
  if(n==="bronze") return wrap(glow+`<path d="M48 55 L126 55 L143 78 L132 126 L53 126 L38 78Z" fill="#b97832" stroke="#ffd18a" stroke-width="4"/><path d="M52 70 H130" stroke="#ffe2a8" stroke-width="4" opacity=".55"/><text x="90" y="108" text-anchor="middle" fill="#fff2d2" font-size="16" font-weight="800">BRONZE</text>`);
  if(n==="iron") return wrap(glow+`<path d="M50 58 L130 58 L143 76 L130 125 L50 125 L37 76Z" fill="#596779" stroke="#b8c8dd" stroke-width="4"/><path d="M50 76 H130" stroke="#d9e5f4" stroke-width="4" opacity=".35"/><text x="90" y="108" text-anchor="middle" fill="#edf5ff" font-size="18" font-weight="800">Fe</text>`);
  if(n==="steel") return wrap(glow+`<circle cx="90" cy="90" r="50" fill="#7d8ea7" stroke="#d9e5f4" stroke-width="5"/><circle cx="90" cy="90" r="18" fill="#101827" stroke="#d9e5f4" stroke-width="5"/><path d="M90 40v18M90 122v18M40 90h18M122 90h18M55 55l13 13M112 112l13 13M125 55l-13 13M68 112l-13 13" stroke="#d9e5f4" stroke-width="8" stroke-linecap="round"/>`);
  if(n==="glass") return wrap(glow+`<path d="M60 48 H120 L112 132 Q90 146 68 132Z" fill="#7ee8ff" fill-opacity=".25" stroke="#b9f5ff" stroke-width="4"/><path d="M73 62 L104 118" stroke="#fff" stroke-width="5" opacity=".55"/><path d="M66 126 Q90 137 114 126" fill="none" stroke="#65cfff" stroke-width="4"/>`);
  if(n==="wheel") return wrap(glow+`<circle cx="90" cy="90" r="57" fill="#3c4657" stroke="#d6e1f0" stroke-width="5"/><circle cx="90" cy="90" r="19" fill="#101827" stroke="#b7c8df" stroke-width="5"/><path d="M90 33V71M90 109v38M33 90h38M109 90h38M50 50l27 27M103 103l27 27M130 50l-27 27M77 103l-27 27" stroke="#b7c8df" stroke-width="7"/>`);
  if(n==="lever") return wrap(glow+`<path d="M35 128 L145 55" stroke="#b57b4c" stroke-width="14" stroke-linecap="round"/><path d="M86 93 L105 111 L124 93 L105 75Z" fill="#7f8ea7" stroke="#d8e4f3" stroke-width="3"/><circle cx="105" cy="93" r="7" fill="#d8e4f3"/>`);
  if(n.includes("plough")) return wrap(glow+`<path d="M38 57 H118" stroke="#8d603d" stroke-width="10" stroke-linecap="round"/><path d="M70 57 L82 125 L118 125" fill="none" stroke="#a7b8cc" stroke-width="8"/><path d="M80 125 L62 143 M108 125 L127 143" stroke="#a7b8cc" stroke-width="8" stroke-linecap="round"/>`);
  if(n.includes("concrete")) return wrap(glow+`<path d="M45 64 L125 64 L138 79 L128 126 L50 126 L40 80Z" fill="#9ca7b5" stroke="#dbe5f0" stroke-width="4"/><path d="M57 83l16 8m-2-18l17 12m-4 19l18 10m-4-35l14 8" stroke="#6d7786" stroke-width="5"/>`);
  if(n==="paper") return wrap(glow+`<path d="M52 38 H113 L132 57 V143 H52Z" fill="#f4ead4" stroke="#fff" stroke-width="4"/><path d="M113 38 V58 H132M66 77 H118M66 94 H118M66 111 H104" stroke="#a9b4c4" stroke-width="4"/>`);
  if(n==="ink") return wrap(glow+`<path d="M62 126 H118 Q128 126 128 136 H52 Q52 126 62 126Z" fill="#26334a" stroke="#aabbd4" stroke-width="3"/><path d="M73 58 Q90 47 107 58 L101 118 Q90 128 79 118Z" fill="#151d2b" stroke="#90a5c5" stroke-width="4"/><path d="M79 68 Q90 74 101 68" stroke="#7c9cff" stroke-width="4"/>`);
  if(n.includes("compass")) return wrap(glow+`<circle cx="90" cy="90" r="55" fill="#172033" stroke="#c5d5e9" stroke-width="5"/><path d="M90 44 L104 90 L90 136 L76 90Z" fill="#6f83ff" stroke="#e8f0ff" stroke-width="3"/><path d="M90 44 L90 136" stroke="#fff" stroke-width="3"/><circle cx="90" cy="90" r="7" fill="#fff"/>`);
  if(n.includes("clock")) return wrap(glow+`<circle cx="90" cy="90" r="56" fill="#202b3d" stroke="#e0ebf8" stroke-width="5"/><circle cx="90" cy="90" r="5" fill="#fff"/><path d="M90 90 L90 57 M90 90 L114 103" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M90 34V43M146 90H137M90 146V137M34 90H43" stroke="#9fb0c8" stroke-width="4"/>`);
  if(n.includes("printing press")) return wrap(glow+`<path d="M53 52 H127 V78 H53Z M45 78 H135 V126 H45Z" fill="#48566c" stroke="#cbd8e7" stroke-width="4"/><path d="M62 91 H118 V112 H62Z" fill="#f3e7d0"/><path d="M78 40 V68" stroke="#d7e4f2" stroke-width="8"/>`);
  if(n.includes("steam engine")) return wrap(glow+`<circle cx="77" cy="101" r="35" fill="#4e5d72" stroke="#d5e1ef" stroke-width="4"/><circle cx="77" cy="101" r="10" fill="#172033" stroke="#d5e1ef" stroke-width="4"/><rect x="105" y="66" width="30" height="70" rx="6" fill="#697b92" stroke="#d5e1ef" stroke-width="4"/><path d="M115 55 Q125 43 135 55" fill="none" stroke="#bfeaff" stroke-width="5"/>`);
  if(n==="battery") return wrap(glow+`<rect x="55" y="47" width="70" height="91" rx="10" fill="#3e4c61" stroke="#dce7f4" stroke-width="4"/><rect x="77" y="37" width="26" height="12" rx="3" fill="#9eb1c8"/><path d="M78 77 H102 M90 65 V89" stroke="#ffcf70" stroke-width="7" stroke-linecap="round"/><path d="M78 111 H102 M90 99 V123" stroke="#72dcff" stroke-width="7" stroke-linecap="round"/>`);
  if(n.includes("telegraph")) return wrap(glow+`<path d="M42 125 Q90 58 138 125" fill="none" stroke="#d7e3f0" stroke-width="5"/><circle cx="90" cy="88" r="20" fill="#b67a3f" stroke="#f0c58e" stroke-width="4"/><path d="M90 108 V137 M65 137 H115" stroke="#b7c8db" stroke-width="7" stroke-linecap="round"/>`);
  if(n.includes("light bulb")) return wrap(glow+`<path d="M90 35 C56 35 50 78 72 99 V116 H108 V99 C130 78 124 35 90 35Z" fill="#fff2a8" stroke="#fff" stroke-width="4"/><path d="M73 116 H107 M78 128 H102" stroke="#aebdd0" stroke-width="7" stroke-linecap="round"/><path d="M79 86 H101 M90 72 V101" stroke="#f6b73c" stroke-width="4"/>`);
  if(n==="motor") return wrap(glow+`<circle cx="90" cy="90" r="50" fill="#43536b" stroke="#d7e3ef" stroke-width="5"/><circle cx="90" cy="90" r="20" fill="#151e2d" stroke="#8be7ff" stroke-width="5"/><path d="M45 90 H20 M135 90 H160" stroke="#d7e3ef" stroke-width="8"/><path d="M90 70 V45 M90 135 V110" stroke="#7c9cff" stroke-width="7"/>`);
  if(n==="generator") return wrap(glow+`<circle cx="90" cy="90" r="52" fill="#3c4b63" stroke="#dce7f4" stroke-width="5"/><circle cx="90" cy="90" r="18" fill="#111827" stroke="#6ee7b7" stroke-width="5"/><path d="M90 38 V63 M142 90 H117 M90 142 V117 M38 90 H63" stroke="#8be7ff" stroke-width="7"/>`);
  if(n==="radio") return wrap(glow+`<rect x="43" y="67" width="94" height="68" rx="10" fill="#4a5a70" stroke="#dbe6f2" stroke-width="4"/><circle cx="72" cy="101" r="18" fill="#172033" stroke="#8be7ff" stroke-width="4"/><path d="M101 87 H124 M101 101 H124 M101 115 H116" stroke="#d9e6f3" stroke-width="5" stroke-linecap="round"/><path d="M110 67 Q125 43 139 25" fill="none" stroke="#b9c9dd" stroke-width="5"/>`);
  if(n==="telephone") return wrap(glow+`<path d="M55 58 Q90 42 125 58 L115 82 Q90 74 65 82Z" fill="#55667d" stroke="#dce7f3" stroke-width="4"/><path d="M60 68 Q42 98 70 119 M120 68 Q138 98 110 119" fill="none" stroke="#dce7f3" stroke-width="10" stroke-linecap="round"/>`);
  if(n.includes("transformer")) return wrap(glow+`<path d="M55 48 V132 M75 48 V132 M105 48 V132 M125 48 V132" stroke="#dbe6f4" stroke-width="7"/><path d="M55 48 Q65 38 75 48 Q85 58 95 48 Q105 38 115 48 Q125 58 135 48" fill="none" stroke="#e8a15f" stroke-width="8"/>`);
  if(n.includes("electron tube")) return wrap(glow+`<path d="M62 43 Q90 30 118 43 V137 Q90 150 62 137Z" fill="#a5eaff" fill-opacity=".12" stroke="#bfeaff" stroke-width="4"/><path d="M74 112 V70 M106 112 V70" stroke="#e0f5ff" stroke-width="5"/><path d="M74 105 Q90 86 106 105" fill="none" stroke="#ffd36e" stroke-width="5"/>`);
  if(n==="x-ray") return wrap(glow+`<path d="M55 55 H125 V125 H55Z" fill="#26354b" stroke="#d8e7f5" stroke-width="4"/><path d="M90 69 L90 111 M69 90 H111" stroke="#8be7ff" stroke-width="5"/><circle cx="90" cy="90" r="13" fill="none" stroke="#fff" stroke-width="4"/>`);
  if(n==="photocell") return wrap(glow+`<rect x="45" y="58" width="90" height="65" rx="8" fill="#1c3151" stroke="#a8dcff" stroke-width="4"/><path d="M58 75 L122 75 M58 91 L122 91 M58 107 L122 107" stroke="#4d8ac7" stroke-width="5"/><path d="M90 30 L90 53 M73 36 L80 53 M107 36 L100 53" stroke="#fff1a8" stroke-width="5"/>`);
  if(n.includes("computer")) return wrap(glow+`<rect x="42" y="48" width="96" height="70" rx="8" fill="#26354b" stroke="#dbe8f6" stroke-width="4"/><rect x="53" y="59" width="74" height="46" fill="#101b2c"/><path d="M62 72 H78 M62 86 H104 M62 96 H91" stroke="#6ee7b7" stroke-width="4"/><path d="M72 118 H108 M90 118 V136 M68 136 H112" stroke="#cbd8e7" stroke-width="6" stroke-linecap="round"/>`);
  if(n.includes("transistor")) return wrap(glow+`<path d="M70 52 V128 M110 52 V128" stroke="#dbe7f4" stroke-width="7"/><path d="M70 78 H110 M70 101 H110" stroke="#6ee7ff" stroke-width="5"/><path d="M90 38 V58 M90 122 V142" stroke="#ffd36e" stroke-width="6"/>`);
  if(n.includes("integrated circuit")) return wrap(glow+`<rect x="50" y="50" width="80" height="80" rx="8" fill="#1a2333" stroke="#dbe7f4" stroke-width="4"/><g stroke="#6ee7ff" stroke-width="4"><path d="M60 40v10M75 40v10M90 40v10M105 40v10M120 40v10M60 130v10M75 130v10M90 130v10M105 130v10M120 130v10M40 60h10M40 75h10M40 90h10M40 105h10M40 120h10M130 60h10M130 75h10M130 90h10M130 105h10M130 120h10"/></g><circle cx="78" cy="78" r="6" fill="#ffd36e"/><circle cx="104" cy="104" r="6" fill="#6ee7b7"/>`);
  if(n==="laser") return wrap(glow+`<path d="M48 72 H119 L136 90 L119 108 H48Z" fill="#3f5273" stroke="#dce8f5" stroke-width="4"/><path d="M64 90 H160" stroke="#ff6f91" stroke-width="8"/><path d="M67 77 H106" stroke="#9beaff" stroke-width="5"/>`);
  if(n.includes("satellite")) return wrap(glow+`<rect x="68" y="58" width="44" height="64" rx="6" fill="#9aa9bd" stroke="#eef5ff" stroke-width="4"/><path d="M68 70 L36 53 M112 70 L144 53 M68 109 L36 126 M112 109 L144 126" stroke="#8be7ff" stroke-width="4"/><path d="M42 47 H20 V67 H42 M138 47 H160 V67 H138" fill="#385b83" stroke="#bfeaff" stroke-width="4"/>`);
  if(n==="rocket") return wrap(glow+`<path d="M90 32 C115 51 124 83 113 119 L90 145 L67 119 C56 83 65 51 90 32Z" fill="#d7e4f2" stroke="#fff" stroke-width="4"/><circle cx="90" cy="76" r="13" fill="#263a59" stroke="#6ee7ff" stroke-width="4"/><path d="M67 105 L47 121 L59 131 M113 105 L133 121 L121 131" fill="#6f83ff" stroke="#b9c8da" stroke-width="3"/><path d="M78 139 L90 161 L102 139" fill="#ff9b55" stroke="#ffe0a5" stroke-width="3"/>`);
  if(n.includes("solar cell")) return wrap(glow+`<rect x="40" y="55" width="100" height="70" rx="5" fill="#203c67" stroke="#bfeaff" stroke-width="4"/><g stroke="#67baff" stroke-width="2"><path d="M65 55v70M90 55v70M115 55v70M40 78h100M40 101h100"/></g><path d="M90 30v20M77 35l6 15M103 35l-6 15" stroke="#fff1a8" stroke-width="5"/>`);
  if(n.includes("nuclear") || n.includes("fusion reactor")) return wrap(glow+`<path d="M52 63 Q90 40 128 63 V119 Q90 142 52 119Z" fill="#5c6f89" stroke="#dbe7f4" stroke-width="4"/><circle cx="90" cy="91" r="24" fill="#ffb65d" stroke="#fff0b5" stroke-width="4"/><path d="M90 67 C70 83 70 99 90 115 C110 99 110 83 90 67Z" fill="none" stroke="#fff" stroke-width="3"/>`);
  if(n.includes("particle accelerator")) return wrap(glow+`<ellipse cx="90" cy="90" rx="62" ry="34" fill="none" stroke="#8be7ff" stroke-width="10"/><ellipse cx="90" cy="90" rx="35" ry="18" fill="none" stroke="#7c9cff" stroke-width="7"/><circle cx="90" cy="90" r="7" fill="#fff"/>`);
  if(n.includes("space telescope")) return wrap(glow+`<path d="M55 65 H125 V116 H55Z" fill="#6d7c91" stroke="#e3edf7" stroke-width="4"/><circle cx="90" cy="90" r="21" fill="#172033" stroke="#8be7ff" stroke-width="5"/><path d="M55 75 L34 61 M125 75 L146 61" stroke="#c9d8e8" stroke-width="7"/><path d="M90 116 V145 M72 145 H108" stroke="#c9d8e8" stroke-width="6"/>`);
  if(n==="gps") return wrap(glow+`<rect x="64" y="54" width="52" height="72" rx="8" fill="#8f9db0" stroke="#edf4fc" stroke-width="4"/><path d="M90 32 V54 M90 126 V148 M58 90 H42 M122 90 H138" stroke="#8be7ff" stroke-width="5"/><circle cx="90" cy="90" r="14" fill="#172033" stroke="#6ee7b7" stroke-width="4"/>`);
  if(n.includes("space station")) return wrap(glow+`<path d="M35 84 H145 M50 61 L130 119 M50 119 L130 61" stroke="#cbd8e7" stroke-width="10"/><circle cx="90" cy="90" r="18" fill="#263a59" stroke="#8be7ff" stroke-width="4"/><rect x="35" y="77" width="30" height="26" fill="#5279a5" stroke="#dce8f5" stroke-width="3"/><rect x="115" y="77" width="30" height="26" fill="#5279a5" stroke="#dce8f5" stroke-width="3"/>`);
  if(n.includes("ion engine")) return wrap(glow+`<path d="M55 58 H112 L132 90 L112 122 H55 L73 90Z" fill="#465a76" stroke="#dce8f5" stroke-width="4"/><path d="M78 72 L106 90 L78 108Z" fill="#8be7ff"/><path d="M48 90 H28" stroke="#bfeaff" stroke-width="7"/>`);
  if(n.includes("quantum computer")) return wrap(glow+`<rect x="45" y="48" width="90" height="84" rx="12" fill="#1c2940" stroke="#dce8f5" stroke-width="4"/><circle cx="73" cy="78" r="9" fill="#8be7ff"/><circle cx="107" cy="78" r="9" fill="#ffcf70"/><circle cx="73" cy="106" r="9" fill="#6ee7b7"/><circle cx="107" cy="106" r="9" fill="#c18cff"/><path d="M73 78 L107 78 M73 106 L107 106 M73 78 L73 106 M107 78 L107 106" stroke="#6f83ff" stroke-width="4"/>`);
  if(n.includes("quantum sensor")) return wrap(glow+`<circle cx="90" cy="90" r="45" fill="#20344d" stroke="#8be7ff" stroke-width="5"/><circle cx="90" cy="90" r="14" fill="#fff"/><path d="M90 28v30M90 122v30M28 90h30M122 90h30" stroke="#6ee7b7" stroke-width="5"/>`);
  if(n.includes("nanobot")) return wrap(glow+`<circle cx="90" cy="90" r="35" fill="#7c8da4" stroke="#e7eff9" stroke-width="4"/><circle cx="80" cy="82" r="6" fill="#6ee7ff"/><circle cx="101" cy="100" r="6" fill="#ffcf70"/><path d="M90 55V38M90 142v-17M55 90H38M142 90h-17M66 66L54 54M126 126l-12-12M114 66l12-12M66 114l-12 12" stroke="#8be7ff" stroke-width="5" stroke-linecap="round"/>`);
  if(n.includes("graphene")) return wrap(glow+`<path d="M40 70 L65 50 L95 62 L125 48 L145 76 L121 100 L140 125 L106 135 L82 116 L52 132 L37 103 L58 86Z" fill="#27364c" stroke="#8be7ff" stroke-width="4"/><g stroke="#6f83ff" stroke-width="3" fill="none"><path d="M40 70l18 16 7-36M58 86l24 30 13-54M82 116l24 19 15-35M95 62l26 38 24-24M125 48l-4 52"/></g>`);
  if(n.includes("artificial intelligence")) return wrap(glow+`<circle cx="90" cy="90" r="50" fill="#293b59" stroke="#dbe8f6" stroke-width="4"/><path d="M63 79 Q90 55 117 79 V111 Q90 128 63 111Z" fill="#111b2d" stroke="#8be7ff" stroke-width="4"/><circle cx="77" cy="91" r="6" fill="#6ee7b7"/><circle cx="103" cy="91" r="6" fill="#6ee7b7"/><path d="M77 106 Q90 114 103 106" fill="none" stroke="#ffcf70" stroke-width="4"/>`);
  if(n.includes("fusion drive")) return wrap(glow+`<path d="M55 62 H112 L145 90 L112 118 H55 L75 90Z" fill="#465d7d" stroke="#dce9f7" stroke-width="4"/><path d="M65 76 Q90 90 65 104 M82 70 Q110 90 82 110" fill="none" stroke="#ff9b55" stroke-width="6"/><path d="M40 90 H20" stroke="#8be7ff" stroke-width="7"/>`);
  if(n.includes("antimatter trap")) return wrap(glow+`<ellipse cx="90" cy="90" rx="55" ry="34" fill="none" stroke="#c18cff" stroke-width="9"/><circle cx="90" cy="90" r="12" fill="#ffcf70"/><path d="M45 90 H25 M155 90 H135" stroke="#8be7ff" stroke-width="5"/>`);
  if(n.includes("warp metric")||n.includes("spacetime")) return wrap(glow+`<path d="M30 90 Q55 42 90 90 T150 90" fill="none" stroke="#8be7ff" stroke-width="6"/><path d="M30 90 Q55 138 90 90 T150 90" fill="none" stroke="#7c9cff" stroke-width="6"/><circle cx="90" cy="90" r="14" fill="#fff"/>`);
  if(n.includes("wormhole")||n.includes("portal")) return wrap(glow+`<ellipse cx="90" cy="90" rx="42" ry="58" fill="#0b1020" stroke="#c18cff" stroke-width="8"/><ellipse cx="90" cy="90" rx="23" ry="39" fill="none" stroke="#8be7ff" stroke-width="5"/><path d="M50 60 Q90 90 130 60 M50 120 Q90 90 130 120" fill="none" stroke="#6f83ff" stroke-width="4"/>`);
  if(n.includes("time machine")||n.includes("time traveler")||n.includes("timeline")||n.includes("chronon")||n.includes("past probe")||n.includes("future probe")) return wrap(glow+`<circle cx="90" cy="90" r="55" fill="#26344b" stroke="#dce8f5" stroke-width="5"/><circle cx="90" cy="90" r="39" fill="#111a29" stroke="#8be7ff" stroke-width="3"/><path d="M90 90 L90 61 M90 90 L113 103" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M55 42 Q90 20 125 42 M55 138 Q90 160 125 138" fill="none" stroke="#c18cff" stroke-width="5"/>`);
  if(n.includes("causal")||n.includes("reality anchor")||n.includes("reality stabilizer")) return wrap(glow+`<path d="M90 34 L110 69 L145 90 L110 111 L90 146 L70 111 L35 90 L70 69Z" fill="#334d72" stroke="#dce9f7" stroke-width="5"/><circle cx="90" cy="90" r="14" fill="#fff"/>`);
  if(n.includes("multiverse")||n.includes("universe")||n.includes("omniverse")||n.includes("dimension")||n.includes("branch")||n.includes("parallel")||n.includes("cosmic")) return wrap(glow+`<g fill="none" stroke-width="5"><ellipse cx="90" cy="90" rx="58" ry="29" stroke="#8be7ff"/><ellipse cx="90" cy="90" rx="29" ry="58" stroke="#c18cff"/><circle cx="90" cy="90" r="11" fill="#fff" stroke="#fff"/><path d="M42 55 Q90 90 138 55 M42 125 Q90 90 138 125" stroke="#6f83ff"/></g>`);
  if(n.includes("black hole")||n.includes("hawking")) return wrap(glow+`<circle cx="90" cy="90" r="40" fill="#050811" stroke="#ffb35c" stroke-width="9"/><circle cx="90" cy="90" r="16" fill="#000"/><path d="M43 90 Q90 48 137 90 Q90 132 43 90Z" fill="none" stroke="#ffcf70" stroke-width="4"/>`);
  if(n.includes("dark matter")||n.includes("dark energy")||n.includes("gravity")) return wrap(glow+`<circle cx="90" cy="90" r="48" fill="#141c2b" stroke="#7c9cff" stroke-width="5"/><path d="M90 35 C120 58 120 122 90 145 C60 122 60 58 90 35Z" fill="none" stroke="#8be7ff" stroke-width="5"/><circle cx="90" cy="90" r="8" fill="#fff"/>`);
  if(n.includes("graviton")||n.includes("planck")) return wrap(glow+`<circle cx="90" cy="90" r="38" fill="#33445f" stroke="#e2ecf8" stroke-width="4"/><path d="M90 30v25M90 125v25M30 90h25M125 90h25" stroke="#c18cff" stroke-width="6"/><circle cx="90" cy="90" r="10" fill="#fff"/>`);
  if(n.includes("simulation")||n.includes("compiler")||n.includes("spacetime computer")) return wrap(glow+`<rect x="45" y="45" width="90" height="90" rx="14" fill="#1c2940" stroke="#dce8f5" stroke-width="4"/><path d="M65 70 H115 M65 90 H105 M65 110 H120" stroke="#6ee7b7" stroke-width="5" stroke-linecap="round"/><path d="M45 90 H28 M135 90 H152" stroke="#8be7ff" stroke-width="5"/>`);
  if(n.includes("machine")) return wrap(glow+`<path d="M48 120 V68 L90 43 L132 68 V120Z" fill="#435570" stroke="#e2edf8" stroke-width="5"/><circle cx="90" cy="91" r="23" fill="#101827" stroke="#8be7ff" stroke-width="5"/><path d="M90 58v15M90 109v15M57 91h15M108 91h15" stroke="#ffcf70" stroke-width="5"/>`);
  return wrap(glow+`<circle cx="90" cy="90" r="48" fill="#344a6d" stroke="#dce8f5" stroke-width="5"/><path d="M90 52v76M52 90h76" stroke="#8be7ff" stroke-width="5"/><circle cx="90" cy="90" r="12" fill="#fff"/>`);
}

function parseIngredients(text){
  return text.split(" + ").map(x=>x.trim()).filter(Boolean);
}
function hideFabricator(){
  const panel=document.getElementById("fabricatorSuccess");
  if(panel){panel.classList.remove("show");panel.setAttribute("aria-hidden","true");}
}
function showSuccessFabricator(recipe){
  const panel=document.getElementById("fabricatorSuccess");
  const visual=document.getElementById("fabricatorVisual");
  const stateEl=document.getElementById("fabState");
  const caption=document.getElementById("fabCaption");
  if(!panel||!visual)return;
  stateEl.textContent="SYNTHESIS COMPLETE";
  stateEl.style.color="#6ee7b7";
  const particles=Array.from({length:22},(_,i)=>`<i class="particle" style="--x:${((i*37)%180)-90}px;--y:${((i*61)%160)-80}px;left:${8+(i*13)%84}%;top:${10+(i*17)%78}%"></i>`).join("");
  visual.className="fab-visual fab-success";
  visual.innerHTML=`<div class="forge-particles">${particles}</div>
    <div class="product-core"><div><div class="icon product-picture">${productArt(recipe[2])}</div>
    <strong>${recipe[2]}</strong><small>DISCOVERY UNLOCKED</small></div></div>`;
  caption.textContent=`${recipe[1]} → ${recipe[2]}`;
  panel.classList.add("show");
  panel.setAttribute("aria-hidden","false");
}
function render(){
 document.getElementById("level").textContent=`${state.level} / 100`;
 document.getElementById("era").textContent=eraFor(state.level)[0];
 document.getElementById("xp").textContent=state.xp;
 const retryEl=document.getElementById("retryCount");
 if(retryEl) retryEl.textContent=`${state.retryCount} / 3`;
 document.getElementById("discovery").textContent=`${state.materials.length} / 100+`;
 document.getElementById("bar").style.width=(state.level)+"%";
 const r=currentRecipe();
 hideFabricator();
 const nextBtn=document.getElementById("nextLevel");
 if(nextBtn){nextBtn.classList.add("hidden-next");nextBtn.classList.remove("next-level-show");}
 document.getElementById("goal").textContent=`Create: ${r[0]}`;
 document.getElementById("hint").textContent=`Field: ${r[3]} • Choose the scientifically valid recipe.`;
 let correct=`${r[1]} → ${r[2]}`;
 let opts=[correct];
 for(let i=0;i<4;i++) opts.push(decoys[(state.level*3+i)%decoys.length]);
 // deterministic shuffle
 for(let i=opts.length-1;i>0;i--){let j=(state.level*7+i*11)% (i+1);[opts[i],opts[j]]=[opts[j],opts[i]]}
 document.getElementById("options").innerHTML=opts.map((x,i)=>`<button class="option" data-v="${x.replaceAll('"','&quot;')}"><span class="num">OPTION ${i+1}</span><strong>${x.split(" → ")[0]}</strong></button>`).join("");
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(b.dataset.v));
 document.getElementById("materials").innerHTML=state.materials.slice(-30).map(x=>`<span class="chip">${x}</span>`).join("");
 document.getElementById("scientists").innerHTML=scientists.map(s=>`<div class="scientist ${state.rewarded.includes(s[0])?"done":"locked"}"><div><b>${s[1]}</b><br><span>Level ${s[0]}</span></div><span>${state.rewarded.includes(s[0])?"✓":"🔒"}</span></div>`).join("");
}
let pendingLevelUp=false;

function choose(v){
 const r=currentRecipe(), correct=`${r[1]} → ${r[2]}`;
 const nextBtn=document.getElementById("nextLevel");
 if(pendingLevelUp) return;

 if(v!==correct){
  state.retryCount=(state.retryCount||0)+1;
  save();
  document.getElementById("message").className="message bad";

  if(state.retryCount>=3){
   const oldLevel=state.level;
   const newLevel=Math.max(1,oldLevel-5);
   state.level=newLevel;
   state.retryCount=0;
   save();
   document.querySelectorAll(".option").forEach(b=>b.disabled=true);
   document.getElementById("message").textContent=oldLevel>1
    ? `⚠ 3 mistakes! Penalty applied — Level ${oldLevel} → Level ${newLevel}. Rebuild the lost levels.`
    : `⚠ 3 mistakes! You are already at Level 1. No lower level is available.`;
   if(nextBtn) nextBtn.classList.add("hidden-next");
   setTimeout(()=>render(),1100);
  }else{
   document.getElementById("message").textContent=`✕ Try Again — ${state.retryCount}/3 mistakes`;
   hideFabricator();
   if(nextBtn) nextBtn.classList.add("hidden-next");
  }
  return;
 }

 pendingLevelUp=true;
 state.materials.push(r[2]);
 state.xp+=100;
 state.retryCount=0;
 save();

 document.getElementById("message").className="message good";
 document.getElementById("message").textContent=`✓ Correct! ${r[2]} discovered.`;
 document.querySelectorAll(".option").forEach(b=>b.disabled=true);
 showSuccessFabricator(r);

 if(nextBtn){
  nextBtn.classList.add("hidden-next");
  nextBtn.classList.remove("next-level-show");
  setTimeout(()=>{
   nextBtn.classList.remove("hidden-next");
   nextBtn.classList.add("next-level-show");
  },1300);
 }
}

function advanceLevel(){
 if(!pendingLevelUp) return;
 const completedLevel=state.level;
 if(completedLevel>=100){
  state.level=100;
  state.xp+=10000;
  pendingLevelUp=false;
  save();
  document.getElementById("nextLevel")?.classList.add("hidden-next");
  showReward(100);
  return;
 }
 state.level=completedLevel+1;
 state.retryCount=0;
 pendingLevelUp=false;
 save();
 render();
 const milestone=state.level-1;
 if(milestone%5===0) setTimeout(()=>showReward(milestone),250);
}

function showReward(lvl){
 const s=scientists.find(x=>x[0]===lvl);if(!s||state.rewarded.includes(lvl))return;
 state.rewarded.push(lvl);save();
 document.getElementById("scientistName").textContent=s[1];
 document.getElementById("scientistQuote").textContent=s[2];
 document.getElementById("modal").classList.remove("hidden");
}
document.getElementById("continue").onclick=()=>document.getElementById("modal").classList.add("hidden");
document.getElementById("nextLevel").onclick=advanceLevel;
document.getElementById("reset").onclick=()=>{if(confirm("Reset all local progress?")){localStorage.removeItem("elementGameSave");location.reload()}};
render();save();
