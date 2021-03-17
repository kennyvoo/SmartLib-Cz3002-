import React, { useState } from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInput, TextInputField, FormField, Alert} from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./Img/c1.png";

function CreateAccountPage(props) {

  const [state, setState] = useState({ name: "", email: "", password: "", confirmPassword: "" }) //Initial Local state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      // Add in the code to forward the prop 'state' to the backend server
      // Also check if the school email entered already exist
      setSuccess("Account created successfully");
      setError("");
    } else {
      console.log("Details do not match");
      setError("Password Do not Match");
      setSuccess("");
    }
  }

  return (
    <div>
      <Pane backgroundImage={`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>Create Account</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Making life simpler for you!</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        <form>
          <Heading size={800} >Create New Account</Heading>
          <Text><br></br></Text>
          {(error != "") ? (<Pane>
            <Alert
              intent="danger"
              title={error}
            />
          </Pane>) : (<Pane></Pane>)}

          {(success != "") ? (<Pane>
            <Alert
              intent="success"
              title={success}
            />
          </Pane>) : (<Pane></Pane>)}  

          <TextInputField
            id="name"
            required
            label="Name"
            placeholder="Jacob Ballas"
            inputHeight={45}
            inputWidth={450}
            value={state.name}
            onChange={handleChange}
          />
          <TextInputField
            id="email"
            required
            label="School Email"
            placeholder="username@e.ntu.edu.sg"
            inputHeight={45}
            inputWidth={450}
            type="email"
            value={state.email}
            onChange={handleChange}
          />
          <TextInputField
            id="password"
            required
            label="Password"
            secureTextEntry={true}
            inputHeight={45}
            inputWidth={450}
            type="password"
            value={state.password}
            onChange={handleChange}
          />
          <TextInputField
            id="confirmPassword"
            required
            label="Confirm Password"
            inputHeight={45}
            inputWidth={450}
            type="password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
          {/* This is the container/pane for the login section */}
          <Pane display="flex" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/ForgetPassword">Forget Password?</Link>
            </Pane>
            <Pane paddingBottom={20}>
              <Button appearance="primary" height={48} type="submit" onClick={handleSubmitClick}>Create Account</Button>
              {/* <Link to="/Login" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text
                
              </Link> */}
            </Pane>
          </Pane>
        </form>
      </Pane>
    </div>
  );
}

export default CreateAccountPage;
