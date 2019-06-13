import React from 'react'
import { Link } from 'react-router-dom'
import './Presentation.css'
import playIcon from '../../images/presentation/Iconos_video-01.png'
import background from '../../images/presentation/bk_presentation.png'

const Presentation = ({changeDonationType}) => {
  return (
    <div className="presentation">
      <div className="presentation-data">
        <h3>
          Innovadora plataforma global de transparencia y seguridad financiera en donaciones para organizaciones civiles
        </h3>
        <p>
          Bienvenido a Reintegradores. Somos la plataforma innovadora de transparencia y seguridad financiera para la donación colectiva. 
          Trabajamos conectando fundaciones y asociaciones de manera simple, rápida y transparente.
        </p>
        <div className="play-container">
          <img className="play-icon" src={playIcon} alt="Play icon"/>
          <span>Conócenos un poco más</span>
        </div>
        <h3>¡Súmate! Tu puedes ser parte del cambio:</h3>
        <h4>Registro para</h4>
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
      <div className="background">
        <img src={background} alt="bkgnd"/>
      </div>
    </div>
  )
}

export default Presentation