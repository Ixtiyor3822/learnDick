import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXqbK9afHPo7ihw3O4Rz_PdfFEWp3IeYk",
  authDomain: "learnenglish-b4109.firebaseapp.com",
  projectId: "learnenglish-b4109",
  storageBucket: "learnenglish-b4109.appspot.com",
  messagingSenderId: "368597475525",
  appId: "1:368597475525:web:1882614f8e8ba73f1850ac",
  measurementId: "G-4Q91SNP35B"
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{firestore, auth}}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root')
);

