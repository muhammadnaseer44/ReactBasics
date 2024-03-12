import React, { useState } from "react";

function Login() {
    const data = { username: "", password: "" };
    const [input, setInput] = useState(data);

    const handleData = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // console.log(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.username || !input.password) {
            console.error("All Feilds are Mandatory");
        }
        else {
            console.log("You've Logged in Successfully");
        }
    }

    return (
        <div className="text-center">
            <h1>Log in</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" id="user" className="border-2 m-1 rounded-md" placeholder="Username" value={input.username} onChange={handleData} />     <br />
                <input type="password" name="password" id="pass" className="border-2 m-1 rounded-md" placeholder="Password" value={input.password} onChange={handleData} /> <br />
                <input className="m-1 p-1 text-white bg-blue-500 rounded-md" type="submit" value="Login" />
            </form>
            <h1 className="text-xl font-semibold">Preview</h1>
            <p><b>Username</b>: {input.username}</p>
            <p><b>Password</b>: {input.password}</p>
        </div>
    );
}

export default Login;