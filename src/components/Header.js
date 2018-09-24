import React, { Component } from 'react'
import injectSheet from 'react-jss'
import back from '../images/back.svg'

const styles = {
  container: {
    background: '#137f78',
    width: '100%',
    height: '50px',
    textAlign: 'center',
    paddingTop: '15px'
  },
  heading: {
    fontSize: '16px',
    marginTop: '10px',
    textTransform: 'uppercase',
    fontFamily: 'SofiaProBlack',
    fontWeight: 'lighter',
    color: '#FFF'
  },
  back: {
    width: '20px',
    height: '20px',
    left: '30px',
    top: '20px',
    position: 'absolute',
    backgroundImage: `url(${back})`,
    backgroundRepeat: 'no-repeat',
    hover: 'cursor'
  }
}

class Header extends Component {
  toggleDrawer (open) {
    this.setState({
      top: open
    })
  }

  render () {
    const { classes, back } = this.props
    return (
      <div className={classes.container}>
        {back === true && (
          <div className={classes.back} onClick={() => this.props.nextPage()} />
        )}
        <h2 className={classes.heading}>THE LYMEMIND STORY BOOTH</h2>
      </div>
    )
  }
}
export default injectSheet(styles)(Header)
