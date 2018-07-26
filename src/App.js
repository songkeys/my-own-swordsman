import React, { Component } from 'react'
import { Router } from '@reach/router'
import DplayerContainer from './components/DplayerContainer/DplayerContainer'
import Pagination from './components/Pagination/Pagination'
import Info from './components/Info/Info'
import './App.css'

const basepath = '/my-own-swordsman'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router primary={false} basepath={basepath}>
          <DplayerContainer path="/" />
          <DplayerContainer path="/:id" />
        </Router>
        <Info />
        <Router primary={false} basepath={basepath}>
          <Pagination path="/" />
          <Pagination path="/:id" />
        </Router>
      </div>
    )
  }
}

export default App
