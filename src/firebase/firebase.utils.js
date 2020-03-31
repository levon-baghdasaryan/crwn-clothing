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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
