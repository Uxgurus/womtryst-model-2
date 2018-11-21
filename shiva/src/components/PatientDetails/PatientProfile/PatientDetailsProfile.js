import React,{Component } from 'react';  
import '../../../assets/styles/PatientDetailsProfile.scss';

class PatientDetailsProfile extends Component{
    render(){
        return(
            <div className= 'patientDetailsProfile'>

            <div className= 'patientDetailsProfile__ImageDiv'>
                <img className= 'patientDetailsProfile__Image' 
                src= {this.props.ProfileImageSrc} alt= {this.props.ProfileImgAlt} ></img>
                </div>
                <div className= 'patientDetailsProfile__parentDiv'>
                    <div className= 'patientDetailsProfile__NameDiv'> </div>
                    <h3 className= 'patientDetailsProfile__ProfileName'>{this.props.ProfileName} </h3> 
                    <div className= "patientDetailsProfile__ProfileActive"></div>
                    <div className= 'patientDetailsProfile__White'></div>
                </div>
                <div className= 'patientDetailsProfile__CallerDiv'>
                        <span  className= 'patientDetailsProfile__caller'>
                            <span className='patientDetailsProfile__callerImgDiv'>
                                <a className='patientDetailsProfile__callerLink' href={this.props.CallerImgHref} title= {this.props.CallerImgTitle}>
                                    {this.props.CallerImg}
                                </a>
                            </span>
                         </span>
                </div>
            </div>
        )
    }   
}
export default PatientDetailsProfile;