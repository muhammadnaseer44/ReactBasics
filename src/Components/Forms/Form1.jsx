import { useState } from 'react'

function Form1() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) return;
        console.log(username);
        console.log(password);
    }
    return (
        <div>
            <h1 className='font-bold text-2xl text-blue-600'>Login</h1>
            <form>
                <input type='text' placeholder='Username' className='border-2 p-1 m-1 rounded w-1/3' value={username} onChange={(e) => setUsername(e.target.value)} />    <br />
                <input type='password' placeholder='Password' className='border-2 p-1 m-1 rounded w-1/3' value={password} onChange={(e) => setPassword(e.target.value)} />    <br />
                <button type='submit' className=' bg-blue-500 py-1 px-2 rounded' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Form1