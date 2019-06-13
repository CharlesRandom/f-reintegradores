import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { uploadFile } from '../../../services/users'
import { addOrgData } from '../../../services/organizations'

import { Form, Icon, Button, Upload, message } from 'antd';
import './OrganizationData.css'

import logo from '../../../images/logo/Logo_reintegradores_horizontal.png'

import SocialFooter from '../../general/SocialFooter';

const FormItem = Form.Item;

  class OrganizationFiscalData extends Component {

    state = {
      user:{},
      orgData:{}
    }
  
    authError = e => {
      message.error(e);
    };
  
    componentWillMount(){
      const user = JSON.parse(localStorage.getItem('loggedUser'))
      // if(!user || !user.name) this.props.history.push('/login')
      // else this.setState({user})
      this.setState({user})
    }

    dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    };

    addOrgData = e => {
      e.preventDefault()
      const {orgData} = this.state
      orgData["user"] = "5c66f7f961035500174020d8"
      // console.log("orgData", orgData)
      addOrgData(orgData)
        .then(r=>{
          if(r._id){
            this.props.history.push('/proyectos')
          }
          else {
            console.log('Something went wrong, try adding again')
            this.authError('Algo salió mal, intente agregar los datos nuevamente')
          }
        }).catch(e=>{
          console.log(e)
          this.authError('Algo salió mal, intente agregar los datos nuevamente')
        })
    }
  
    onChange = (info,field) => {
      const {orgData} = this.state
      const file = info.file.originFileObj
      uploadFile(file)
        .then(link=>{
          info.file.status = "done"
          orgData[field] = link
          this.setState({orgData})
          // console.log(orgData)
        }).catch(e=>{
          console.log('Something went wrong D: try adding the file again')
          console.log(e)
        })
    }
  
    render() {
      const images = [
        'https://res.cloudinary.com/gerard0jr/image/upload/v1559277215/Neobase/Reintegradores/register/Registros_fotos_Mesa_de_trabajo_1.png',
        'https://res.cloudinary.com/gerard0jr/image/upload/v1559277212/Neobase/Reintegradores/register/Registros_fotos_Mesa_de_trabajo_1_copia.png',
        'https://res.cloudinary.com/gerard0jr/image/upload/v1559277215/Neobase/Reintegradores/register/Registros_Tuformacionayuda.png',
        'https://res.cloudinary.com/gerard0jr/image/upload/v1559277214/Neobase/Reintegradores/register/Registros_Proyecto_Angel.png'
      ]
      const { addOrgData, dummyRequest, onChange } = this
      return (
        <>
        <div className="organization-data">
          <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
          <div className="organization-data-container">
            <h2>Registra tu organización</h2>
            <img src={images[1]} alt="imagenes"/>
          </div>
          <div className="organization-data-form-container">
            <div className='blue form-title'>
              <h3>Regístrate ahora</h3>
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
          <SocialFooter />
        </div>
      </>
      )
    }
  }
  
  export default OrganizationFiscalData