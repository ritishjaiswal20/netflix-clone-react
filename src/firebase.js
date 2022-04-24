import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC2c1MI0TIvuTrA0HRQkCK_vi3BUNkCuOo",
    authDomain: "netflix-clone-react-js-33278.firebaseapp.com",
    projectId: "netflix-clone-react-js-33278",
    storageBucket: "netflix-clone-react-js-33278.appspot.com",
    messagingSenderId: "314673615241",
    appId: "1:314673615241:web:7873d5b97b378dd44e5158"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;