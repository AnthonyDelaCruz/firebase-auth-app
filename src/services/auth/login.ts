import { firebaseAuth } from "firebaseApp";

import { User } from "types/user";

async function login(username: string, password: string): Promise<User> {
  try {
    const response = await firebaseAuth.signInWithEmailAndPassword(
      username,
      password
    );
    const user = response?.user ?? null;

    return user;
  } catch (error: any) {
    console.error(
      "Error signing in with email and password... ",
      error.message
    );
    throw new Error(error.message);
  }
}

export default login;
