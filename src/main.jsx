import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SearchContextProvider } from './context/SearchContext';
import FirebaseContextProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContextProvider>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </FirebaseContextProvider>
);
