import React, {Component, Fragment} from 'react';
import './App.css';

const helloWorld = "it's my first app";
const user = { firstName: "Shah", lastName: "Zaib", designation: "Sr. Front end developer" }
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
const array = [ 1, 4, 9, 16 ];

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
      <div style={{textAlign: "center"}}>
        <h1>{helloWorld}</h1>
        <h2>User Name: {user.firstName} {user.lastName}</h2>
        <h2>User designation: {user.designation}</h2>
        <h2>Current time is: {timer}</h2>

        <div style={{display: "flex"}}>
          {/* printing an array with objects */}
          { list.map(function(item) {
            return (
              <div key={item.objectID} style={{ marginBottom: 20, flex: 1 }}>
                <a href={item.url} style={{color: "#000", textDecoration: "none", display: "inline-block"}}>
                  <p><strong>Project Name:</strong> {item.title}</p>
                  <p><strong>Author:</strong> {item.author}</p>
                  <p><strong>Comments:</strong> {item.num_comments}</p>
                  <p><strong>Points:</strong> {item.points}</p>
                </a>
              </div>
            )
          })}
        </div>
        
        <div style={{marginBottom: 30}}>
          {/* multiplied array by 2 */}
          { array.map(function(x, i){ 
            return (<span key={i} style={{marginRight: 10}}>{x * 2}</span>)
          })}
        </div>
      </div>
    );
  }
}