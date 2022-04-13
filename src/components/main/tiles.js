import React, { Component } from 'react';
import './main.css';
import biscuit from './assets/Biscuit.jpg';
import blackbird from './assets/Blackbird.jpg';
import cabin from './assets/Cabin.jpg';
import dirt from './assets/Dirt.jpg';
import hog from './assets/Hoggy.jpg';
import mugsy from './assets/Magoo.jpg';
import sparrow from './assets/Sparrow.jpg';
import time from './assets/Time.jpg';
import viandan from './assets/viandan.jpg';
import wildflowers from './assets/wildflowers.JPG';

class Tiles extends Component {
    state = {
      visibleButtons: '',
      modalVisible: false,
      selectedImage: '',
      descriptionVisible: false,
      selectedDescription: ''
    }

    handleButtons = (btnName) => () => {
      this.setState({visibleButtons: btnName});
    }

    handleSelectImage = (image, description) => () => {
      this.setState({
        selectedImage: image, 
        modalVisible: true, 
        selectedDescription: description
      });
    }

    resizeHandler() {
      const width = this.divElement.clientWidth;
      const height = this.divElement.clientHeight;
      this.setState({ width, height });
    }
    
    toggleDescription = () => this.state.descriptionVisible 
      ? this.setState({descriptionVisible: false}) : this.setState({descriptionVisible: true})

    handleNoTake = (e) => e.preventDefault()

    closeModal = () => this.setState({modalVisible: false, descriptionVisible: false})

    render() {
      const {visibleButtons, modalVisible, selectedImage, descriptionVisible, selectedDescription} = this.state;
      return (
        <div className="tiles-container">
          {modalVisible ? 
            <div className='modal-overlay' onClick={this.closeModal} />
            : null}
          {modalVisible ? 
            <div className='image-modal'>
              {descriptionVisible ? 
                <p 
                  onClick={this.toggleDescription}
                  className='modal-image modal-image-description'>
                  {selectedDescription}
                </p> :
                <img 
                  alt={selectedDescription}
                  src={selectedImage} 
                  className='modal-image'
                  onMouseDown={this.handleNoTake}
                  onContextMenu={this.handleNoTake}
                  onClick={this.toggleDescription} />}
            </div>
            : null}
          <div className='art-image-container'>
            <img 
              src={wildflowers} 
              alt='"Texas Dirt", acrylic on canvas.' 
              className='art-image'
              onMouseOver={this.handleButtons('dirt')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(wildflowers, '"Wildflowers", acrylic on canvas, 2022.')}
              style={visibleButtons === 'dirt' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={dirt} 
              alt='"Texas Dirt", acrylic on canvas.' 
              className='art-image'
              onMouseOver={this.handleButtons('dirt')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(dirt, '"Texas Dirt", acrylic on canvas, 2016.')}
              style={visibleButtons === 'dirt' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={biscuit} 
              alt='"Biscuit", acrylic on canvas.'
              className='art-image'
              onMouseOver={this.handleButtons('biscuit')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(biscuit, '"Biscuit", acrylic on canvas, 2018.')}
              style={visibleButtons === 'biscuit' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={cabin} 
              alt='"Cabin in the Woods", acrylic on canvas.'
              className='art-image'
              onMouseOver={this.handleButtons('cabin')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(cabin, '"Cabin in the Woods", acrylic on canvas, 2017.')}
              style={visibleButtons === 'cabin' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img src={blackbird} 
              alt='"Blackbird", acrylic on canvas.'
              className='art-image'
              onMouseOver={this.handleButtons('blackbird')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(blackbird, '"Blackbird", acrylic on canvas, 2014.')}
              style={visibleButtons === 'blackbird' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={viandan} 
              alt='"Viandan Castle", acrylic on canvas.'
              className='art-image'
              onMouseOver={this.handleButtons('viandan')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(viandan, '"Viandan Castle", acrylic on canvas, 2017.')}
              style={visibleButtons === 'viandan' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={time} 
              alt='"Time Flies", acrylic on canvas.'
              className='art-image'
              onMouseOver={this.handleButtons('time')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(time, '"Time Flies", acrylic on canvas, 2018.')}
              style={visibleButtons === 'time' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={hog} 
              alt='"Hedgehog", colored pencil on paper.'
              className='art-image'
              onMouseOver={this.handleButtons('hoggy')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(hog, '"Hedgehog", colored pencil on paper, 2018.')}
              style={visibleButtons === 'hoggy' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={sparrow} 
              alt='"Sparrow", acrylic on canvas.' 
              className='art-image'
              onMouseOver={this.handleButtons('sparrow')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(sparrow, '"Sparrow", acrylic on canvas, 2013.')}
              style={visibleButtons === 'sparrow' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
          <div className='art-image-container'>
            <img 
              src={mugsy} 
              alt='"Mr. Magoo", ebony pencil on paper.'
              className='art-image'
              onMouseOver={this.handleButtons('mugsy')}
              onMouseDown={this.handleNoTake}
              onContextMenu={this.handleNoTake}
              onClick={this.handleSelectImage(mugsy, '"Mr. Magoo", ebony pencil on paper, 2017.')}
              style={visibleButtons === 'mugsy' ? {opacity: 1} : {opacity: 0.9}} />
          </div>
        </div>
      );
    }
}


export default Tiles;