import React,{Component } from 'react';
import '../../../assets/styles/PatientDetailsDelet.scss';  
  

class PatientDetaailsDelete extends Component{
    render(){
        return( 
            <div className= 'PatientDetailsDelet' id= 'PatientDetailsDelet'>
                 <i className="PatientDetailsDelet__upArrow"></i>
                <div className= 'PatientDetailsDelet__Header'>
                    <h2 className= 'PatientDetailsDelet__Heading'>Select Medical Condition</h2>
                </div> 
                <div className= 'PatientDetailsDelet__Content'> 
                    <a className= 'PatientDetailsDelet__PregnancyTitle' href= '#Pregnancy' title= 'Pregnancy'>Pregnancy</a>
                    <a className= 'PatientDetailsDelet__EnableDeletLink' href= '#EnableDelet' >
                    <img src= {this.props.EnableDeleteSrc} alt={this.props.EnableDeletAlt}></img></a>
                    <span className= 'PatientDetailsDelet__Pregnancyborder'></span>
                    <a className= 'PatientDetailsDelet__InfertiliryTitle' href= '#Infertility' title= 'Infertility'>Infertility</a>
                    <a className= 'PatientDetailsDelet__ActiveDeletLink' href= '#ActiveDelet' >
                    <img src= {this.props.ActiveDeleteSrc} alt={this.props.ActiveDeletAlt}></img></a>
                    <span className= 'PatientDetailsDelet__Infertilityborder'></span>  
                  <a className= 'PatientDetailsDelet__AddNewCondition' href= '#dddd'
                  onClick= {this.props.AddMedicalPopUp1}
                        title= 'Add new Condition'>Add new Condition</a>
                </div>     
            </div>  
        )
    }
}
export default PatientDetaailsDelete;