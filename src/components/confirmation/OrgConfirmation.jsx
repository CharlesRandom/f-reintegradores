import React from 'react'
import { Link } from 'react-router-dom'

const OrgConfirmation = ({ images, logo }) => {
  return (
    <div className="organization-data">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="organization-data-container">
        <img src={images[1]} alt="imagenes"/>
      </div>
      <div className="organization-data-form-container">
        <div className='blue form-title'>
          <h3>Registro de organización</h3>
        </div>
        <h4 className="confirmation-msg-title">¡Muchas gracias por tu registro!</h4>
        <p className="confirmation-msg-text">Revisaremos y validaremos los documentos en un plazo menor a 48 horas</p>
        <p className="confirmation-msg-text">Se le enviará la aprobación vía correo electrónico</p>
      </div>
    </div>
  )
}

export default OrgConfirmation