import firebase from "firebase/app";
import { firebaseConfig } from "firebaseConfig";

import "firebase/auth";
import "firebase/functions";

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseFunctions = firebaseApp.functions();
// firebaseFunctions.useEmulator("localhost", 5001); // turn this on to test functions locally

export const firebaseAuth = firebaseApp.auth();
export const googleAuthProvider: firebase.auth.GoogleAuthProvider_Instance =
  new firebase.auth.GoogleAuthProvider();
export const twitterAuthProvider: firebase.auth.TwitterAuthProvider_Instance =
  new firebase.auth.TwitterAuthProvider();
