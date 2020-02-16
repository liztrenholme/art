import React, { Component } from 'react'
import './main.css'
import biscuit from './assets/Biscuit.jpg'
import blackbird from './assets/Blackbird.jpg'
import cabin from './assets/Cabin.jpg'
import dirt from './assets/Dirt.jpg'
import hog from './assets/Hoggy.jpg'
import mugsy from './assets/Magoo.jpg'
import sparrow from './assets/Sparrow.jpg'
import time from './assets/Time.jpg'
import viandan from './assets/viandan.jpg'

class Tiles extends Component {
    state = {
      visibleButtons: ''
    }

    handleButtons = (btnName) => () => {
      this.setState({visibleButtons: btnName})
    }
    render() {
      const {visibleButtons} = this.state
      return (
        <div className="tiles-container">
          <div className='art-image-container'>
            <img 
              src={dirt} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('dirt')} />
            {visibleButtons === 'dirt' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={biscuit} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('biscuit')} />
            {visibleButtons === 'biscuit' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={cabin} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('cabin')} />
            {visibleButtons === 'cabin' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={blackbird} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('blackbird')} />
            {visibleButtons === 'blackbird' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={mugsy} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('mugsy')} />
            {visibleButtons === 'mugsy' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={viandan} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('viandan')} />
            {visibleButtons === 'viandan' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={time} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('time')} />
            {visibleButtons === 'time' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={hog} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('hoggy')} />
            {visibleButtons === 'hoggy' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
          <div className='art-image-container'>
            <img src={sparrow} alt='Biscuit, acrylic on canvas' className='art-image'
              onMouseOver={this.handleButtons('sparrow')} />
            {visibleButtons === 'sparrow' ?
              <div className='image-buttons'>
                <button>View larger</button>
              </div> : null}
          </div>
        </div>
      )
    }
}


export default Tiles