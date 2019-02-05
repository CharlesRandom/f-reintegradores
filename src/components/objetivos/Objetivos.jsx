import React, { Component } from 'react'
import './Objetivos.css'
import HomeObjetivos from '../home/HomeObjetivos';
import Navbar from '../general/Navbar';

class Objetivos extends Component {

  state = {
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user || !user.name) this.props.history.push('/login')
    else this.setState({user})
  }

  render() {
    return (
      <div className="objetivos">
        <Navbar />
        <HomeObjetivos />
      </div>
    )
  }
}

export default Objetivos