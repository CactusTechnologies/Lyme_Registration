import React, { Component, Fragment } from 'react'
import injectSheet from 'react-jss'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import StatusIndicator from '../components/StatusIndicator'
import background from '../images/background.svg'
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
    color: '#434448'
  }
}

class Attract extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true,
      vacant: true
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
  handleData (data) {
    console.log(data)
    let result = JSON.parse(data)
    if (result.msg === '/busy') {
      this.setState({ vacant: false })
    } else {
      this.setState({ vacant: true })
    }
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <Websocket
          url="ws://192.168.1.199:9000/registration"
          onMessage={this.handleData.bind(this)}
          debug={true}
        />

        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
          transitionDuration={{ enter: 700, exit: 700 }}
        >
          {this.state.vacant ? (
            <Fragment>
              <div className={classes.attract} tabIndex={0} role="button">
                <div className={classes.heading}>
                  The LymeMIND
                  <br /> Story Booth
                </div>
                <StatusIndicator />
                <div className={classes.subHeading}>
                  Capturing the Reality of Lyme Disease
                </div>
                <div
                  onClick={() => this.toggleDrawer(false)}
                  onKeyDown={() => this.toggleDrawer(false)}
                  className={classes.swipe}
                >
                  Swipe To Begin
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.attract} tabIndex={0} role="button">
                <div className={classes.heading}>Booth In Use</div>
                <div className={classes.subHeading}>Please wait</div>
              </div>
            </Fragment>
          )}
        </SwipeableDrawer>
      </div>
    )
  }
}
export default injectSheet(styles)(Attract)
