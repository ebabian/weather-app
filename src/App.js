import './App.css';
import ListData from './Components/ListData.js';
import Home from './Components/Home'
import { Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const url = 'http://api.weatherapi.com/v1/forecast.json'

  const API_KEY = process.env.REACT_APP_API_KEY;

  const params = {
      key: API_KEY,
      q: 'New York',
      days: 5
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const asyncRes = await axios(url, {params})
        const value = asyncRes.data;
        setData(value);
        setLoading(false)
        console.log(value)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])

  if(isLoading) {
    return <div className="App">Loading...</div>
  }


  return (
    <div className="App">
      <h1>Weather App!</h1>
      <p>{data.location.name}</p>
    </div>
  );
}

export default App;
