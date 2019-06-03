import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Select, Button, Modal } from 'antd';
import { signup } from '../../services/auth'

import './DonanteForm.css'


import logo from '../../images/logo/Logo_reintegradores_horizontal.png'

import SocialFooter from '../general/SocialFooter';
import Donation from './forms/Donation';
import Organization from './forms/Organization';
import Formation from './forms/Formation';
import Angel from './forms/Angel';

const FormItem = Form.Item;
const { Option } = Select;


const DonanteForm= (props) => {

  const [donationType, setDonationType] = useState(localStorage.getItem('donationType'))
  const [data, setData] = useState(null)
  const images = [
    'https://res.cloudinary.com/gerard0jr/image/upload/v1559277215/Neobase/Reintegradores/register/Registros_fotos_Mesa_de_trabajo_1.png',
    'https://res.cloudinary.com/gerard0jr/image/upload/v1559277212/Neobase/Reintegradores/register/Registros_fotos_Mesa_de_trabajo_1_copia.png',
    'https://res.cloudinary.com/gerard0jr/image/upload/v1559277215/Neobase/Reintegradores/register/Registros_Tuformacionayuda.png',
    'https://res.cloudinary.com/gerard0jr/image/upload/v1559277214/Neobase/Reintegradores/register/Registros_Proyecto_Angel.png'
  ]

  const info = () => {
    Modal.info({
      title: 'Tu registro ha sido correcto',
      content: (
        <div>
          <p>Te enviamos un email de confirmación, por favor revisa tu buzón de entrada</p>
        </div>
      ),
      okText: 'Entendido',
      onOk() {
        props.history.push('/login')
      },
    });
  }

  const handleDonationType = type => {
    localStorage.setItem('donationType', type)
    setDonationType(localStorage.getItem('donationType'))
  }

  const postSignup = (e) => {
    e.preventDefault()
    setData({...data,'userType':donationType})
    signup(data)
    .then(res => {
      return info()
    })
    .catch(e => console.log(e))

  }

  return (
    <div className="donante">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="donante-container">
        <h2>{(donationType === 'donate') ? 'Con tu donación puedes hacer que las cosas sucedan'
            : (donationType === 'org') ? 'Somos el contacto directo con organizaciones sin fines de lucro.'
            : (donationType === 'formation') ? 'Donar tu conocimientos y tu tiempo también es otra forma de ayudar.'
            : (donationType === 'angel') ? 'Tus ideas son valiosas y juntos podemos hacerlas realidad.' : 'Bienvenido a Reintegradores'}</h2>
        <img src={(donationType === 'donate') ? images[0]
                  : (donationType === 'org') ? images[1]
                  : (donationType === 'formation') ? images[2]
                  : images[3]} alt="imagenes"/>
      </div>
      <div className="donante-form-container">
        <div className={(donationType === 'donate') ? 'green form-title'
                        : (donationType === 'org') ? 'blue form-title'
                        : (donationType === 'formation') ? 'orange form-title'
                        : (donationType === 'angel') ? 'purple form-title' : 'green'}>
          <h3>Regístrate ahora</h3>
        </div>
        <Form layout="vertical" method="POST" onSubmit={postSignup}>
          <small>Selecciona tu área de interés:</small>
          <FormItem>
            <Select defaultValue={donationType ? donationType : 'donate'} style={{ textAlign:"center" }} onChange={handleDonationType}>
              <Option value="donate">Donación</Option> 
              <Option value="org">Organización</Option>
              <Option value="formation">Tu formación ayuda</Option>
              <Option value="angel">Proyecto ángel</Option>
            </Select>
          </FormItem>
          {(donationType === 'donate') ? <Donation setData={setData} data={data}/> 
          : (donationType === 'org') ? <Organization setData={setData} data={data}/>
          : (donationType === 'formation') ? <Formation setData={setData} data={data}/>
          : <Angel setData={setData} data={data}/>
          }
          <FormItem>
            <Button className={(donationType === 'donate') ? 'green'
                        : (donationType === 'org') ? 'blue'
                        : (donationType === 'formation') ? 'orange'
                        : (donationType === 'angel') ? 'purple' : 'green'} 
                        type="primary" htmlType="submit">Siguiente</Button>
          </FormItem>
        </Form>
        <p>¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link></p>
      </div>
      <SocialFooter />
    </div>
  )
}

export default DonanteForm