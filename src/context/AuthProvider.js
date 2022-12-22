import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../firebase/firebasre.config';




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading]= useState(true)


    const googleLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const signUp =(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
       
    }

    const loginUser=(email,password)=>{
        setLoading(true);
      return  signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('User inside state change',currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={user,signUp,loginUser,loading,logOut,googleLogin,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;