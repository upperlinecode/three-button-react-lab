import React, { Component } from 'react';
import './App.css';
import StateCard from './components/StateCard.js';
import Nav from './components/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <StateCard />
      </div>
    );
  }
}

export default App;
