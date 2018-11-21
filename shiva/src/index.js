import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';  
// import Main from './components/main';
// import PatientList from './components/PatientListComponents/PatientList';
import PatientDetails from './components/PatientDetails/PatientDetails';
// import PatientDiabetes from './components/PatientDetails/PatientDiadetes/PatientDiabetes';
// import PatientDetailsInfertility from './components/PatientDetails/PatientDetailsInfertility/PatientDetailsInfertility';
// import DashBoard from './components/ReactPopup/Dashboard';

ReactDOM.render( <PatientDetails  />, document.getElementById('root'));


serviceWorker.unregister();
//shiva
