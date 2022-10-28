import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiIYnhDTzTa2TYuwWuvL8DHy4NPqSOnvU",
  authDomain: "social-media-facebook.firebaseapp.com",
  projectId: "social-media-facebook",
  storageBucket: "social-media-facebook.appspot.com",
  messagingSenderId: "140351662093",
  appId: "1:140351662093:web:8e48dc95156428aa2ecd44",
  measurementId: "G-PZP613Z7FT"
};


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);




export {db}
