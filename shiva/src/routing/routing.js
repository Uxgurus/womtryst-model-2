import Main from '../components/SelectPatient/main'
import PatientList from '../components/PatientListComponents/PatientList';
import PatientDetails from '../components/PatientDetails/PatientDetails';
import PatientDiabetes from '../components/PatientDetails/PatientDiadetes/PatientDiabetes';
import PatientDetailsInfertility from '../components/PatientDetails/PatientDetailsInfertility/PatientDetailsInfertility';
import { BrowserRouter, Route, Link } from "react-router-dom";
import React,{Component } from 'react';
// import '../routing/routing.scss';   


class Routing extends Component{

    render() {
   return( <BrowserRouter>
                <div className="routing">
                <ul className="routing__ul ">
                    <li className="routing__li">
                    <Link to="/">Main</Link>
                    </li>
                    <li>
                    <Link to="/PatientList">PatientList</Link>
                    </li>
                    <li>
                    <Link to="/PatientDetails">PatientDetails</Link>
                    </li>
                    <li>
                    <Link to="/PatientDiabetes">PatientDiabetes</Link>
                    </li>
                    <li>
                    <Link to="/PatientDetailsInfertility">PatientDetailsInfertility</Link>
                    </li>
                </ul>
        
                <hr />
        
                <Route exact path="/" component={Main} />
                <Route path="/PatientList" component={PatientList} />
                <Route path="/PatientDetails" component={PatientDetails} />
                <Route path="/PatientDiabetes" component={PatientDiabetes} />
                <Route path="/PatientDetailsInfertility" component={PatientDetailsInfertility} />
                </div>
            </BrowserRouter>
   )};
  }
  export default Routing;