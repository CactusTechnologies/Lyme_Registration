import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Button from '../components/Button'

const styles = {
  intro: {
    height: '100vh',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    marginTop: '5%'
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

class Intro extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <Header />
          <div className={classes.heading}>Raising Awareness</div>
          <p className={classes.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            faucibus efficitur tellus. Sed dui urna, convallis eget dolor sed,
            faucibus posuere felis. Ut dapibus ligula a lacus vehicula
            porttitor. In in nunc vel magna ornare blandit. In aliquet vehicula
            sagittis. Aliquam laoreet tellus eu risus laoreet ullamcorper.
            Vivamus porta est et massa vehicula sodales. Cras condimentum et
            neque feugiat fringilla. Integer a tempor purus, quis eleifend
            massa. Integer pulvinar vestibulum porttitor. Nunc at elit odio.
            Curabitur facilisis, libero nec suscipit dapibus, libero ipsum
            ullamcorper tortor, eu aliquam elit lectus eu purus. Suspendisse eu
            molestie turpis, id semper urna. Suspendisse potenti.
          </p>
          <Button onClick={() => this.props.nextPage(2)}>
            Share Your Story
          </Button>
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Intro)
