/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/FirebaseConfiq";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayname:name, photoURL:photo
        })
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
             console.log('user in the auth state changed',currentUser);
             setUser(currentUser)
             setLoading(false);
         });
         return () => {
             unSubscribe();
         }
     },[])
     const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleSignIn,
        handleProfile
     }
    

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
              {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;