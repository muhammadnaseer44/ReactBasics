import React from "react";

function Child({ name, arr, obj }) {
    return (
        <div className="text-center text-2xl">
            {/* <h1>Access by Simple Props</h1>
            <h2>{props.name}</h2>
            <h3>{props.arr[0] + " " + props.arr[1]}</h3>
            <h4>{props.obj.fname + " " + props.obj.lname}</h4> */}

            <h1>Access by Destructuring Props</h1>
            <h2>{name}</h2>
            <h3>{arr[0] + " " + arr[1]}</h3>
            <h4>{obj.fname + " " + obj.lname}</h4>
        </div>
    )
}

export default Child;