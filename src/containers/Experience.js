import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import RoleButton from '../components/RoleButton'
import Button from '../components/Button'
import StatusIndicator from '../components/StatusIndicator'

const styles = {
  intro: {
    height: '100vh',
    textAlign: 'center',
    background: '#f5f5f5'
  },
  heading: {
    fontSize: '24px',
    marginTop: '5%',
    fontFamily: 'SofiaProSemiBold'
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '10px'
  },
  swipe: {
    textTransform: 'uppercase',
    marginTop: '30%'
  },
  body: {
    width: '300px',
    margin: 'auto',
    padding: '30px'
  }
}

class Experience extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: null
    }
    this.setBorder = this.setBorder.bind(this)
    this.checkButton = this.checkButton.bind(this)
  }
  checkButton (buttonId) {
    if (this.state.active === buttonId) {
      this.setState({ active: null })
    } else {
      this.setState({ active: buttonId })
    }
    console.log(this)
  }
  setBorder (buttonId) {
    if (this.state.active === buttonId) {
      return '#86c792'
    } else {
      return ''
    }
  }
  render () {
    const { classes, nextPage } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <Header back={true} nextPage={() => nextPage(1)} />
          <div className={classes.heading}>
            Which role best fits your experience?
          </div>
          <StatusIndicator status={1} />
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Patient'}
            buttonId={1}
            setBorder={this.setBorder}
            checkButton={this.checkButton}
          >
            I am currently battling with Lyme disease, or have suffered from it
            in the past.
          </RoleButton>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Caregiver'}
            buttonId={2}
            setBorder={this.setBorder}
            checkButton={this.checkButton}
          >
            I am currently battling with Lyme disease, or have suffered from it
            in the past.
          </RoleButton>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Clinician'}
            buttonId={3}
            setBorder={this.setBorder}
            checkButton={this.checkButton}
          >
            I am currently battling with Lyme disease, or have suffered from it
            in the past.
          </RoleButton>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Researcher'}
            buttonId={4}
            setBorder={this.setBorder}
            checkButton={this.checkButton}
          >
            I am currently battling with Lyme disease, or have suffered from it
            in the past.
          </RoleButton>
          <Button
            theme={this.state.active ? 'valid' : 'invalid'}
            onClick={this.state.active ? () => this.props.nextPage(3) : null}
          >
            Share Your Story
          </Button>
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Experience)
