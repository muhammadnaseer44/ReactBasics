import React, { useState, useEffect } from 'react';

export default function Counter() {
    return (
        <div className='text-center'>
            <h1>Hello Counter</h1>
            <Button />
        </div>
    );
}

function Button() {
    const [count, setCount] = useState(() => {
        // Set initial count from localStorage or default to 0
        const storedCount = localStorage.getItem('count');
        return storedCount ? parseInt(storedCount, 10) : 0;
    });

    useEffect(() => {
        // Update localStorage whenever count changes
        localStorage.setItem('count', count.toString());
    }, [count]);

    return (
        <button
            className='bg-blue-500 hover:bg-blue-700 text-white p-1 rounded'
            onClick={() => setCount((prevCount) => prevCount + 1)}
        >
            Count is {count}
        </button>
    );
}