import React,{Component } from 'react';
import '../../assets/styles/TotalPatients.scss';

class TotalPatients extends Component{
    render(){
        return( 
            <div id= 'TotalPatients' className= 'TotalPatients'> 
                    <ul className= 'TotalPatients__UnorderList'>
                        <li className= 'TotalPatients__ListItem PatientImage--width'>
                            <img className= 'TotalPatients__PatientImage' src={this.props.PatientImg} alt= {this.props.PatientImagealt}></img>
                        </li>
                        <li className= 'TotalPatients__ListItem PatientName--width'>
                             <span className= 'TotalPatients__PatientName'>{this.props.PatientName}</span>
                        </li>
                        <li className= 'TotalPatients__ListItem PatientPhoneNumber--width'>
                        <span className= 'TotalPatients__PhoneIcon'>Mobile Image</span>
                             <span className= 'TotalPatients__PatientNumber'>+91-{this.props.PatientPhoneNumber}</span>
                        </li>
                    </ul>
                    <ul className= 'TotalPatients__UnorderList'>
                        <li className= 'TotalPatients__ListItem PatientImage--width'>
                            <img className= 'TotalPatients__PatientImage' src={this.props.PatientImg} alt= {this.props.PatientImagealt}></img>
                        </li>
                        <li className= 'TotalPatients__ListItem PatientName--width'>
                             <span className= 'TotalPatients__PatientName'>{this.props.PatientName}</span>
                        </li>
                        <li className= 'TotalPatients__ListItem PatientPhoneNumber--width'>
                        <span className= 'TotalPatients__PhoneIcon'>Mobile Image</span>
                             <span className= 'TotalPatients__PatientNumber'>+91-{this.props.PatientPhoneNumber}</span>
                        </li>
                    </ul>
                <br /><br /><br /><br /><br />
            </div>
        )
    }
}
export default TotalPatients;