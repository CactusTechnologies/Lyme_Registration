import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Button from '../components/Button'
import StatusIndicator from '../components/StatusIndicator'

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
    const { classes, name } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <Header back={true} nextPage={() => this.props.nextPage(4)} />
          <div className={classes.heading}>
            Your recorded story will be shared publicy...
          </div>
          <StatusIndicator status={4} />
          <p className={classes.body}>
            I, <i>{name}</i>, hereby grant permission to{' '}
            <i>
              The Institute for Next Generation Healthcare at the Icahn School
              of Medicine Mount Sinai located at 770 Lexington Ave, NY, NY,
              10069
            </i>
            , the rights of my image, in video or still, and of the likeness and
            sound of my voice as recorded on audio or videotape without payment
            or consideration. I understand that my image may be edited, copied,
            exhibited, published or distributed and waive the right to inspect
            or approve the finished product wherein my likeness appears.
            <br />
            <br />
            Additionally, I waive any right to royalties or other compensation
            arising or related to the use of my image or recording. I also
            understand that this material may be used in diverse educational
            settings with an unrestricted geographic area.
            <br />
            <br />
            Photographs, audio, or video recordings may be used for the
            following uses: media, news (press), online / internet videos,
            presentations, or educational material/s.
          </p>
          <p className={classes.body}>
            By signing this release, I understand this permission signifies that
            photographic or video recordings of me may be electronically
            displayed via the internet or in the public educational setting. I
            will be consulted about the use of photographs or video recording
            for any purpose other than those listed above.
            <br />
            <br />
            There is no time limit on the validity of this release, nor is there
            any geographic limitation on where these materials may be
            distributed.
            <br />
            <br />
            This release applies to photographic, audio, or video recordings
            collected as part of the sessions listed on this document only.
            <br />
            <br />
            By signing this release, I acknowledge that I have completely read
            and fully understand the above release and agree to be bound
            thereby. I hereby release any and all claims against any person or
            organization utilizing this material for educational purposes.
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
