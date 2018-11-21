 import React,{Component } from 'react';
 import '../../assets/styles/Header.scss';
// import backGroundImg1 from '../../assets/images/Hamberger.png';


 class Header extends Component{
     render(){
         return(
             <div className = 'Header'>
                {this.props.children}  
                <h1 className= 'Header__heading'>{this.props.headerHeading}</h1>     
             </div>
         )
     }
 }
 export default Header;     