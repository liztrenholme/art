import React, { Component } from 'react'
import './main.css'
import biscuit from './assets/Biscuit.jpg'
import blackbird from './assets/Blackbird.jpg'
import cabin from './assets/Cabin.jpg'
import dirt from './assets/Dirt.jpg'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <img src={blackbird} alt='blackbird, acrylic on canvas' />
      </div>
    )
  }
}


export default Main