import React, { Component } from 'react'
import './Objetivos.css'
import HomeObjetivos from '../home/HomeObjetivos';
import Navbar from '../general/Navbar';

class Objetivos extends Component {

  state = {
    user:{},
    logged: false
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user || !user.username) this.props.history.push('/login')
    else this.setState({user, logged: true})
  }

  render() {
    const { logged } = this.state
    return (
      <div className="objetivos">
        <Navbar logged={logged}/>
        <HomeObjetivos />
      </div>
    )
  }
}

export default Objetivos