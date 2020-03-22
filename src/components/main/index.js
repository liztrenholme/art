import React, { Component } from 'react';
import './main.css';
import Tiles from './tiles';
import Contact from '../contact';

class Main extends Component {
  state = {
    menuOpen: false,
    contactModalOpen: false
  }

handleToggleMenu = () => this.state.menuOpen 
  ? this.setState({menuOpen: false}) 
  : this.setState({menuOpen: true})

handleToggleContact = () => this.state.contactModalOpen 
  ? this.setState({contactModalOpen: false}) 
  : this.setState({contactModalOpen: true})

render() {
  const {menuOpen, contactModalOpen} = this.state;
  return (
    <div className="main">
      <h1 onClick={this.handleToggleMenu}>Liz Trenholme Art.</h1>
      {menuOpen ? 
        (<div className='menu'>
          <p 
            className='menuCloser' 
            onClick={this.handleToggleMenu}>^</p>
          <a 
            className='menuItem' 
            href="https://liztrenholme.com">main site</a>
          <p 
            className='menuItem'
            onClick={this.handleToggleContact}>contact</p>
        </div>) : null}
      {contactModalOpen ?
        <div 
          className='modal-overlay' 
          onClick={this.handleToggleContact} /> : null}
      {contactModalOpen ?
        (<div className='modal-image'>
          <Contact />
        </div>) : null}
      <Tiles />
      <footer>&#9400; 2000-{new Date().getFullYear()} Liz Trenholme Art | All rights reserved.</footer>
    </div>
  );
}
}


export default Main;