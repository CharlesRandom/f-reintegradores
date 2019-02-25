import React from 'react'
import './Home.css'
import logotipo from '../../images/Logo-Curvas-Reintegradores.png'
// import logotipo from '../../images/animaciones/home_landing.gif'
// import videoReintegradores from '../../images/video/home_landing.mp4'
import videoReintegradores from '../../images/video/reintegradores_home.mp4'
// import plecaInferior from '../../images/PlecaInferior.png'
import plecaInferior from '../../images/animaciones/pleca_brillo_2000.gif'
import btnGoogle from '../../images/BotonG_Registro_41x41px.png'
import btnIN from '../../images/BotonIN_Registro_41x41px.png'
import btnFacebook from '../../images/BotonFB_Registro_41x41px.png'
import btnPlayStore from '../../images/Boton_AndroidG_Front_76x25px.png'
import btnAppStore from '../../images/Boton_AppStore_Front_76x25px.png'

const HomeLanding = () => {
  return (
    <div>
      <div className="home-landing">
        {/* <img src={logotipo} alt="Reintegradores isotipo"/> */}
        <video className="center" src={videoReintegradores} poster={logotipo} preload autoPlay loop muted playsInline>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="footer">
        <img src={plecaInferior} alt="pleca inferior"/>
        <div className="social">
          <img src={btnGoogle} alt="Google button"/>
          <img src={btnIN} alt="LinkedIN button"/>
          <img src={btnFacebook} alt="Facebook button"/>
          <img src={btnPlayStore} alt="PlayStore button"/>
          <img src={btnAppStore} alt="AppStore button"/>
        </div>
      </div>
    </div>
  )
}

export default HomeLanding