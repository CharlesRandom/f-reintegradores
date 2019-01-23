import React, { Component } from 'react'
import { Carousel } from 'antd';
import HomeLanding from './HomeLanding'
import HomeVideo from './HomeVideo'
import HomeObjetivos from './HomeObjetivos'

export default class Home extends Component {

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
      <div>
        <Carousel vertical autoplay>
          <HomeLanding />
          <HomeVideo onClick={onClick} />
          <HomeObjetivos />
        </Carousel>
      </div>
    )
  }
}
