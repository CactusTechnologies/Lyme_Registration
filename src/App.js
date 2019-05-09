import React, { Component } from 'react'
import './App.css'
import Attract from './containers/Attract'
import Experience from './containers/Experience'
import Info from './containers/Info'
import Intro from './containers/Intro'
import Confirmation from './containers/Confirmation'
import Terms from './containers/Terms'
import Photo from './containers/Photo'
// import Fullscreen from 'react-full-screen'
// import moment from 'moment'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 2,
      role: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      photo: '',
      isFull: false
    }
    this.nextPage = this.nextPage.bind(this)
    this.updateData = this.updateData.bind(this)
    this.handleSubmit = this.handleSumbit.bind(this)
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
      dob: this.state.dob
    }
    console.log(userData)
    fetch('http://localhost:3030/user/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
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

  content () {
    switch (this.state.page) {
      case 0:
        return <Attract nextPage={this.nextPage} />
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
        return (
          <Terms
            handleDisagree={this.resetApp}
            handleSubmit={this.handleSubmit}
            nextPage={this.nextPage}
          />
        )
      case 6:
        return <Confirmation resetApp={this.resetApp} />
      default:
        return <Attract nextPage={this.nextPage} />
    }
  }
  goFull () {
    this.setState({ isFull: true })
  }

  render () {
    return (
      <div className="App">
        {/* this.state.isFull ? (
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            {' '}
            <div className="full-screenable-node"> */ this.content() /* </div>
          </Fullscreen>
        ) : (
          <button onClick={() => this.goFull()}>Go Fullscreen</button>
        ) */}
      </div>
    )
  }
}

export default App
