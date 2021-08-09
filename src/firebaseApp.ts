import firebase from "firebase/app";
import { firebaseConfig } from "firebaseConfig";

import "firebase/auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const googleAuthProvider: firebase.auth.GoogleAuthProvider_Instance =
  new firebase.auth.GoogleAuthProvider();
