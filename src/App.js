import React, { Component } from 'react'
import './App.css'
import Attract from './containers/Attract'
import Experience from './containers/Experience'
import Info from './containers/Info'
import Intro from './containers/Intro'
import Confirmation from './containers/Confirmation'
import Terms from './containers/Terms'
import Photo from './containers/Photo'
import Websocket from 'react-websocket'
// import Fullscreen from 'react-full-screen'
// import moment from 'moment'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0,
      role: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      photo: '',
      isFull: false,
      vacant: true
    }
    this.nextPage = this.nextPage.bind(this)
    this.updateData = this.updateData.bind(this)
    this.handleSubmit = this.handleSumbit.bind(this)
    this.handleData = this.handleData.bind(this)
    this.resetApp = this.resetApp.bind(this)
  }
  nextPage (number) {
    this.setState({ page: number })
  }

  updateData (name, value) {
    this.setState({ [name]: value })
  }
  handleSumbit () {
    var userData = {
      role: this.state.role,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      dob: this.state.dob,
      photo: this.state.photo
    }
    console.log(userData)
    fetch('http://10.0.20.5:3030/user/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    alert('should be working')
  }
  resetApp () {
    this.setState({
      role: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      photo: ''
    })
    this.nextPage(0)
  }
  handleData (data) {
    console.log(data)
    let result = JSON.parse(data)
    if (result.msg === '/busy') {
      this.setState({ vacant: false })
    } else {
      this.setState({ vacant: true })
    }
  }
  content () {
    switch (this.state.page) {
      case 0:
        return <Attract vacant={this.state.vacant} nextPage={this.nextPage} />
      case 1:
        return <Intro nextPage={this.nextPage} />
      case 2:
        return (
          <Experience updateData={this.updateData} nextPage={this.nextPage} />
        )
      case 3:
        return (
          <Info
            updateData={this.updateData}
            nextPage={this.nextPage}
            {...this.state}
          />
        )
      case 4:
        return <Photo updateData={this.updateData} nextPage={this.nextPage} />
      case 5:
        const name = this.state.firstName + ' ' + this.state.lastName
        return (
          <Terms
            name={name}
            handleDisagree={this.resetApp}
            handleSubmit={this.handleSubmit}
            nextPage={this.nextPage}
          />
        )
      case 6:
        return <Confirmation resetApp={this.resetApp} />
      default:
        return <Attract vacant={this.state.vacant} nextPage={this.nextPage} />
    }
  }
  goFull () {
    this.setState({ isFull: true })
  }

  render () {
    return (
      <div className="App">
        <Websocket
          url="ws://10.0.20.5:9000/registration"
          onMessage={this.handleData.bind(this)}
          debug={true}
        />
        {this.content()}
      </div>
    )
  }
}

export default App
