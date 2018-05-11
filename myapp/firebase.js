import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDRB4T6HDgFmjsNmNPJ8b3ZsqAoOdl61C0",
    authDomain: "reactnative-58ddf.firebaseapp.com",
    databaseURL: "https://reactnative-58ddf.firebaseio.com",
    projectId: "reactnative-58ddf",
    storageBucket: "",
    messagingSenderId: "314080863869"
  };
  firebase.initializeApp(config);

  export const db = firebase.database()
