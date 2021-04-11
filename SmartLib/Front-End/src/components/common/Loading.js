//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: Loading.js                                                                                                //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports loading spinner component.                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import {Pane, Spinner} from "evergreen-ui";

export default function Loading(){
    return(
        <div>
            <h1>Loading</h1>
            <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
                <Spinner />
            </Pane>
        </div>
    );
}