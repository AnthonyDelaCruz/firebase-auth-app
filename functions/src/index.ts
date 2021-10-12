import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

export const createUserOnSignUp = functions.auth
  .user()
  .onCreate(async (user, context) => {
    try {
      const userId = user.uid;
      await admin
        .firestore()
        .collection("users")
        .doc(userId)
        .set({ profilePicUrl: "", mobileNumber: "" });
    } catch (error) {
      functions.logger.error("Error after creatig user", error);
    }
  });
