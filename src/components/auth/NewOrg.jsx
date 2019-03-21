import React from 'react'
import './NewOrg.css'
import { Form, Icon, Input, Radio, Button, 
  Upload, DatePicker, Tooltip, InputNumber } from 'antd';
import moment from 'moment';
import isotipo from '../../images/Isotipo.png'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

const dateFormat = 'YYYY/MM/DD';

const NewOrg = ({signup, handleText, onChange, onDateChange}) => {
  return (
    <div className="organizacion">
      <a href="/"><img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/></a>
      <div className="organizacion-form">
        <div style={{display:"flex",justifyContent:"flex-start"}}>
          <h3 style={{fontFamily:"Brandon Bold"}}>REGISTRO</h3>
          <h3>&nbsp;|&nbsp;</h3>
          <h3>Organización</h3>
        </div>
        <Form layout="vertical" method="POST" onSubmit={signup}>
          <FormItem>
            <Input name="name" onChange={handleText} prefix={<Icon type="team" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de la organización" />
          </FormItem>
          <div className="organizacion-info">
            <FormItem>
              <Input name="email" onChange={handleText} prefix={<Icon type="mail" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            </FormItem>
            <FormItem>
              <Input name="password" onChange={handleText} prefix={<Icon type="lock" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
          </div>
          <div className="organizacion-info">
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"actaConstitutiva")}>
                <Button>
                  <Icon type="upload" /> Acta Constitutiva
                </Button>
              </Upload>
            </FormItem>
            <FormItem>
              <Tooltip placement="topLeft" title="Mínimo 3 años de haberse fundado" arrowPointAtCenter>
                <DatePicker placeholder="Fecha de fundación"
                  onChange={(date, dateString) => onDateChange(date,"establishment")} 
                  style={{width:"400px"}} 
                  defaultPickerValue={moment('2015/01/01', dateFormat)} />
              </Tooltip>
            </FormItem>
            <FormItem>
              <Input name="nameRep" onChange={handleText} prefix={<Icon type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre del representante legal" />
            </FormItem>
            <FormItem>
              <Input name="lastnameRep" onChange={handleText} prefix={<Icon type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" />
            </FormItem>
            <FormItem>
              <Input name="CLUNI" onChange={handleText} prefix={<Icon type="audit" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Número de CLUNI" />
            </FormItem>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"dictamenContable")}>
                <Button>
                  <Icon type="upload" /> Dictamen Contable
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="organizacion-radio">
            <div className="organizacion-radio-element">
              <h3>¿Ha recibido recursos?</h3>
              <div style={{display:"flex"}}>
                <FormItem>
                  <RadioGroup name="receivedResources" onChange={handleText}>
                    <Radio value={true}>Si</Radio><br/>
                    <Radio value={false}>No</Radio><br/>
                  </RadioGroup>
                </FormItem>
                <FormItem>
                  <RadioGroup name="resourcesOrigin" onChange={handleText}>
                    <Radio value="Público">Público</Radio><br/>
                    <Radio value="Privado">Privado</Radio><br/>
                  </RadioGroup>
                </FormItem>
              </div>
            </div>
            <div className="organizacion-radio-element">
            <h3>¿Es donataria?</h3>
            <FormItem>
              <RadioGroup name="donee" onChange={handleText}>
                <Radio value={true}>Si</Radio><br/>
                <Radio value={false}>No</Radio><br/>
              </RadioGroup>
            </FormItem>
            </div>
            <div className="organizacion-radio-element">
            <h3>¿Tuvo Proyectos anteriores?</h3>
            <FormItem>
              <RadioGroup name="formerProyects" onChange={handleText}>
                <Radio value={true}>Si</Radio><br/>
                <Radio value={false}>No</Radio><br/>
              </RadioGroup>
            </FormItem>
            </div>
            <div>
            <h3>¿Cuántos?</h3>
            <FormItem>
              <InputNumber min={1} max={100} defaultValue={3} 
                onChange={(value)=>onDateChange(value,"numFormerProyects")} />
            </FormItem>
            </div>
          </div>
          <div className="organizacion-info">
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"complianceformerProyects")}>
                <Button>
                  <Icon type="upload" /> Cumplimiento proyectos anteriores
                </Button>
              </Upload>
            </FormItem>
            <FormItem>
              <Button>
                <Icon type="download" /> Descargar plantilla
              </Button>
            </FormItem>
          </div>
          <FormItem>
            <TextArea name="comment" onChange={handleText} style={{width:"100%"}} 
              rows={4} placeholder="Observaciones"/>
          </FormItem>
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

export default NewOrg