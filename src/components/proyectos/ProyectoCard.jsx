import React from 'react'
import { Link } from 'react-router-dom'
import './ProyectoCard.css'

const ProyectoCard = ( { title, img, desc } ) => {
  return (
    <div className="proyecto-card">
      <img src={img} alt="Proyecto logo"/>
      <h4>{title}</h4>
      <p>{desc}</p>
      <Link to='/proyectos/detail'>Ver más &rarr;</Link>
    </div>
  )
}

export default ProyectoCard
