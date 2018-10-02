import React, { Component } from 'react'
import injectSheet from 'react-jss'
import StatusIndicator from '../components/StatusIndicator'
import background from '../images/background.svg'
import overlay from '../images/overlay.png'
import logo from '../images/logo.svg'
const styles = {
  confirmation: {
    background: '#E0E0E0',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${background})`,
    width: '100vw'
  },
  heading: {
    fontSize: '42px',
    paddingTop: '150px',
    width: '320px',
    margin: 'auto',
    marginBottom: '10px',
    fontFamily: 'MuseoSlab100',
    color: '#FFF'
  },
  overlay: {
    backgroundImage: `url(${overlay})`,
    height: '100%',
    width: '100%'
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '10px',
    fontFamily: 'SofiaProSemiBold',
    color: '#FFF'
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
    console.log(this.props)
    const { classes } = this.props
    return (
      <div className={classes.confirmation} tabIndex={0}>
        <div className={classes.overlay}>
          <div className={classes.heading}>
            {`Thank You for Participating ${this.props.firstName}`}
          </div>
          <StatusIndicator />
          <div className={classes.subHeading}>
            The Story Booth Attendant Will Now Show You Inside
          </div>
        </div>
        <div className={classes.logo} />
      </div>
    )
  }
}
export default injectSheet(styles)(Confirmation)
