import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'


const firebaseConfig = {
  apiKey: "AIzaSyAqnZr4Wt-mbJv5xCnsyvcTPDvro1SzMqs",
  authDomain: "reactcoder-ba807.firebaseapp.com",
  projectId: "reactcoder-ba807",
  storageBucket: "reactcoder-ba807.appspot.com",
  messagingSenderId: "4678870016",
  appId: "1:4678870016:web:00bf329bb90e9783b264e5"
};


export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);

