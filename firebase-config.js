// ══════════════════════════════════════════════════
// Firebase 設定檔
// !! 請將下方的值替換成你的 Firebase 專案設定值 !!
// 取得方式：Firebase Console > 專案設定 > 你的應用程式 > Firebase SDK snippet
// ══════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// 初始化 Firebase（只有在 config 填好之後才會真正連線）
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;
let firebaseReady = false;

try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebaseApp  = firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    firebaseDb   = firebase.firestore();
    firebaseReady = true;
    console.log("✅ Firebase 初始化成功");
  } else {
    console.warn("⚠️ Firebase 尚未設定，Google 登入功能將無法使用。請至 firebase-config.js 填入你的設定值。");
  }
} catch(e) {
  console.error("Firebase 初始化失敗：", e);
}
