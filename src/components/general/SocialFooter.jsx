import React from 'react'
import './SocialFooter.css'
import pleca from '../../images/navbar/PlecaColores-01.png'
import twicon from '../../images/footer/social/twitter_icon.png'
import yticon from '../../images/footer/social/youtube_icon.png'
import liicon from '../../images/footer/social/linkedin_icon.png'
import fbicon from '../../images/footer/social/facebook_icon.png'

const SocialFooter = () => {
  return (
    <div className="social-footer-container">
      <img className="pleca" src={pleca} alt="pleca"/>
      <div className="social-footer">    
        <span>© 2019. Todos los derechos reservados.</span>
        <div className="social-footer-icons">
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

export default SocialFooter
