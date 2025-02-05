import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateUserProfile = (updateData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser?.email);
            if(currentUser?.email){
                const user = {email: currentUser.email}
                axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
                .then(res =>{
                    console.log("login token", res.data);
                    setLoading(false)
                })
            }
            // ami jodi chai user logout korle token chole jabe tahole nicher method use korbo ------->
            else{
                axios.post("http://localhost:5000/logout",{}, {
                    withCredentials: true
                })
                .then(res =>{
                    console.log("logout token", res.data);
                    setLoading(false)
                })
            }

          
        })

        return () => {
            unsubscribe();
        }
    }, []);




    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        loading,
        user,
        setUser,
     
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;