import { firebaseAuth } from "firebaseApp";

async function verifyEmail(): Promise<void> {
  try {
    await firebaseAuth.currentUser?.sendEmailVerification();
  } catch (error: any) {
    console.error(
      "Error sending verifciation email link to user...",
      error.message
    );
  }
}

export default verifyEmail;
