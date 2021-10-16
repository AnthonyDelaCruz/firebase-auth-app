import { firebaseAuth } from "firebaseApp";

import { User } from "types/user";

async function signUpWithEmailAndPassword(
  username: string,
  password: string
): Promise<User> {
  const response = await firebaseAuth.createUserWithEmailAndPassword(
    username,
    password
  );
  const user = response?.user ?? null;

  return user;
}

export default signUpWithEmailAndPassword;
