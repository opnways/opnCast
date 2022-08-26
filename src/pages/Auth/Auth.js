import React from 'react'
import './Auth.scss'
import { Button } from 'semantic-ui-react';
import { AuthOptions, RegisterForm, LoginForm } from '../../components';
export  function Auth() {
  const [ typeForm, setTypeForm ] = React.useState(null);
  const openLoginForm = () => setTypeForm("login")
  const openRegisterForm = () => setTypeForm("register")
  const goBack = () => setTypeForm(null)

 const renderForm = () => {
  if(typeForm === 'login'){
    return <LoginForm openRegisterForm={openRegisterForm} goBack={goBack}/>
  }
  if(typeForm === 'register'){
    return <RegisterForm openLoginForm={openLoginForm} goBack={goBack}/>
  }
  return <AuthOptions openLoginForm={openLoginForm} openRegisterForm={openRegisterForm}/>
}
  
  return (
    <div>
    {renderForm()}</div>
  )
} 
