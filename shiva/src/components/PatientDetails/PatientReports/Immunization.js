import React,{Component } from 'react';
import ReportHeader from './ReportHeader';
import '../../../assets/styles/PatientReports.scss';
import PatientReportsContent from './ReportsContnet';

class Immunization extends Component{
    state = {
        Immunization:[   
            {Heading: 'Immunization'}
        ],
        PatientReportsContent:[
            {MedicalReportName: 'Immunization'},
            {MedicalReportName1: 'Normal Immunization'}
        ]
    }
    render(){
        return(
            <div className= 'Immunization'>
                    <ReportHeader Heading={this.state.Immunization[0].Heading}></ReportHeader>
                    <PatientReportsContent
                MedicalReportName= {this.state.PatientReportsContent[0].MedicalReportName}
                MedicalReportName1= {this.state.PatientReportsContent[1].MedicalReportName1} 
                >

                </PatientReportsContent>
            </div>
        )
    }
}
export default Immunization;