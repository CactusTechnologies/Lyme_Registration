import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    background: '#E0E0E0',
    width: '100%',
    height: '60px',
    textAlign: 'center'
  }
}

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0,
      top: true
    }
  }
  toggleDrawer (open) {
    this.setState({
      top: open
    })
    console.log('cheese')
  }

  render () {
    const { classes } = this.props
    return <div className={classes.container}>The LymeMIND Experience</div>
  }
}
export default injectSheet(styles)(Header)
