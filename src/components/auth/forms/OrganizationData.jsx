import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Button, Upload } from 'antd';

const FormItem = Form.Item;

const OrganizationData = ({ logo, images, addOrgData, dummyRequest, onChange }) => {
  return (
    <div className="organization-data">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="organization-data-container">
        <h2>Inicia el registro de tu organización.</h2>
        <img src={images[1]} alt="imagenes"/>
      </div>
      <div className="organization-data-form-container">
        <div className='blue form-title'>
          <h3>Registro de Organización</h3>
        </div>
        <h4>Información de la organización</h4>
        <h5>Adjuntar documentación requerida</h5>
        <Form layout="vertical" method="POST" onSubmit={addOrgData}>
          <div className="upload-files">
            <p>Copia de Acta Constitutiva</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"actaConstitutiva")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Organigrama actualizado de operación de la organización</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"organigrama")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Copia actas notariales del o de los apoderados legales</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"notarial")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Última reforma de estatutos</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"estatutos")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>CV del director general de la organización</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"curriculumVitae")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Comprobante de domicilio</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"comprobanteDom")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <FormItem>
            <Button className='blue' type="primary" htmlType="submit">Siguiente</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export default OrganizationData