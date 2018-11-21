import React, { Component } from 'react';  
import Header from '../HeaderComponents/Header';
import '../../assets/styles/reset.scss';
import '../../assets/styles/PatientDetails.scss'; 
import PatientDetailsProfile from './PatientProfile/PatientDetailsProfile'
import PatientDetailsProfileImage from '../../assets/images/PatientDetailsProfile.png';  
import PatientMedical from './PatientMedicalDetails/PatientMedical';
import PatientMedicalReport from '../PatientDetails/PatientMedicalReports/PatientMedicalReport';
import PatientDetailDelete from './PatientDetailsDelete/PatientDetailsDelete';
import EnableDeleteIcon from '../../assets/images/enableDeleteIcon.png';
import ActiveDeleteIcon from '../../assets/images/activeDeleteIcon.png'; 
import Scans from '../PatientDetails/PatientReports/Scans';
import HealthCondition from '../PatientDetails/PatientReports/HealthCondition';
import Consultation from '../PatientDetails/PatientReports/Consultation';
import Investigation from '../PatientDetails/PatientReports/Investigation';
import Immunization from '../PatientDetails/PatientReports/Immunization';
    import AddPatientDetails from './AddPatientDetails/AddPatientDetails';
import Popup from 'reactjs-popup'

class PatientDetails extends Component {
  state= {
    Header: [      
      {PatientDetails: 'Patient Details'},
      {ProfileHref: '#Profile'},
      {ProfileTitle: 'ProfileCancel'},
       {Profile: 'Profile'},
       {Hambergerhref: '#Hambergerhref'},
       {HambergerTitle: 'HambergerTitle'},
       {Hamberger: 'Hamberger'}  
    ],
    PatientDetailsProfile: [
      {ProfileImagesrc: PatientDetailsProfileImage},
      {ProfileImgAlt: 'Patient Profile'},
      {ProfileName: 'Sanjana Rishab'},
      {CallerImgHref: '#CallerImgHref'},
      {CallerImgTitle: 'Call to the Patient'},
      {CallerImg: 'CallerImg'}
    ],
    Heading: 'Pregnancy',
    PatientMedicalPregnancy:[
      {MedicalInformationHreef: '#MedicalInformation'},
      {MoreMedicalInformationTitle: 'About More'},
      {MoreMedicalInformation: 'More Details'}
    ],
    PatientDetailDelete:[
        {EnableDeleteSrc: EnableDeleteIcon},
        {EnableDeletAlt: 'Delete Image'},
        {ActiveDeleteSrc: ActiveDeleteIcon},
        {ActiveDeletAlt: 'Delete Image'}
    ], 
    AddshowPopup: false,
    DeletshowPopup: true
  }
  AddMedicalPopUp = () =>{
    this.setState({ 
        AddshowPopup: true,
        DeletshowPopup: false
    });
}   
HideAddMedicalDetails = () => {
        this.setState({ 
            AddshowPopup: false,
            DeletshowPopup: true
        });
} 
    
 
  render() {
    return (
      <div className="PatientDetails" onClick= {this.HidePopup}>
            <Header headerHeading= {this.state.Header[0].PatientDetails} >
                <a className= 'Header__HambergerLink' href = {this.state.Header[4].Hambergerhref} title = {this.state.Header[5].HambergerTitle} >{this.state.Header[6].Hamberger}</a>
                <a className= 'Header__Profile' href= {this.state.Header[1].ProfileHref} 
                title= {this.state.Header[2].ProfileTitle} >{this.state.Header[3].Profile}
                </a>
              </Header>
              <div className= 'PatientDetails__Content'>
                    <PatientDetailsProfile ProfileImageSrc= {this.state.PatientDetailsProfile[0].ProfileImagesrc} 
                        ProfileImgAlt= {this.state.PatientDetailsProfile[1].ProfileImgAlt}
                        ProfileName= {this.state.PatientDetailsProfile[2].ProfileName}
                        CallerImgHref= {this.state.PatientDetailsProfile[3].CallerImgHref}
                        CallerImgTitle= {this.state.PatientDetailsProfile[4].CallerImgTitle}
                        CallerImg= {this.state.PatientDetailsProfile[5].CallerImg} >
                    </PatientDetailsProfile> 
                    <PatientMedical Heading={this.state.Heading} MedicalRequest= '- Request'show= {this.state.show}>
                   
                    <Popup  trigger={ <a className= 'Pregnancy__MoreInformation' onClick= {this.ShowDeletePopUp}
                            href= {this.state.PatientMedicalPregnancy[0].MedicalInformationHreef} 
                            title= {this.state.PatientMedicalPregnancy[1].MoreMedicalInformationTitle}>
                            {this.state.PatientMedicalPregnancy[2].MoreMedicalInformation}
                        </a>}
                         contentStyle={{
                                        backgroundColor:'#ffffff',
                                        padding:'0px',
                                        margin: '3px -223px',
                                        border:'none'
                                        }}
                                        arrowStyle={{
                                                         display: 'none'
                                                        }}
                            position='bottom left'
                            left= '840px'
                        >
                         {this.state.DeletshowPopup ?
                        <PatientDetailDelete EnableDeleteSrc= {this.state.PatientDetailDelete[0].EnableDeleteSrc} 
                        EnableDeletAlt= {this.state.PatientDetailDelete[1].EnableDeletAlt}
                        ActiveDeleteSrc= {this.state.PatientDetailDelete[2].ActiveDeleteSrc}
                        ActiveDeletAlt= {this.state.PatientDetailDelete[3].ActiveDeletAlt}
                        AddMedicalPopUp1= {this.AddMedicalPopUp}></PatientDetailDelete>
                        : null
                     }
                        </Popup>
                        
                       
                        <div className= 'Pregnancy__MedicalInformatioNDiv'>
                                <ul className= 'Pregnancy__UnOrderList' >
                                    <li className= 'Pregnancy__ListItems'>
                                        <div className= 'Pregnancy__PatientPregnancyDiv'>
                                            <a className= 'Pregnancy__PatientPregnancyDays'
                                            href= '#Pregnancy Days Left' title= 'Prgnancy Days Left'>
                                            Pargnancy Days Left</a> 
                                            <label className= 'Pregnancy__PregnancyDaysCount'>
                                                28+<b>3</b>
                                            </label>
                                        </div>
                                    </li>
                                    <li className= 'Pregnancy__ListItems'>
                                        <div className= 'Pregnancy__PatientPregnancyDiv'>                            
                                            <a className= 'Pregnancy__PatientJoiningDate'
                                                href= '#PatientJoiningDate' title= 'Patient Joining Date' >Patient Joining Date
                                            </a>
                                                <label className= 'Pregnancy__PatientJoiningDateLabel'>06-Feb-18</label>
                                        </div>
                                    </li>
                                    <li className= 'Pregnancy__ListItems border--none '>
                                        <div className= 'Pregnancy__PatientPregnancyDiv'>                            
                                            <a className= 'Pregnancy__PatientTwins'
                                                href= '#Twins Are Not' title= 'TwinsTitle' >Twins
                                            </a>
                                                <label className= 'Pregnancy__PregnancyTwinsLabel'>Twins</label>
                                        </div>
                                    </li>
                                </ul>
                                <ul className= 'Pregnancy__UnOrderList1' >
                                    <li className= 'Pregnancy__ListItems'>
                                        <div className= 'Pregnancy__PatientPregnancyDiv'>
                                            <a className= 'Pregnancy__DateTimePicker'
                                            href= '#DateTimePiceker' title= 'Change the Appointment' >
                                            DateTimePicker</a> 
                                            <label className= 'Pregnancy__DateTimePickerTabel'>08-jan-19</label>
                                            <label className= 'Pregnancy__NextAppointmentLabel'>Next Appointment</label>
                                        </div>
                                    </li>
                                    <li className= 'Pregnancy__ListItems PatientPregnancy__Report'>
                                        <div className= 'Pregnancy__PatientPregnancyDiv'>                            
                                            <a className= 'Pregnancy__PatientMedicalReport'
                                                href= '#DateTimePiceker' title= 'Change the Appointment' >
                                                DateTimePicker
                                            </a>
                                                <label className= 'Pregnancy__PatientMedicalReportLabel'>
                                                G<sub>6</sub>&nbsp;&nbsp;P<sub>3</sub>&nbsp;&nbsp;
                                                L<sub>2</sub>&nbsp;&nbsp;A<sub>3</sub></label>
                                        </div>
                                    </li>
                                    <li className= 'Pregnancy__ListItems border--none '>
                                        <div className= 'Pregnancy__PatientPregnancyDiv'>                            
                                            <a className= 'Pregnancy__More'
                                                href= '#More' title= 'More' >More
                                            </a>
                                                <label></label>
                                        </div>
                                    </li>
                                </ul> 
                        </div>
                    </PatientMedical>
                    <PatientMedicalReport HealthConditionEnter= {this.HealthConditionEnter} />
                    {this.state.AddshowPopup ? 
                <AddPatientDetails HideAddMedicalDetails= {this.HideAddMedicalDetails}/>
                
              : null
                     }
              </div> 
              <HealthCondition /> 
              <Scans /> 
                <Consultation ></Consultation>
                <Investigation ></Investigation>
                <Immunization /> 
        </div>
    );
  }
}

export default PatientDetails; 