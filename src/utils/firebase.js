// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr7XfV3UvSKlNSzQt4mpVV--BFrOudVTI",
  authDomain: "netflixgpt-a2a55.firebaseapp.com",
  projectId: "netflixgpt-a2a55",
  storageBucket: "netflixgpt-a2a55.appspot.com",
  messagingSenderId: "224500256396",
  appId: "1:224500256396:web:ccc8ee8c02d7a73d6835a9",
  measurementId: "G-RTEH6QY764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);