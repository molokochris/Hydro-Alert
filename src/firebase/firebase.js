import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
// import dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyDlLdo6xZpC1vb4GgFzEUdiq8cfssw8jQ8",
  authDomain: "hydro-alert-ff86b.firebaseapp.com",
  projectId: "hydro-alert-ff86b",
  storageBucket: "hydro-alert-ff86b.appspot.com",
  messagingSenderId: "707957406381",
  appId: "1:707957406381:web:40e81e2e1c878df8ede424",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAdosXJcZ4_KJwq4NU6tZQaQDOgCxS_DPU",
//   authDomain: "test-app-c2bdb.firebaseapp.com",
//   projectId: "test-app-c2bdb",
//   storageBucket: "test-app-c2bdb.appspot.com",
//   messagingSenderId: "651064281787",
//   appId: "1:651064281787:web:0ef82aec032f6875a1f79e",
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const database = firebase.database();
const Auth = firebase.auth();

export { firestore, Auth, database };
