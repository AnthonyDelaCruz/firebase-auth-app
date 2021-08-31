import { useState, useCallback } from "react";

import { AuthPersistence } from "enums/authPersistence";
import { firebaseAuth } from "firebaseApp";

type AuthPersistenceHook = {
  invokePersistenceMethod: () => Promise<void>;
  handleChangePersistenceType: (type: AuthPersistence) => void;
};

function useAuthPersistence(): AuthPersistenceHook {
  const [persistenceType, setPersistenceType] = useState<AuthPersistence>(
    AuthPersistence.LOCAL
  );

  function handleChangePersistenceType(type: AuthPersistence) {
    setPersistenceType(type);
  }

  const invokePersistenceMethod: () => Promise<void> = useCallback(async () => {
    await firebaseAuth.setPersistence(persistenceType);
  }, [persistenceType]);

  return { invokePersistenceMethod, handleChangePersistenceType };
}

export default useAuthPersistence;
