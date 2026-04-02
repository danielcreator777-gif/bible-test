// ══════════════════════════════════════════════════
// Firebase 設定 — 聖言寶庫
// 專案: bible-verse-game-9ae7c
// ══════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyDQUiTFT2iRyLZFYsOePH3kJOxwC1gF600",
  authDomain:        "bible-verse-game-9ae7c.firebaseapp.com",
  projectId:         "bible-verse-game-9ae7c",
  storageBucket:     "bible-verse-game-9ae7c.firebasestorage.app",
  messagingSenderId: "238381426950",
  appId:             "1:238381426950:web:48a7b8e6f1f4f46401f8d4"
};

// 初始化 Firebase
let firebaseApp  = null;
let firebaseAuth = null;
let firebaseDb   = null;
let firebaseReady = false;

try {
  firebaseApp  = firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  firebaseDb   = firebase.firestore();
  firebaseReady = true;
  console.log("✅ Firebase 聖言寶庫 初始化成功");
} catch(e) {
  console.error("Firebase 初始化失敗：", e);
}
