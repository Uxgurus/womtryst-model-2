import React,{Component} from 'react'; 
import Header from '../HeaderComponents/Header';
import '../../assets/styles/PatientList.scss';
import PatientListSearch from './PatientListSearch';
import '../../assets/styles/reset.scss'; 


class PatientList extends Component{
    state ={
        header:[
            {ArrowHref:'#Back Arrow'},
            {ArrowTitle: 'Back Arrow'},
            {backArrow: 'Back Arrow'},
            {headerHeading: 'Patient list'}
        ],
        PatientListSearch:[
            {PatientListSearchHref: '#PatientListSearchHref'},
            {PatientListSearchTitle: 'Find Patient'},
            {PatientListSearch: 'Patient Search'},
            {PatientListSearchCancelHref: '#PatientListSearchCancelHref'},
            {PatientListSearchCancelTitle: 'Cancel'},
            {PatientListSearchCancel: 'Cancel'}
        ]
        
    }
    
    render(){
        return(
            <div className= 'PatientList'>
            <Header headerHeading ={this.state.header[3].headerHeading} >
                 <a className= 'Header__ArrowLink'  href = {this.state.header[0].ArrowHref} 
                 title = {this.state.header[1].ArrowTitle} >{this.state.header[2].backArrow}</a>
            </Header>
            <PatientListSearch 
                PatientListSearchHref= {this.state.PatientListSearch[0].PatientListSearchHref}
                PatientListSearchTitle= {this.state.PatientListSearch[1].PatientListSearchTitle}
                PatientListSearch= {this.state.PatientListSearch[2].PatientListSearch}
                PatientListSearchCancelHref= {this.state.PatientListSearch[3].PatientListSearchCancelHref}
                PatientListSearchCancelTitle= {this.state.PatientListSearch[4].PatientListSearchCancelTitle}
                PatientListSearchCancel= {this.state.PatientListSearch[5].PatientListSearchCancel}>
             </PatientListSearch>
             
              </div>
        )
    }
}
export default PatientList;