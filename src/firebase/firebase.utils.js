import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDMOe268K8NWmhEHhmSIt9iSfGG8kgMnyk",
  authDomain: "blake-test-apparel-store.firebaseapp.com",
  databaseURL: "https://blake-test-apparel-store.firebaseio.com",
  projectId: "blake-test-apparel-store",
  storageBucket: "blake-test-apparel-store.appspot.com",
  messagingSenderId: "86275389966",
  appId: "1:86275389966:web:ded49ec19076a81cf7da5f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;