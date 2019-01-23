import React from 'react'
import { Form, Icon, Input, Radio,  Button, Upload } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const SignupForm = ({signup, handleText, onChange, current}) => {
  return (
    <div className="auth-form">
      <h2>REGISTRO | Donatario</h2>
      <Form layout="vertical" method="POST" onSubmit={signup}>
        <div className="radio-container">
          <FormItem>
            <RadioGroup name="donationOrigin" onChange={handleText}>
              <Radio value="Público">Público</Radio><br/>
              <Radio value="Privado">Privado</Radio><br/>
            </RadioGroup>
          </FormItem>
          <FormItem>
            {current.donationOrigin && current.donationOrigin === "Público" ? 
            <RadioGroup name="donationType" onChange={handleText}>
              <Radio value="Gub">Cooperación Gubernamental</Radio><br/>
              <Radio value="Int">Cooperación Internacional</Radio><br/>
            </RadioGroup>
            :
            current.donationOrigin &&
            <RadioGroup name="donationType" onChange={handleText}>
              <Radio value="Fil">Filantropía</Radio><br/>
              <Radio value="IP">Iniciativa Privada</Radio><br/>
            </RadioGroup>
            }
          </FormItem>
          <FormItem>
            {current.donationOrigin &&
            <RadioGroup name="person" onChange={handleText}>
              <Radio value="Física">Física</Radio><br/>
              <Radio value="Moral">Moral</Radio><br/>
            </RadioGroup>
            }
          </FormItem>
        </div>
        <div>
          <FormItem>
            <Upload onChange={(info)=>onChange(info,"constanciaFiscal")}>
              <Button>
                <Icon type="upload" /> Constancia de situación fiscal
              </Button>
            </Upload>
          </FormItem>
          <FormItem>
            {current.person && current.person === "Física" ?
            <Input name="CURP" onChange={handleText} prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="CURP" />
            :
            current.person &&
            <Upload onChange={(info)=>onChange(info,"actaConstitutiva")}>
              <Button>
                <Icon type="upload" /> Acta Constitutiva
              </Button>
            </Upload>
            }
          </FormItem>
          <FormItem>
            <Input name="RFC" onChange={handleText} prefix={<Icon type="audit" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="RFC" />
          </FormItem>
          <FormItem>
            <Input name="address" onChange={handleText} prefix={<Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Domicilio" />
          </FormItem>
        </div>
        <FormItem>
          <Input name="name" onChange={handleText} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
        </FormItem>
        <FormItem>
          <Input name="lastname" onChange={handleText} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" />
        </FormItem>
        <FormItem>
          <Input name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
        </FormItem>
        <FormItem>
          <Input name="password" onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <div className="d-flex jcc aic">
            <Button type="primary" htmlType="submit">Sign up</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  )
}

export default SignupForm