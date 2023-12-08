import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const Auth = firebase.auth();

export { firestore, Auth };
