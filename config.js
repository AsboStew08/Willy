import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDiier_BLeFgFs7phtof7X3I9HIO97jtbM",
    authDomain: "willy-dc13c.firebaseapp.com",
    projectId: "willy-dc13c",
    storageBucket: "willy-dc13c.appspot.com",
    messagingSenderId: "131413221261",
    appId: "1:131413221261:web:945155c4fd6a00a28727c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()