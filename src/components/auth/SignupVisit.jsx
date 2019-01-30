import React from 'react'
import { Form, Icon, Input, Radio, Button, Upload, DatePicker, Select } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const dateFormat = 'YYYY/MM/DD';

const SignupVisit = ({signup, handleText, onChange, onDateChange, onSelectChange }) => {
  return (
    <div className="auth-form">
      <div style={{display:"flex",justifyContent:"center"}}>
        <h2 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h2>
        <h2>&nbsp;|&nbsp;</h2>
        <h2>Visitante</h2>
      </div>
      <Form layout="vertical" method="POST" onSubmit={signup}>
        <div className="visit-container">
          <div className="user-container">
            <FormItem>
              <Input name="name" onChange={handleText} prefix={<Icon type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
            </FormItem>
            <FormItem>
              <Input name="lastname" onChange={handleText} prefix={<Icon type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" />
            </FormItem>
            <FormItem>
              <Input name="email" onChange={handleText} prefix={<Icon type="mail" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            </FormItem>
            <FormItem>
              <Input name="password" onChange={handleText} prefix={<Icon type="lock" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
          </div>
          <div className="info-container">
            <FormItem>
              <Input name="phone" onChange={handleText} prefix={<Icon type="phone" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Teléfono" />
            </FormItem>
            <FormItem>
              <DatePicker placeholder="Fecha de nacimiento" 
                onChange={(date, dateString) => onDateChange(date,"birthdate")}
                style={{width:"400px"}} 
                defaultPickerValue={moment('2000/01/01', dateFormat)} />
            </FormItem>
            <FormItem>
              <Select
                onChange={value=>onSelectChange(value,"country")}
                showSearch
                style={{ width: 400 }}
                placeholder="País"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="MEX">México</Option>
                <Option value="USA">Estados Unidos</Option>
                <Option value="CAN">Canadá</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Select
                onChange={value=>onSelectChange(value,"objective")}
                showSearch
                style={{ width: 400 }}
                placeholder="Objetivo 2030"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="obj1">1. Fin de la pobreza</Option>
                <Option value="obj2">2. Hambre cero</Option>
                <Option value="obj3">3. Salud y bienestar</Option>
                <Option value="obj4">4. Educación de calidad</Option>
                <Option value="obj5">5. Igualdad de género</Option>
                <Option value="obj6">6. Agua limpia y saneamiento</Option>
              </Select>
            </FormItem>
            <FormItem>
              <h3>Sexo (opcional)</h3>
              <RadioGroup name="gender" onChange={handleText}>
                <Radio value="Female">Femenino</Radio><br/>
                <Radio value="Male">Masculino</Radio><br/>
              </RadioGroup>
            </FormItem>
          </div>
        </div>
        <FormItem>
          <div className="d-flex jcc aic">
            <Button style={{width:"100px"}} type="primary" htmlType="submit">Sign up</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  )
}

export default SignupVisit
