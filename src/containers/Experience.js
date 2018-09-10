import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import RoleButton from '../components/RoleButton'

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

class Experience extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true,
      page: 1
    }
  }

  render () {
    const { classes, nextPage } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <Header />
          <div className={classes.heading}>
            Which role best fits your experience?
          </div>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Patient'}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </RoleButton>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Caregiver'}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </RoleButton>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Clinician'}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </RoleButton>
          <RoleButton
            updateData={this.props.updateData}
            nextPage={nextPage}
            experience={'Researcher'}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </RoleButton>
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Experience)
