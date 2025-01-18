import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then((response) => {
        setusers(response.data.data);
      })
      .catch((error) => {
        console.log('Error fetching users', error);
      })
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
