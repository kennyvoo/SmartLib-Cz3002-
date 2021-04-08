//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: PrivateRoute.js                                                                                           //
//  Function: A component to aid the route function of react-router-dom to allow library users to access                //
//            Account-Only pages if they have logged in to the system. If the user is not logged in, the user will not  //
//            be able to access these pages such as the seatBooking page even if the user tries typing the directory    //
//            in the URL.                                                                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest}) {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/Login" /> //
            }}
            
        ></Route>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 17: If there is a current user, pass all of the props. If not redirect to login                   //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
