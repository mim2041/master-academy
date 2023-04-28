// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUdUSX_2s90Wf_Cz4wsSKTGtO6mJmh2ZI",
  authDomain: "master-academy-55899.firebaseapp.com",
  projectId: "master-academy-55899",
  storageBucket: "master-academy-55899.appspot.com",
  messagingSenderId: "638504404082",
  appId: "1:638504404082:web:ec3721e61324ed015e2eeb",
  measurementId: "G-26VKW381X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;