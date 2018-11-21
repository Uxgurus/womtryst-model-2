
import React, { Component } from 'react';
import './button.css';



class Button extends Component {
  render() {
   
    return (
     
    <div className="medicalcondition-button" >
    <button className="medicalcondition__component"  >{this.props.medicalCondition}</button>
  

    
   
      </div>
    );
  }
}

export default Button ;



