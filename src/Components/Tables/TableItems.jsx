import React from 'react';
import Table from './Table';

function Data() {
    const obj = [
        {
            "id": 44,
            "name": "Naseer",
            "mobile": "0307-1118819",
            "email": "Naseerbaloch7427@gmail.com"
        },
        {
            "id": 69,
            "name": "Nadeem",
            "mobile": "0302-2613382",
            "email": "Nadeemalishar50@gmail.com"
        },
        {
            "id": 25,
            "name": "Shahbaz",
            "mobile": "0307-3477259",
            "email": "Shahbazali25@gmail.com"
        },
        {
            "id": 22,
            "name": "Behroz",
            "mobile": "0333-2389456",
            "email": "Behrozbaloch22@gmail.com"
        },
        {
            "id": 20,
            "name": "Sahib",
            "mobile": "0313-1407751",
            "email": "Sahibbalcoh20@gmail.como"
        }
    ];

    return (
        <div>
            <Table data={obj} />
        </div>
    );
}

export default Data;