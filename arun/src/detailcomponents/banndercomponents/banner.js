import React, { Component } from 'react';
import './banner.css';
import NameDisplay from './namedisplay'
import BannerRight from './bannerright'

class Banner extends Component {
  render() {
    return (
      <div className="banner">
      <NameDisplay  name="Sanjana Rishab"  /> 
      <BannerRight></BannerRight>
    
      </div>
    );
  }
}

export default Banner;