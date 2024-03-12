import React, { useState } from 'react'

function StaticList({ item }) {
    const [title, setTitle] = useState(item);
    const handleChange = () => {
        return setTitle("Updated " + title)
    }
    return (
        <div>
            {title}
            <button onClick={handleChange} className='mx-2 my-1 px-1 bg-blue-600 rounded'>Change</button>
        </div>
    )
}

export default StaticList