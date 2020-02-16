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
      visibleButtons: '',
      modalVisible: false,
      selectedImage: ''
    }

    handleButtons = (btnName) => () => {
      this.setState({visibleButtons: btnName})
    }
    handleSelectImage = (image) => () => {
      this.setState({selectedImage: image, modalVisible: true})
    }
    handleNoTake = (e) => e.preventDefault()
    closeModal = () => this.setState({modalVisible: false})
    render() {
      const {visibleButtons, modalVisible, selectedImage} = this.state
      return (
        <div className="tiles-container">
          {modalVisible ? 
            <div className='modal-overlay' onClick={this.closeModal} />
            : null}
          {modalVisible ? 
            <div className='image-modal'>
              <img 
                src={selectedImage} 
                className='modal-image'
                onMouseDown={this.handleNoTake}
                onContextMenu={this.handleNoTake} />
            </div>
            : null}
          <div className='art-image-container'>
            <img 
              src={dirt} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('dirt')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(dirt)}
              style={visibleButtons === 'dirt' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'dirt' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(dirt)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={biscuit} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('biscuit')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(biscuit)}
              style={visibleButtons === 'biscuit' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'biscuit' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(biscuit)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={cabin} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('cabin')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(cabin)}
              style={visibleButtons === 'cabin' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'cabin' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(cabin)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img src={blackbird} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('blackbird')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(blackbird)}
              style={visibleButtons === 'blackbird' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'blackbird' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(blackbird)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={viandan} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('viandan')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(viandan)}
              style={visibleButtons === 'viandan' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'viandan' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(viandan)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={time} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('time')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(time)}
              style={visibleButtons === 'time' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'time' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(time)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={hog} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('hoggy')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(hog)}
              style={visibleButtons === 'hoggy' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'hoggy' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(hog)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={sparrow} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('sparrow')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(sparrow)}
              style={visibleButtons === 'sparrow' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'sparrow' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(sparrow)}>View larger</button>
              </div> : null} */}
          </div>
          <div className='art-image-container'>
            <img 
              src={mugsy} 
              alt='Biscuit, acrylic on canvas' 
              className='art-image'
              onMouseOver={this.handleButtons('mugsy')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(mugsy)}
              style={visibleButtons === 'mugsy' ? {opacity: 1} : {opacity: 0.9}} />
            {/* {visibleButtons === 'mugsy' ?
              <div className='image-buttons'>
                <button onClick={this.handleSelectImage(mugsy)}>View larger</button>
              </div> : null} */}
          </div>
        </div>
      )
    }
}


export default Tiles