import './App.css';
import ListData from './Components/ListData.js';
import Home from './Components/Home'
import { Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/`

  const params = {
      key: API_KEY,
      zipcode: '11238'
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const asyncRes = await axios(`${url}weather?zip=${params.zipcode}&units=imperial&appid=${params.key}`)
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

  // const dayWeather = data.forecast.forecastday
  // console.log(dayWeather)

  // dayWeather.map((res) => {
  //   console.log(res.astro.sunrise)
  // })
  return (
    <div className="App">
      <h1>Weather App!</h1>
      <h2>{data.name}</h2>
    </div>
  );
}

export default App;
