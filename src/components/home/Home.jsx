import React, { Component } from 'react'
import Navbar from '../general/Navbar';
import './Home.css'
import Presentation from './Presentation';
import Projects from './Projects';
import Benefits from './Benefits';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Presentation />
        <Projects />
        <Benefits />
      </div>
    )
  }
}

export default Home