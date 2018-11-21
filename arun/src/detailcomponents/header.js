import React, { Component } from 'react';
import './header.css';
 
 


class Header extends Component {
  render() {
    return (
      <div className="Head">
     
        <h3 className="head-child">
        <i className="head__prfile--left"><a  className="head__anchor--Arrow" href="https://www.google.com"> </a></i>
        <span className="head__findpatient">{this.props.headName}</span> 
        <i className="head__prfile--right"><a  className="head__anchor--profile" href="https://www.google.com">welcome tot he </a></i>
       </h3> 
       
      </div>
    );
  }
} 

export default Header;