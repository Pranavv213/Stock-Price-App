import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKQQZ-5g_gVErlYzoswliKUyzr3keYAj8",
  authDomain: "stock-dcf2a.firebaseapp.com",
  projectId: "stock-dcf2a",
  storageBucket: "stock-dcf2a.appspot.com",
  messagingSenderId: "517779620126",
  appId: "1:517779620126:web:3dae773dc754c4f80c090f",
 
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
const firestore = firebase.firestore()
export const database={
    users:firestore.collection('users')
}
export const storage=firebase.storage()



