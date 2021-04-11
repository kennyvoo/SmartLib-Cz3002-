//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: LoginPage.js                                                                                              //
//    Author: Irsyad                                                                                                    //
//  Function: A page for both librarian and library users to login to their accounts. This will give them privilege     //
//            access to their respective functions; library users added privilege is to book a seat in the library      //
//            while the admin/librarian can do much more such as adding/removing seats and modifying the seat status    //
//            of individual seats. Note that normal library users DO NOT HAVE ACCESS to admin/librarian even if they    //
//            modify their URL.                                                                                         // 
//            Note that the default admin account is:                                                                   //
//            email: admin@admin.com                                                                                    //
//            password: 123456                                                                                          //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useRef } from "react";
import { Pane, Text, Button, Heading, TextInputField, Alert } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import background from "./../Img/lib2.png";
import { useAuth } from '../../contexts/AuthContext'

function LoginPage() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()  

    try {
      setError('')
      setLoading(true) 
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
    setLoading(false) 
  }

  return (
    <div>
      <Pane backgroundImage={`url(${background})`}
       display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>SmartLib</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Where student meet seats</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
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
            ref={passwordRef}
          />
          <Pane display="flex" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link to="/ForgetPassword">Forget Password?</Link>
            </Pane>
            <Pane paddingBottom={20}>
              <Button appearance="primary" intent="success" height={48} type="submit" disabled = {loading}>Login</Button>
            </Pane>
          </Pane>
          <Link to="/CreateAccount" style={{ textDecoration: "none" }} >
            <Button appearance="primary" height={48} width={450} textAlign="center" >Sign Up</Button>
          </Link>
        </form>
      </Pane>
    </div>
  );
}

export default LoginPage;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 28: Prevent from refreshing                                                                       //
//             - Line 32: Prevent them from sending multiple login request if they keep clicking login button           //
//             - Line 43: We set the setLoading state to false after login up                                           //
//             - Line 54: Can't use Formfield from Evergreen ui as it somehow don't support onSubmit function           //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
