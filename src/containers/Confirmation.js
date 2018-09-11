import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  confirmation: {
    background: '#E0E0E0',
    height: '100vh',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px'
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

class Confirmation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.props.nextPage(0)
    }, 3000)
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
      <div className={classes.confirmation} tabIndex={0}>
        <div className={classes.heading}>Thank You for Participating</div>
        <div className={classes.subHeading}>
          The Booth Attendant Will Now Show You Inside
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Confirmation)
