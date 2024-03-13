import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState();
    const handleCount = () => setCount(count + 1);
    const handleRandomNumber = () => setRandomNumber(Math.floor(Math.random() * 10));
    // 1. It runs each time when component is mounted and re-render
    // useEffect(() => {
    //     console.log("useEffect Called");
    // })
    // 2. It runs once when the component is mounted [] means no dependencies
    // useEffect(() => {
    //     console.log("useEffect Called");
    // }, [])
    // 3. It runs when the component is mounted and whenever dependence changes.
    // useEffect(() => {
    //     console.log("useEffect Called");
    // }, [count])
    // 4. The cleanup function (the function you return from useEffect) runs when the component unmount or when the dependencies in the dependency 
    // array change. since count is in the dependency array, whenever count changes,the cleanup function is called before the new Effect runs.
    useEffect(() => {
        console.log("useEffect Called");
        return () => {
            console.log("Component will unmount");       // If you want disconnect database connectionn
        }
    }, [count])
    return (
        <div>
            <button onClick={handleCount} className=' bg-blue-500 rounded p-1 m-1'>Count : {count}</button> <br />
            <button onClick={handleRandomNumber} className=' bg-blue-500 rounded p-1 m-1'>Random Number : {randomNumber}</button>
        </div>
    )
}

export default Effect