import React, { Component } from 'react';
import './bannerhead.css';
import BannerHeader from './bannerheader';
import BannerBody from './bannerbody';
import BannerBottom from './bannerbottom';
// import main from '../../example/main';

class BannerHead extends Component {
  render() {
    return ( 
      <div className="bannerhead">
      <BannerHeader  bannerHeadName="Pragnancy" > </BannerHeader>
      <BannerBody></BannerBody>
      <BannerBottom></BannerBottom>
       
    </div>
    );
  }
}

export default BannerHead;