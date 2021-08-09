import firebase from "firebase/app";
import { firebaseAuth, googleAuthProvider } from "firebaseApp";

export async function signInWithGoogle(): Promise<
  firebase.User | null | undefined
> {
  try {
    const response = await firebaseAuth.signInWithPopup(googleAuthProvider);
    const user = response?.user ?? null;

    return user;
  } catch (error) {
    console.error("Error signing up with google... ", error.message);
  }
}
