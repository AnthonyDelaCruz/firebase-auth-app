import firebase from "firebase/app";
import {
  firebaseAuth,
  googleAuthProvider,
  twitterAuthProvider,
} from "firebaseApp";

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

export async function signInWithTwitter(): Promise<User> {
  try {
    const response = await firebaseAuth.signInWithPopup(twitterAuthProvider);
    const user = response?.user ?? null;

    return user;
  } catch (error) {
    console.error("Error signing up with twitter... ", error.message);
  }
}

export async function signUpWithEmailAndPassword(
  username: string,
  password: string
): Promise<User> {
  try {
    const response = await firebaseAuth.createUserWithEmailAndPassword(
      username,
      password
    );
    const user = response?.user ?? null;

    return user;
  } catch (error) {
    console.error(
      "Error signing up with email and password... ",
      error.message
    );
    throw new Error(error.message);
  }
}

export async function signInWithEmailAndPassword(
  username: string,
  password: string
): Promise<User> {
  try {
    const response = await firebaseAuth.signInWithEmailAndPassword(
      username,
      password
    );
    const user = response?.user ?? null;

    return user;
  } catch (error) {
    console.error(
      "Error signing in with email and password... ",
      error.message
    );
    throw new Error(error.message);
  }
}

export async function signInwithEmailLink(email: string): Promise<void> {
  try {
    /**
     * @todo
     * extract urls
     */
    const actionCodeSettings = {
      url: "http://localhost:3000/passwordless-redirect",
      handleCodeInApp: true,
    };

    await firebaseAuth.sendSignInLinkToEmail(email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
  } catch (error) {
    console.error("Error sending email link to user... ", error.message);
    throw new Error(error.message);
  }
}

export async function linkAnonymousUserWithGoogleAccount(): Promise<void> {
  try {
    await firebaseAuth.currentUser?.linkWithPopup(googleAuthProvider);
  } catch (error) {
    console.error("Error linking users account...", error.message);
  }
}

export async function signOut(): Promise<void> {
  try {
    await firebaseAuth.signOut();
  } catch (error) {
    console.error("Error signing out... ", error.message);
  }
}

export async function sendPasswordResetLink(email: string) {
  try {
    await firebaseAuth.sendPasswordResetEmail(email);
  } catch (error) {
    console.error(
      "Error sending password reset email link to user...",
      error.message
    );
  }
}
