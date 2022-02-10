import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  // Created the IP state
  const [ip, setIP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('')

  // Created a function to get IP address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
    setCity(res.data.city)
    setState(res.data.state)
  }
  
  useEffect( () => {
    // Pass getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="App">
      <h2>Hello! You may not know me, but I know some things about you...</h2>
      <h4>I know you are located in {city}, {state}.</h4>
      <h4>And your IP address is: {ip}</h4>
    </div>
  );
}

export default App;
