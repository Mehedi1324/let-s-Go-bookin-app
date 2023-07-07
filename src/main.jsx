import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SearchContextProvider } from './context/SearchContext';
import FirebaseContext from './context/firebaseContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </FirebaseContext>
);
