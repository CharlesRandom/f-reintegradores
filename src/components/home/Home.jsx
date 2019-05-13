import React, { Component } from 'react'
import Navbar from '../general/Navbar';
import './Home.css'
import Presentation from './Presentation';
import Projects from './Projects';
import Benefits from './Benefits';
import How from './How';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Presentation />
        <Projects />
        <Benefits />
        <How />
        <Footer />
      </div>
    )
  }
}

export default Home