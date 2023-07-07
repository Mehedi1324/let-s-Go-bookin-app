import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCZh7Rt8-daTRkrLCKRIE7eMdUbbtt1G2E',
  authDomain: 'lets-go-booking-app.firebaseapp.com',
  projectId: 'lets-go-booking-app',
  storageBucket: 'lets-go-booking-app.appspot.com',
  messagingSenderId: '1004284436703',
  appId: '1:1004284436703:web:059fbf55b79d02916f096a',
  measurementId: 'G-PY55YJPKH5',
};

// Initialize Firebase_____________

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default firebaseAuthentication;
