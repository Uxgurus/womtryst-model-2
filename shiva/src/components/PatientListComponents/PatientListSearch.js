import React,{Component } from 'react';
import '../../assets/styles/PatientListSearch.scss'; 
import TotalPatientsList from './TotalPatientList';
import PatientImages from '../../assets/images/PatientImage.png';


class PatientListSearch extends Component{
    state = {
        TotalPatientsList: [
            {PatientImg: PatientImages},
            {PatientImagealt: 'Patient Image'},
            {PatientName: 'Priya Rama Chandran'},
            {PatientPhoneNumber: '9848482952'}
        ]
    } 
    Cancel = () => {
         document.getElementById("txtPatientListSearch").value = '';
    }
    render(){
        return(
            <div className= 'PatientListSearch'>  
                    <ul className= 'PatientListSearch__UnorderList'>
                        <li className= 'PatientListSearch__ListItemas'>
                            <input title= 'searching' id= 'txtPatientListSearch' className= 'PatientListSearch__input' 
                              type= 'text' name= 'txtPatientListSearch' placeholder="Patient name (or) Mobile (or) UHID">
                            </input>
                        </li>
                        <li className= 'PatientListSearch__ListItemas'>
                            <div className= 'PatientListSearch__SearchCancel'>
                                <a onClick={this.Cancel} className='PatientListSearch__SearchCancelLink' href={this.props.PatientListSearchCancelHref} title= {this.props.PatientListSearchCancelTitle}>{this.props.PatientListSearchCancel}</a>
                            </div>
                        </li>
                    </ul>        
                    <TotalPatientsList
                        PatientImg= {this.state.TotalPatientsList[0].PatientImg}
                        PatientImagealt= {this.state.TotalPatientsList[1].PatientImagealt}
                        PatientName= {this.state.TotalPatientsList[2].PatientName}
                        PatientPhoneNumber= {this.state.TotalPatientsList[3].PatientPhoneNumber}>
                    </TotalPatientsList>
            </div>
        )
    }
}
export default PatientListSearch;