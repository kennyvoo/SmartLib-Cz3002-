import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../firebase"

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
