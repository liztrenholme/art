import React, { Component } from 'react';
import './main.css';
import Tiles from './tiles';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Liz Trenholme Art.</h1>
        <Tiles />
        <footer>&#9400; 2000-{new Date().getFullYear()} Liz Trenholme Art | All rights reserved.</footer>
      </div>
    );
  }
}


export default Main;