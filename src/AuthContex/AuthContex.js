import React, {useContext, useEffect, useState} from 'react';
import "./firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,onAuthStateChanged
} from "firebase/auth";

const AuthContex = React.createContext();

export function useAuth(){
    return useContext(AuthContex);
}

export function AuthProvider({children}){
    const [loding,setLoding] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
       const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoding(false);
        });
       return unsubscribe;
    }, []);

    //signup function
   async function signup(email,password,username)
    {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth,email,password);

    //update profile
        await updateProfile(auth.currentUser,
            {displayName:username}
        );
        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });

    }

    async function login(email,password)
    {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
       const auth =getAuth();
       return signOut(auth);
    }

    const value = {
       currentUser,
        signup,
        login,
        logout
    };
    return(
        <AuthContex.Provider value={value}>
            {!loding && children}
        </AuthContex.Provider>
    );
}