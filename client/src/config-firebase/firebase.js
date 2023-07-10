// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXX-smqAVkGqCuIl8f93ivxqxWUp3dcrM",
  authDomain: "ecomm-shop-5dc73.firebaseapp.com",
  projectId: "ecomm-shop-5dc73",
  storageBucket: "ecomm-shop-5dc73.appspot.com",
  messagingSenderId: "752296066609",
  appId: "1:752296066609:web:4b146a62fb31efb53e1f10"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);