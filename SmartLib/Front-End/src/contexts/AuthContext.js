//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: AuthContext.js                                                                                            //
//    Author: Irsyad                                                                                                    //
//  Function: A component to aid the route function of react-router-dom to allow admin/librarian to access              //
//            ADMIN-Only pages if they have logged in to the system. If the user is not logged in to an admin account,  //
//            the user will not be able to access these pages such as the ModifySeatpage even if the user tries typing  //
//            the directory in the URL.                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../services/firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password, name) {
        return auth.createUserWithEmailAndPassword(email, password).then(function(result) {
            return result.user.updateProfile({
              displayName: name
            })
          }).catch(function(error) {
            console.log(error);
          }); 
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => { //We only want to run this when we mount our component, so we use useEffect
        const unsubscribe = auth.onAuthStateChanged(user => { // Once done we want to unsubscribe
            setCurrentUser(user)
            setLoading(false)
            
        })

        return unsubscribe //Will unsubscribe the auth component when we unmount this component
    }, [])
    
    // Place to export the functions
    const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
}
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}  
        </AuthContext.Provider> //If we are not loading then we render out the children
    )
}
