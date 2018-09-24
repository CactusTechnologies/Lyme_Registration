import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    width: '170px',
    textAlign: 'center',
    background: '#dedede',
    height: '40px',
    borderRadius: '20px',
    margin: '10px',
    display: 'inline-block',
    position: 'absolute',
    bottom: '5%',
    color: '#FFF',
    fontFamily: 'SofiaProBlack'
  },
  valid: {
    background: '#86c792',
    color: '#FFF'
  },
  light: {
    color: '#86c792',
    background: 'none',
    border: '1px solid #86c792'
  },
  label: {
    position: 'relative',
    top: '25%',
    transform: 'translateY(-25%)'
  }
}

class Button extends Component {
  chooseAlign (align) {
    switch (align) {
      case 'left':
        return {
          right: '50%'
        }
      case 'right':
        return {
          left: '50%'
        }
      default:
        return {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }
    }
  }
  render () {
    const { classes, children } = this.props
    return (
      <div
        onClick={this.props.onClick}
        className={`${classes.button} ${classes[this.props.theme]}`}
        style={this.chooseAlign(this.props.align)}
      >
        <span className={classes.label}>{children}</span>
      </div>
    )
  }
}

export default injectSheet(styles)(Button)
