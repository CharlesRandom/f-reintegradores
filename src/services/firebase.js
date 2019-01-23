import * as firebase from 'firebase'

 const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "testing-b927c.firebaseapp.com",
  databaseURL: "https://testing-b927c.firebaseio.com",
  projectId: "testing-b927c",
  storageBucket: "testing-b927c.appspot.com",
  messagingSenderId: "1077716813882"
 };
  firebase.initializeApp(config);

  export default firebase