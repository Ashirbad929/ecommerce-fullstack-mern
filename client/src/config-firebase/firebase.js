// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAXX-smqAVkGqCuIl8f93ivxqxWUp3dcrM",
  authDomain: `${process.env.FIREBASE_AUTHDOMAIN}`,
  projectId:`${process.env.FIREBASE_PROJECTID}`,
  storageBucket:`${process.env.FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDERID}`,
  appId: `${process.env.APPID}`
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);


