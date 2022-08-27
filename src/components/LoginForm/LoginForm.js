import React from 'react'
import { Button } from 'semantic-ui-react';
export  function LoginForm(props) {
  const {goBack, openRegisterForm} = props;
  return (
    <div style={{ backgroundColor: "#f0f"}}>
        <h1>Login Form</h1>
        <Button onClick={openRegisterForm} primary>Registro</Button>
        <Button onClick={goBack} secondary>Atrás</Button>
    </div>
  )
}
