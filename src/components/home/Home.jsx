import React, { Component } from 'react'
import Navbar from '../general/Navbar';
import './Home.css'
import Presentation from './Presentation';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Presentation />
      </div>
    )
  }
}

export default Home