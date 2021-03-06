import './App.css';
import DisplayData from './Components/DisplayData.js';
import Home from './Components/Home'
import { Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [city, setCity] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/`

  const params = {
      key: API_KEY,
      days: 3
  }

  const searchData = async (event) => {
    if(event.key === "Enter") {
      await fetch(
        `${url}forecast?q=${city}&units=imperial&cnt=${params.days}&appid=${params.key}`
      )
        .then((res) => res.json())
        .then((resData) => {
            setData(resData)
            setLoading(false)
            // console.log(resData.city.name)
        })
    }
    // if(isLoading) {
    //   return <div className="data">Loading...</div>
    // }
  }

  return (
    <div className="App">

      {/* CITY NAME SEARCH */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a city..."
          className="search-bar"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={searchData}
        />
      </div>

      {/* RENDER DATA */}

      <div className="data">
        <DisplayData 
        data={data}
        isLoading={isLoading}
        />
      </div>
      
    </div>
  
  );
}

export default App;
