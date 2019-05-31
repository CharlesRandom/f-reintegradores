import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Select } from 'antd';
import './OrgForm.css'
import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import SocialFooter from '../general/SocialFooter';
const FormItem = Form.Item;
const Option = Select.Option;


const OrgForm= () => {
  // Using hooks to handle input changes
  const [name, setName] = useState("");
  const [rfc, setRFC] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  function signup(e) {
    e.preventDefault()
    console.log(name,rfc,email,password,country,region)
  }

  return (
    <div className="organization">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="organization-container">
        <h2>Somos el contacto directo con organizaciones sin fines de lucro</h2>
        <div className="organization-form-container">
          <div className="org-form-title">
            <h3>Regístrate ahora</h3>
          </div>
          <Form layout="vertical" method="POST" onSubmit={signup}>
            <FormItem>
              <Input name="username" onChange={e=>setName(e.target.value)} 
                prefix={<Icon type="team" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Nombre de la organización" />
            </FormItem>
            <FormItem>
              <Input name="rfc" onChange={e=>setRFC(e.target.value)} 
                prefix={<Icon type="audit" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="RFC" />
            </FormItem>
            <div className="form-country">
            <FormItem>
              <Select
                onChange={value=>setCountry(value)}
                showSearch
                style={{ width: 400 }}
                placeholder="País de origen"
                optionFilterProp="children"
                filterOption={(input, option) => 
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="MEX">México</Option>
                <Option value="BRA">Brasil</Option>
                <Option value="ARG">Argentina</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Input name="region" onChange={e=>setRegion(e.target.value)} 
                prefix={<Icon type="pushpin" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Región (comunidad, población o municipio)" />
            </FormItem>
            </div>
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