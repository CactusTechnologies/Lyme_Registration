import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Button from '../components/Button'

const styles = {
  intro: {
    height: '100vh',
    textAlign: 'center',
    background: '#f5f5f5'
  },
  heading: {
    fontSize: '24px',
    marginTop: '5%',
    marginBottom: '20px',
    fontFamily: 'SofiaProSemiBold'
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
    width: '350px',
    margin: 'auto',
    padding: '30px',
    textAlign: 'left',
    display: 'inline-block',
    lineHeight: '1.4',
    color: '#434448',
    verticalAlign: 'top'
  }
}

class Terms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
    this.handleAgree = this.handleAgree.bind(this)
  }
  handleAgree () {
    this.props.nextPage(6)
    this.props.handleSubmit()
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <Header back={true} nextPage={() => this.props.nextPage(4)} />
          <div className={classes.heading}>
            Your recorded story will be shared publicy...
          </div>
          <p className={classes.body}>
            Lorem ipsum dolor sit amet, consectetuer adi piscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            mcorper suscipit lobortis odo consequat. Duis autem vel eum iriure
            dolor in hendrerit in vulputate velit esse molestie , vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit pra sent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            cons ectet iscing elit, sed diam nonummy nibh euismod
          </p>{' '}
          <p className={classes.body}>
            Lorem ipsum dolor sit amet, consectetuer adi piscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            mcorper suscipit lobortis odo consequat. Duis autem vel eum iriure
            dolor in hendrerit in vulputate velit esse molestie , vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
          </p>
          <Button
            align={'left'}
            theme={'light'}
            onClick={() => this.props.handleDisagree()}
          >
            Disagree
          </Button>
          <Button
            align={'right'}
            theme={'valid'}
            onClick={() => this.handleAgree()}
          >
            I Agree
          </Button>
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Terms)
