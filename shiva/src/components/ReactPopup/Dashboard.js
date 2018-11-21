import React, { Component } from "react"; 
import  Modal from './Model';
import './Dashboard.scss';

// class Dashboard extends Component {
//   state = { show: false };

//   showModal = () => {
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });
//   };

//   render() {
//     return (
//       <main>
//         <h1>React Modal</h1>
//         <Modal show={this.state.show} handleClose={this.hideModal}>
//           <p>Modal</p>
//           <p>Data</p>
//         </Modal>
//         <button type="button" onClick={this.showModal}>
//           open
//         </button>
//       </main>
//     );
//   }
// }

class Dashboard extends React.Component {
     
      state = {
        showPopup: false
      }
    togglePopup = () => {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='app' onClick={this.togglePopup}>
          <h1>hihi</h1>
          <button onClick={this.togglePopup}>show popup</button>
          {this.state.showPopup ? 
            <Modal/>
            : null
          }
        </div>
      );
    }
  }
  export default Dashboard;