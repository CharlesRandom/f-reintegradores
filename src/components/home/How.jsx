import React from 'react'
import { Link } from 'react-router-dom'
import './How.css'

const How = () => {
  return (
    <div className="how">
      <h3>Seguro, rápido y transparente.</h3>
      <div className="how-data">
        <h2>¿Cómo funciona?</h2>
        <ol>
          <li>Regístrate ya sea para alta de proyecto o alta de donador.</li>
          <li>Llena formularios solicitado especificando a que proyecto te gustaría donar.</li>
          <li>Espera nuestra respuesta y validación para poder hacer tu donación o tu alta 
            de organización.</li>
        </ol>
        <div className="how-register">
          <h4>¿Quieres donar o dar de alta un proyecto?</h4>
          <h2>¡Regístrate aquí!</h2>
          <div className="btn-container">
              <div className="btn-presentation">
                <Link to="/"><span>DONACIÓN</span></Link>
              </div>
              <div className="btn-presentation">
                <Link to="/"><span>ORGANIZACIÓN</span></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default How
