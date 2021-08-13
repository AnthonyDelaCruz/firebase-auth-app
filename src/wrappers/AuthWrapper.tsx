import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase";

import { firebaseAuth } from "firebaseApp";

type User = firebase.User | null;
type Props = {
  children: React.ReactElement;
};
type AuthContextType = {
  currentUser: User;
  isLoadingUser: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoadingUser: true,
});

function AuthWrapper({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [isLoadingUser, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }

      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoadingUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
