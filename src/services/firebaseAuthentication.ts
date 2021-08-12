import firebase from "firebase/app";
import { firebaseAuth, googleAuthProvider } from "firebaseApp";

type User = firebase.User | null | undefined;

export async function signInWithGoogle(): Promise<User> {
  try {
    const response = await firebaseAuth.signInWithPopup(googleAuthProvider);
    const user = response?.user ?? null;

    return user;
  } catch (error) {
    console.error("Error signing up with google... ", error.message);
  }
}

export async function signInAnonymously(): Promise<User> {
  try {
    const response = await firebaseAuth.signInAnonymously();
    const user = response?.user ?? null;

    return user;
  } catch (error) {
    console.error("Error signing up with google... ", error.message);
  }
}

export async function signOut(): Promise<void> {
  try {
    await firebaseAuth.signOut();
  } catch (error) {
    console.error("Error signing out... ", error.message);
  }
}
