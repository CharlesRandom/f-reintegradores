import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Button, Upload } from 'antd';

const FormItem = Form.Item;

const OrganizationFiscal = ({ logo, images, addOrgData, dummyRequest, onChange }) => {
  return (
    <div className="organization-data">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="organization-data-container">
        <h2>Estás a un paso...</h2>
        <img src={images[1]} alt="imágenes"/>
      </div>
      <div className="organization-data-form-container">
        <div className='blue form-title'>
          <h3>Registro de Organización</h3>
        </div>
        <h4>Información Fiscal de la organización</h4>
        <h5>Adjuntar documentación requerida</h5>
        <Form layout="vertical" method="POST" onSubmit={addOrgData}>
          <div className="upload-files">
            <p>Copia del último estado financiero</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"estadoFinanciero")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Oficio de autorización emitido por el SAT</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"oficioSAT")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Constancia de situación fiscal</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"situacionFiscal")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Declaración anual de los donativos recibidos presentado en hacienda</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"declaracion")}
                customRequest={dummyRequest}>
                <Button>
                  <Icon type="upload" /> Subir archivo
                </Button>
              </Upload>
            </FormItem>
          </div>
          <div className="upload-files">
            <p>Recibo deducible electrónico (FCDI) con la leyenda cancelado</p>
            <FormItem>
              <Upload onChange={(info)=>onChange(info,"FCDI")}
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

export default OrganizationFiscal
