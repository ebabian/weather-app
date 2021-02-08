import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListData = ({ data, isLoading }) => {

    if(isLoading) {
      return <div className="data">Loading...</div>
    }

    return (
        <div>
            {
                data.list.map((res, index) => (
                    <div key={index}>
                        {res.weather[0].main}
                    </div>
                ))
            }
        </div>
    );
};

export default ListData;