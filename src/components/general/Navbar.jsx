import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { logout } from '../../services/auth'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {

  logout = () => {
    console.log("closing session from Navbar")
    logout()
    .then(res => {
        console.log(res)
        localStorage.removeItem('loggedUser')
        this.props.history.push('/')
    })
    .catch(err => err)
  }

  render() {
    const { logout } = this
    return (
      <div className="nav">
        <Link to='/'><p>INICIO</p></Link>
        <Link to='/nosotros'><p>NOSOTROS</p></Link>
        <Link to='/objetivos'><p>OBJETIVOS</p></Link>
        <Link to='/news'><p>NEWSLETTER</p></Link>
        <Link to='/admin'><p>ADMINISTRACIÓN</p></Link>
        <p onClick={logout}>CERRAR SESIÓN</p>
    </div>
    )
  }
}

export default withRouter(Navbar)