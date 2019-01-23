import React from 'react'
import './Home.css'
import videoReintegradores from '../../images/video/WereTheSuperhumans-RioParalympics2016Trailer.mp4'

const HomeVideo = ({ onClick }) => {
  return (
    <div>
      <video src={videoReintegradores} controls onClick={onClick}>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default HomeVideo