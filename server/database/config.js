var firebase = require("firebase");


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "social-media-facebook.firebaseapp.com",
  projectId: "social-media-facebook",
  storageBucket: "social-media-facebook.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(app);


module.exports = { db }
