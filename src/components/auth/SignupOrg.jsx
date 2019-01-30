import React from 'react'
import { Form, Icon, Input, Radio, Button, 
  Upload, DatePicker, Select, Alert, Divider, InputNumber } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;

const dateFormat = 'YYYY/MM/DD';

const SignupOrg = ({signup, handleText, onChange, current}) => {
  return (
    <div className="auth-form">
      <div style={{display:"flex",justifyContent:"center"}}>
        <h2 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h2>
        <h2>&nbsp;|&nbsp;</h2>
        <h2>Organización</h2>
      </div>
      <Form layout="vertical" method="POST" onSubmit={signup}>
        <div className="org-basic-container">
          <FormItem>
            <Input name="name" onChange={handleText} prefix={<Icon type="team" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de la organización" />
          </FormItem>
          <FormItem>
            <Upload onChange={(info)=>onChange(info,"actaConstitutiva")}>
              <Button>
                <Icon type="upload" /> Acta Constitutiva
              </Button>
            </Upload>
          </FormItem>
        </div>
        <div className="org-basic-container">
          <FormItem>
            <DatePicker placeholder="Fecha de fundación" 
              style={{width:"400px"}} 
              defaultPickerValue={moment('2015/01/01', dateFormat)} />
            <Alert message="Mínimo 3 años de haberse fundado" type="warning" showIcon />
          </FormItem>
        </div>
        <Divider />
        <div className="org-basic-container">
          <FormItem>
            <Input name="nameRep" onChange={handleText} prefix={<Icon type="user" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre del representante legal" />
          </FormItem>
          <FormItem>
            <Input name="lastnameRep" onChange={handleText} prefix={<Icon type="user" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" />
          </FormItem>
          <FormItem>
            <Upload onChange={(info)=>onChange(info,"dictamenContable")}>
              <Button>
                <Icon type="upload" /> Dictamen Contable
              </Button>
            </Upload>
          </FormItem>
        </div>
        <div className="org-data-container">
          <h3>¿Ha recibido recursos?</h3>
          <div className="org-resources-container">
            <FormItem>
              <RadioGroup name="receivedResources" onChange={handleText}>
                <Radio value="Si">Si</Radio><br/>
                <Radio value="No">No</Radio><br/>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <RadioGroup name="resourcesOrigin" onChange={handleText}>
                <Radio value="Público">Público</Radio><br/>
                <Radio value="Privado">Privado</Radio><br/>
              </RadioGroup>
            </FormItem>
          </div>
          <h3>¿Es donataria?</h3>
          <FormItem>
            <RadioGroup name="donataria" onChange={handleText}>
              <Radio value="Si">Si</Radio><br/>
              <Radio value="No">No</Radio><br/>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Input name="CLUNI" onChange={handleText} prefix={<Icon type="audit" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Número de CLUNI" />
          </FormItem>
        </div>
        <Divider />
        <div className="org-data-container">
          <h3>¿Tuvo Proyectos anteriores?</h3>
          <FormItem>
            <RadioGroup name="formerProyects" onChange={handleText}>
              <Radio value="Si">Si</Radio><br/>
              <Radio value="No">No</Radio><br/>
            </RadioGroup>
          </FormItem>
          <h3>¿Cuántos?</h3>
          <FormItem>
            <InputNumber min={1} max={100} defaultValue={3} onChange={onChange} />
          </FormItem>
          <FormItem>
            <Upload onChange={(info)=>onChange(info,"cumplimiento")}>
              <Button>
                <Icon type="upload" /> Cumplimiento proyectos anteriores
              </Button>
            </Upload>
          </FormItem>
          <FormItem>
            <Upload onChange={(info)=>onChange(info,"plantilla")}>
              <Button>
                <Icon type="upload" /> Descargar plantilla
              </Button>
            </Upload>
          </FormItem>
        </div>
        <FormItem>
          <TextArea style={{width:"80%"}} rows={4} placeholder="Observaciones"/>
        </FormItem>
      </Form>
    </div>
  )
}

export default SignupOrg
