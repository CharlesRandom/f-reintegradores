import React from 'react'
import './NewDon.css'
import { Form, Icon, Input, Radio, Button, Upload, DatePicker, Select, Divider } from 'antd';
import moment from 'moment';
import isotipo from '../../images/Isotipo.png'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const dateFormat = 'YYYY/MM/DD';

const NewDon = ({signup, handleText, onChange, onDateChange, onSelectChange, current}) => {
  return (
    <div className="donatario">
      <a href="/"><img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/></a>
      <div className="donatario-form">
        <div style={{display:"flex",justifyContent:"flex-start"}}>
          <h3 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h3>
          <h3>&nbsp;|&nbsp;</h3>
          <h3>Donatario</h3>
        </div>
        <Form layout="vertical" method="POST" onSubmit={signup}>
          <FormItem>
            <RadioGroup name="donationOrigin" onChange={handleText}>
              <Radio value="Público">Público</Radio>
              <Radio value="Privado">Privado</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            {current && current.donationOrigin && current.donationOrigin === "Público" ? 
            <div>
              <Divider />
              <RadioGroup name="donationType" onChange={handleText}>
                <Radio value="Gub">Cooperación Gubernamental</Radio>
                <Radio value="Int">Cooperación Internacional</Radio>
              </RadioGroup>
            </div>
            :
            current && current.donationOrigin &&
            <div>
              <Divider />
              <RadioGroup name="donationType" onChange={handleText}>
                <Radio value="Fil">Filantropía</Radio>
                <Radio value="IP">Iniciativa Privada</Radio>
              </RadioGroup>
            </div>
            }
          </FormItem>
          <FormItem>
            <Divider />
            {current && current.donationOrigin &&
            <RadioGroup name="person" onChange={handleText}>
              <Radio value="Física">Física</Radio><br/>
              <Radio value="Moral">Moral</Radio><br/>
            </RadioGroup>
            }
          </FormItem>
          <div className="donatario-info">
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
          <Divider />
          <div className="donatario-info">
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

export default NewDon