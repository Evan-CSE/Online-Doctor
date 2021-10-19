import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import FirebaseInit from "../FirebaseInit";
const GoogleSignIn = ()=>{
    const [user,setUser] = useState({})
    console.log("Clicked");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then(result=>{
        console.log(result.user);
        setUser(result.user);
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      return user;
}

export default GoogleSignIn;