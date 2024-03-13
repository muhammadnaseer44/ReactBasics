import React, { useContext, useState } from 'react'
import UserContext from './UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-blue-500 m-2'>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" className='border-2 rounded-lg' required onChange={(e) => setUsername(e.target.value)} value={username} />  <br />
                <button className='bg-blue-500 rounded p-1 m-1'>Log in</button>
            </form>
            <h1>Please Login</h1>
        </div>
    )
}

export default Login