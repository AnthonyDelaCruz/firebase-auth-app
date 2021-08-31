import React, { createContext } from "react";

import useAuthPersistence from "hooks/useAuthPersistence";
import { AuthPersistence } from "enums/authPersistence";

type AuthPersistenceType = {
  invokePersistenceMethod: () => void;
  handleChangePersistenceType: (type: AuthPersistence) => void;
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AuthPersistenceContext = createContext<AuthPersistenceType>({
  invokePersistenceMethod: () => {},
  handleChangePersistenceType: (type: AuthPersistence) => {},
});

function AuthPersistenceWrapper({ children }: Props) {
  const { invokePersistenceMethod, handleChangePersistenceType } =
    useAuthPersistence();

  return (
    <AuthPersistenceContext.Provider
      value={{ invokePersistenceMethod, handleChangePersistenceType }}
    >
      {children}
    </AuthPersistenceContext.Provider>
  );
}

export default AuthPersistenceWrapper;
