import React, {Component} from 'react';
import './App.css';
import SearchInput from './components/searchInput';
import SubjectCard from './components/subjectCard';
import StudentCard from './components/studentCard';

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

const userList = [
  {
    id: 1,
    first_name: "Harlin",
    last_name: "Wankel",
    email: "hwankel0@arizona.edu",
    gender: "Male"
  },
  {
    id: 2,
    first_name: "Dory",
    last_name: "Cureton",
    email: "dcureton1@nymag.com",
    gender: "Male"
  },
  {
    id: 3,
    first_name: "Urban",
    last_name: "Whichelow",
    email: "uwhichelow2@dell.com",
    gender: "Male"
  },
  {
    id: 4,
    first_name: "Delila",
    last_name: "Gianotti",
    email: "dgianotti3@chronoengine.com",
    gender: "Female"
  },
  {
    id: 5,
    first_name: "Libbi",
    last_name: "Redsall",
    email: "lredsall4@mlb.com",
    gender: "Female"
  }
]
const array = [ 1, 4, 9, 16 ];

export default class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      // setting current time
      timer: new Date().toLocaleTimeString(),
      list: list,
      userList: userList,
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
  
  onUserDismiss = (id) => {
    const {
      state: {
        userList
      }
    } = this
    
    const updatedList = userList.filter(item => item.id !== id);
    this.setState({ userList: updatedList });
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value }); 
  }

  getFilteredArray = list => {
    const {searchTerm} = this.state
    return list.filter(item => item.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  render() {
    const {
      state: {
        timer,
        searchTerm,
        list,
        userList,
      },
      onDismiss,
      onSearchChange,
      getFilteredArray,
      onUserDismiss
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
            <SubjectCard
              key={item.objectID}
              subjectInfo={item}
              onBtnPress={() => onDismiss(item.objectID)}
            />
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
            <SearchInput
              inputValue={searchTerm}
              onChange={onSearchChange}
            />

            <div style={{display: "flex", paddingTop: 20}}>
              { getFilteredArray(userList).map((item) => 
                <StudentCard
                  key={item.id}
                  studentInfo={item}
                  onBtnPress={() => onUserDismiss(item.id)}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}