import * as firebase from 'firebase'
require ('@firebase/firestore')
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAC5arVx0myt1yeZUJwW8GSWlzHRWynWoY",
    authDomain: "bedtimestories-d66a4.firebaseapp.com",
    databaseURL: "https://bedtimestories-d66a4.firebaseio.com",
    projectId: "bedtimestories-d66a4",
    storageBucket: "bedtimestories-d66a4.appspot.com",
    messagingSenderId: "4797217160",
    appId: "1:4797217160:web:4e666379496bf3e453a23d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()