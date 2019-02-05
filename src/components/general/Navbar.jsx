import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <Link to='/'><p>Inicio</p></Link>
      <Link to='/nosotros'><p>Nosotros</p></Link>
      <Link to='/objetivos'><p>Objetivos</p></Link>
      <Link to='/news'><p>Newsletter</p></Link>
      <Link to='/admin'><p>Administración</p></Link>
    </div>
  )
}

export default Navbar
