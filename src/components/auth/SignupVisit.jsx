import React from 'react'
import { Form, Icon, Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import isotipo from '../../images/Isotipo.png'

const FormItem = Form.Item;
const Option = Select.Option;

const dateFormat = 'YYYY/MM/DD';

const SignupVisit = ({signup, handleText, onDateChange, onSelectChange }) => {
  return (
    <div className="auth-form">
      <img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <h2 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h2>
        <h2>&nbsp;|&nbsp;</h2>
        <h2>Visitante</h2>
      </div>
      <div className="form">
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
                <Option value="obj7">7. Energía asequible y no contaminante</Option>
                <Option value="obj8">8. Trabajo decente y crecimiento económico</Option>
                <Option value="obj9">9. Industria, innovación e infraestructura</Option>
                <Option value="obj10">10. Educación de calidad</Option>
                <Option value="obj11">11. Reducción de las desigualdades</Option>
                <Option value="obj12">12. Producción y consumo responsable</Option>
                <Option value="obj13">13. Acción por el clima</Option>
                <Option value="obj14">14. Vida submarina</Option>
                <Option value="obj15">15. Vida de Ecosistemas terrestres</Option>
                <Option value="obj16">16. Paz, justicia e instituciones sólidas</Option>
                <Option value="obj17">17. Alianzas para lograr los objetivos</Option>
              </Select>
            </FormItem>
          </div>
        </div>
        <FormItem>
          <div className="d-flex jcc aic">
            <Button style={{width:"100px"}} type="primary" htmlType="submit">Registrar</Button>
          </div>
        </FormItem>
      </Form>
      </div>
    </div>
  )
}

export default SignupVisit
