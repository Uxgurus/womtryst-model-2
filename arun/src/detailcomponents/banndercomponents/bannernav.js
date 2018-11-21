import React, { Component } from 'react';
 import './bannernav.css';


class BannerNav extends Component {
  render() {
    return (
      <div className="bannernav">
      <nav  className="bannernav_navelement">
        <ul className="bannernav__ul">
        <li className="bannernav__li">
        <a className="bannernav__anchor"  id="bannnernav--anchor1"> </a>
        </li>
        <li className="bannernav__li" >
        <a  className="bannernav__anchor"  id="bannnernav--anchor2"> </a>
        </li>
        <li className="bannernav__li">
        <a className="bannernav__anchor"  id="bannnernav--anchor3"> </a>
        </li>
        <li className="bannernav__li">
        <a className="bannernav__anchor"  id="bannnernav--anchor4"> </a>
        </li>
        <li className="bannernav__li">
        <a className="bannernav__anchor"  id="bannnernav--anchor5"> </a>
        </li>
        </ul>
        </nav>
    
      </div>
    );
  }
}

export default BannerNav;