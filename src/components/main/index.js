import React, { Component } from 'react'
import './main.css'
import Tiles from './tiles'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Liz Trenholme Art.</h1>
        <Tiles />
      </div>
    )
  }
}


export default Main