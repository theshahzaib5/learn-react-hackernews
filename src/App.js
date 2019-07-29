import React from 'react';
import './App.css';

const helloWorld = "it's my first app";
const user = { firstName: "Shah", lastName: "Zaib", designation: "Sr. Front end developer" }

function App() {
  return (
    <div>
      <h1>{helloWorld}</h1>
      <h2>User Name: {user.firstName} {user.lastName}</h2>
      <h2>User designation: {user.designation}</h2>
    </div>
  );
}

export default App;
