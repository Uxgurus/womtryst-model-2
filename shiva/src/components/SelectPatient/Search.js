import React, { Component } from 'react';
import '../../assets/styles/Search.scss';

class Search extends Component {
  render() {
    return (
      <div className= "Search"  >
       
          <input id= "txtFindSearch" className= "Search__input"   type="text" name="txtPatientSearch"  
         onKeyPress={this.props.PatientListDispaly} onKeyDown= {this.props.PatientListDispalyNone} placeholder="Patient name (or) Mobile (or) UHID" >
          </input>
           
                
       </div>
    );
  }

}

export default Search;