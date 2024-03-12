import React from 'react'
import Child from './Child';

function Parent() {
    const name = "Muhammad Naseer";
    const arr = ["Muhammad", "Naseer"];
    const obj = {
        fname: "Muhammad",
        lname: "Naseer"
    }
    return (
        <div className='text-center text-2xl'>
            <h1>Simple Access</h1>
            <h2>{name}</h2>
            <h3>{arr[0] + " " + arr[1]}</h3>
            <h4>{obj.fname + " " + obj.lname}</h4>
            <Child name={name} arr={arr} obj={obj} />
        </div>
    )
}

export default Parent;