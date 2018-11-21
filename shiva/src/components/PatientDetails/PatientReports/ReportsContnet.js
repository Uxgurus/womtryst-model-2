import React,{Component} from 'react';
import '../../../assets/styles/PatientReports.scss';

export default class PatientReportsContnent extends Component{
    render(){
        return(
            <div className= 'Scans__Content'>
                    <div className= 'Scans__Reports'>
                        <div className= 'Scans__DateAndMonth'>
                            <span className= 'Scans__Date'>20</span><br />
                            <span className= 'Scans__Month'>Feb</span>
                        </div>
                        <div className= 'Scans__ReportName'>
                            <p className= 'Scans__DatingScan'>{this.props.MedicalReportName}</p>
                        </div>
                    </div>

                    <div className= 'Scans__Reports'>
                        <div className= 'Scans__DateAndMonth'>
                            <p className= 'Scans__Date'>20</p>
                            <p className= 'Scans__Month'>Jan</p>
                        </div>
                        <div className= 'Scans__ReportName'>
                            <p className= 'Scans__DatingScan'>{this.props.MedicalReportName1}</p>
                         <p className= 'Scans__MedicalReportName'>{this.props.MedicalReportType}</p>
                        </div>
                    </div>
                </div>
        )
    }
}