import React from 'react';
import axios from 'axios';

const url = 'http://api.weatherstack.com/current'

const params = {
    access_key: 'f8d2ec9982d165b30613dd254280b52c',
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