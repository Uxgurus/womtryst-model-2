import React,{Component } from 'react';
import '../../../assets/styles/PatientMedicalReport.scss';

 class PatientMedicalReports extends Component{
     render(){
         return( 
                <div className= 'PatientMedicalReports'>
                    <ul className= 'PatientMedicalReports__Unorder'>  
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Healthondition' 
                            onMouseEnter={this.props.HealthConditionEnter} 
                            onClick= {this.props.HealthConditionLeavu}
                            href= '#Healthondition' title= 'Health Condition'>Health Condition</a>
                            
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Consultation' onMouseEnter={this.props.ConsultationEnter}
                            onClick= {this.props.ConsultationLeavu}  
                            href= '#Consultation' title= 'Consultation'>Consultation</a>
                        
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Scans' onMouseEnter={this.props.ScanEnter}
                            onClick= {this.props.ScanDivLeavu}
                            href= '#Scans' title= 'Scans'>Scans</a>
                            
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__Investigation' onMouseEnter={this.props.InvestigationEnter}
                            onClick= {this.props.InvestigationLeavu} href= '#Investigation' title= 'Investigation'>Investigation</a>
                            
                        </li>
                        <li className= 'PatientMedicalReports__ListIteam'>
                            <a className= 'PatientMedicalReports__immunization' 
                            onMouseEnter={this.props.ImmunizationEnter} onClick= {this.props.ImmunizationLeavu}
                            href= '#Immunization' title= 'Immunization'>Immunization</a>
                            
                        </li>
                    </ul>
                </div> 
         )
     }
 }
 export default PatientMedicalReports;