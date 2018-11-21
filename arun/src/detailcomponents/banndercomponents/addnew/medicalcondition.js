import React, { Component } from 'react';
 import './medicalcondition.css';
import Button from './button'
import Border from './border'


class MedicalCondition extends Component {
  render() {
   
    return (
      <div className="medicalcondition">
    <div className="medicalcondition-subdiv" >
 
    <Button   medicalCondition="Pregnancy" /> 
    <Border></Border>
    <Button medicalCondition="InFertility"/>
    <Border></Border>
    <Button  medicalCondition="Others"/> 
    <input className="medicalcondition__typehere" type="text" placeholder="Type Here" /> 

    
    </div>
      </div>
    );
  }
}

export default MedicalCondition ;
