// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8o8VyJownImw-G1MShzyOpvp9lZsovtA",
  authDomain: "netflix-clone-b234a.firebaseapp.com",
  projectId: "netflix-clone-b234a",
  storageBucket: "netflix-clone-b234a.appspot.com",
  messagingSenderId: "722846893840",
  appId: "1:722846893840:web:c460868313a9910a9e4795"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }