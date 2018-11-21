import React, { Component } from 'react';
 import './patientinfo.css';


class BannerPatientInfo extends Component {
  render() {
    return (
      <div className="bannerpatientinfo">
      <p className="bannerpatientinfo__sub">
      <i className="patientinfo"></i><span className="patientinfo__info">patient information Form -</span><span className="patientinfo__req">request</span>
      </p> 
      </div>

    );
  }
}

export default BannerPatientInfo;