import React, { Component } from 'react'
import './App.css'
import Attract from './containers/Attract'
import Experience from './containers/Experience'
import Info from './containers/Info'
import Intro from './containers/Intro'
import Confirmation from './containers/Confirmation'
import Terms from './containers/Terms'
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
      dob: ''
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.updateData = this.updateData.bind(this)
    this.handleSubmit = this.handleSumbit.bind(this)
  }

  nextPage (number) {
    this.setState({ page: number })
    console.log(this.state.page)
  }
  prevPage () {
    const page = this.state
    this.setState({ page: page - 1 })
  }
  updateData (name, value) {
    this.setState({ [name]: value })
    console.log(name + ':' + this.state[name])
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
    fetch('http://192.168.1.199:3030/user/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  }
  render () {
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
        return <Info updateData={this.updateData} nextPage={this.nextPage} />
      case 4:
        return (
          <Terms handleSubmit={this.handleSubmit} nextPage={this.nextPage} />
        )
      case 5:
        return <Confirmation nextPage={this.nextPage} />
    }
  }
}

export default App
