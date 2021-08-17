import firebase from "firebase";

import { AuthPersistence } from "enums/authPersistence";
import { firebaseAuth } from "firebaseApp";

type AuthPersistenceHook = {
  invokePersistenceMethod: () => Promise<void>;
};

function useAuthPersistence(type: AuthPersistence): AuthPersistenceHook {
  let persistenceMethod: () => Promise<void | string>;

  switch (type) {
    case AuthPersistence.LOCAL:
      persistenceMethod = async () => {
        await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      };
      break;
    case AuthPersistence.SESSION:
      persistenceMethod = async () => {
        await firebaseAuth.setPersistence(
          firebase.auth.Auth.Persistence.SESSION
        );
      };
      break;
    case AuthPersistence.NONE:
      persistenceMethod = async () => {
        await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.NONE);
      };
      break;
  }

  async function invokePersistenceMethod() {
    try {
      await persistenceMethod();
    } catch (error) {
      console.error("Error setting authentication persistence ", error.message);
    }
  }

  return { invokePersistenceMethod };
}

export default useAuthPersistence;
