import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDDqqf_-r-VjpqHMbk-0KjwVwkaeT6dmPo",
  authDomain: "book-santa-4bb40.firebaseapp.com",
  projectId: "book-santa-4bb40",
  storageBucket: "book-santa-4bb40.appspot.com",
  messagingSenderId: "868307332824",
  appId: "1:868307332824:web:da0b1214373145209ff1ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
