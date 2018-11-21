import React,{Component } from 'react';
import '../../../assets/styles/AddPatientDetails.scss';
     
class AddPatientDetails extends Component{  

    render(){
        return( 
                <div className= 'AddMedicalDetails__ParentDiv'>
                    <div className= 'AddMedicalDetails__backGround' onClick= {this.props.HideAddMedicalDetails}></div>
                    <div className= 'AddMedicalDetails' id= 'AddMedicalDetails'>                    
                            <div className= 'AddMedicalDetails__Header'>
                                <h2 className= 'AddMedicalDetails__Heading'>Add New Medical Condition</h2>
                                <a className= 'AddMedicalDetails__MedicalCoditionIcon'
                                href= '#AddNewMedicalCondition' title= ''>
                                    rightMark
                                </a>
                            </div>
                            <div className= 'AddMedicalDetails__content'>
                                <a className= 'AddMedicalDetails__Pregnancy'
                                href= '#pregnancy' title= 'Pregnancy'>Pregnancy</a>
                                <div className= 'AddMedicalDetails__Pregnancyborder'></div>
                                <a className= 'AddMedicalDetails__infertility'
                                href= '#pregnancy' title= 'Infertility'>Infertility</a>
                                <div className= 'AddMedicalDetails__Infertilityborder'></div>
                                <a className= 'AddMedicalDetails__Others'
                                href= '#Others' title= 'Others'>Others</a>
                                <input className= 'AddMedicalDetails__TextBox' 
                                type= 'text' placeholder= 'Type Here'>

                                </input>
                            </div> 
                    </div>
                 </div>
                
        )
    }
}
export default AddPatientDetails;