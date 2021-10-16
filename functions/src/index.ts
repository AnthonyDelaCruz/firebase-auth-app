import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });

  response.send("Hello from Firebase!");
});

export const followUser = functions.https.onCall(async (data, context) => {
  try {
    // follow user from data
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called while authenticated"
      );
    }

    const currentUserContext = context.auth;
    // const { userIdToFollow } = data

    // // set the current user id to the users followers
    // // set the following id on the current users following
    const userCollectionRef = admin.firestore().collection("users");
    const currentUser = userCollectionRef.doc(currentUserContext.uid);
    const userToFollow = userCollectionRef.doc(currentUserContext.uid); // to be changed to user passed from data
    // get data of users above
    const currentUserDoc = (await currentUser.get()).data();
    const userToFollowDoc = (await userToFollow.get()).data();
    // add the user to the current users following list
    await currentUser.update({
      following: admin.firestore.FieldValue.arrayUnion({
        uid: userToFollowDoc?.uid,
        displayName: userToFollowDoc?.displayName,
        profilePicUrl: userToFollowDoc?.profilePicUrl,
      }),
    });
    // add the current user to the users following list
    // change fields to what is being passed in front-end
    await userToFollow.update({
      followers: admin.firestore.FieldValue.arrayUnion({
        uid: currentUserContext.uid,
        displayName: currentUserDoc?.displayName,
        profilePicUrl: currentUserDoc?.profilePicUrl,
      }),
    });

    return { success: true };
  } catch (error) {
    functions.logger.error("Error following user", error.message);
    return { success: false };
  }
});

export const createUserOnSignUp = functions.auth
  .user()
  .onCreate(async (user, context) => {
    try {
      const userId = user.uid;
      await admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
          uid: userId,
          profilePicUrl: user.photoURL || "",
          displayName: user.displayName,
          followers: [],
          following: [],
        });
    } catch (error) {
      functions.logger.error("Error after creating user", error);
    }
  });
