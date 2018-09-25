import React, { Component } from 'react'
import '../App.css'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Button from '../components/Button'
import isEmail from 'validator/lib/isEmail'
import StatusIndicator from '../components/StatusIndicator'

const styles = {
  info: {
    background: '#f5f5f5',
    minHeight: '100vh',
    textAlign: 'center',
    position: 'relative'
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
  row: {
    margin: 'auto',
    width: '700px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center'
  },
  left: {
    float: 'left',
    padding: '0px 5px 10px 0px'
  },
  right: {
    float: 'left',
    padding: '0px 0px 10px 5px'
  }
}

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valid: true,
      email: '',
      firstName: '',
      lastName: '',
      dob: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
    this.props.updateData(e.target.name, e.target.value)
  }
  onClick (e, email, first, last) {
    e.preventDefault()
  }
  validate () {
    if (isEmail(this.state.email) === true) {
      this.props.nextPage(4)
    } else {
      this.setState({ valid: false })
    }
  }
  render () {
    const { classes } = this.props
    const email = this.state.email
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const dob = this.state.dob
    const isEnabled =
      email.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      dob.length > 0

    console.log({
      isEnabled,
      email: email.length,
      firstName: firstName.length,
      lastName: lastName.length,
      dob: dob.length
    })
    return (
      <div className={classes.info}>
        <Header back={true} nextPage={() => this.props.nextPage(2)} />
        <div className={classes.heading}>
          Please enter your information below.
        </div>
        <StatusIndicator status={2} />
        <form>
          <div className={classes.row}>
            <div className={classes.left}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={this.props.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.right}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={this.props.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.left}>
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.props.email}
              />
              {this.state.valid === false && <h2>Invalid email</h2>}
            </div>
            <div className={classes.right}>
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                onChange={this.handleChange}
                value={this.props.dob}
              />
            </div>
          </div>
        </form>
        <Button
          theme={isEnabled ? 'valid' : 'invalid'}
          onClick={() => this.validate()}
        >
          Continue
        </Button>
      </div>
    )
  }
}
export default injectSheet(styles)(Info)
