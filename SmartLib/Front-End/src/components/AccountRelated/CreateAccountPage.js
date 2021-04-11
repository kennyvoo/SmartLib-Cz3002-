//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: CreateAccountPage.js                                                                                      //
//    Author: Irsyad                                                                                                    //
//  Function: Diplay account creation form which includes the standard attributes which are required for account        //
//            creation; user's name, school email, password and confirm password field. It will then process the        //
//            information entered by the user and will generate the necessary feedback to the user if the account       //
//            was successful or not. If the email entered is already tied to an existing account, password is below     //
//            6 characters or the user tries to create an admin account, an error message will pop up.                  //
//            If it passes the conditions, the user account will be registered and user will be redirected to his/her   //
//            account.                                                                                                  //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useRef } from "react";
import { Pane, Text, Button, Heading, TextInputField, Alert} from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import background from "./../Img/c1.png";
import { useAuth } from '../../contexts/AuthContext'

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
    e.preventDefault()  

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("Details do not match");
      return setError('Passwords do not match') 
    }
    if ((emailRef.current.value).includes("admin")) {
      console.log("Details do not match");
      return setError('You are not authorized to create an admin account.')
    }
    try {
      setError('')
      setLoading(true) 
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      console.log(nameRef.current.value);
      history.push("/")
      console.log("Sign in");
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)  
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
            placeholder="username@ntu.edu.sg"
            inputHeight={45}
            inputWidth={450}
            type="email"
            ref={emailRef}
          />
          <TextInputField
            id="password"
            required
            label="Password"
            placeholder="Password(Minimum of 6-Characters)"
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
            placeholder="Confirm Password(Minimum of 6-Characters)"
            inputHeight={45}
            inputWidth={450}
            type="password"
            ref={passwordConfirmRef}
          />
          <Pane display="flex" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/ForgetPassword">Forget Password?</Link>
            </Pane>
            <Pane paddingBottom={20}>
              <Button appearance="primary" height={48} type="submit" disabled={loading}>Create Account</Button>
            </Pane>
          </Pane>
        </form>
      </Pane>
    </div>
  );
}

export default CreateAccountPage;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 31: Prevent from refreshing                                                                       //
//        - Line 35 & 39: Return statement is used as we want to immediately get out of the function without going      //
//                        to the signup function                                                                        //
//             - Line 43: Prevent them from creating multiple acc at the same time when keep clicking submit button     //
//             - Line 51: We set the setLoading state to false after sign up                                            //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
