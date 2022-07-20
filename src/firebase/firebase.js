import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqnZr4Wt-mbJv5xCnsyvcTPDvro1SzMqs",
  authDomain: "reactcoder-ba807.firebaseapp.com",
  projectId: "reactcoder-ba807",
  storageBucket: "reactcoder-ba807.appspot.com",
  messagingSenderId: "4678870016",
  appId: "1:4678870016:web:00bf329bb90e9783b264e5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);