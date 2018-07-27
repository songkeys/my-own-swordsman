import React, { Component } from 'react'
import { Router } from '@reach/router'
import Header from './components/Header/Header'
import DplayerContainer from './components/DplayerContainer/DplayerContainer'
import Pagination from './components/Pagination/Pagination'
import Info from './components/Info/Info'
import SourceSwitch from './components/SourceSwitch/SourceSwitch'
import axios from 'axios'
import './App.css'

const basepath = '/my-own-swordsman'

class App extends Component {
  state = {
    resources: {},
    className: '',
  }

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    const resources = await axios
      .get('https://songkeys.github.io/50wz/videos.json')
      .then(res => res.data)

    this.setState({ resources: resources.data })
  }

  render() {
    return (
      <div className="App font-reset">
        <Header />
        <Router primary={false} basepath={basepath}>
          <DplayerContainer path="/" resources={this.state.resources} />
          <DplayerContainer path="/:id" resources={this.state.resources} />
        </Router>
        <Info />
        <Router primary={false} basepath={basepath}>
          <Pagination path="/" />
          <Pagination path="/:id" />
        </Router>
        <Router primary={false} basepath={basepath}>
          <SourceSwitch path="/" />
          <SourceSwitch path="/:id" />
        </Router>
      </div>
    )
  }
}

export default App
