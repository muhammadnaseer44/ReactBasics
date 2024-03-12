import React from 'react';

function Table({ data }) {
    const tableRows = data.map((item, index) => (
        <tr key={index}>
            <td className='border p-2'>{item.id}</td>
            <td className='border p-2'>{item.name}</td>
            <td className='border p-2'>{item.mobile}</td>
            <td className='border p-2'>{item.email}</td>
        </tr>
    ));

    return (
        <div className='flex justify-center my-10'>
            <table className="border-4">
                <thead>
                    <tr>
                        <th className='border p-2'>ID</th>
                        <th className='border p-2'>Name</th>
                        <th className='border p-2'>Mobile</th>
                        <th className='border p-2'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default Table;