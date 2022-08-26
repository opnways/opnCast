import React from 'react'
import { Button } from 'semantic-ui-react';
export  function RegisterForm(props) {
  const {goBack, openLoginForm} = props;
  return (
    <div style={{ backgroundColor: "#f00"}}>
      <h1>Register Form</h1>
      <Button  onClick={openLoginForm} primary>Login</Button>
      <Button onClick={goBack} primary>Atrás</Button>
    </div>
  )
}
