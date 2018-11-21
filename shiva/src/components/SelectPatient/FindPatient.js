import React,{Component } from 'react';
import '../../assets/styles/FindPatient.scss';


class FindPatient extends Component{
    render(){
        return(
            <div className = 'FindPatient'>
                <div className = 'FindPatient__Profile'>
                    <img className= 'FindPatient__image' src= {this.props.FindPatientImgSrc} alt={this.props.FindPatientImgAlter}></img>
                    <div className= 'FindPatient__SearchDiv'>
                        <img className= 'FindPatient__SerachImage' src= {this.props.SearchImg} alt= {this.props.SearchImgAlt}></img>
                    </div>
                </div>
                    <h3 className= 'FindPatient__Heading'>{this.props.FindPatientHeading}</h3>
            </div>
        )
    }     
}
export default FindPatient;