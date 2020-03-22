import React, { Component } from 'react';
import './main.css';
import Tiles from './tiles';

class Main extends Component {
  state = {
    menuOpen: false
  }

  handleToggleMenu = () => this.state.menuOpen 
    ? this.setState({menuOpen: false}) 
    : this.setState({menuOpen: true})
  render() {
    const {menuOpen} = this.state;
    return (
      <div className="main">
        <h1 onClick={this.handleToggleMenu}>Liz Trenholme Art.</h1>
        {menuOpen ? 
          (<div className='menu'>
            <a href="https://liztrenholme.com">main site</a>
          </div>) : null}
        <Tiles />
        <footer>&#9400; 2000-{new Date().getFullYear()} Liz Trenholme Art | All rights reserved.</footer>
      </div>
    );
  }
}


export default Main;