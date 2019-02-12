import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import newsletter from '../../images/newsletter.png'

const linkTo = '/proyectos'

const HomeNewsletter = () => {
  return (
    <div>
      <div className="news-container">
        <Link to={linkTo}><img src={newsletter} alt="Newsletter"/></Link>
      </div>
    </div>
  )
}

export default HomeNewsletter
