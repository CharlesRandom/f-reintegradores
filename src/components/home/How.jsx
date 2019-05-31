import React from 'react'
import { Link } from 'react-router-dom'
import './How.css'

const How = ({changeDonationType}) => {
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
        <div>
          <h4>¿Quieres donar o dar de alta un proyecto?</h4>
          <h2>¡Regístrate aquí!</h2>
          <div className="btn-container">
            <div onClick={() => changeDonationType('donate')} className="btn-presentation green">
              <Link to="/donar"><span>Donación</span></Link>
            </div>
            <div onClick={() => changeDonationType('org')} className="btn-presentation blue">
              <Link to="/donar"><span>Organización</span></Link>
            </div>
            <div onClick={() => changeDonationType('formation')} className="btn-presentation orange">
              <Link to="/donar"><span>Tu Formación Ayuda</span></Link>
            </div>
            <div onClick={() => changeDonationType('angel')} className="btn-presentation purple">
              <Link to="/donar"><span>Proyecto Ángel</span></Link>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default How
