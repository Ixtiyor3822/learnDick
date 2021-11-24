// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXqbK9afHPo7ihw3O4Rz_PdfFEWp3IeYk",
  authDomain: "learnenglish-b4109.firebaseapp.com",
  projectId: "learnenglish-b4109",
  storageBucket: "learnenglish-b4109.appspot.com",
  messagingSenderId: "368597475525",
  appId: "1:368597475525:web:1882614f8e8ba73f1850ac",
  measurementId: "G-4Q91SNP35B"
};

export default firebaseConfig;

// project-368597475525
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);