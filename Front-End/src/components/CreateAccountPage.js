import React, { useState, useRef } from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInput, TextInputField, FormField, Alert} from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import background from "./Img/c1.png";

import { useAuth } from '../context/AuthContext'

function CreateAccountPage() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()  //Prevent from refreshing

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("Details do not match");
      return setError('Passwords do not match') // We want to immediately get out of the Fn without going to the signup Fn
    }

    try {
      setError('')
      setLoading(true) //Prevent them from creating multiple acc at the same time when keep clicking submit button
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
      console.log("Sign in");
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false) //Aft sign up 
  }

  return (
    <div>
      <Pane backgroundImage={`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>Create Account</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Making life simpler for you!</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        <form onSubmit={handleSubmit}>
          <Heading size={800} >Create New Account</Heading>
          <Text><br></br></Text>
          
          {(error != '') ? (<Pane>
            <Alert
              intent="danger"
              title={error}
            />
          </Pane>) : (<Pane></Pane>)}

          <TextInputField
            id="name"
            required
            label="Name"
            placeholder="Jacob Ballas"
            inputHeight={45}
            inputWidth={450}
            ref={nameRef}
          />
          <TextInputField
            id="email"
            required
            label="School Email"
            placeholder="username@e.ntu.edu.sg"
            inputHeight={45}
            inputWidth={450}
            type="email"
            ref={emailRef}
          />
          <TextInputField
            id="password"
            required
            label="Password"
            secureTextEntry={true}
            inputHeight={45}
            inputWidth={450}
            type="password"
            ref={passwordRef}
          />
          <TextInputField
            id="confirmPassword"
            required
            label="Confirm Password"
            inputHeight={45}
            inputWidth={450}
            type="password"
            ref={passwordConfirmRef}
          />
          {/* This is the container/pane for the login section */}
          <Pane display="flex" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/ForgetPassword">Forget Password?</Link>
            </Pane>
            <Pane paddingBottom={20}>
              <Button appearance="primary" height={48} type="submit" disabled={loading}>Create Account</Button>
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
