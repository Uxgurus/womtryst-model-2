import React,{Component } from 'react';
import '../assets/styles/reset.scss';
import Header from './HeaderComponents/Header';
import SelectPatient from './SelectPatient/SelectPatient';
import '../assets/styles/main.scss';

class Main extends Component{
    state ={
        header:[
            {Href:'#Back Arrow'},
            {ArrowTitle: 'Back Arrow'},
            {backArrow: 'Back Arrow'},
            {headerHeading: 'Select Patient'}
        ],
        
    }
    render(){
        return(
            <div className = 'Main__div'>
                <Header 
                    headerHeading ={this.state.header[3].headerHeading}
                 >
                     <a className= 'Header__ArrowLink'  href = {this.state.header[0].Href} 
                 title = {this.state.header[1].ArrowTitle} >{this.state.header[2].backArrow}</a>
                 </Header>
                 
                 <SelectPatient />
                  
            </div>
        );
    }
}
export default Main;