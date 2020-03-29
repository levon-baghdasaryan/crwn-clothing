import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBL0Qcudk0YfpbZrUFVvzdz_MrjbHKgdqM",
  authDomain: "crwn-clothing-bafb9.firebaseapp.com",
  databaseURL: "https://crwn-clothing-bafb9.firebaseio.com",
  projectId: "crwn-clothing-bafb9",
  storageBucket: "crwn-clothing-bafb9.appspot.com",
  messagingSenderId: "105062982433",
  appId: "1:105062982433:web:526e17a27f35a73730d460"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
