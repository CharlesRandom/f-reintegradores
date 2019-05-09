import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import obj1 from '../../images/objetivos/Botones_Objetivos_172x115px_1.png'
import obj2 from '../../images/objetivos/Botones_Objetivos_172x115px_2.png'
import obj3 from '../../images/objetivos/Botones_Objetivos_172x115px_3.png'
import obj4 from '../../images/objetivos/Botones_Objetivos_172x115px_4.png'
import obj5 from '../../images/objetivos/Botones_Objetivos_172x115px_5.png'
import obj6 from '../../images/objetivos/Botones_Objetivos_172x115px_6.png'
import obj7 from '../../images/objetivos/Botones_Objetivos_172x115px_7.png'
import obj8 from '../../images/objetivos/Botones_Objetivos_172x115px_8.png'
import obj9 from '../../images/objetivos/Botones_Objetivos_172x115px_9.png'
import obj10 from '../../images/objetivos/Botones_Objetivos_172x115px_10.png'
import obj11 from '../../images/objetivos/Botones_Objetivos_172x115px_11.png'
import obj12 from '../../images/objetivos/Botones_Objetivos_172x115px_12.png'
import obj13 from '../../images/objetivos/Botones_Objetivos_172x115px_13.png'
import obj14 from '../../images/objetivos/Botones_Objetivos_172x115px_14.png'
import obj15 from '../../images/objetivos/Botones_Objetivos_172x115px_15.png'
import obj16 from '../../images/objetivos/Botones_Objetivos_172x115px_16.png'
import obj17 from '../../images/objetivos/Botones_Objetivos_172x115px_17.png'
import obj18 from '../../images/objetivos/Botones_Objetivos_172x115px_18.png'

const Projects = () => {
  return (
    <div className="projects">
      <h2>Nuestros Proyectos</h2>
      <p>
        Acompañamos a las organizaciones durante todo el proceso de gestión e implementación 
        de sus iniciativas garantizando el éxito de sus objetivos. Basamos nuestro trabajo 
        sobre los <strong>17 objetivos de desarrollos sotenible de la ONU</strong>.
      </p>
      <div className="obj-container">
        <Link to="/"><img src={obj1} alt="obj button"/></Link>
        <Link to="/"><img src={obj2} alt="obj button"/></Link>
        <Link to="/"><img src={obj3} alt="obj button"/></Link>
        <Link to="/"><img src={obj4} alt="obj button"/></Link>
        <Link to="/"><img src={obj5} alt="obj button"/></Link>
        <Link to="/"><img src={obj6} alt="obj button"/></Link>
        <Link to="/"><img src={obj7} alt="obj button"/></Link>
        <Link to="/"><img src={obj8} alt="obj button"/></Link>
        <Link to="/"><img src={obj9} alt="obj button"/></Link>
        <Link to="/"><img src={obj10} alt="obj button"/></Link>
        <Link to="/"><img src={obj11} alt="obj button"/></Link>
        <Link to="/"><img src={obj12} alt="obj button"/></Link>
        <Link to="/"><img src={obj13} alt="obj button"/></Link>
        <Link to="/"><img src={obj14} alt="obj button"/></Link>
        <Link to="/"><img src={obj15} alt="obj button"/></Link>
        <Link to="/"><img src={obj16} alt="obj button"/></Link>
        <Link to="/"><img src={obj17} alt="obj button"/></Link>
        <Link to="/"><img src={obj18} alt="obj button"/></Link>
      </div>
    </div>
  )
}

export default Projects
