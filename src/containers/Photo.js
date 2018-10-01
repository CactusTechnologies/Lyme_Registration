import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../components/Header'
import Button from '../components/Button'
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
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
    width: '300px',
    margin: 'auto',
    padding: '30px'
  },
  camera: {
    margin: 'auto',
    width: '300px',
    height: '300px',
    background: '#000',
    marginTop: '30px',
    marginBottom: '20px'
  },
  video: {
    width: '300px'
  }
}

class Photo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: true
    }
  }
  onTakePhoto (dataUri) {
    this.setState({ imageUrl: dataUri, displayPhoto: true })
    this.props.updateData('photo', dataUri)
    // console.log(dataUri)
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.intro}>
          <Header back={true} nextPage={() => this.props.nextPage(3)} />
          <div className={classes.heading}>Photo</div>
          <StatusIndicator status={3} />
          <div className={classes.camera}>
            {this.state.displayPhoto ? (
              <img className={classes.photo} src={this.state.imageUrl} />
            ) : (
              <Camera
                onTakePhoto={dataUri => {
                  this.onTakePhoto(dataUri)
                }}
                imageCompression={0.5}
                imageType={IMAGE_TYPES.JPG}
                idealResolution={{ width: 300, height: 300 }}
                isMaxResolution={false}
              />
            )}
          </div>

          {this.state.displayPhoto === true && (
            <div>
              <Button
                theme={'light'}
                align={'left'}
                onClick={() => this.setState({ displayPhoto: false })}
              >
                Retake
              </Button>
              <Button
                align={'right'}
                theme={'valid'}
                onClick={() => this.props.nextPage(5)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(Photo)
