import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  roleButton: {
    width: '350px',
    textAlign: 'left',
    height: '120px',
    margin: '30px 15px 0px 15px',
    padding: '35px',
    display: 'inline-block',
    background: '#FFF',
    position: 'relative'
  },
  heading: {
    fontFamily: 'MuseoSlab700',
    fontSize: ' 24px',
    fontWeight: 'lighter',
    margin: '0px'
  },
  body: {
    fontFamily: 'SofiaProLight',
    color: '#77797c',
    lineHeight: '25px',
    margin: '5px 35px 0px 0px'
  },
  border: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '3px'
  }
}

class RoleButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: null
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick (experience, buttonId) {
    this.props.updateData('role', experience.toLowerCase())
    this.props.checkButton(buttonId)
    // this.props.nextPage(3)
  }

  render () {
    const { classes, children, experience, buttonId } = this.props
    return (
      <div
        onClick={() => this.onClick(experience, buttonId)}
        className={classes.roleButton}
      >
        <div
          className={classes.border}
          style={{ background: this.props.setBorder(buttonId) }}
        />
        <div>
          <h1 className={classes.heading}>{experience}</h1>
          <p className={classes.body}>{children}</p>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(RoleButton)
