import React, { Component } from 'react'
import injectSheet from 'react-jss'
import StatusIndicator from '../components/StatusIndicator'

const styles = {
  confirmation: {
    background: '#E0E0E0',
    height: '100vh',
    textAlign: 'center'
  },
  heading: {
    fontSize: '42px',
    paddingTop: '20%',
    width: '320px',
    margin: 'auto',
    fontFamily: 'MuseoSlab100',
    color: '#FFF'
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '10px',
    fontFamily: 'SofiaProSemiBold',
    color: '#FFF'
  }
}

class Confirmation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.props.resetApp()
    }, 3000)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.confirmation} tabIndex={0}>
        <div className={classes.heading}>Thank You for Participating</div>
        <StatusIndicator />
        <div className={classes.subHeading}>
          The Story Booth Attendant Will Now Show You Inside
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Confirmation)
