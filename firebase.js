import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4acAfqcHi3AadU0xXjWAzGdx1igCHSks",
  authDomain: "care-match.firebaseapp.com",
  databaseURL: "https://care-match-default-rtdb.firebaseio.com",
  projectId: "care-match",
  storageBucket: "care-match.appspot.com",
  messagingSenderId: "422489031110",
  appId: "1:422489031110:web:3da872279b04e76448b2c7",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
