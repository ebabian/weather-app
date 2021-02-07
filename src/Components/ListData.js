import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListData = ({location}) => {
    return (
        <div>
            <p>{location}</p>
        </div>
    );
};

export default ListData;