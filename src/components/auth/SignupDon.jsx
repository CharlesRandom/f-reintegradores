import React from 'react'
import { Form, Icon, Input, Radio, Button, Upload, DatePicker, Select } from 'antd';
import moment from 'moment';
import isotipo from '../../images/Isotipo.png'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const dateFormat = 'YYYY/MM/DD';

const SignupDon = ({signup, handleText, onChange, onDateChange, onSelectChange, current}) => {
  return (
    <div className="auth-form">
      <a href="/"><img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/></a>
      <div style={{display:"flex",justifyContent:"center"}}>
        <h2 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h2>
        <h2>&nbsp;|&nbsp;</h2>
        <h2>Donatario</h2>
      </div>
      <div className="form">
      <Form layout="vertical" method="POST" onSubmit={signup}>
        <div className="radio-files-container">
          <div className="radio-container">
            <FormItem>
              <RadioGroup name="donationOrigin" onChange={handleText}>
                <Radio value="Público">Público</Radio><br/>
                <Radio value="Privado">Privado</Radio><br/>
              </RadioGroup>
            </FormItem>
            <FormItem>
              {current && current.donationOrigin && current.donationOrigin === "Público" ? 
              <RadioGroup name="donationType" onChange={handleText}>
                <Radio value="Gub">Cooperación Gubernamental</Radio><br/>
                <Radio value="Int">Cooperación Internacional</Radio><br/>
              </RadioGroup>
              :
              current && current.donationOrigin &&
              <RadioGroup name="donationType" onChange={handleText}>
                <Radio value="Fil">Filantropía</Radio><br/>
                <Radio value="IP">Iniciativa Privada</Radio><br/>
              </RadioGroup>
              }
            </FormItem>
            <FormItem>
              {current && current.donationOrigin &&
              <RadioGroup name="person" onChange={handleText}>
                <Radio value="Física">Física</Radio><br/>
                <Radio value="Moral">Moral</Radio><br/>
              </RadioGroup>
              }
            </FormItem>
          </div>
          <div className="files-container">
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"constanciaFiscal")}>
                <Button>
                  <Icon type="upload" /> Constancia de situación fiscal
                </Button>
              </Upload>
            </FormItem>
            <FormItem>
              {current && current.person && current.person === "Física" ?
              <Input name="CURP" onChange={handleText} prefix={<Icon type="idcard" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="CURP" />
              :
              current && current.person &&
              <Upload onChange={(info)=>onChange(info,"actaConstitutiva")}>
                <Button>
                  <Icon type="upload" /> Acta Constitutiva
                </Button>
              </Upload>
              }
            </FormItem>
            <FormItem>
              <Input name="RFC" onChange={handleText} prefix={<Icon type="audit" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="RFC" />
            </FormItem>
            <FormItem>
              <Input name="address" onChange={handleText} prefix={<Icon type="car" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Domicilio" />
            </FormItem>
          </div>
        </div>
        <div className="radio-files-container">
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

export default SignupDon