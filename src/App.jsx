import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("useEffect is running")
    const fetchData = async() => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserData(data);

      } catch (error) {
        console.error("Error fetching the data")
      }
    }

    fetchData();
    return () => {
      console.log("Cleanup function is called")
    }
  }, [userId])

  console.log("component has rendered")

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setUserId(userId+1)}>User ID Increment</button>
      <button onClick={() => setUserId(userId-1)}>User ID Decrement</button>
      {userData && 
        <div>
          <h1>User Profile</h1>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      }
    </div>
  )
}

export default App
