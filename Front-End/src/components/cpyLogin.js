import React, { useState } from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField, TextInput, Alert } from "evergreen-ui";
import { Link } from "react-router-dom";
import background from "./Img/lib2.png";

//Pass in props/object into the LoginPage function
function LoginPage({ Login, error }) {

  //Local details
  const [details, setDetails] = useState({ email: "", password: "" });

  //Function to handle the submit of the details
  const submitHandler = e => {
    console.log('here');
    e.preventDefault(); //Prevent page from rerendering

    //Pass in the login function we passed as a prop
    Login(details);
  }

  return (
    <div>
      <Pane backgroundImage={`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>SmartLib</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Where student meet seats</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        {/* <form onSubmit={submitHandler}>
          <input type="email" name="email" value="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          <input type="password" name="password" value="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          <input type="submit" value="LOGIN" />
        </form> */}
        {/* Can't use Formfield from Evergreen ui as it somehow don't support onSubmit function */}
        <form onSubmit={submitHandler}>
          <Heading size={800} >Login Page</Heading>
          <Text><br></br></Text>
          {(error != "") ? (<Pane>
            <Alert
              intent="danger"
              title={error}
            />
          </Pane>) : (<Pane></Pane>)} 
          <TextInputField
            id="Login Information"
            required
            label="School Email"
            placeholder="username@e.ntu.edu.sg"
            inputHeight={45}
            inputWidth={450}
            type="email"
            onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}
          />
          <TextInputField
            id="Password Information"
            required
            label="Password"
            secureTextEntry={true}
            inputHeight={45}
            inputWidth={450}
            type="password"
            onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
          />
          {/* This is the container/pane for the login section */}
          <Pane display="flex" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/ForgetPassword">Forget Password?</Link>
            </Pane>
            <Pane paddingBottom={20}>
              <Button appearance="primary" intent="success" height={48} type="submit">Login</Button>
              {/*<Link to="/" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text
                <Button appearance="primary" intent="success" height={48} type = "submit">Login</Button>
            </Link>*/}
            </Pane>
          </Pane>
          <Link to="/CreateAccount" style={{ textDecoration: "none" }} > {/* textDecoration has to set to none or else the button will have a line below the Login text */}
            <Button appearance="primary" height={48} width={450} textAlign="center" >Sign Up</Button>
          </Link>
        </form>
      </Pane>
    </div>
  );
}

export default LoginPage;
