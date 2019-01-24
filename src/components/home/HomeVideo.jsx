import React from 'react'
import './Home.css'
import videoReintegradores from '../../images/video/WereTheSuperhumans-RioParalympics2016Trailer.mp4'

const HomeVideo = ({ onClick }) => {
  return (
    <div>
      <div className="video-container">
        <video className="center" src={videoReintegradores} controls onClick={onClick}>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HomeVideo