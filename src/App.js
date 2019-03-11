import React, { Component } from 'react';
import './App.css';
import heroImage from './images/heroImage.jpg'
import Header from './components/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={heroImage} alt="Hero Image" style={{ height: '80vh'}}/>
      </div>
    );
  }
}

export default App;
