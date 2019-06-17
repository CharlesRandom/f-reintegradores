import React, { Component } from 'react'
import './Proyectos.css'
import Navbar from '../general/Navbar';
import Projects from '../home/Projects';

class Proyectos extends Component {

  state = {
    user:{},
    logged: false
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    console.log(user)
    if(!user || !user.email) this.props.history.push('/login')
    else this.setState({user, logged: true})
  }
  
  render() {
    const {logged} = this.state
    return (
      <>
        <Navbar logged={logged}/>
        <Projects />
      </>
    )
  }
}

export default Proyectos