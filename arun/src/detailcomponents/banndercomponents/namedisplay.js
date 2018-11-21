import React, { Component } from 'react';
import './namedisplay.css';
import ProfilePic from '../../images/pragnant1.png';


class NameDisplay extends Component {
  render() {
    return (
     
      <div className="banner__sub">
      <img  src={ProfilePic} alt="banner imag not found" />
      <div className="banner__bottom">
      <span className="banner__nameright">{this.props.name} <i className="banner__subnameright"><i className="banner__nameright--round" ></i></i></span>
      <span className="banner__dialup "> <i className="banner__dialup--image"></i></span>
      </div>
      </div>
      
    );
  }
}

export default NameDisplay;