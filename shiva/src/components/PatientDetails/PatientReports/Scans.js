import React,{Component } from 'react';
import ReportHeader from '../PatientReports/ReportHeader';
import '../../../assets/styles/PatientReports.scss';
import PatientReportsContent from './ReportsContnet';

class Scans extends Component{
    state= {
        ReportHeader:[
            {Heading: 'Scans'}
        ],
        PatientReportsContent:[
            {MedicalReportName: 'Dating Scan'},
            {MedicalReportName1: 'NT Scan'},
            {MedicalReportName: '< Ultra Radio Sound >'}
        ] 
    }
    render(){
        return(
            <div className= 'Scans'> 
                <ReportHeader Heading={this.state.ReportHeader[0].Heading}></ReportHeader>
                <PatientReportsContent
                MedicalReportName= {this.state.PatientReportsContent[0].MedicalReportName}
                MedicalReportName1= {this.state.PatientReportsContent[1].MedicalReportName1}
                MedicalReportType= {this.state.PatientReportsContent[2].MedicalReportName}>
                </PatientReportsContent>
                 
            </div>
        )
    }
}
export default Scans;