import React,{Component } from 'react'; 
import '../../../assets/styles/PatientReports.scss';

export default class EmptyContent extends Component{
    render(){
        return(
            <div className= 'EmptyContent'>
                <p className= 'EmptyContent__EmptyPatientHeading'>
                {this.props.EmptyPatientContentHeading}</p>
                <img className= 'EmptyContent__EmptyPatientConditionImage' 
                src= {this.props.EmptyContentImageSrc} alt= {this.props.EmptyContentImagealt}></img>
                <p className= 'EmptyContent__EmptyPatientConditionInformation'>{this.props.EmptyPatientDetails}</p>
            </div>
        )
    }
}