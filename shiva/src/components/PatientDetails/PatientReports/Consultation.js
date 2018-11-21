import React,{Component } from 'react';
// import ReportHeader from '../PatientReports/ReportHeader';
import '../../../assets/styles/PatientReports.scss';
// import PatientReportsContent from './ReportsContnet';
import EmptyContent from '../PatientReports/EmptyContent';
import ConsultationImage from '../../../assets/images/ConsultationIcon.png';

class Consultation extends Component{
    state = {
        Consultation:[
            {Heading: 'Consultation'}
        ],
        // PatientReportsContent:[
        //     {MedicalReportName: 'Regular Consultation'},
        //     {MedicalReportName1: 'Normal Consultation'}
        // ] 
        EmptyContent: [
            {EmptyPatientContentHeading: 'Patient Consultations at a Glance'},
            {EmptyContentImageSrc: ConsultationImage},
            {EmptyContentImagealt: 'Consultation Image'},
            {EmptyPatientDetails: 'Add the Consultation for this Patient'}
        ]
    }
    render(){
        return(
            <div className= 'Consultation'> 
                <EmptyContent
                 EmptyPatientContentHeading={this.state.EmptyContent[0].EmptyPatientContentHeading}
                 EmptyContentImageSrc= {this.state.EmptyContent[1].EmptyContentImageSrc}
                 EmptyContentImagealt= {this.state.EmptyContent[2].EmptyContentImagealt}
                 EmptyPatientDetails= {this.state.EmptyContent[3].EmptyPatientDetails}
                 >

                </EmptyContent>
                   
            </div>
        )
    }
}
export default Consultation;