import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlBxlsV4_saJhCfWKRTiHXbggR2Q6EDgI",
    authDomain: "nateflix-build.firebaseapp.com",
    projectId: "nateflix-build",
    storageBucket: "nateflix-build.appspot.com",
    messagingSenderId: "272725222636",
    appId: "1:272725222636:web:f76aa765087a34482ab1c9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }

  export default db;