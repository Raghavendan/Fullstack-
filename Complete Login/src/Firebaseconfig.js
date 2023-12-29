import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzOlcLgT4h5uj3qbZXMlwGsiUIR7MGxS0",
  authDomain: "cart-9415f.firebaseapp.com",
  projectId: "cart-9415f",
  storageBucket: "cart-9415f.appspot.com",
  messagingSenderId: "34928572791",
  appId: "1:34928572791:web:1644721cd57bdfe5548972"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)

