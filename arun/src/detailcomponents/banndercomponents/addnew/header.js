import React, { Component } from 'react';
import './header.css';
// import Arrow from '../images/backarrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'







class Header extends Component {
  render() {
    return (
      <div className="Head1">
     
      <h3 className="head-child1">
         <span className="head__findpatient">{this.props.headName}</span> 
       </h3> 
   
      </div>
    );
  }
} 

export default Header;