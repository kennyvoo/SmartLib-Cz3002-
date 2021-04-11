//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: AccountMgmtPage.js                                                                                        //
//    Author: Irsyad                                                                                                    //
//  Function: Properly display the user's account attributes; user's name and email information which is                //
//            obtained from firebase authentication cloud database, linked from AuthContext.js file.                    //
//            It also contains a link for the user to reset his/her account password if there is a need to              //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { Pane, 
  Text,
  Button, 
  Heading, 
  Avatar,
  Strong
} from "evergreen-ui";
import { Link } from "react-router-dom"
import {useAuth} from '../../contexts/AuthContext'

function AccountMgmtPage() {

  const { currentUser } = useAuth()

  return (
    <div>
      {/* User Avatar and display user name and email*/}
      <Pane display="flex" padding={16} borderRadius={3} marginTop={20}> 
        <Pane padding={16} alignItems="center" marginLeft={60} > 
          <Avatar isSolid name="A V" size={300} />
        </Pane>
        <Pane flex={1} display="flex" marginLeft={30} padding={16}>
          <Pane padding={16}>
            <Pane flex={1} display="flex">
              <Heading size={800} >{currentUser.displayName}</Heading> 
            </Pane>
            <Pane marginTop={16}>
              <Strong size={600} >Email: </Strong>
                <Text size={600}>{currentUser.email}</Text>
            </Pane>

            {/* Reset Password part */}

            <Pane display="flex" marginTop={100}>
              <Pane flex={1} alignItems="center" display="flex">
              </Pane>
              <Pane>
                <Link to="/ForgetPassword" style={{ textDecoration: "none" }}>
                  <Button appearance="primary" height={48}>Reset Password</Button>
                </Link>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </div>
  );
}

export default AccountMgmtPage;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 47: textDecoration has to set to none or else the button will have a line below the Login text    //
//             - Line 27: Parent class, defiines the row                                                                //
//             - Line 28: Children class, defiines the column                                                           //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
