// import firebase from "firebase";
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWHyyuYx6O9J2nV6JiuGmzjraVA99BmZ4",
  authDomain: "linkedin-clone-7d98b.firebaseapp.com",
  projectId: "linkedin-clone-7d98b",
  storageBucket: "linkedin-clone-7d98b.appspot.com",
  messagingSenderId: "682087680286",
  appId: "1:682087680286:web:605af751b084437ae6e10f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
