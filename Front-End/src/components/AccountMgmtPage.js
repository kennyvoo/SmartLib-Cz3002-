import React, {useState} from "react";
import { Pane, 
  Text,
  Button, 
  Heading, 
  Paragraph, 
  TextInputField, 
  FormField, 
  Avatar, 
  BackButton, 
  CrossIcon, 
  InfoSignIcon, 
  EditIcon, 
  WarningSignIcon 
} from "evergreen-ui";
import { Link } from "react-router-dom"

import {useAuth} from '../context/AuthContext'

function AccountMgmtPage() {

  const { currentUser } = useAuth()

  return (
    <div>
      {/* Seat description including avatar*/}
      <Pane display="flex" padding={16} borderRadius={3} marginTop={20}> {/* Parent class, defiines the row*/}
        <Pane padding={16} alignItems="center" marginLeft={60} > {/* Children class, defiines the column*/}
          <Avatar isSolid name="A V" size={300} />
        </Pane>
        <Pane flex={1} display="flex" marginLeft={30} padding={16}>
          <Pane padding={16}>
            <Pane flex={1} display="flex">
              <Heading size={800} >{currentUser.name}</Heading> {/* Currently not stored yet */}
            </Pane>
            <Pane>
              <Heading size={800} >{currentUser.email}</Heading>
            </Pane>
            <Pane marginTop={16}>
              <Text size={600}>- Favourite Seat: 545
              </Text>
            </Pane>

            {/* Booking Button*/}
            <Pane display="flex" marginTop={100}>
              <Pane flex={1} alignItems="center" display="flex">
              </Pane>
              <Pane>
                {/* Below you can see the marginRight property on a Button. */}
                <Link to="/ForgetPassword" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text */}
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
