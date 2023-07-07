import React, { createContext, useContext } from 'react';
import useFirebase from '../firebase/useFirebase';
const AuthContext = createContext();
const FirebaseContext = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default FirebaseContext;
