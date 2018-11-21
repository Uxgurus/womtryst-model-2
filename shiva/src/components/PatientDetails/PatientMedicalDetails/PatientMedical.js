import React,{Component } from 'react';
import '../../../assets/styles/PatientMedical.scss';
 

class PatientMedicalPregnancy extends Component{
    render(){
        return(
            <div className= 'Pregnancy'>
                <div className= 'Pregnancy__Headingdiv'>
                    <h3 className= 'Pregnancy__Heading'>{this.props.Heading}</h3>
                    
                </div>
                {this.props.children}
                <div className= 'PatientInformationForm'>
                    <ul className= 'PatientInformationForm__UnorderList'>
                        <li className= 'PatientInformationForm__ListItems'>
                            <label className= 'PatientInformationForm__Icon'>image </label>
                        </li>
                        <li className= 'PatientInformationForm__ListItems'>
                            <p className= 'PatientInformationForm__Para'>Patient Information Form</p>
                        </li>
                        <li className= 'PatientInformationForm__ListItems'>
                            <a className= 'PatientInformationForm__PatientRequest' href= '#patient Request' title= 'Patient Reqest'>
                                {this.props.MedicalRequest}  
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default PatientMedicalPregnancy;