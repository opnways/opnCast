import React from 'react'
import {Button} from 'semantic-ui-react';

export  function AuthOptions(props) {
  const {openLoginForm, openRegisterForm} = props;
  return (
    <div style={{backgroundColor: "#000"}}>
        <h1>AuthOptions</h1>
        <Button onClick={openRegisterForm} primary>Registro</Button>
        <Button onClick={openLoginForm} secondary>Login</Button>
    </div>
  )
}
 