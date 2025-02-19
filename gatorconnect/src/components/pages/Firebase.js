import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
//import firebase from "firebase"



const firebaseConfig = {
   //copy paste here 
   apiKey: "AIzaSyDJUA793eEFVUbVIG2s6rLZ0jBZBgeOEq4",
    authDomain: "cengroup3031-d4a4c.firebaseapp.com",
    projectId: "cengroup3031-d4a4c",
    storageBucket: "cengroup3031-d4a4c.appspot.com",
    messagingSenderId: "1052017859368",
    appId: "1:1052017859368:web:ddf61ec493f1c41c4cce1d",
    measurementId: "G-BYVCY72X95"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//added databse for post form here
const db = getFirestore(app);
//const auth = firebase.auth();
//const storage = firebase.storage();

export const auth = getAuth(app);




const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result)=> {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilepic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilepic", profilepic);
       
        
    }).catch((error) =>  {
        console.log(error);
    });
};

export{db};
