import React,{Component } from 'react';
import ReportHeader from '../PatientReports/ReportHeader';
import '../../../assets/styles/PatientReports.scss';
import PatientReportsContent from './ReportsContnet'

   
class HealthCondition extends Component{
    state = {
        ReportHeader: [
            {Heading: 'HealthCondition'}
        ],
        PatientReportsContent:[
            {MedicalReportName: 'Health Condition'},
            {MedicalReportName1: 'Normal HealthCondition'}
        ] 
    }  
    render(){
        return(
            <div className= 'HealthCondition'>
                <ReportHeader Heading={this.state.ReportHeader[0].Heading}></ReportHeader>
                <PatientReportsContent
                MedicalReportName= {this.state.PatientReportsContent[0].MedicalReportName}
                MedicalReportName1= {this.state.PatientReportsContent[1].MedicalReportName1}>
                </PatientReportsContent>
            </div>
        )
    }
}
export default HealthCondition;