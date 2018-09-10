import React, { Component } from 'react'
import '../App.css'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Button from '../components/Button'

const styles = {
  info: {
    background: '#FFF',
    height: '100vh',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    marginTop: '5%',
    marginBottom: '50px'
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '10px'
  },
  row: {
    margin: 'auto',
    width: '700px',
    textAlign: 'left'
  },
  left: {
    float: 'left',
    marginRight: '50px'
  },
  right: {
    float: 'left'
  }
}

class Info extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleChange (e) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [e.target.name]: e.target.value })
    this.props.updateData(e.target.name, e.target.value)
  }
  onClick (e, email, first, last) {
    e.preventDefault()
    console.log(email, first, last)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.info}>
        <Header />
        <div className={classes.heading}>
          Please enter your information below.
        </div>
        <form>
          <div className={classes.row}>
            <div className={classes.left}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.right}>
              <label>Last Name</label>
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.left}>
              <label>Email</label>
              <input type="text" name="email" onChange={this.handleChange} />
            </div>
            <div className={classes.right}>
              <label>Date of Birth</label>
              <input type="date" name="dob" onChange={this.handleChange} />
            </div>
          </div>
        </form>
        <Button onClick={() => this.props.nextPage(4)}>Next</Button>
      </div>
    )
  }
}
export default injectSheet(styles)(Info)
