import React, { Component } from 'react';
import './bannerbody.css';
import BannerPatientInfo from './patientinfo';




class BannerBody extends Component {
  render() {
    return (
      <div className="bannerbody">
      <div  className="bannerbody__firstrow">
      <h4 className="bannerbody__h4"><i className="bannerbody__icon1" > </i><span  className="bannerbody__tag" > 28+3</span> </h4>
      <h4 className="bannerbody__h4"><i className="bannerbody__icon2" > </i><span className="bannerbody__tag"> 20-feb-2014</span></h4>
      <h4 className="bannerbody__h4"><i className="bannerbody__icon3" >    </i><span className="bannerbody__tag"> twins</span></h4>
      </div>

      <div className="bannerbody__secondrow">
     <h4 className="bannerbody__h4">  <i className="bannerbody__icon4" > </i><span className="bannerbody__tag"> dec-25-2014 < br/> <span className="bannerbody__next"> next appointments</span></span></h4>
     <h4 className="bannerbody__h4"> <i className="bannerbody__icon5" > </i><span className="bannerbody__tag" id="g6">g6g6g6g6</span></h4> 
      <h4 className="bannerbody__h4"><i className="bannerbody__icon6" > </i>  <span className="bannerbody__tag"  id="more">more</span></h4> 
      </div>
      <BannerPatientInfo></BannerPatientInfo>
    
  
    
      </div>
    );
  }
}

export default BannerBody;