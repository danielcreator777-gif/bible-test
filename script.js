/* ══════════════════════════════════════════════════
   聖言寶庫 — 中世紀遊戲互動引擎
   ══════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════
// VERSE DATABASE — 60+ verses across 15 categories
// Sources: DailyVerses.net/tc + classical CUV Bible
// ═══════════════════════════════════════════════════
const verses = [
  // ── 力量 strength ──
  { text: "我靠著那加給我力量的，凡事都能做。", reference: "腓立比書 4:13", category: "strength", tags: ["力量","勇氣"] },
  { text: "你當剛強壯膽！不要懼怕，也不要驚惶；因為你無論往哪裡去，耶和華你的神必與你同在。", reference: "約書亞記 1:9", category: "strength", tags: ["力量","勇氣","神同在"] },
  { text: "耶和華是我的力量，是我的盾牌；我心裡倚靠他，就得了幫助。", reference: "詩篇 28:7", category: "strength", tags: ["力量","保護"] },
  { text: "但那等候耶和華的必從新得力。他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。", reference: "以賽亞書 40:31", category: "strength", tags: ["力量","盼望"] },
  { text: "你不要害怕，因為我與你同在；不要驚惶，因為我是你的神。我必堅固你，我必幫助你。", reference: "以賽亞書 41:10", category: "strength", tags: ["力量","神同在"] },
  { text: "我們曉得萬事都互相效力，叫愛神的人得益處，就是按他旨意被召的人。", reference: "羅馬書 8:28", category: "strength", tags: ["力量","信靠"] },
  { text: "耶和華是我的亮光，是我的拯救，我還怕誰呢？耶和華是我性命的保障，我還懼誰呢？", reference: "詩篇 27:1", category: "strength", tags: ["力量","信靠"] },

  // ── 和平 peace ──
  { text: "耶和華是我的牧者，我必不致缺乏。", reference: "詩篇 23:1", category: "peace", tags: ["和平","牧者"] },
  { text: "凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。", reference: "馬太福音 11:28", category: "peace", tags: ["和平","安息"] },
  { text: "堅心倚賴你的，你必保守他十分平安，因為他倚靠你。", reference: "以賽亞書 26:3", category: "peace", tags: ["和平","信靠"] },
  { text: "你們要將一切的憂慮卸給神，因為他顧念你們。", reference: "彼得前書 5:7", category: "peace", tags: ["和平","禱告"] },
  { text: "我留下平安給你們；我將我的平安賜給你們。我所賜的，不像世人所賜的。你們心裡不要憂愁，也不要膽怯。", reference: "約翰福音 14:27", category: "peace", tags: ["和平","耶穌"] },
  { text: "應當一無掛慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神。神所賜、出人意外的平安必在基督耶穌裡保守你們的心懷意念。", reference: "腓立比書 4:6-7", category: "peace", tags: ["和平","禱告"] },
  { text: "我要聽神耶和華所說的話；因為他必應許將平安賜給他的百姓、他的聖民。", reference: "詩篇 85:8", category: "peace", tags: ["和平","神的話"] },

  // ── 愛 love ──
  { text: "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。", reference: "約翰福音 3:16", category: "love", tags: ["愛","救恩","耶穌"] },
  { text: "愛是恆久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂。", reference: "哥林多前書 13:4", category: "love", tags: ["愛","恩典"] },
  { text: "我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。", reference: "約翰福音 13:34", category: "love", tags: ["愛","耶穌"] },
  { text: "親愛的弟兄啊，我們應當彼此相愛，因為愛是從神來的。凡有愛心的，都是由神而生，並且認識神。", reference: "約翰一書 4:7", category: "love", tags: ["愛","神"] },
  { text: "就是到老，我仍是這樣；到你們白首，我仍懷抱你們。我已造作，也必保抱；我必懷抱，也必拯救。", reference: "以賽亞書 46:4", category: "love", tags: ["愛","保護"] },
  { text: "你要盡心、盡性、盡力愛耶和華你的神。", reference: "申命記 6:5", category: "love", tags: ["愛","敬拜"] },

  // ── 信仰 faith ──
  { text: "你們祈求，就給你們；尋找，就尋見；叩門，就給你們開門。", reference: "馬太福音 7:7", category: "faith", tags: ["信仰","禱告"] },
  { text: "我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。", reference: "哥林多後書 12:9", category: "faith", tags: ["信仰","恩典"] },
  { text: "在指望中要喜樂，在患難中要忍耐，禱告要恆切。", reference: "羅馬書 12:12", category: "faith", tags: ["信仰","盼望","禱告"] },
  { text: "你要專心仰賴耶和華，不可倚靠自己的聰明，在你一切所行的事上都要認定他，他必指引你的路。", reference: "箴言 3:5-6", category: "faith", tags: ["信仰","智慧","信靠"] },
  { text: "我是道路、真理、生命；若不藉著我，沒有人能到父那裡去。", reference: "約翰福音 14:6", category: "faith", tags: ["信仰","耶穌"] },
  { text: "你們常常喜樂，不住地禱告，凡事謝恩；因為這是神在基督耶穌裡向你們所定的旨意。", reference: "帖撒羅尼迦前書 5:16-18", category: "faith", tags: ["信仰","喜樂","禱告"] },
  { text: "信就是所望之事的實底，是未見之事的確據。", reference: "希伯來書 11:1", category: "faith", tags: ["信仰","盼望"] },

  // ── 智慧 wisdom ──
  { text: "喜樂的心乃是良藥；憂傷的靈使骨枯乾。", reference: "箴言 17:22", category: "wisdom", tags: ["智慧","喜樂"] },
  { text: "敬畏耶和華是智慧的開端；認識至聖者便是聰明。", reference: "箴言 9:10", category: "wisdom", tags: ["智慧","敬畏"] },
  { text: "你的話是我腳前的燈，是我路上的光。", reference: "詩篇 119:105", category: "wisdom", tags: ["智慧","神的話"] },
  { text: "智慧人必得榮耀；愚昧人高升，乃是羞恥。", reference: "箴言 3:35", category: "wisdom", tags: ["智慧"] },
  { text: "你們各人要快快地聽，慢慢地說，慢慢地動怒。", reference: "雅各書 1:19", category: "wisdom", tags: ["智慧","言語"] },
  { text: "就是到老我仍不改變；到你們白首，我仍懷抱你們。", reference: "以賽亞書 46:4", category: "wisdom", tags: ["智慧","信靠"] },
  { text: "不可讓人小看你年輕，總要在言語、行為、愛心、信心、清潔上，都作信徒的榜樣。", reference: "提摩太前書 4:12", category: "wisdom", tags: ["智慧","言語"] },

  // ── 禱告 prayer ──
  { text: "尋求耶和華的人必不缺乏任何好處。", reference: "詩篇 34:10", category: "prayer", tags: ["禱告","信靠"] },
  { text: "我呼求的日子，你就應允我，鼓勵我，使我心裡有能力。", reference: "詩篇 138:3", category: "prayer", tags: ["禱告","力量"] },
  { text: "你們奉我的名無論求什麼，我必成就，叫父因兒子得榮耀。", reference: "約翰福音 14:13", category: "prayer", tags: ["禱告","應許"] },
  { text: "耶和華離那些求告他的人不遠，就是誠心求告他的人。", reference: "詩篇 145:18", category: "prayer", tags: ["禱告","神同在"] },
  { text: "義人祈禱所發的力量是大有功效的。", reference: "雅各書 5:16", category: "prayer", tags: ["禱告","公義"] },

  // ── 救恩 salvation ──
  { text: "你若口裡認耶穌為主，心裡信神叫他從死裡復活，就必得救。", reference: "羅馬書 10:9", category: "salvation", tags: ["救恩","耶穌"] },
  { text: "因為世人都犯了罪，虧缺了神的榮耀；如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義。", reference: "羅馬書 3:23-24", category: "salvation", tags: ["救恩","恩典"] },
  { text: "你們得救是本乎恩，也因著信；這並不是出於自己，乃是神所賜的。", reference: "以弗所書 2:8", category: "salvation", tags: ["救恩","恩典","信仰"] },
  { text: "除他以外，別無拯救；因為在天下人間，沒有賜下別的名，我們可以靠著得救。", reference: "使徒行傳 4:12", category: "salvation", tags: ["救恩","耶穌"] },

  // ── 恩典 grace ──
  { text: "他從豐滿的恩典裡，我們都領受了，而且恩上加恩。", reference: "約翰福音 1:16", category: "grace", tags: ["恩典","耶穌"] },
  { text: "神能照著運行在我們心裡的大力充充足足地成就一切，超過我們所求所想的。", reference: "以弗所書 3:20", category: "grace", tags: ["恩典","力量"] },
  { text: "要以恩慈相待，存憐憫的心，彼此饒恕，正如神在基督裡饒恕了你們一樣。", reference: "以弗所書 4:32", category: "grace", tags: ["恩典","饒恕"] },
  { text: "可見這不在乎那定意的，也不在乎那奔跑的，只在乎發憐憫的神。", reference: "羅馬書 9:16", category: "grace", tags: ["恩典","神"] },
  { text: "我的靈魂哪，你要稱頌耶和華！不可忘記他的一切恩惠！", reference: "詩篇 103:2", category: "grace", tags: ["恩典","讚美"] },

  // ── 喜樂 joy ──
  { text: "你們要靠主常常喜樂；我再說，你們要喜樂！", reference: "腓立比書 4:4", category: "joy", tags: ["喜樂","信仰"] },
  { text: "這是耶和華所定的日子，我們在其中要高興歡喜！", reference: "詩篇 118:24", category: "joy", tags: ["喜樂","感恩"] },
  { text: "你使我心裡快樂，勝過那豐收五穀新酒的人。", reference: "詩篇 4:7", category: "joy", tags: ["喜樂","感恩"] },
  { text: "流淚撒種的，必歡呼收割！", reference: "詩篇 126:5", category: "joy", tags: ["喜樂","盼望"] },

  // ── 盼望 hope ──
  { text: "因我知道我所信的是誰，也深信他能保全我所交付他的，直到那日。", reference: "提摩太後書 1:12", category: "hope", tags: ["盼望","信仰"] },
  { text: "耶和華說：我知道我向你們所懷的意念，是賜平安的意念，不是降災禍的意念，要叫你們末後有指望。", reference: "耶利米書 29:11", category: "hope", tags: ["盼望","應許"] },
  { text: "盼望不至於羞恥，因為所賜給我們的聖靈將神的愛澆灌在我們心裡。", reference: "羅馬書 5:5", category: "hope", tags: ["盼望","聖靈","愛"] },
  { text: "那賜平安的神必將撒但踐踏在你們腳下，快了。願我主耶穌基督的恩與你們同在！", reference: "羅馬書 16:20", category: "hope", tags: ["盼望","和平"] },

  // ── 祝福 blessing ──
  { text: "耶和華賜福給你，保護你；耶和華使他的臉光照你，賜恩給你；耶和華向你仰臉，賜你平安。", reference: "民數記 6:24-26", category: "blessing", tags: ["祝福","和平"] },
  { text: "你趁著年幼、衰敗的日子尚未來到，就是你所說「我毫無喜樂」的多年未曾臨近之先，當記念造你的主。", reference: "傳道書 12:1", category: "blessing", tags: ["祝福","智慧"] },
  { text: "你們要嘗嘗主恩的滋味，便知道他是美善的；投靠他的人有福了！", reference: "詩篇 34:8", category: "blessing", tags: ["祝福","信靠"] },
  { text: "溫柔的人有福了！因為他們必承受地土。", reference: "馬太福音 5:5", category: "blessing", tags: ["祝福","謙卑"] },

  // ── 饒恕 forgiveness ──
  { text: "你們饒恕人的過犯，你們的天父也必饒恕你們的過犯。", reference: "馬太福音 6:14", category: "forgiveness", tags: ["饒恕","愛"] },
  { text: "我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的不義。", reference: "約翰一書 1:9", category: "forgiveness", tags: ["饒恕","救恩"] },
  { text: "主寬恕了你們，你們也要照樣彼此寬恕。", reference: "歌羅西書 3:13", category: "forgiveness", tags: ["饒恕","愛"] },
  { text: "棄掉你們一切的罪過，自做一個新心和新靈。", reference: "以西結書 18:31", category: "forgiveness", tags: ["饒恕","更新"] },

  // ── 公義 truth ──
  { text: "你們必曉得真理，真理必叫你們得以自由。", reference: "約翰福音 8:32", category: "truth", tags: ["公義","真理"] },
  { text: "義人的盼望必然喜樂，惡人的指望必然消滅。", reference: "箴言 10:28", category: "truth", tags: ["公義","盼望"] },
  { text: "因為行公義、好憐憫、存謙卑的心，與你的神同行，這就是耶和華對你所要的。", reference: "彌迦書 6:8", category: "truth", tags: ["公義","謙卑"] },
  { text: "公義使邦國高舉；罪惡是人民的羞辱。", reference: "箴言 14:34", category: "truth", tags: ["公義"] },

  // ── 永生 eternity ──
  { text: "我是復活，是生命。信我的人，雖然死了，也必復活。", reference: "約翰福音 11:25", category: "eternity", tags: ["永生","耶穌"] },
  { text: "神賜給我們的，乃是永生；這永生也是在他兒子裡面。", reference: "約翰一書 5:11", category: "eternity", tags: ["永生","救恩"] },
  { text: "因為我深信無論是死，是生，是天使，是掌權的，是有能的，是現在的事，是將來的事，是高處的，是低處的，是別的受造之物，都不能叫我們與神的愛隔絕。", reference: "羅馬書 8:38-39", category: "eternity", tags: ["永生","愛","保護"] },
  { text: "那時，義人在他們父的國裡，要發出光來，像太陽一樣。有耳可聽的，就應當聽！", reference: "馬太福音 13:43", category: "eternity", tags: ["永生","盼望"] },
];

// ═══════════════════════════════════════════════════
// CATEGORY CONFIG
// ═══════════════════════════════════════════════════
const categoryConfig = {
  all:         { label: "全部卷冊", icon: "⚜" },
  strength:    { label: "力量",     icon: "⚔" },
  peace:       { label: "和平",     icon: "🕊" },
  love:        { label: "愛",       icon: "♥" },
  faith:       { label: "信仰",     icon: "✝" },
  wisdom:      { label: "智慧",     icon: "📜" },
  prayer:      { label: "禱告",     icon: "🙏" },
  salvation:   { label: "救恩",     icon: "✨" },
  grace:       { label: "恩典",     icon: "🌿" },
  joy:         { label: "喜樂",     icon: "☀" },
  hope:        { label: "盼望",     icon: "⭐" },
  blessing:    { label: "祝福",     icon: "🏆" },
  forgiveness: { label: "饒恕",     icon: "🕊" },
  truth:       { label: "公義",     icon: "⚖" },
  eternity:    { label: "永生",     icon: "∞" },
};

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
let currentVerse    = null;
let currentCategory = 'all';
let favorites   = JSON.parse(localStorage.getItem('sv_favorites') || '[]');
let drawHistory = JSON.parse(localStorage.getItem('sv_history')   || '[]');
let stats       = JSON.parse(localStorage.getItem('sv_stats') || '{"totalDraws":0,"streak":0,"lastDate":""}');
let isDrawing   = false;
let audioCtx    = null;

// ═══════════════════════════════════════════════════
// DOM REFS
// ═══════════════════════════════════════════════════
const drawBtn         = document.getElementById('drawBtn');
const verseDisplay    = document.getElementById('verseDisplay');
const referenceDisplay= document.getElementById('referenceDisplay');
const saveBtn         = document.getElementById('saveBtn');
const saveIcon        = document.getElementById('saveIcon');
const saveBtnText     = document.getElementById('saveBtnText');
const shareBtn        = document.getElementById('shareBtn');
const copyBtn         = document.getElementById('copyBtn');
const favCountSpan    = document.getElementById('favCount');
const viewFavoritesBtn= document.getElementById('viewFavoritesBtn');
const historyBtn      = document.getElementById('historyBtn');
const dailyVerseBtn   = document.getElementById('dailyVerseBtn');
const verseActions    = document.getElementById('verseActions');
const verseCard       = document.getElementById('verseCard');
const verseTagStrip   = document.getElementById('verseTagStrip');
const toast           = document.getElementById('toast');
const favSearchInput  = document.getElementById('favSearchInput');
const exportFavBtn    = document.getElementById('exportFavBtn');
const clearAllFavBtn  = document.getElementById('clearAllFavBtn');

// Modals
const favoritesModal  = document.getElementById('favoritesModal');
const favoritesList   = document.getElementById('favoritesList');
const historyModal    = document.getElementById('historyModal');
const historyList     = document.getElementById('historyList');
const dailyModal      = document.getElementById('dailyModal');

// ═══════════════════════════════════════════════════
// AUDIO ENGINE — Medieval-style Game Sounds via Web Audio
// ═══════════════════════════════════════════════════
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

// Reusable oscillator helper
function playTone(freq, type, gainVal, duration, startDelay = 0, ctx = null) {
  const ac = ctx || getAudioCtx();
  const now = ac.currentTime + startDelay;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(gainVal, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start(now);
  osc.stop(now + duration + 0.05);
}

// 🎵 Draw / Invoke — Epic bell + holy chord
function soundInvoke() {
  const ac = getAudioCtx();
  const now = ac.currentTime;
  // Low drum hit
  const noise = ac.createOscillator();
  const nGain = ac.createGain();
  noise.type = 'sawtooth';
  noise.frequency.setValueAtTime(80, now);
  noise.frequency.exponentialRampToValueAtTime(40, now + 0.3);
  nGain.gain.setValueAtTime(0.3, now);
  nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
  noise.connect(nGain); nGain.connect(ac.destination);
  noise.start(now); noise.stop(now + 0.4);

  // Rising holy chord (C E G C)
  [[523, 0.05], [659, 0.1], [784, 0.15], [1047, 0.22]].forEach(([f, d]) => {
    playTone(f, 'sine', 0.18, 1.8, d, ac);
  });
  // Church bell shimmer
  playTone(2093, 'sine', 0.08, 2.5, 0.3, ac);
}

// 🎵 Favorite / Save — Magic sparkle
function soundFavorite() {
  const ac = getAudioCtx();
  [880, 1108, 1318, 1760].forEach((f, i) => {
    playTone(f, 'triangle', 0.15, 0.5, i * 0.06, ac);
  });
}

// 🎵 Unfavorite / Remove — Descending notes
function soundUnfavorite() {
  const ac = getAudioCtx();
  [880, 698, 587, 440].forEach((f, i) => {
    playTone(f, 'triangle', 0.12, 0.4, i * 0.07, ac);
  });
}

// 🎵 Menu / Nav button — Stone click
function soundMenuClick() {
  const ac = getAudioCtx();
  const now = ac.currentTime;
  // Low thud
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(200, now);
  osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
  g.gain.setValueAtTime(0.2, now);
  g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  osc.connect(g); g.connect(ac.destination);
  osc.start(now); osc.stop(now + 0.15);
}

// 🎵 Modal open — Ancient door creak
function soundModalOpen() {
  const ac = getAudioCtx();
  const now = ac.currentTime;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.linearRampToValueAtTime(180, now + 0.3);
  osc.frequency.linearRampToValueAtTime(220, now + 0.5);
  g.gain.setValueAtTime(0.08, now);
  g.gain.setValueAtTime(0.06, now + 0.3);
  g.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
  osc.connect(g); g.connect(ac.destination);
  osc.start(now); osc.stop(now + 0.65);
}

// 🎵 Modal close — Thud
function soundModalClose() {
  const ac = getAudioCtx();
  const now = ac.currentTime;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(60, now + 0.15);
  g.gain.setValueAtTime(0.18, now);
  g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  osc.connect(g); g.connect(ac.destination);
  osc.start(now); osc.stop(now + 0.25);
}

// 🎵 Copy / Export — Parchment rustle
function soundCopy() {
  const ac = getAudioCtx();
  // White noise burst (simulated with many close freqs)
  for (let i = 0; i < 5; i++) {
    const f = 1000 + Math.random() * 2000;
    playTone(f, 'sawtooth', 0.03, 0.15, i * 0.02, ac);
  }
}

// 🎵 Category change — Rune activation
function soundCategory() {
  const ac = getAudioCtx();
  playTone(440, 'sine', 0.12, 0.3, 0, ac);
  playTone(660, 'sine', 0.08, 0.25, 0.08, ac);
}

// 🎵 Delete — Negative sound
function soundDelete() {
  const ac = getAudioCtx();
  [330, 220, 165].forEach((f, i) => {
    playTone(f, 'square', 0.1, 0.3, i * 0.05, ac);
  });
}

// 🎵 Toast appear — Notification chime
function soundToast() {
  const ac = getAudioCtx();
  playTone(1047, 'sine', 0.1, 0.4, 0, ac);
  playTone(1319, 'sine', 0.07, 0.3, 0.1, ac);
}

// ═══════════════════════════════════════════════════
// EMBER / PARTICLE SYSTEM
// ═══════════════════════════════════════════════════
const canvas = document.getElementById('emberCanvas');
const ctx    = canvas.getContext('2d');
let embers   = [];
let animId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Ember {
  constructor(x, y) {
    this.x = x || Math.random() * canvas.width;
    this.y = y || canvas.height + 10;
    this.size = Math.random() * 2.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.speedY = -(Math.random() * 1.2 + 0.4);
    this.life = 1;
    this.decay = Math.random() * 0.008 + 0.003;
    this.hue = Math.random() > 0.3 ? 25 + Math.random() * 20 : 50 + Math.random() * 20;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = (Math.random() - 0.5) * 0.08;
  }
  update() {
    this.wobble += this.wobbleSpeed;
    this.x += this.speedX + Math.sin(this.wobble) * 0.3;
    this.y += this.speedY;
    this.life -= this.decay;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.life * 0.7;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${this.hue}, 90%, 70%)`;
    ctx.shadowBlur = 6;
    ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`;
    ctx.fill();
    ctx.restore();
  }
  get dead() { return this.life <= 0 || this.y < -20; }
}

function spawnEmbers() {
  // Spawn from bottom edges of screen (torch effect)
  if (Math.random() < 0.3) {
    embers.push(new Ember(Math.random() * 60 + 20));
    embers.push(new Ember(canvas.width - Math.random() * 60 - 20));
  }
  // Sometimes from top torches position
  if (Math.random() < 0.15) {
    [50, canvas.width - 30].forEach(x => {
      embers.push(new Ember(x + (Math.random() - 0.5) * 20, 150));
    });
  }
}

function animateEmbers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spawnEmbers();
  embers = embers.filter(e => !e.dead);
  embers.forEach(e => { e.update(); e.draw(); });
  // Limit count
  if (embers.length > 200) embers.splice(0, embers.length - 200);
  animId = requestAnimationFrame(animateEmbers);
}

window.addEventListener('resize', () => {
  resizeCanvas();
});
resizeCanvas();
animateEmbers();

// Burst embers on draw
function emberBurst(x, y, count = 30) {
  for (let i = 0; i < count; i++) {
    const e = new Ember(x, y);
    e.speedX = (Math.random() - 0.5) * 4;
    e.speedY = -(Math.random() * 3 + 1);
    e.size = Math.random() * 3 + 1;
    e.decay = Math.random() * 0.02 + 0.01;
    embers.push(e);
  }
}

// ═══════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════
let toastTimer;
function showToast(msg, duration = 2500) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  soundToast();
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ═══════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════
function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  if (stats.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  stats.streak = stats.lastDate === yesterday ? stats.streak + 1 : 1;
  stats.lastDate = today;
  localStorage.setItem('sv_stats', JSON.stringify(stats));
}

function saveStats() {
  localStorage.setItem('sv_stats', JSON.stringify(stats));
  renderStats();
}

function bumpStat(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 500);
}

function renderStats() {
  document.getElementById('totalDraws').textContent = stats.totalDraws;
  document.getElementById('totalFavs').textContent  = favorites.length;
  document.getElementById('streak').textContent     = stats.streak;
  document.getElementById('totalVerses').textContent = verses.length;
}

// ═══════════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════════
document.querySelectorAll('.scroll-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    soundCategory();
    document.querySelectorAll('.scroll-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.dataset.category;
    // Scroll tab into view
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
});

function getFilteredVerses() {
  if (currentCategory === 'all') return verses;
  return verses.filter(v => v.category === currentCategory);
}

// ═══════════════════════════════════════════════════
// DRAW VERSE
// ═══════════════════════════════════════════════════
function drawVerse() {
  if (isDrawing) return;
  isDrawing = true;
  drawBtn.classList.add('is-invoking');

  soundInvoke();

  // Ember burst from draw button
  const rect = drawBtn.getBoundingClientRect();
  emberBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);

  // Fade out
  verseDisplay.classList.remove('fade-in');
  referenceDisplay.classList.remove('fade-in');
  verseActions.classList.add('hidden');
  verseTagStrip.classList.add('hidden');
  verseDisplay.classList.add('fade-out');
  referenceDisplay.classList.add('fade-out');

  setTimeout(() => {
    const pool = getFilteredVerses();
    if (pool.length === 0) {
      verseDisplay.innerHTML = `<p class="idle-text">此分類目前無經文，請選擇其他卷冊</p>`;
      referenceDisplay.textContent = '';
      verseDisplay.classList.remove('fade-out');
      verseDisplay.classList.add('fade-in');
      isDrawing = false;
      drawBtn.classList.remove('is-invoking');
      return;
    }

    // Pick new verse (avoid repeat)
    let tries = 0;
    let pick;
    do {
      pick = pool[Math.floor(Math.random() * pool.length)];
      tries++;
    } while (pick === currentVerse && pool.length > 1 && tries < 10);
    currentVerse = pick;

    // Render
    verseDisplay.innerHTML = `<p>"${currentVerse.text}"</p>`;
    referenceDisplay.textContent = `— ${currentVerse.reference} —`;
    renderTagStrip(verseTagStrip, currentVerse.tags);
    verseTagStrip.classList.remove('hidden');

    verseDisplay.classList.remove('fade-out');
    referenceDisplay.classList.remove('fade-out');
    void verseDisplay.offsetWidth;
    verseDisplay.classList.add('fade-in');
    referenceDisplay.classList.add('fade-in');

    // Show actions
    verseActions.classList.remove('hidden');
    checkSaveState();

    // Stats
    stats.totalDraws++;
    updateStreak();
    saveStats();
    bumpStat('totalDraws');

    // History
    drawHistory.unshift({
      text: currentVerse.text,
      reference: currentVerse.reference,
      time: new Date().toLocaleString('zh-TW')
    });
    if (drawHistory.length > 60) drawHistory.pop();
    localStorage.setItem('sv_history', JSON.stringify(drawHistory));

    isDrawing = false;
    drawBtn.classList.remove('is-invoking');
  }, 550);
}

drawBtn.addEventListener('click', drawVerse);

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && !e.target.closest('input, textarea, button')) {
    e.preventDefault();
    drawVerse();
  }
  if (e.code === 'Escape') closeAllModals();
});

// ═══════════════════════════════════════════════════
// TAG STRIP
// ═══════════════════════════════════════════════════
function renderTagStrip(container, tags) {
  container.innerHTML = '';
  if (!tags || tags.length === 0) return;
  tags.forEach(tag => {
    const badge = document.createElement('span');
    badge.className = 'tag-badge';
    badge.textContent = tag;
    container.appendChild(badge);
  });
}

// ═══════════════════════════════════════════════════
// FAVORITES
// ═══════════════════════════════════════════════════
function updateFavCount() {
  favCountSpan.textContent = favorites.length;
  document.getElementById('totalFavs').textContent = favorites.length;
}

function checkSaveState() {
  if (!currentVerse) return;
  const saved = favorites.some(v => v.reference === currentVerse.reference);
  if (saved) {
    saveBtn.classList.add('saved');
    saveIcon.textContent = '♥';
    saveBtnText.textContent = '已收藏';
  } else {
    saveBtn.classList.remove('saved');
    saveIcon.textContent = '♡';
    saveBtnText.textContent = '收入寶典';
  }
}

saveBtn.addEventListener('click', () => {
  if (!currentVerse) return;
  const idx = favorites.findIndex(v => v.reference === currentVerse.reference);
  if (idx === -1) {
    favorites.push({ ...currentVerse });
    soundFavorite();
    showToast('✦ 已收入靈糧寶典！');
    bumpStat('totalFavs');
  } else {
    favorites.splice(idx, 1);
    soundUnfavorite();
    showToast('已從寶典移除');
  }
  localStorage.setItem('sv_favorites', JSON.stringify(favorites));
  updateFavCount();
  checkSaveState();
});

// ─ Share ─
shareBtn.addEventListener('click', () => {
  if (!currentVerse) return;
  soundCopy();
  const text = `「${currentVerse.text}」\n— ${currentVerse.reference}\n\n#聖言寶庫 #聖經金句`;
  if (navigator.share) {
    navigator.share({ title: '聖經金句分享', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('✦ 已複製，快去分享福音！'));
  }
});

// ─ Copy ─
copyBtn.addEventListener('click', () => {
  if (!currentVerse) return;
  soundCopy();
  const text = `「${currentVerse.text}」— ${currentVerse.reference}`;
  navigator.clipboard.writeText(text).then(() => showToast('✎ 已謄錄至剪貼板'));
});

// ═══════════════════════════════════════════════════
// MODAL MANAGEMENT
// ═══════════════════════════════════════════════════
function openModal(modal) {
  soundModalOpen();
  modal.classList.remove('hidden');
  requestAnimationFrame(() => modal.classList.add('show'));
}
function closeModal(modal) {
  soundModalClose();
  modal.classList.remove('show');
  setTimeout(() => modal.classList.add('hidden'), 400);
}
function closeAllModals() {
  [favoritesModal, historyModal, dailyModal].forEach(m => {
    if (!m.classList.contains('hidden')) closeModal(m);
  });
}

// Favorites
viewFavoritesBtn.addEventListener('click', () => {
  soundMenuClick();
  renderFavoritesList();
  favSearchInput.value = '';
  openModal(favoritesModal);
});
document.getElementById('closeFavBtn').addEventListener('click', () => closeModal(favoritesModal));
favoritesModal.addEventListener('click', e => { if (e.target === favoritesModal) closeModal(favoritesModal); });

favSearchInput.addEventListener('input', () => renderFavoritesList(favSearchInput.value.trim()));

function renderFavoritesList(search = '') {
  favoritesList.innerHTML = '';
  let list = favorites;
  if (search) {
    const q = search.toLowerCase();
    list = favorites.filter(v => v.text.toLowerCase().includes(q) || v.reference.toLowerCase().includes(q));
  }
  if (list.length === 0) {
    favoritesList.innerHTML = `<div class="empty-state"><div class="empty-icon">${search ? '⚲' : '♡'}</div><div class="empty-text">${search ? '找不到符合的聖言' : '寶典尚空，快去收集靈糧吧！'}</div></div>`;
    return;
  }
  list.forEach((verse, i) => {
    const realIdx = favorites.indexOf(verse);
    const item = document.createElement('div');
    item.className = 'fav-item';
    item.style.animationDelay = `${i * 0.04}s`;
    item.innerHTML = `
      <div class="fav-item-content">
        <div class="fav-item-text">"${verse.text}"</div>
        <div class="fav-item-ref">— ${verse.reference}</div>
      </div>
      <button class="fav-delete-btn" data-index="${realIdx}" title="從寶典移除">✕</button>
    `;
    favoritesList.appendChild(item);
  });

  favoritesList.querySelectorAll('.fav-delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      soundDelete();
      const idx = parseInt(e.currentTarget.dataset.index);
      favorites.splice(idx, 1);
      localStorage.setItem('sv_favorites', JSON.stringify(favorites));
      updateFavCount();
      checkSaveState();
      renderFavoritesList(favSearchInput.value.trim());
      showToast('⚔ 已從寶典移除');
    });
  });
}

// Export
exportFavBtn.addEventListener('click', () => {
  soundCopy();
  if (favorites.length === 0) { showToast('寶典是空的'); return; }
  const text = '✝ 我的靈糧寶典 ✝\n\n' + favorites.map((v, i) => `${i+1}. 「${v.text}」\n   — ${v.reference}`).join('\n\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = '我的靈糧寶典.txt'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 寶典已匯出！');
});

// Clear all
clearAllFavBtn.addEventListener('click', () => {
  soundMenuClick();
  if (favorites.length === 0) return;
  if (confirm('確定清空靈糧寶典？此操作無法復原。')) {
    soundDelete();
    favorites = [];
    localStorage.setItem('sv_favorites', JSON.stringify(favorites));
    updateFavCount(); checkSaveState(); renderFavoritesList();
    showToast('🗑 寶典已清空');
  }
});

// History
historyBtn.addEventListener('click', () => {
  soundMenuClick();
  renderHistoryList();
  openModal(historyModal);
});
document.getElementById('closeHistBtn').addEventListener('click', () => closeModal(historyModal));
historyModal.addEventListener('click', e => { if (e.target === historyModal) closeModal(historyModal); });

function renderHistoryList() {
  historyList.innerHTML = '';
  if (drawHistory.length === 0) {
    historyList.innerHTML = `<div class="empty-state"><div class="empty-icon">⚔</div><div class="empty-text">尚無探索紀錄，開始你的靈言之旅吧！</div></div>`;
    return;
  }
  drawHistory.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.style.animationDelay = `${i * 0.03}s`;
    div.innerHTML = `
      <span class="hist-time">⏳ ${item.time}</span>
      <span class="hist-text">"${item.text}"</span>
      <span class="hist-ref">— ${item.reference}</span>
    `;
    historyList.appendChild(div);
  });
}

// Daily Verse
dailyVerseBtn.addEventListener('click', () => {
  soundMenuClick();
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const dv = verses[dayOfYear % verses.length];
  document.getElementById('dailyDate').textContent =
    today.toLocaleDateString('zh-TW', { year:'numeric', month:'long', day:'numeric', weekday:'long' });
  document.getElementById('dailyQuote').textContent = `"${dv.text}"`;
  document.getElementById('dailyReference').textContent = `— ${dv.reference}`;
  renderTagStrip(document.getElementById('dailyTagStrip'), dv.tags);
  openModal(dailyModal);
});
document.getElementById('closeDailyBtn').addEventListener('click', () => closeModal(dailyModal));
dailyModal.addEventListener('click', e => { if (e.target === dailyModal) closeModal(dailyModal); });

// All other rune buttons get menu click sound
[viewFavoritesBtn, historyBtn, dailyVerseBtn].forEach(btn => {
  // Sound is already triggered individually above, but nav close buttons need it
});

// ═══════════════════════════════════════════════════
// CARD TILT
// ═══════════════════════════════════════════════════
verseCard.addEventListener('mousemove', e => {
  const r = verseCard.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const rx = ((y - r.height / 2) / r.height) * -4;
  const ry = ((x - r.width  / 2) / r.width ) *  4;
  verseCard.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
});
verseCard.addEventListener('mouseleave', () => {
  verseCard.style.transform = '';
});

// ═══════════════════════════════════════════════════
// SCROLL-BASED HEADER SHADOW
// ═══════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const bar = document.getElementById('topBar');
  if (window.scrollY > 10) bar.classList.add('scrolled');
  else bar.classList.remove('scrolled');
}, { passive: true });

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
updateFavCount();
renderStats();

// Welcome message for returning users
if (stats.totalDraws > 0) {
  setTimeout(() => {
    showToast(`⚜ 歡迎回到聖言寶庫！連續 ${stats.streak} 天靈修`, 3500);
  }, 1200);
}
