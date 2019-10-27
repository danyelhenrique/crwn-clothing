import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBIW8iYF2ynIO6YJUEdWNZ94d-noSL3-fo",
  authDomain: "store-db-61cdc.firebaseapp.com",
  databaseURL: "https://store-db-61cdc.firebaseio.com",
  projectId: "store-db-61cdc",
  storageBucket: "store-db-61cdc.appspot.com",
  messagingSenderId: "960316380011",
  appId: "1:960316380011:web:a29dcac3c170d8334f322e",
  measurementId: "G-8CJZWQ15KS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Erro to creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
