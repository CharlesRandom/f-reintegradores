import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, message } from 'antd';
import SocialFooter from '../general/SocialFooter';

import './LoginForm.css'

import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import { login } from '../../services/auth'

const FormItem = Form.Item;


const LoginForm= (props) => {
  // Using hooks to handle input changes
  const [ user, setUser ] = useState(null)

  const error = () => {
    message.error('Usuario o contraseña incorrectos');
  }

  const success = () => {
    message.success('Inicio de sesión correcto');
  }

  const loginSubmit = e => {
    e.preventDefault()
    login(user)
    .then(res => {
      localStorage.setItem('loggedUser', JSON.stringify(res))
      success()
      props.history.push('/proyectos')
    })
    .catch(err => error())
  }

  return (
    <div className="login">
      <Link to="/"><img src={logo} className="logo-login" alt="Reintegradores logo"/></Link>
      <div className="login-container">
        <h2>Haz que las cosas sucedan</h2>
        <div className="login-form-container">
          <div className="login-form-title">
            <h3>Iniciar Sesión</h3>
          </div>
          <Form layout="vertical" method="POST" onSubmit={loginSubmit}>
            <FormItem>
              <Input name="email" onChange={e => setUser({...user, [e.target.name]:e.target.value})} 
                prefix={<Icon type="mail" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Correo electrónico" />
            </FormItem>
            <FormItem>
              <Input name="password" onChange={e => setUser({...user, [e.target.name]:e.target.value})} 
                prefix={<Icon type="lock" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" placeholder="Contraseña" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">Entrar</Button>
            </FormItem>
          </Form>
          <p>¿No tienes cuenta? <Link to="/donar">Regístrate</Link></p>
          <p>Olvidé mi contraseña <Link to="/forgot">Click aquí</Link></p>
        </div>
      </div>
      <SocialFooter />
    </div>
  )
}

export default withRouter(LoginForm)