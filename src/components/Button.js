import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    width: '150px',
    borderRadius: '5px',
    textAlign: 'center',
    height: '40px',
    margin: '10px'
  }
}

class Button extends Component {
  render () {
    const { classes, children } = this.props
    return (
      <button onClick={this.props.onClick} className={classes.button}>
        <span className={classes.label}>{children}</span>
      </button>
    )
  }
}

export default injectSheet(styles)(Button)
