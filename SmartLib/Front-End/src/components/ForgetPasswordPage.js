import React, { useState, useRef } from "react"
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField, Alert } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import background from "./Img/Stress.png";
import { useAuth } from '../context/AuthContext'

function ForgetPasswordPage() {

  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()  //Prevent from refreshing

    try {
      setMessage('')
      setError('')
      setLoading(true) //Prevent them from creating multiple acc at the same time when keep clicking submit button
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setMessage('')
      setError('Email entered is not a registered user!')
    }
    setLoading(false) //Aft sign up 
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
          {/* This is the container/pane for the login section */}
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
