import { createContext, useContext } from 'react';
import useStatements from '../hooks/useStatements';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const allValue = useStatements();
  return (
    <SearchContext.Provider value={allValue}>{children}</SearchContext.Provider>
  );
};

export const useBookingDetails = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useBookingDetails must be used within SearchContext');
  }
  return context;
};
