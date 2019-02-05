import React from 'react'
import { Button } from 'antd';

const ProyectoCard = ( { logo, desc } ) => {
  return (
    <div className="proyecto-card">
      <img src={logo} alt="Proyecto logo"/>
      <p>{desc}</p>
      <Button type="primary" htmlType="submit">Ver más</Button>
    </div>
  )
}

export default ProyectoCard
