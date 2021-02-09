import React, { useState, useEffect } from 'react';
import './DisplayData.css'

const DisplayData = ({ data, isLoading }) => {

    if(isLoading) {
      return <div className="data"> </div>
    }

    // if(data === "undefined") {
    //     return <div className="data">ERROR</div>
    // }

    console.log(data.list)



    return (
        <>
        <div className="weather-container">
            { typeof data.city != "undefined" ?  
                (
                <div>
                { data.list.map((res, index) => (
                    <div className="weather-div" key={index}>
                        <div>
                            {(res.dt_txt)}
                        </div>
                        <div>
                            {data.city.name.toUpperCase()}
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
             ) : ("Error, please search a different city")} 
        </div>
        
        
        </>
    );
};

export default DisplayData;