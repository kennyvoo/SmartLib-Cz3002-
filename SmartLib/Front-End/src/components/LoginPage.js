import React, { useState, useRef } from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField, TextInput, Alert } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import background from "./Img/lib2.png";

import { useAuth } from '../context/AuthContext'

//Pass in props/object into the LoginPage function
function LoginPage() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()  //Prevent from refreshing

    try {
      setError('')
      setLoading(true) //Prevent them from creating multiple acc at the same time when keep clicking submit button
      await login(emailRef.current.value, passwordRef.current.value)
      if ((emailRef.current.value).includes("admin")) {
        history.push("/Admin")
      } else {
        history.push("/")
      }
      console.log("Sign in");
    } catch {
      setError('Your Email / Password is incorrect')
    }
    setLoading(false) //Aft sign up
  }

  return (
    <div>
      <Pane backgroundImage={`url(${background})`}
       display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>SmartLib</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Where student meet seats</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        {/* Can't use Formfield from Evergreen ui as it somehow don't support onSubmit function */}
        <form onSubmit={handleSubmit}>
          <Heading size={800} >Login Page</Heading>
          <Text><br></br></Text>
          {(error != '') ? (<Pane>
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
            ref={emailRef}
          />
          <TextInputField
            id="Password Information"
            required
            label="Password"
            placeholder="Password"
            secureTextEntry={true}
            inputHeight={45}
            inputWidth={450}
            type="password"
            //onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
            ref={passwordRef}
          />
          {/* This is the container/pane for the login section */}
          <Pane display="flex" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/ForgetPassword">Forget Password?</Link>
            </Pane>
            <Pane paddingBottom={20}>
              <Button appearance="primary" intent="success" height={48} type="submit" disabled = {loading}>Login</Button>
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
