import React, { Component } from 'react'
import { Scroller, Section } from 'react-fully-scrolled';
import HomeLanding from './HomeLanding';
import HomeVideo from './HomeVideo';
import HomeObjetivos from './HomeObjetivos';
// import HomeNewsletter from './HomeNewsletter';


class Home extends Component {

  onClick = e => {
    // toggles play / pause
    e.target.paused ? e.target.play() : e.target.pause()
  }

  render() {
    const {onClick} = this
    return (
      // <div>
      //   <HomeLanding />
      //   <HomeVideo onClick={onClick} />
      //   <HomeObjetivos />
      //   <HomeNewsletter />
      // </div>
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => {}}
        onAfterScroll={(page) => {}}
        isEnabled={true}
      >
        <Section>
          <HomeLanding />
        </Section>
        <Section>
          <HomeVideo onClick={onClick} />
        </Section>
        <Section>
          <HomeObjetivos />
        </Section>
        {/* <Section>
          <HomeNewsletter  />
        </Section> */}
      </Scroller>
    )
  }
}

export default Home