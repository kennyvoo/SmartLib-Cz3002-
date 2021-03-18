import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export default function PrivateRoute({ component: Component, ...rest}) {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/Login" /> //If there is a current user, pass all of the props. If not redirect to login
            }}
            
        ></Route>
    )
}
