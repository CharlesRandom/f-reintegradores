import React from 'react'
import { Link } from 'react-router-dom'
import isotipo from '../../images/Isotipo.png'

const ConfirmationSuccess = () => {
  return (
    <div className="confirmation">
      <img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/>
      <h1>Se ha confirmado su correo electrónico, bienvenido a Reintegradores</h1>
      <p>Ahora inicia sesión dando click <Link to="/login">aquí</Link></p>
    </div>
  )
}

export default ConfirmationSuccess