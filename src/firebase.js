// 必要な関数を import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //...
  apiKey: "AIzaSyAkoOHSjIrrUoNCcDX1QBjmQAvY79L90bM",
  authDomain: "anualincome-100milion.firebaseapp.com",
  projectId: "anualincome-100milion",
  storageBucket: "anualincome-100milion.appspot.com",
  messagingSenderId: "1069689598322",
  appId: "1:1069689598322:web:12d193986973ad62c32deb",
  measurementId: "G-HPQ505N0KJ",
};

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig);
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app);
