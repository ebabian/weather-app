import React from 'react';
import axios from 'axios';

const url = 'http://api.weatherstack.com/current'

const API_KEY = process.env.REACT_APP_API_KEY;

const params = {
    access_key: API_KEY,
    query: 'New York'
}

axios.get(url, {params})
    .then(res => {
        const apiRes = res.data;
        console.log(apiRes)
    }).catch(err => {
        console.log(err)
    })


const ListData = () => {
    return (
        <div>
            
        </div>
    );
};

export default ListData;