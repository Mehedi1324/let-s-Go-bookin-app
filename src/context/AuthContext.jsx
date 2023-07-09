import React, { createContext, useContext } from 'react';
import useFirebase from '../firebase/useFirebase';
export const AuthContext = createContext();

const FirebaseContextProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default FirebaseContextProvider;
