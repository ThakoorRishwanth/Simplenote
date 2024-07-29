
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHc38JnwLNvFshemPXqvU3_6YY5AdkWb8",
  authDomain: "simplenote-d7084.firebaseapp.com",
  projectId: "simplenote-d7084",
  storageBucket: "simplenote-d7084.appspot.com",
  messagingSenderId: "203605689353",
  appId: "1:203605689353:web:07d70eb8a3d1bf829064d8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

