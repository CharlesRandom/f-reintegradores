import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import { logout } from '../../services/auth'
import { withRouter } from 'react-router-dom'
import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import pleca from '../../images/navbar/PlecaColores-01.png'

class Navbar extends Component {

  // logout = () => {
  //   console.log("closing session from Navbar")
  //   logout()
  //   .then(res => {
  //       console.log(res)
  //       localStorage.removeItem('loggedUser')
  //       this.props.history.push('/')
  //   })
  //   .catch(err => err)
  // }

  render() {
    // const { logout } = this
    return (
      <div className="navbar">
        <div className="nav">
          <Link to='/'><img className="logo" src={logo} alt="Reintegradores logo"/></Link>
          <div>
            <Link to='/'><span>Nosotros</span></Link>
            <Link to='/'><span>Proyectos</span></Link>
            <Link to='/'><span>Beneficios</span></Link>
            <Link to='/'><span>Contacto</span></Link>
            <Link to='/'><span>Login</span></Link>
            <div className="btn-donar">
            <Link to='/donar'><span>Donar</span></Link>
            </div>
          </div>
        </div>
        <img className="pleca" src={pleca} alt="pleca div"/>
      </div>
    )
  }
}

export default withRouter(Navbar)