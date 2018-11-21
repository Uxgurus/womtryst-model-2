import React, { Component } from 'react';
import './App.css';
import Header from './detailcomponents/header';
import Banner from './detailcomponents/banndercomponents/banner';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Header headName="Patient Details"/>
     <Banner></Banner>
      </div>
    );
  }
}

export default App;
