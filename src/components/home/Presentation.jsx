import React from 'react'
import { Link } from 'react-router-dom'
import './Presentation.css'
import playIcon from '../../images/presentation/Iconos_video-01.png'

const Presentation = ({changeDonationType}) => {
  return (
    <div className="presentation">
      <div className="presentation-data">
        <h3>
          Somos la 1ra plataforma global 
          de transparencia financiera 
          para Organizaciones Civiles
        </h3>
        <p>
          Bienvenido/a a Reintegradores. 
          Somos la primer plataforma de transparencia financiera 
          para la donación colectiva. 
          Trabajamos conectando fundaciones y asociaciones civiles 
          con personas y/o empresas dispuestas a colaborar con ellas 
          de forma simple, rápida y transparente.
        </p>
        <div className="play-container">
          <img className="play-icon" src={playIcon} alt="Play icon"/>
          <span>CONÓCENOS UN POCO MÁS</span>
        </div>
        <h4>¡Súmate! Te estamos esperando:</h4>
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
  )
}

export default Presentation