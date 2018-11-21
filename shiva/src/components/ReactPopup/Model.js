import React,{Component } from 'react';
import './Dashboard.scss';

// const Modal = ({ handleClose, show, children }) => {  
// const showHideClassName = show ? "modal display-block" : "modal display-none";

//     return (
//       <div className= {showHideClassName}>
//         <section className="modal-main">
//           <button onClick={handleClose}>close</button>
//         </section>
//       </div>
//     );
//   };


class Modal extends Component {
    render() {
      return ( 
          <div className='popup_inner'> 
          <button >close me</button>
          </div> 
      );
    }
  }
  export default Modal;