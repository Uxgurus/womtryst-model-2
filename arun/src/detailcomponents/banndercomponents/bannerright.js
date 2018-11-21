import React, { Component } from 'react';
 import './bannerright.css';
import BannerHead from './bannerhead';
import BannerNav from './bannernav';

class BannerRight extends Component {
  render() {
    return (
      <div className="bannerright">
      <BannerHead></BannerHead>
      <BannerNav></BannerNav>

     </div> 
    );
  }
}

export default BannerRight;