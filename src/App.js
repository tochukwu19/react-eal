import React, { Component } from 'react'
import './App.css'
import Navbar from './components/nav/nav'
import Cards1 from './components/cards/cards1'
import Cards2 from './components/cards/cards2'
import Cards3 from './components/cards/cards3'
import Cards4 from './components/cards/cards4'


class App extends Component {

  state = {
    active: "sci"
  }

  
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <div className="inside">
          <h1>Faculties</h1>
          <ul>
            <li>
              <a href="#" onClick={() => this.setState({ active: "sci" })}>
                Science
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.setState({ active: "edu" })}>
                Education
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.setState({ active: "env" })}>
                Env Sci
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.setState({ active: "law" })}>
                Law
              </a>
            </li>
          </ul>
        </div>
        {this.state.active === "sci" ? <Cards1 /> : null}
        {this.state.active === "edu" ? <Cards2 /> : null}
        {this.state.active === "env" ? <Cards3 /> : null}
        {this.state.active === "law" ? <Cards4 /> : null}
      </React.Fragment>
    );
  }
}

export default App
