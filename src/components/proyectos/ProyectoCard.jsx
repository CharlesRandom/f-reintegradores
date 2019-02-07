import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const ProyectoCard = ( { title, logo, desc } ) => {
  return (
    <div className="proyecto-card">
      {/* <img src={logo} alt="Proyecto logo"/> */}
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link to='/proyectos/detail'>
        <Button type="primary" htmlType="submit">Ver más</Button>
      </Link>
    </div>
  )
}

export default ProyectoCard
