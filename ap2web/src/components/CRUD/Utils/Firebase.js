import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "../keys/firebase";

class Firebase {
  constructor() {
    this.app = !this.app ? initializeApp(firebaseConfig) : this.app;
  }

  getFirestoreDb() {
    return getFirestore(this.app)
  }
}

export default Firebase
