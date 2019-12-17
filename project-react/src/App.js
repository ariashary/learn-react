import React, {useState} from 'react';
import './App.css'
import Tweet from './Tweet';

function App() {
  const [users, setUsers] = useState([
    { name: "Ari", message: "Hello there" },
    { name: "John", message: "I am John snow" },
    { name: "Traversy", message: "I am awesome" }
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))};
    </div>
  );
}

export default App;
