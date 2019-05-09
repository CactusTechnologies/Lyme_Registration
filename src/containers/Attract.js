import React, { Component, Fragment } from 'react'
import injectSheet from 'react-jss'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import StatusIndicator from '../components/StatusIndicator'
import background from '../images/background.svg'
import overlay from '../images/overlay.png'
import swipeup from '../images/swipeup.svg'
import logo from '../images/logo.svg'
// import overlay from '../images/overlay.png'
// import Header from '../components/Header'

import Websocket from 'react-websocket'

const styles = {
  attract: {
    background: '#E0E0E0',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${background})`,
    width: '100vw'
  },
  heading: {
    fontSize: '70px',
    marginTop: '105px',
    fontFamily: 'MuseoSlab100',
    padding: '0px 60px 0px 60px',
    color: '#FFF'
  },
  subHeading: {
    fontSize: '18px',
    marginTop: '10px',
    fontFamily: 'SofiaProSemiBold',
    color: '#FFF'
  },
  swipe: {
    textTransform: 'uppercase',
    marginTop: '20%',
    fontFamily: 'SofiaProBlack',
    color: '#434448',
    position: 'absolute',
    bottom: '50px',
    width: '100%'
  },
  header: {
    backgroundImage: `url(${overlay})`,
    height: '600px',
    top: '0px',
    position: 'absolute',
    width: '100%'
  },
  header2: {
    backgroundImage: `url(${overlay})`,
    backgroundSize: 'cover',
    height: '292px',
    width: '100%'
  },
  overlay: {
    backgroundImage: `url(${overlay})`,
    height: '100%',
    width: '100%'
  },
  swipeIcon: {
    width: '25px',
    height: '20px',
    backgroundImage: `url(${swipeup})`,
    backgroundRepeat: 'no-repeat',
    hover: 'cursor',
    margin: 'auto'
  },
  logo: {
    width: '150px',
    height: '60px',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto'
  },
  heading2: {
    fontSize: '42px',
    paddingTop: '150px',
    margin: 'auto',
    marginBottom: '10px',
    fontFamily: 'MuseoSlab100',
    color: '#FFF'
  },
  overlay2: {
    backgroundImage: `url(${overlay})`,
    height: '100%',
    width: '100%'
  },
  subHeading2: {
    fontSize: '16px',
    marginTop: '10px',
    fontFamily: 'SofiaProSemiBold',
    color: '#FFF'
  }
}

class Attract extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
  }
  toggleDrawer (open) {
    this.setState({
      top: open
    })
    setTimeout(() => {
      this.props.nextPage(1)
    }, 700)
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <Websocket
          url="ws://localhost:9000/registration"
          onMessage={this.handleData.bind(this)}
          debug={true}
        />
        <div tabIndex={0} />
        {/* <div className={classes.attract}>
        <div className={classes.header2} /> */}
        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
          transitionDuration={{ enter: 700, exit: 700 }}
        >
          {this.props.vacant ? (
            <Fragment>
              <div className={classes.attract} tabIndex={0} role="button">
                <div className={classes.header}>
                  <div className={classes.heading}>
                    The LymeMIND
                    <br /> Story Booth
                  </div>
                  <StatusIndicator />
                  <div className={classes.subHeading}>
                    Capturing the Reality of Lyme Disease
                  </div>
                </div>
                <div
                  onClick={() => this.toggleDrawer(false)}
                  onKeyDown={() => this.toggleDrawer(false)}
                  className={classes.swipe}
                >
                  <div className={classes.swipeIcon} />
                  Swipe Up To Begin
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.attract} tabIndex={0} role="button">
                <div className={classes.overlay2}>
                  <div className={classes.heading2}>
                    The Story Booth is
                    <br />
                    Currently Occupied
                  </div>
                  <StatusIndicator />
                  <div className={classes.subHeading2}>
                    Thank You for Your Patience
                  </div>
                </div>
                <div className={classes.logo} />
              </div>
            </Fragment>
          )}
        </SwipeableDrawer>
      </div>
    )
  }
}
export default injectSheet(styles)(Attract)
