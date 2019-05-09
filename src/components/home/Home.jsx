import React, { Component } from 'react'
import Navbar from '../general/Navbar';
import './Home.css'
import Presentation from './Presentation';
import Projects from './Projects';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Presentation />
        <Projects />
      </div>
    )
  }
}

export default Home