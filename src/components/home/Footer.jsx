import React from 'react'
import './Footer.css'
import pleca from '../../images/navbar/PlecaColores-01.png'
import logo from '../../images/footer/logo_reintegradores_footer.png'
import twicon from '../../images/footer/social/twitter_icon.png'
import yticon from '../../images/footer/social/youtube_icon.png'
import liicon from '../../images/footer/social/linkedin_icon.png'
import fbicon from '../../images/footer/social/facebook_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <img className="pleca" src={pleca} alt="pleca"/>
      <div className="footer-data-container">
        <img className="logo-footer" src={logo} alt="Reintegradores logo"/>
        <div className="footer-data">
          <h5>Reintegradores es un proyecto certificado y validado
            por instituciones líderes a nivel mundial.
          </h5>
          <div className="logos-footer">
            <span>LOGO</span>
            <span>LOGO</span>
            <span>LOGO</span>
          </div>
          <div className="contact-footer">
            <span>contacto@reintegradores.com</span><span>|</span>
            <span>Condiciones de uso</span><span>|</span>
            <span>Legales</span><span>|</span>
            <span>Aviso de privacidad</span>
          </div>
        </div>
      </div>
      <div className="social">
        <span>© 2019. Todos los derechos reservados.</span>
        <div className="social-icons">
          <span>Síguenos en redes</span>
          <img src={twicon} alt="Twitter"/>
          <img src={yticon} alt="YouTube"/>
          <img src={liicon} alt="LinkedIn"/>
          <img src={fbicon} alt="Facebook"/>
        </div>
      </div>
    </div>
  )
}

export default Footer