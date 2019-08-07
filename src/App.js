import React, {Component} from 'react';
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
  {
    title: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    author: 'Mark Otto, Jacob Thornton',
    num_comments: 5,
    points: 5,
    objectID: 2,
  },
  {
    title: 'Angular',
    url: 'https://angular.io/',
    author: 'Google',
    num_comments: 5,
    points: 5,
    objectID: 3,
  },
];
const array = [ 1, 4, 9, 16 ];

export default class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      // setting current time
      timer: new Date().toLocaleTimeString(),
      list: list,
      searchTerm: "",
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

  componentWillUnmount() {
    clearTimeout(this.updateTime);
  }

  onDismiss = (id) => {
    const {
      state: {
        list
      }
    } = this
    
    const updatedList = list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value }); 
  }

  getFilteredArray = list => {
    const {searchTerm} = this.state
    return list.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  render() {
    const {
      state: {
        timer,
        searchTerm,
        list,
      },
      onDismiss,
      onSearchChange,
      getFilteredArray,
    } = this
    
    return (
      <div style={{textAlign: "center"}}>
        <h1>{helloWorld}</h1>
        <h2>User Name: {user.firstName} {user.lastName}</h2>
        <h2>User designation: {user.designation}</h2>
        <h2>Current time is: {timer}</h2>

        <div style={{display: "flex", paddingTop: 20}}>
          {/* printing an array with objects */}
          { list.map((item) => 
            <div key={item.objectID} style={{ color: "#000", marginBottom: 20, flex: 1 }}>
              <a href={item.url} style={{color: "#764abc", textDecoration: "none", display: "inline-block"}}>
                <p style={{margin: 0}}><strong>Project Name:</strong> {item.title} </p>
              </a>
              <p><strong>Author:</strong> {item.author} </p>
              <p><strong>Comments:</strong> {item.num_comments} </p>
              <p><strong>Points:</strong> {item.points}</p>
              <p>
                <button
                  onClick={() => onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </p>
            </div>
          )}
        </div>
        
        <div style={{marginBottom: 30}}>
          {/* multiplied array by 2 */}
          { array.map((x, i) =>
            <span key={i} style={{marginRight: 10}}>{x * 2}</span>
          )}
        </div>

        <div style={{marginBottom: 30}}>
          <h1>Search form</h1>
          <form>
            <input
              type="text"
              value={searchTerm}
              onChange={onSearchChange}
            />

            <div style={{display: "flex", paddingTop: 20}}>
              { getFilteredArray(list).map((item) => 
                <div key={item.objectID} style={{ color: "#000", marginBottom: 20, flex: 1 }}>
                  <a href={item.url} style={{color: "#764abc", textDecoration: "none", display: "inline-block"}}>
                    <p style={{margin: 0}}><strong>Project Name:</strong> {item.title} </p>
                  </a>
                  <p><strong>Author:</strong> {item.author} </p>
                  <p><strong>Comments:</strong> {item.num_comments} </p>
                  <p><strong>Points:</strong> {item.points}</p>
                  <p>
                    <button
                      onClick={() => onDismiss(item.objectID)}
                      type="button"
                    >
                      Dismiss
                    </button>
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}