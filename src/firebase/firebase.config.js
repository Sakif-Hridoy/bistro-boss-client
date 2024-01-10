// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjD2zzn1cF_ZjzpnXWhe7U8a41jxB4h6E",
  authDomain: "bistro-boss-restaurent-739f3.firebaseapp.com",
  projectId: "bistro-boss-restaurent-739f3",
  storageBucket: "bistro-boss-restaurent-739f3.appspot.com",
  messagingSenderId: "720670992427",
  appId: "1:720670992427:web:01cc308a5bb2c7f9ef226e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app