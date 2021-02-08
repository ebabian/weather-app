import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayData.css'

const DisplayData = ({ data, isLoading, city }) => {

    if(isLoading) {
      return <div className="data"> </div>
    }

    console.log(data.list)

    return (
        <>
        <div className="weather-container">
            {
                data.list.map((res, index) => (
                    <div className="weather-div" key={index}>
                        <div>
                            {res.dt_txt}
                        </div>
                        <div>
                            {city.toUpperCase()}
                        </div>
                        <div>
                            {res.main.temp}
                        </div>
                        <div>
                        {res.weather[0].description.toUpperCase()}
                        </div>
                        <div>
                            Low: {Math.round(res.main.temp_min)}°F
                        </div>
                        <div>
                            High: {Math.round(res.main.temp_max)}°F
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
};

export default DisplayData;