import React from 'react'
import './Home.css'
import isotipo from '../../images/Isotipo.png'
import plecaInferior from '../../images/PlecaInferior.png'
import btnGoogle from '../../images/BotonG_Registro_41x41px.png'
import btnIN from '../../images/BotonIN_Registro_41x41px.png'
import btnFacebook from '../../images/BotonFB_Registro_41x41px.png'
import btnPlayStore from '../../images/Boton_AndroidG_Front_76x25px.png'
import btnAppStore from '../../images/Boton_AppStore_Front_76x25px.png'

const HomeLanding = () => {
  return (
    <div>
      <div className="home-landing">
        <img src={isotipo} alt="Reintegradores isotipo"/>
        <h1>REINTEGRADORES</h1>
        <h3>Inteligencia civil</h3>
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