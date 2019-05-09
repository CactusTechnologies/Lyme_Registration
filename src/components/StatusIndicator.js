import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  indicator: {
    width: '5px',
    height: '5px',
    display: 'inline-block',
    margin: '3.5px',
    borderRadius: '5px',
    background: '#c1c1c2'
  }
}

class Button extends Component {
  loadIndicator () {
    const { classes } = this.props
    switch (this.props.status) {
      case 1:
        return (
          <div>
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
            <div className={classes.indicator} />
            <div className={classes.indicator} />
            <div className={classes.indicator} />
          </div>
        )
      case 2:
        return (
          <div>
            <div className={classes.indicator} />
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
            <div className={classes.indicator} />
            <div className={classes.indicator} />
          </div>
        )
      case 3:
        return (
          <div>
            <div className={classes.indicator} />
            <div className={classes.indicator} />
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
            <div className={classes.indicator} />
          </div>
        )
      case 4:
        return (
          <div>
            <div className={classes.indicator} />
            <div className={classes.indicator} />
            <div className={classes.indicator} />
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
          </div>
        )
      default:
        return (
          <div>
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
            <div
              style={{ background: '#a1dd4b' }}
              className={classes.indicator}
            />
          </div>
        )
    }
  }
  render () {
    return <div>{this.loadIndicator()}</div>
  }
}

export default injectSheet(styles)(Button)
