import React,{Component } from 'react';
import '../../assets/styles/TotalPatients.scss'; 

class TotalPatientsList extends Component{
    render(){
        return(
            <div className= 'TotalPatientsList' id= 'TotalPatientList'>
                <ul className= 'TotalPatientsList__UnorderList'>
                    <li className= 'TotalPatientsList__ListItem PatientImage--width'>
                        <img className= 'TotalPatientsList__PatientImage' src={this.props.PatientImg} alt= {this.props.PatientImagealt}></img>
                    </li>
                    <li className= 'TotalPatientsList__ListItem PatientName--width'>
                            <span className= 'TotalPatients__PatientName'>{this.props.PatientName}</span>
                    </li>
                    <li className= 'TotalPatientsList__ListItem PatientPhoneNumber--width'>
                    <span className= 'TotalPatientsList__PhoneIcon'>Mobile Image</span>
                            <span className= 'TotalPatientsList__PatientNumber'>+91-{this.props.PatientPhoneNumber}</span>
                    </li>
                </ul>
                <ul className= 'TotalPatientsList__UnorderList Bg--color'>
                    <li className= 'TotalPatientsList__ListItem PatientImage--width'>
                        <img className= 'TotalPatientsList__PatientImage' src={this.props.PatientImg} alt= {this.props.PatientImagealt}></img>
                    </li>
                    <li className= 'TotalPatientsList__ListItem PatientName--width'>
                            <span className= 'TotalPatients__PatientName'>{this.props.PatientName}</span>
                    </li>
                    <li className= 'TotalPatientsList__ListItem PatientPhoneNumber--width'>
                    <span className= 'TotalPatientsList__PhoneIcon'>Mobile Image</span>
                            <span className= 'TotalPatientsList__PatientNumber'>+91-{this.props.PatientPhoneNumber}</span>
                    </li>
                </ul>
        </div>
        )
    }
}
export default TotalPatientsList;