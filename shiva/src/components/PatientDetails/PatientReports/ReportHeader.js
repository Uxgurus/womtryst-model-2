import React,{Component } from 'react';
import '../../../assets/styles/PatientReports.scss';

class ReportHeader extends Component{
    render(){
        return(
            <div className= 'ReportHeader'>
                <h1 className= 'ReportHeader__Heading'>{this.props.Heading}</h1>
            </div>
        )
    }
}
export default ReportHeader;