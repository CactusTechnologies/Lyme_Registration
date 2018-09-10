import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  roleButton: {
    width: '400px',
    borderRadius: '10px',
    textAlign: 'center',
    height: '200px',
    margin: '50px',
    padding: '20px'
  }
}

class RoleButton extends Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick (experience) {
    this.props.updateData('role', experience)
    console.log(experience)
    this.props.nextPage(3)
  }
  render () {
    const { classes, children, experience } = this.props
    return (
      <button
        onClick={() => this.onClick(experience)}
        className={classes.roleButton}
      >
        <div>
          <h1>{experience}</h1>
          <p>{children}</p>
        </div>
      </button>
    )
  }
}

export default injectSheet(styles)(RoleButton)
