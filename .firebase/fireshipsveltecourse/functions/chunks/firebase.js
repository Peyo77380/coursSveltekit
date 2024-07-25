import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { d as derived, w as writable } from "./index2.js";
const firebaseConfig = {
  apiKey: "AIzaSyAnMJoR2V8Z3p-Twl4nFBH76thX0SiB8Hk",
  authDomain: "fireshipsveltecourse.firebaseapp.com",
  projectId: "fireshipsveltecourse",
  storageBucket: "fireshipsveltecourse.appspot.com",
  messagingSenderId: "733504540968",
  appId: "1:733504540968:web:4b1fd0594bff4e9bb3401d",
  measurementId: "G-WEKEZ94RSM"
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
getStorage();
function userStore() {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
const user = userStore();
function docStore(path) {
  const docRef = doc(db, path);
  const { subscribe } = writable(null, (set) => {
    onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
const userData = derived(user, ($user, set) => {
  if (!$user) {
    return set(null);
  }
  return docStore(`users/${$user.uid}`).subscribe(set);
});
export {
  userData as a,
  db as d,
  user as u
};
