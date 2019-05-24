import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';
// import useInput from '../../hooks/useInput'
import './OrgForm.css'
import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import SocialFooter from '../general/SocialFooter';
const FormItem = Form.Item;


const OrgForm= () => {
  // Using hooks to handle input changes
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup(e) {
    e.preventDefault()
    console.log(name,phone,email,password)
  }

  return (
    <div className="organization">
      <img src={logo} className="logo" alt="Reintegradores logo"/>
      <div className="organization-container">
        <h2>Somos el contacto directo con organizaciones sin fines de lucro</h2>
        <div className="organization-form-container">
          <div className="org-form-title">
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
              <Input name="lastname" onChange={e=>setName(e.target.value)} 
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

export default OrgForm