import React,{Component } from 'react';
import '../../assets/styles/SelectPatient.scss';
import FindPatient from './FindPatient';
import FindPatientImage from '../../assets/images/FindPatientProfile.png';
import FindSearchImage from '../../assets/images/FindPatientSearch.png'; 
import Search from './Search'; 
import TotalPatient from './TotalPatient';
import $ from 'jquery';
import PatientImages from '../../assets/images/PatientImage.png';

class SelectPatient extends Component{
    state = {
    Findpatient:[
        {FindPatientImgSrc: FindPatientImage},
        {FindPatientImgAlter:'Profile Image'},
        {SearchImg:FindSearchImage},
        {SearchImgAlt: 'Search Image'},
        {FindPatientHeading: 'Find Patient'}
    ],
    TotalPatient: [
        {PatientImg: PatientImages},
        {PatientImagealt: 'Patient Image'},
        {PatientName: 'Priya Rama Chandran'},
        {PatientPhoneNumber: '9848482952'}
    ]
     
}
PatientListDispaly(){ 
        $('#TotalPatients').show();
}
PatientListDispalyNone(){
    if($("#txtFindSearch").val() === ''){
        $('#TotalPatients').hide();
   }
   else{
       $('#DisplayPatientList').show();
   } 

}

render(){
    return(
        <div>  
        <div className = 'selectPatient'>
            <FindPatient  
                FindPatientImgSrc= {this.state.Findpatient[0].FindPatientImgSrc} 
                FindPatientImgAlter= {this.state.Findpatient[1].FindPatientImgAlter}
                SearchImg= {this.state.Findpatient[2].SearchImg}
                SerachImgAlt= {this.state.Findpatient[3].SearchImgAlt}
                FindPatientHeading= {this.state.Findpatient[4].FindPatientHeading}
             />
             <div className= 'selectPatient__Border'></div>
            <Search 
                PatientListDispaly= {this.PatientListDispaly}
                PatientListDispalyNone= {this.PatientListDispalyNone}
            />
             
        </div>
        <TotalPatient PatientImg= {this.state.TotalPatient[0].PatientImg}
         PatientImagealt= {this.state.TotalPatient[1].PatientImagealt}
         PatientName= {this.state.TotalPatient[2].PatientName}
         PatientPhoneNumber= {this.state.TotalPatient[3].PatientPhoneNumber}>

        </TotalPatient>
        </div>
        )

    }
}
export default SelectPatient;