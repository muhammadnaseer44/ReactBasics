import React from 'react';

function Objects() {
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

    const tableRows = obj.map((value, index) => (
        <tr key={index}>
            <td className="border-2 border-dashed p-1">{value.id}</td>
            <td className="border-2 border-dashed p-1">{value.name}</td>
            <td className="border-2 border-dashed p-1">{value.mobile}</td>
            <td className="border-2 border-dashed p-1">{value.email}</td>
        </tr>
    ));

    return (
        <div className='flex justify-center my-10'>
            <table className='border-4 border-double'>
                <thead>
                    <tr>
                        <th className="border-4 p-1">ID</th>
                        <th className="border-4 p-1">Name</th>
                        <th className="border-4 p-1">Mobile</th>
                        <th className="border-4 p-1">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default Objects;