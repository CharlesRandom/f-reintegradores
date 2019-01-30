import React from 'react'
import { Form, Radio, Button, } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const SignupUser = ({signup, handleText, onChange, current}) => {
  return (
    <div className="auth-form">
      <div style={{display:"flex",justifyContent:"center"}}>
        <h2 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h2>
      </div>
      <Form layout="vertical" method="POST" onSubmit={signup}>
        <div className="user-signup-container">
          {/* <h2>Tipo de usuario</h2> */}
          <div className="user-radio-container">
            <h2>Tipo de usuario</h2>
            <FormItem>
              <RadioGroup name="donationOrigin" onChange={handleText}>
                <Radio value="Donatario">Donatario</Radio><br/>
                <Radio value="Organización">Organización</Radio><br/>
                <Radio value="Visitante">Visitante</Radio><br/>
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