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
        
    }
    render() {

      return (
        <div className="tiles-container">
          <div className='art-image-container'>
            <img src={dirt} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={biscuit} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={cabin} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={blackbird} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={mugsy} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={viandan} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={time} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={hog} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
          <div className='art-image-container'>
            <img src={sparrow} alt='Biscuit, acrylic on canvas' className='art-image' />
            <div className='image-buttons'>
              <button>View larger</button>
            </div>
          </div>
        </div>
      )
    }
}


export default Tiles