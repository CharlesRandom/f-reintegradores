import React, { Component } from 'react'
import './Home.css'
import { Carousel } from 'antd';
import HomeLanding from './HomeLanding'
import HomeVideo from './HomeVideo'
import HomeObjetivos from './HomeObjetivos'

export default class Home extends Component {
  myRef = React.createRef()
  state = {
    scrollTop: 0
  }

  onClick = e => {
    // toggles play / pause
    e.target.paused ? e.target.play() : e.target.pause()
  }

  onObjClick = e => {
    console.log(e.target)
  }

  

  render() {
    const {onClick} = this
    return (
      <div className="home-carousel">
        <Carousel vertical autoplay>
          <HomeLanding />
          <HomeVideo onClick={onClick} />
          <HomeObjetivos />
        </Carousel>
      </div>
    )
  }
}
