import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter/>
      <Student/>
    </div>
  );
}

export default App;

class Counter extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      count: 1,
    }
    this.clickCounter = this.clickCounter.bind(this)
  }

  clickCounter() {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick = {this.clickCount}>Click nek :3</button>
      </div>
    )
  }
}

class Student extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      Student: {
        name: 'Nam pro dz max vip',
        age: 18.5,
      }
    }
    this.clickStudent = this.clickStudent.bind(this)
  }

  clickStudent() {
    this.setState({
      ...this.state,
      Student: {
        ...this.state.Student,
        age: this.state.Student.age + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          Name: {this.state.Student.name}
          Age: {this.state.Student.age}
        </div>
        <button onClick = {this.clickStudent}>Click em nek hihi</button>
      </div>
    )
  }
}
