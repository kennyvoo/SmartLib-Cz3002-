import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export default function PrivateRoute2({ component: Component, ...rest}) {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                try{
                    return (currentUser.email.includes("admin")) ? <Component {...props} /> : <Redirect to="/" />
                }
                catch{
                    return <Redirect to="/" />
                }
            }}
            
        ></Route>
    )
}
