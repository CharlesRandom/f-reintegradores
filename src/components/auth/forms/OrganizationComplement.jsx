import React, { Component } from 'react'
import { uploadFile } from '../../../services/users'
import { addOrgData } from '../../../services/organizations'

import { message } from 'antd';
import './OrganizationData.css'

import logo from '../../../images/logo/Logo_reintegradores_horizontal.png'

import SocialFooter from '../../general/SocialFooter';
import OrganizationFiscal from './OrganizationFiscal';
import OrganizationData from './OrganizationData';
import OrgConfirmation from '../../confirmation/OrgConfirmation';

  class OrganizationComplement extends Component {

    state = {
      user:{},
      orgData:{},
      step:1
    }
  
    authError = e => {
      message.error(e);
      // this.setState({loading:false})
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
      let { orgData, step } = this.state
      orgData["user"] = "5c66f7f961035500174020d8"
      // console.log("orgData", orgData)
      addOrgData(orgData)
        .then(r=>{
          if(r._id){
            // this.props.history.push('/fiscal')
            step++
            this.setState({step})
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
      const { step } = this.state
      return (
        <>
        <div>
          {step === 1 ? <OrganizationData
            logo={logo}
            images={images}
            addOrgData={addOrgData}
            dummyRequest={dummyRequest}
            onChange={onChange}
          />
          :
          step === 2 ? 
          <OrganizationFiscal
            logo={logo}
            images={images}
            addOrgData={addOrgData}
            dummyRequest={dummyRequest}
            onChange={onChange}
          />
          :
          <OrgConfirmation 
            logo={logo}
            images={images} 
          />
          }
          <SocialFooter />
        </div>
      </>
      )
    }
  }
  
  export default OrganizationComplement