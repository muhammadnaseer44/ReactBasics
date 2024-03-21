import { useState } from "react";

function Form2() {
    const [input, setInput] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.username || !input.password) {
            console.error("All Feilds are Mandatory");
        }
        else {
            console.log("You've Logged in Successfully");
            console.log(input.username);
            console.log(input.password);
        }
    }

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl m-2">Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="user" className='border-2 p-1 m-1 rounded w-1/3' placeholder="Username" value={input.username} onChange={handleChange} />     <br />
                <input type="password" name="password" id="pass" className='border-2 p-1 m-1 rounded w-1/3' placeholder="Password" value={input.password} onChange={handleChange} /> <br />
                <input className="m-1 py-1 px-2 text-white bg-blue-500 rounded" type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Form2;