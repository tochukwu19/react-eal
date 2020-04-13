import React from 'react'
import './App.css'
import Navbar from './components/nav/nav'
import Cards from './components/cards/cards'

function App () {
  return (
    <React.Fragment>
      <Navbar />
      <div className="inside">
        <h1>Faculties</h1>
        <ul>
          <li>Science</li>
          <li>Education</li>
          <li>Env Sci</li>
          <li>Law</li>
        </ul>
      </div>
      <Cards />
    </React.Fragment>
  )
}

export default App
