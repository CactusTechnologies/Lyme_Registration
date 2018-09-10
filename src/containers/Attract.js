import React, { Component } from 'react'
import injectSheet from 'react-jss'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Header from '../components/Header'

const styles = {
  attract: {
    background: '#E0E0E0',
    height: '100vh',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    marginTop: '20%'
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '10px'
  },
  swipe: {
    textTransform: 'uppercase',
    marginTop: '20%'
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
    this.props.nextPage(1)
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <div tabIndex={0}>
          <Header />
        </div>
        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
          transitionDuration={{ enter: 700, exit: 700 }}
        >
          <div className={classes.attract} tabIndex={0} role="button">
            <div className={classes.heading}>The LymeMIND Experience</div>
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
        </SwipeableDrawer>
      </div>
    )
  }
}
export default injectSheet(styles)(Attract)
