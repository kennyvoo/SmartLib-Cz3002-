import React from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField, TextInput} from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./Img/ResetPwd.jpg";

function ResetPasswordPage() {
  return (
    <div>
      <Pane backgroundImage = {`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color = {'white'}>SmartLib</Heading>
        <Text size={600} color = {'white'}><br></br><br></br><br></br>Where student meet seats</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        <FormField>
        <Heading size={800} >Reset Account Password</Heading>
        <Text><br></br></Text>
        <TextInputField
          id="Password Information"
          required
          label="New Password"
          placeholder="New Password"
          inputHeight = {45}
          inputWidth = {450}
        />
        <TextInputField
          id="Confirm Password Information"
          required
          label="Confirm Password"
          placeholder="New Password"
          secureTextEntry={true}
          inputHeight = {45}
          inputWidth = {450}
        />
        {/* This is the container/pane for the login section */}
        <Pane display="flex">
          <Pane flex={1} alignItems="center" display="flex"></Pane> {/* In Order to keep the button on right side */}
          <Pane paddingBottom={20}>
            <Link to="/" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text */}
                <Button appearance="primary" intent="success" height={48}>Change Password</Button>
            </Link>
          </Pane>
        </Pane>
        </FormField>
      </Pane>
    </div>
  );
}

export default ResetPasswordPage;
