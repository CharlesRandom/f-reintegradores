import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';
// import useInput from '../../hooks/useInput'
import './DonanteForm.css'
import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import SocialFooter from '../general/SocialFooter';
const FormItem = Form.Item;


const DonanteForm= () => {
  // Using hooks to handle input changes
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup(e) {
    e.preventDefault()
    console.log(name,lastname,phone,email,password)
  }

  return (
    <div className="donante">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="donante-container">
        <h2>Con tu donación puedes hacer que las cosas sucedan</h2>
        <div className="donante-form-container">
          <div className="form-title">
            <h3>Regístrate ahora</h3>
          </div>
          <Form layout="vertical" method="POST" onSubmit={signup}>
            <div className="form-names">
            <FormItem>
              <Input name="username" onChange={e=>setName(e.target.value)} 
                prefix={<Icon type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Nombre" />
            </FormItem>
            <FormItem>
              <Input name="lastname" onChange={e=>setLastname(e.target.value)} 
                prefix={<Icon type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Apellido" />
            </FormItem>
            </div>
            <FormItem>
              <Input name="phone" onChange={e=>setPhone(e.target.value)} 
                prefix={<Icon type="phone" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Teléfono" />
            </FormItem>
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
              <Button type="primary" htmlType="submit">Siguiente</Button>
            </FormItem>
          </Form>
          <p>¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link></p>
        </div>
      </div>
      <SocialFooter />
    </div>
  )
}

export default DonanteForm