import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import Products from './components/products/Products'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Products />
      </div>
    );
  }
}

export default App;
