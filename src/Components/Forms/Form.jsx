import React, { useState } from 'react'

function Form() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isValid, setIsValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailRegex.test(e.target.value);
        setIsValid(emailRegex.test(e.target.value));
    }

    return (
        <div className='my-10 mx-auto p-2 w-64 border-2 text-center rounded-xl'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-blue-500 my-2'>Facebook</h1>
                <input type="text" name="" id="" placeholder='Username' value={email} onChange={handleEmail} onBlur={() => !isValid && setIsValid("Invalid Email")} className='border-2 rounded my-2 cursor-pointer' /> <br />
                <h1 className='text-red-500 text-xs'>{isValid}</h1>
                <input type="text" name="" id="" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} className='border-2 rounded my-2 cursor-pointer' /> <br />
                <input type="submit" value="Log in" className='bg-blue-500 text-white px-2 py-1 m-2 rounded' />
            </form>

            <div>
                <h1 className='text-xl font-semibold'>Preview</h1>
                <p>Username: {email}</p>
                <p>Password: {pass}</p>
            </div>
        </div>
    )
}

export default Form