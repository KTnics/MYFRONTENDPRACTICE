
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDOYzzObF_6JthfxtlHWDpGusPk33AAWgk",
  authDomain: "boogleauthentication.firebaseapp.com",
  projectId: "boogleauthentication",
  storageBucket: "boogleauthentication.appspot.com",
  messagingSenderId: "895222897067",
  appId: "1:895222897067:web:3ebc22b92f85d6b58a5aee"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export default{auth,provider}