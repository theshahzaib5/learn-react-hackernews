import React, {Component} from 'react';
import './App.css';

const helloWorld = "it's my first app";
const user = { firstName: "Shah", lastName: "Zaib", designation: "Sr. Front end developer" }

export default class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      // setting current time
      timer: new Date().toLocaleTimeString(),
    }
  }

  componentDidMount() {
    // updating current time state every second
    setInterval(() => this.updateTime(), 1000);
  }

  // updating current time state
  updateTime = () => {
    this.setState({timer: new Date().toLocaleTimeString()})
  }

  render() {
    const {
      state: {
        timer,
      }
    } = this

    return (
      <div>
        <h1>{helloWorld}</h1>
        <h2>User Name: {user.firstName} {user.lastName}</h2>
        <h2>User designation: {user.designation}</h2>
        <h2>Current time is: {timer}</h2>
      </div>
    );
  }
}