import React from 'react';
import './App.css';

const helloWorld = "it's my first app";
const user = { firstName: "Shah", lastName: "Zaib", designation: "Sr. Front end developer" }

function App() {
  function timerTick() {
    return (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
  }

  

  return (
    <div>
      <h1>{helloWorld}</h1>
      <h2>User Name: {user.firstName} {user.lastName}</h2>
      <h2>User designation: {user.designation}</h2>
      {timerTick()}
    </div>
  );
}

export default App;
