import React,{Component } from 'react';
import '../../../assets/styles/PatientMedicalReport.scss';
import $ from 'jquery';

 class PatientMedicalReports extends Component{
    HealthConditionEnter = () => {  
        $('.HealthCondition').show();
    }
    HealthConditionLeavu = () => {  
        $('.HealthCondition').hide();
    }
    ScanEnter = () => {
        $(".Scans").show(); 
        // $('.Immunization').hide();
        // $('.Investigation').hide();
        // $('.Consultation').hide();
        // $('.HealthCondition').hide(); 
    }
    ScanDivLeavu = () => {
        $(".Scans").hide(); 
    }
    ConsultationEnter = () => {
        $('.Consultation').show();
        // $('.Immunization').hide();
        // $('.Investigation').hide(); 
        // $('.HealthCondition').hide();
        // $(".Scans").hide(); 
    }
    ConsultationLeavu = () =>{
        $('.Consultation').hide();
    }
    InvestigationEnter = () => {
        $('.Investigation').show();
        // $('.Immunization').hide(); 
        // $('.Consultation').hide();
        // $('.HealthCondition').hide();
        // $(".Scans").hide(); 
    }
    InvestigationLeavu = () =>{
        $('.Investigation').hide();
    }
    ImmunizationEnter = () => {
        $('.Immunization').show();
        // $('.Investigation').hide();
        // $('.Consultation').hide();
        // $('.HealthCondition').hide();
        // $(".Scans").hide(); 
    }
    ImmunizationLeavu = () =>{
        $('.Immunization').hide();
    }
     render(){
         return( 
                <div className= 'PatientMedicalReports'>
                    <ul className= 'PatientMedicalReports__Unorder'>  
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Healthondition' 
                            onMouseEnter={this.HealthConditionEnter} 
                            onMouseLeave= {this.HealthConditionLeavu}
                            href= '#Healthondition' title= 'Health Condition'>Health Condition</a>
                            
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Consultation' onMouseEnter={this.ConsultationEnter}
                            onMouseLeave= {this.ConsultationLeavu}  
                            href= '#Consultation' title= 'Consultation'>Consultation</a>
                        
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Scans' onMouseEnter={this.ScanEnter}
                            onMouseLeave= {this.ScanDivLeavu}
                            href= '#Scans' title= 'Scans'>Scans</a>
                            
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Investigation' onMouseEnter={this.InvestigationEnter}
                            onMouseLeave= {this.InvestigationLeavu} href= '#Investigation' title= 'Investigation'>Investigation</a>
                            
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__immunization' 
                            onMouseEnter={this.ImmunizationEnter} onMouseLeave= {this.ImmunizationLeavu}
                            href= '#Immunization' title= 'Immunization'>Immunization</a>
                            
                        </li>
                    </ul>
                </div> 
         )
     }
 }
 export default PatientMedicalReports;