import React from 'react'
import { Form, Radio, Button, } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const SignupUser = ({signupUser, handleText}) => {
  return (
    <div className="auth-form">
      <div style={{display:"flex",justifyContent:"center"}}>
        <h2 style={{fontFamily:"Brandon Bold",marginTop:100}}>REGISTRO</h2>
      </div>
      <Form layout="vertical" method="POST" onSubmit={signupUser}>
        <div className="user-signup-container">
          <h2>Tipo de usuario</h2>
          <div className="user-radio-container">
            <FormItem>
              <RadioGroup name="userType" onChange={handleText}>
                <Radio value="Donatario">Donatario</Radio>
                <Radio value="Organización">Organización</Radio>
                <Radio value="Visitante">Visitante</Radio>
                <Radio value="ProyectoÁngel">Proyecto Ángel</Radio>
                <Radio value="FormaciónAyuda">Tu Formación Ayuda</Radio>
              </RadioGroup>
            </FormItem>
          </div>
        </div>
        <FormItem>
          <div className="d-flex jcc aic">
            <Button style={{width:"100px"}} type="primary" htmlType="submit">Siguiente</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  )
}

export default SignupUser