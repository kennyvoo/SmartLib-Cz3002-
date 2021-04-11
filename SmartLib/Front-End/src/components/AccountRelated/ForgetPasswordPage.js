//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: ForgetPasswordPage.js                                                                                     //
//    Author: Irsyad                                                                                                    //
//  Function: A page for users to reset their password. If the user enters an email not tied to an existing account,    //
//            an error message will be displayed. If the email is registered to an existing account, the reset          //
//            password instructions will be send to that email. We used firestore authentication password reset api     //
//            to allow this password reset to happen. Once user has reset his/her password, he/she may enter the new    //
//            password immediately during login.                                                                        //                                                                                           //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useRef } from "react"
import { Pane, Text, Button, Heading, TextInputField, Alert } from "evergreen-ui";
import background from "./../Img/Stress.png";
import { useAuth } from '../../contexts/AuthContext'

function ForgetPasswordPage() {

  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()  

    try {
      setMessage('')
      setError('')
      setLoading(true) 
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setMessage('')
      setError('Email entered is not a registered user!')
    }
    setLoading(false)
  }

  return (
    <div>
      <Pane backgroundImage={`url(${background})`} display="flex" alignItems="center" justifyContent="center" padding={100} flexDirection="column">
        <Heading fontSize={100} color={'white'}>Forget Password</Heading>
        <Text size={600} color={'white'}><br></br><br></br><br></br>Don't Worry, we'll get you back on track!</Text>
      </Pane>
      <Pane height={1000} backgroundColor="beige" display="flex" justifyContent="center" padding={20}>
        <form onSubmit={handleSubmit}>
          <Heading size={800} >Password Reset</Heading>
          <Text><br></br></Text>

          {(error != '') ? (<Pane>
            <Alert
              intent="danger"
              title={error}
            />
          </Pane>) : (<Pane></Pane>)}

          {(message != '') ? (<Pane>
            <Alert
              intent="success"
              title={message}
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
          <Pane display="flex" borderRadius={3}>
            <Pane marginLeft={280} paddingBottom={20}>
              <Button appearance="primary" height={48} disabled={loading} type="submit">Send Reset Email</Button>
            </Pane>
          </Pane>
        </form>
      </Pane>
    </div>
  );
}

export default ForgetPasswordPage;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Notes:                                                                                                          //
//             - Line 25: Prevent from refreshing                                                                       //
//             - Line 30: Prevent them from creating multiple acc at the same time when keep clicking submit button     //
//             - Line 37: We set the setLoading state to false after sign up                                            //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
