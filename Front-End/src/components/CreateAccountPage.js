import React from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField } from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./Img/c1.png";

function CreateAccountPage() {
  return (
    <div>
      <Pane backgroundImage = {`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color = {'white'}>Create Account</Heading>
        <Text size={600} color = {'white'}><br></br><br></br><br></br>Making life simpler for you!</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        <FormField>
        <Heading size={800} >Create New Account</Heading>
        <Text><br></br></Text>
        <TextInputField
          id="Login Information"
          required
          label="School Email"
          placeholder="username@e.ntu.edu.sg"
          inputHeight = {45}
          inputWidth = {450}
        />
        <TextInputField
          id="Password Information"
          required
          label="Password"
          inputHeight = {45}
          inputWidth = {450}
        />
        <TextInputField
          id="Double confirm Password"
          required
          label="Confirm Password"
          inputHeight = {45}
          inputWidth = {450}
        />
        {/* This is the container/pane for the login section */}
        <Pane display="flex" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Link to="/ForgetPassword">Forget Password?</Link>
          </Pane>
          <Pane paddingBottom={20}>
            <Link to="/HomePage" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text */}
                <Button appearance="primary" height={48}>Create Account</Button>
            </Link>
          </Pane>
        </Pane>
        </FormField>
      </Pane>
    </div>
  );
}

export default CreateAccountPage;
