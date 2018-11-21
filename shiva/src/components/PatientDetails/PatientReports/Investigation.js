import React,{Component } from 'react';
import ReportHeader from '../PatientReports/ReportHeader';
import '../../../assets/styles/PatientReports.scss';
import PatientReportsContent from './ReportsContnet';

class Investigation extends Component{
    state = {
        Investigation:[
            {Heading: 'Investigation'}
        ],
        PatientReportsContent:[
            {MedicalReportName: 'Investigation'},
            {MedicalReportName1: 'Normal Investigation'}
        ]
    }
    render(){
        return(
            <div className= 'Investigation'>
                    <ReportHeader Heading={this.state.Investigation[0].Heading}></ReportHeader>
                    <PatientReportsContent
                MedicalReportName= {this.state.PatientReportsContent[0].MedicalReportName}
                MedicalReportName1= {this.state.PatientReportsContent[1].MedicalReportName1} >
                </PatientReportsContent>
            </div>
        )
    }
}
export default Investigation;