import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
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

const HomeObjetivos = ({ onObjClick }) => {
  return (
    <div className="objetivos">
      <div>
        <div className="obj-header">
          <h1>OBJETIVOS DE DESARROLLO SOSTENIBLE</h1>
          <h3>
            Reintegradores acompaña a las organizaciones durante todo el proceso de 
            GESTIÓN E IMPLEMENTACIÓN DE SUS INICIATIVAS garantizando el éxito de SUS OBJETIVOS
          </h3>
        </div>
        <div className="obj-container">
          <Link to="/objetivos/obj1"><img src={obj1} alt="Objetivo 1"/></Link>
          <Link to="/objetivos/obj2"><img src={obj2} alt="Objetivo 2"/></Link>
          <Link to="/objetivos/obj3"><img src={obj3} alt="Objetivo 3"/></Link>
          <Link to="/objetivos/obj4"><img src={obj4} alt="Objetivo 4"/></Link>
          <Link to="/objetivos/obj5"><img src={obj5} alt="Objetivo 5"/></Link>
          <Link to="/objetivos/obj6"><img src={obj6} alt="Objetivo 6"/></Link>
          <Link to="/objetivos/obj7"><img src={obj7} alt="Objetivo 7"/></Link>
          <Link to="/objetivos/obj8"><img src={obj8} alt="Objetivo 8"/></Link>
          <Link to="/objetivos/obj9"><img src={obj9} alt="Objetivo 9"/></Link>
          <Link to="/objetivos/obj10"><img src={obj10} alt="Objetivo 10"/></Link>
          <Link to="/objetivos/obj11"><img src={obj11} alt="Objetivo 11"/></Link>
          <Link to="/objetivos/obj12"><img src={obj12} alt="Objetivo 12"/></Link>
          <Link to="/objetivos/obj13"><img src={obj13} alt="Objetivo 13"/></Link>
          <Link to="/objetivos/obj14"><img src={obj14} alt="Objetivo 14"/></Link>
          <Link to="/objetivos/obj15"><img src={obj15} alt="Objetivo 15"/></Link>
          <Link to="/objetivos/obj16"><img src={obj16} alt="Objetivo 16"/></Link>
          <Link to="/objetivos/obj17"><img src={obj17} alt="Objetivo 17"/></Link>
          <Link to="/objetivos/obj18"><img src={obj18} alt="Objetivo 18"/></Link>
        </div>
      </div>
    </div>
  )
}

export default HomeObjetivos