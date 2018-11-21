import React, { Component } from 'react';
import './bannerheader.css';
import Popup from 'reactjs-popup'
// import NameDisplay from './namedisplay'
 import Headers from './addnew/header';
 import MedicalCondition from './addnew/medicalcondition';

class BannerHeader extends Component {
  
  render() {
    return (
      <div className="bannerheader">
      <h1 className="bannerheader__h1">{this.props.bannerHeadName} </h1> 
      
      
      <Popup   
      contentStyle={{
       width:'255px',
        padding:'0px',
        margin: '0px 56px'
      }}
     overlayStyle={{
      position:'fixed', 
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    }} 
      
      arrowStyle={{
      left:'187px',
      background: '#f95151',

    }}
   
    trigger={ <i className="bannerheader__icon"><a className="bannerheader__anchor" >hi</a></i>} position="bottom right"  
    
    >
   
    <div className="content">
     <header  className="content__header">Select Medical Condition</header>
    <div className="content__pregnancy"> 
    <span className="content__pregnancy--marginleft"> Pregnancy</span> </div>
    <div  className="content__infirtility"> 
    <span className="content__infirtility--marginleft" >InFirtility</span></div>
    <Popup
    trigger={<a className="button"> <span className="button--marginright"> Add New Condition </span>  </a>}
    position="bottom left"
    closeOnDocumentClick
    modal  
    contentStyle={{
      width:'900px',
      height:'90%',
       padding:'0px',
       margin: '25px 205px',
       border:'none'
     }}
    >
  
 <Headers headName="Add New Medical Condition"></Headers>
 <MedicalCondition></MedicalCondition>

    
  </Popup>
    

    
    </div>
  </Popup>
     
      </div>
    );
  }
}

export default BannerHeader;