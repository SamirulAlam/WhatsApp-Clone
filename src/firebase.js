import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBByDPaSXdIoyzAoxHaYB-i6m2tjtqWixU",
    authDomain: "whatsapp-clone-3ccfc.firebaseapp.com",
    projectId: "whatsapp-clone-3ccfc",
    storageBucket: "whatsapp-clone-3ccfc.appspot.com",
    messagingSenderId: "107342838944",
    appId: "1:107342838944:web:575c4a8ebf54bae9be9dc5",
    measurementId: "G-W2HFBXCGT4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;