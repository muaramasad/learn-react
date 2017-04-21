import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    var i = 2;
    var myStyle = {
      fontSize: 20,
      color: 'red'
    };
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
class Header extends Component {
    render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
    );
  }
}
class Content extends Component {
    render() {
    return (
        <p className="App-intro">
          <h1>My Page Start Here</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    );
  }
}

export default App;
