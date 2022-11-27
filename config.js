 import firebase from 'firebase';
 
 const firebaseConfig = {
  apiKey: "AIzaSyBeVivzCidqQIM-q6h1PRzlD-x5rZkW4Ps",
  authDomain: "attendenceappp.firebaseapp.com",
  databaseURL: "https://attendenceappp-default-rtdb.firebaseio.com",
  projectId: "attendenceappp",
  storageBucket: "attendenceappp.appspot.com",
  messagingSenderId: "146762813044",
  appId: "1:146762813044:web:0c2b04224dac3730a0cb21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();