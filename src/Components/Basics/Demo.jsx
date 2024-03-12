import React, { useState } from 'react'

function Demo() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let username = e.target.user.value
        let password = e.target.pass.value
        console.log(username);
        console.log(password);
        setUser(username)
        setPass(password)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input className='border-2 m-1 rounded-md' placeholder='Username' type="text" name="user" id="" />
                <input className='border-2 m-1 rounded-md' placeholder='Password' type="text" name="pass" id="" />
                <input className=' bg-blue-500 p-0.5 rounded-md' type="submit" value="Submit" />
            </form>
            <div>
                <h1 className='text-xl font-semibold'>Preview</h1>
                <div id="us">Username: {user}</div>
                <div id="ps">Password: {pass}</div>
            </div>
        </div>
    )
}

export default Demo