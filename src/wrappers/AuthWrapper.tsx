import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase";

import { firebaseAuth } from "firebaseApp";

type User = firebase.User | null;
type Props = {
  children: React.ReactElement;
};

export const AuthContext = createContext<User>(null);

function AuthWrapper({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
  }, []);

  console.log(`currentUser`, currentUser?.displayName);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}

export default AuthWrapper;
