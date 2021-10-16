import firebase from "firebase/app";
import { firebaseConfig } from "firebaseConfig";

import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseFunctions = firebaseApp.functions();
export const firebaseAuth = firebaseApp.auth();
export const firebaseFirestore = firebaseApp.firestore();

export const googleAuthProvider: firebase.auth.GoogleAuthProvider_Instance =
  new firebase.auth.GoogleAuthProvider();
export const twitterAuthProvider: firebase.auth.TwitterAuthProvider_Instance =
  new firebase.auth.TwitterAuthProvider();

// Emulators setup
if (window.location.hostname === "localhost") {
  firebaseFirestore.useEmulator("localhost", 8080);
  firebaseFunctions.useEmulator("localhost", 5001);
}
