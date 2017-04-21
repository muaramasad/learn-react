import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    {
    //Statefull
    this.state = {
      headerText: "Welcome to React",
      contentText: "This is react component"
    }
    }
  }
  render() {
    var i = 2;
    var myStyle = {
      fontSize: 20,
      color: 'red'
    };
    return (
      <div className="App">
        {/* Statefull 
        <h1>{this.state.headerText}</h1>
        <p>{this.state.contentText}</p>
        */}
        {
          //Stateless Component
          <Header />
          <Content />
        }
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
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            "id": 1,
            "name": "Jack",
            "age": "29"
          },
          {
            "id": 2,
            "name": "Sam",
            "age": "24"
          },
          {
            "id": 3,
            "name": "Kim",
            "age": "27"
          }
        ]
      }
    } 
    render() {
    return (
        <p className="App-intro">
          <h1>My Page Start Here</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
                  <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </thead>
          <tbody>

          </tbody>
        </table>
        </p>
    );
  }
}

export default App;
