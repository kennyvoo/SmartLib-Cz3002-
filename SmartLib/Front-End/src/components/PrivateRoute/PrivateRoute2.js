//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: PrivateRoute2.js                                                                                          //
//    Author: Irsyad                                                                                                    //
//  Function: A component to aid the route function of react-router-dom to allow admin/librarian to access              //
//            ADMIN-Only pages if they have logged in to the system. If the user is not logged in to an admin account,  //
//            the user will not be able to access these pages such as the ModifySeatpage even if the user tries typing  //
//            the directory in the URL.                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 20: If there is a current user, pass all of the props. If not redirect to login                   //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
