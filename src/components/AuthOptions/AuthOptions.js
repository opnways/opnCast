import React from 'react'
import {Button} from 'semantic-ui-react';
import "./AuthOptions.scss";
export  function AuthOptions(props) {
  const {openLoginForm, openRegisterForm} = props;
  return (
    <div className='auth-options'>
        <h1>Tu aplicación de podcast gratuita</h1>
        <Button onClick={openRegisterForm} className="register">Registrate gratis</Button>
        <Button onClick={openLoginForm} className="login">Inicia sesión</Button>
    </div>
  )
}
 