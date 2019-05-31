import React, { Component } from 'react'
import Navbar from '../general/Navbar';
import './Home.css'
import Presentation from './Presentation';
import Projects from './Projects';
import Benefits from './Benefits';
import How from './How';
import Footer from './Footer';

class Home extends Component {

  componentDidMount(){
    localStorage.setItem('donationType', 'donate')
  }

  changeDonationType = type => {
    if(type === 'donate') return localStorage.setItem('donationType', 'donate')
    if(type === 'org') return localStorage.setItem('donationType', 'org')
    if(type === 'formation') return localStorage.setItem('donationType', 'formation')
    if(type === 'angel') return localStorage.setItem('donationType', 'angel')
  }

  render() {

    const { changeDonationType } = this

    return (
      <div>
        <Navbar />
        <Presentation changeDonationType={changeDonationType}/>
        <Projects />
        <Benefits />
        <How changeDonationType={changeDonationType}/>
        <Footer />
      </div>
    )
  }
}

export default Home