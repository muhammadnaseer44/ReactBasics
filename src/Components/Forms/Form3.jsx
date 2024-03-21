import React, { useState } from 'react'

function Form3() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isValid, setIsValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !pass) return;
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
        <div className='my-10 m-auto p-2 w-96 h-60 border-2 rounded-xl'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-blue-500 my-2'>Facebook</h1>
                <input type="text" name="" id="1" placeholder='Username' value={email} onChange={handleEmail} className='border-2 p-1 m-1 rounded w-10/12 cursor-pointer' onBlur={() => !isValid && setIsValid("Invalid Email")} /> <br />
                <h1 className='text-red-500 text-xs mb-4'>{isValid}</h1>
                <input type="text" name="" id="2" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} className='border-2 p-1 m-1 rounded w-10/12 cursor-pointer' /> <br />
                <input type="submit" value="Log in" className='bg-blue-500 text-white px-2 py-1 m-2 rounded' />
            </form>
        </div>
    )
}

export default Form3