import React,{Component } from 'react';
import '../../../assets/styles/PatientDiabetes.scss';
import Header from '../../HeaderComponents/Header';
import '../../../assets/styles/reset.scss';
import PatientDetailsProfile from '../PatientProfile/PatientDetailsProfile';
import PatientDetailsProfileImage from '../../../assets/images/profileImage.png';
import PatientMedicalInfertility from '../PatientMedicalDetails/PatientMedical';
import PatientMedicalReport from '../PatientMedicalReports/PatientMedicalReport';
import Scans from '../PatientReports/Scans';
import HealthCondition from '../PatientReports/HealthCondition';
import Consultation from '../PatientReports/Consultation';
import Investigation from '../PatientReports/Investigation';
import Immunization from '../PatientReports/Immunization';

class PatientDiabetes extends Component{
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
            {ProfileImageSrc: PatientDetailsProfileImage},
            {ProfileImgAlt: 'Patient Profile'},
            {ProfileName: 'Sanjana Rishab'},
            {CallerImgHref: '#CallerImgHref'},
            {CallerImgTitle: 'Call to the Patient'},
            {CallerImg: 'CallerImg'}
          ],
          Heading: 'Diabetes',
          MedicalRequest: '- Assigned',
          More: '1 More',
          greaterThan: '<'
      } 
    render(){
        return(
            <div className= 'Diabetes'> 
                    <Header headerHeading= {this.state.Header[0].PatientDetails} >
                        <a className= 'Header__HambergerLink' href = {this.state.Header[4].Hambergerhref} title = {this.state.Header[5].HambergerTitle} >{this.state.Header[6].Hamberger}</a>
                        <a className= 'Header__Profile' href= {this.state.Header[1].ProfileHref} title= {this.state.Header[2].ProfileTitle} >{this.state.Header[3].Profile}
                        </a>
                    </Header>
                    <div className= 'PatientDetailsInfertility__Content'>
                        <PatientDetailsProfile   
                            ProfileImageSrc= {this.state.PatientDetailsProfile[0].ProfileImageSrc}
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
                             <p className= 'PatientDetailsInfertility__EmptyDate'>Lorem lpsum is simple dummy text of the printing and <br />
                            typesetting  industry.Lorem lpsum has been the industry.....</p>
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
export default PatientDiabetes;