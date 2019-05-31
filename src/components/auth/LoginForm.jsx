import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';
import './LoginForm.css'
import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import SocialFooter from '../general/SocialFooter';
const FormItem = Form.Item;


const LoginForm= () => {
  // Using hooks to handle input changes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault()
    alert(email+password)
    // console.log(email,password)
  }

  return (
    <div className="login">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="login-container">
        <h2>Haz que las cosas sucedan</h2>
        <div className="login-form-container">
          <div className="login-form-title">
            <h3>Iniciar Sesión</h3>
          </div>
          <Form layout="vertical" method="POST" onSubmit={login}>
            <FormItem>
              <Input name="email" onChange={e=>setEmail(e.target.value)} 
                prefix={<Icon type="mail" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Correo electrónico" />
            </FormItem>
            <FormItem>
              <Input name="password" onChange={e=>setPassword(e.target.value)} 
                prefix={<Icon type="lock" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" placeholder="Contraseña" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">Entrar</Button>
            </FormItem>
          </Form>
          <p>¿No tienes cuenta? <Link to="/signup">Regístrate</Link></p>
          <p>Olvidé mi contraseña <Link to="/forgot">Click aquí</Link></p>
        </div>
      </div>
      <SocialFooter />
    </div>
  )
}

export default LoginForm