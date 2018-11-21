import React,{Component } from 'react';
import '../../../assets/styles/reset.scss';
import Header from '../../HeaderComponents/Header';
import '../../../assets/styles/PatientDetailsInfertility.scss';
import PatientDetailsProfile from '../PatientProfile/PatientDetailsProfile';
import PatientDetailsProfileImage from '../../../assets/images/PatientDetailsProfile.png';
import PatientMedicalInfertility from '../PatientMedicalDetails/PatientMedical';
import PatientMedicalReport from '../PatientMedicalReports/PatientMedicalReport';
import Scans from '../PatientReports/Scans';
import HealthCondition from '../PatientReports/HealthCondition';
import Consultation from '../PatientReports/Consultation';
import Investigation from '../PatientReports/Investigation';
import Immunization from '../PatientReports/Immunization';
 


class PatientDetailsInfertility extends Component{
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
        Heading: 'Infertility',
        MedicalRequest: '- Request',
        More: '2 More',
        greaterThan: '>'
      }     
    render(){
        return(
                <div className= 'PatientDetailsInfertility'>
                    <Header headerHeading= {this.state.Header[0].PatientDetails} >
                        <a className= 'Header__HambergerLink' href = {this.state.Header[4].Hambergerhref} title = {this.state.Header[5].HambergerTitle} >{this.state.Header[6].Hamberger}</a>
                        <a className= 'Header__Profile' href= {this.state.Header[1].ProfileHref} title= {this.state.Header[2].ProfileTitle} >{this.state.Header[3].Profile}
                        </a>
                    </Header>
                    <div className= 'PatientDetailsInfertility__Content'>
                    <PatientDetailsProfile ProfileImageSrc= {this.state.PatientDetailsProfile[0].ProfileImagesrc} 
                        ProfileImgAlt= {this.state.PatientDetailsProfile[1].ProfileImgAlt}
                        ProfileName= {this.state.PatientDetailsProfile[2].ProfileName}
                        CallerImgHref= {this.state.PatientDetailsProfile[3].CallerImgHref}
                        CallerImgTitle= {this.state.PatientDetailsProfile[4].CallerImgTitle}
                        CallerImg= {this.state.PatientDetailsProfile[5].CallerImg} >
                    </PatientDetailsProfile>
                    <PatientMedicalInfertility Heading={this.state.Heading} MedicalRequest= {this.state.MedicalRequest}>
                    <a className= 'PatientDetailsInfertility__MoreInformation'
                            href= '#Infertility' 
                            title= 'Patient Details'>
                            {this.state.More}<p className= 'PatientDetailsInfertility__greaterThan'>{this.state.greaterThan}</p>
                        </a>
                        <div className= 'PatientDetailsInfertility__MedicalInformatioNDiv'>
                                <ul className= 'PatientDetailsInfertility__UnOrderList' >
                                    <li className= 'PatientDetailsInfertility__ListItems'>
                                        <div className= 'PatientDetailsInfertility__PatientInfertilityDiv'>
                                            <a className= 'PatientDetailsInfertility__IVF'
                                            href= '#IVF' title= 'IVF' >
                                            IVF</a> 
                                            <label className= 'PatientDetailsInfertility__IVFLabel'>IVF</label><br />
                                            <label className= 'PatientDetailsInfertility__Treatment'>Treatment</label>
                                        </div>
                                        <div className= 'PatientDetailsInfertility__PatientInfertilityDiv0'>
                                            <a className= 'PatientDetailsInfertility__InfertilityType'
                                            href= '#Infertility' title= 'Infertility' >
                                            Infertility</a> 
                                            <label className= 'PatientDetailsInfertility__InfertilityLabel '>Primary</label>
                                           <br /> <label className= 'PatientDetailsInfertility__InfertilitypeLabel'>Infertility Type</label>
                                        </div>
                                    </li>
                                    <li className= 'PatientDetailsInfertility__ListItems margin--left'>
                                        <div className= 'PatientDetailsInfertility__PatientInfertilityDiv'>
                                            <a className= 'PatientDetailsInfertility__DOB'
                                            href= '#DOB' title= 'Patient Date Of Birth' >
                                            DOB Icon</a> 
                                            <label className= 'PatientDetailsInfertility__DOBLabel'>07-Nov-18</label>
                                           <br /><label className= 'PatientDetailsInfertility__lblDOB'>DOB</label>
                                        </div>
                                        <div className= 'PatientDetailsInfertility__PatientInfertilityDiv0'>
                                            <a className= 'PatientDetailsInfertility__MarriedLife'
                                            href= '#MarriedLifeYears' title= 'Married Life Years' >
                                            Married Life Years</a> 
                                            <label className= 'PatientDetailsInfertility__MarriedLifeLabel'>6.5 yrs</label>
                                          <br />  <label className= 'PatientDetailsInfertility__lblMarriedLife'>Married Life</label>
                                        </div>
                                    </li>
                                    <li className= 'PatientDetailsInfertility__ListItems border--none margin--top'>
                                    <div className= 'PatientDetailsInfertility__PatientInfertilityDiv float--left'>
                                            <a className= 'PatientDetailsInfertility__LifeCycle'
                                            href= '#LifeCycle' title= 'Life Cycle' >
                                            Life Cycle</a> 

                                            <label className= 'PatientDetailsInfertility__BleedingLabel'>03-05
                                             <span className= 'PatientDetailsInfertility__ItalicText'>d</span></label>
                                            <label className= 'PatientDetailsInfertility__Bleeding'>(Bleeding)</label>
                                            <br />
                                            <div className= 'PatientDetailsInfertility__LabelBorder'> </div>
                                            <label className= 'PatientDetailsInfertility__CycleLengthLabel'>12-18
                                             <span className= 'PatientDetailsInfertility__ItalicText'>d</span></label>
                                            <label className= 'PatientDetailsInfertility__CycleLengt'>(Cycle Length)</label>           
                                    </div>
                                    </li>
                                </ul>
                            </div>   
                    </PatientMedicalInfertility>
                    <PatientMedicalReport />
                   </div>
                    <Scans></Scans>
                    <HealthCondition></HealthCondition>
                    <Consultation ></Consultation>
                    <Investigation ></Investigation>
                    <Immunization />   
                </div>
        )
    }
}
export default PatientDetailsInfertility;