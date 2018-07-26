import React, { Component } from 'react'
import { Router } from '@reach/router'
import DplayerContainer from './components/DplayerContainer/DplayerContainer'
import Pagination from './components/Pagination/Pagination'
import Info from './components/Info/Info'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router primary={false}>
          <DplayerContainer path="/" />
          <DplayerContainer path="/:id" />
        </Router>
        <Info />
        <Router primary={false}>
          <Pagination path="/" />
          <Pagination path="/:id" />
        </Router>
      </div>
    )
  }
}

export default App
