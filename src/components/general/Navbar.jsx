import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <Link to='/'><p>INICIO</p></Link>
      <Link to='/nosotros'><p>NOSOTROS</p></Link>
      <Link to='/objetivos'><p>OBJETIVOS</p></Link>
      <Link to='/news'><p>NEWSLETTER</p></Link>
      <Link to='/admin'><p>ADMINISTRACIÓN</p></Link>
      <Link to='/admin'><p>CERRAR SESIÓN</p></Link>
    </div>
  )
}

export default Navbar
