import React, { Component } from 'react'
import './Home.css'
import img1 from '../../images/news/news1.jpg'
import img2 from '../../images/news/news2.jpg'
import NewsCard from './NewsCard';
import Navbar from '../general/Navbar';

const title1 = 'PARQUE LINEAL PARA EL GRAN CANAL DE LA CDMX'
const title2 = 'MÉXICO HACIA UNA ESTRATEGIA INTEGRAL DE RECICLAJE INCLUSIVO'
const desc1 = 'Una vez que se recuperan los drenajes y se presentan como espacios públicos, es posible reincorporar el elemento del agua a nuestro paisaje citadino. El Gran Canal del Desagüe que dejará de ser un cauce de drenaje, de dónde salen olores desagradables, para convertirse en un nuevo parque lineal. Pero sobre todo, el parque tiene la intención de tratar de solucionar un problema que ha existido desde la época prehispánica: la inundaciones y desbordamientos del río de la zona norte de la CDMX. Cada año, en la zona limítrofe del norte de la Ciudad de México y los puntos cercanos a Ecatepec y Nezahualcóyotl, que van desde circuito interior, Gran Canal hasta el Río de los Remedios, son víctimas de grandes inundaciones. Y a pesar de los protocolos y grandes esfuerzos de la Operación Conjunta para la Atención de Fenómenos Hidrometeorológicos en la Zona Metropolitana el drenaje se satura en el Gran Canal, en gran parte debido a las lluvias pluviales.'
const desc2 = 'Unos 50 representantes de diferentes sectores del reciclaje en México se reunieron recientemente en un primer Foro “Hacia una estrategia integral de reciclaje inclusivo en México” Acopiadores, recicladores de base, órganos de gobierno encargados del diseño e implementación de regulaciones para el manejo de residuos, empresas recicladoras, academia y organizaciones de la sociedad civil, provenientes de distintos puntos de la República Mexicana se hicieron presentes. Entre los temas que abordaron están: Reciclaje Inclusivo, Economía Circular, Legislación en cuanto a manejo de residuos, Responsabilidad Compartida y Educación Ambiental, con el propósito de crear estrategias entre las empresas, autoridades y sociedad civil para promover el reciclaje inclusivo en México. De allí se plantearon distintas propuestas para cumplir los retos del reciclaje en México como crear una cultura de consumo, mejorar la legislación en manejo de residuos, capacitar al sector de recicladores en México, promover lenguajes comunes, generar información abierta en cuanto a valor ambiental, social y económico y crear alianzas estratégicas entre los sectores participantes. La actividad fue organizada por Fundación Avina, El Centro de Colaboración Cívica (CCC), PetStar, Fundación Tláloc,  y el Instituto de Investigaciones para el Desarrollo con Equidad de la Universidad Iberoamericana (EQUIDE).'

class HomeNewsletter extends Component {

  state={
    modal2Visible:false
  }

  setModal2Visible = modal2Visible => {
    this.setState({ modal2Visible });
  }

  render() {
    const {setModal2Visible} = this
    const {modal2Visible} = this.state
    return (
      <div className="newsletter">
        <Navbar/>
        <div>
          <div className="news-header">
            <h1>NEWSLETTER</h1>
          </div>
          <div className="news-container">
            <NewsCard modal2Visible={modal2Visible} setModal2Visible={setModal2Visible} title={title1} img={img1} desc={desc1} />
            <NewsCard modal2Visible={modal2Visible} setModal2Visible={setModal2Visible} title={title2} img={img2} desc={desc2} />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeNewsletter