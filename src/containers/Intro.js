import React, { Component } from 'react'
import injectSheet from 'react-jss'
// import Header from '../components/Header'
import Button from '../components/Button'
import background from '../images/background.svg'
import overlay from '../images/overlay.png'
import StatusIndicator from '../components/StatusIndicator'
const styles = {
  intro: {
    height: '100vh',
    textAlign: 'center',
    width: '100vw',
    backgroundImage: `url(${background})`,
    backgroundSize: 'auto'
  },
  heading: {
    fontSize: '42px',

    width: '320px',
    margin: 'auto',
    fontFamily: 'MuseoSlab100',
    color: '#FFF'
  },
  header: {
    backgroundImage: `url(${overlay})`,
    backgroundSize: 'cover',
    padding: '70px 0px'
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '10px',
    fontFamily: 'SofiaProSemiBold',
    color: '#FFF'
  },
  swipe: {
    textTransform: 'uppercase',
    marginTop: '30%'
  },
  body: {
    width: '350px',
    margin: 'auto',
    padding: '30px',
    textAlign: 'left',
    display: 'inline-block',
    lineHeight: '1.4',
    verticalAlign: 'top'
  }
}

class Intro extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <div className={classes.header}>
            <div className={classes.heading}>The LymeMind Story Booth</div>
            <StatusIndicator />
            <div className={classes.subHeading}>
              Capturing the Reality of Lyme Disease
            </div>
          </div>
          <div>
            <p className={classes.body}>
              Lyme disease is the source of much debate within the medical
              community, and much misinformation and misunderstanding within the
              broader population. The purpose of this experience is to document
              the real stories of the people affected by, or in other ways
              connected to, Lyme disease.
              <br />
              <br />
              By documenting these stories we hope to raise awareness and dispel
              confusion concerning the realities of Lyme disease today.
            </p>
            <p className={classes.body}>
              This experience will be very similar to a taped interview. You
              will sit within the story booth and respond verbally to a series
              of five prompts that appear on screen. All recorded answers will
              be edited for clarity post recording.
              <br />
              <br />
              You will be able to access a copy of your edited Lyme disease
              story once it becomes available online, and will be notified via
              the email address you will provide momentarily.
            </p>
          </div>
          <Button theme={'valid'} onClick={() => this.props.nextPage(2)}>
            Share Your Story
          </Button>
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Intro)
