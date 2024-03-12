import React from 'react';

function Arithmetic() {
    function handleAdd(e) {
        e.preventDefault();
        let n1 = e.target.form.val1.value
        let n2 = e.target.form.val2.value
        let sum = parseInt(n1) + parseInt(n2);
        console.log(sum);
    }

    function handleSubtract(e) {
        e.preventDefault();
        let n1 = e.target.form.val1.value
        let n2 = e.target.form.val2.value
        let sum = parseInt(n1) - parseInt(n2);
        console.log(sum);
    }
    function handleMultiply(e) {
        e.preventDefault();
        let n1 = e.target.form.val1.value
        let n2 = e.target.form.val2.value
        let sum = parseFloat(n1) * parseFloat(n2);
        console.log(sum);
    }

    function handleDivide(e) {
        e.preventDefault();
        let n1 = e.target.form.val1.value
        let n2 = e.target.form.val2.value
        let sum = parseFloat(n1) / parseFloat(n2);
        console.log(sum);
    }
    return (
        <div>
            <h1 className='text-xl font-semibold'>Arithmetic Calculator</h1>
            <form action=''>
                <input className='border-2 rounded-md w-20 m-1' placeholder='Value 1' type="text" name="val1" />
                <input className='border-2 rounded-md w-20 m-1' placeholder='Value 2' type="text" name="val2" /> <br />
                <input className='bg-blue-400 rounded px-2 m-1' type="submit" value=" + " onClick={handleAdd} />
                <input className='bg-blue-400 rounded px-2 m-1' type="submit" value=" - " onClick={handleSubtract} />
                <input className='bg-blue-400 rounded px-2 m-1' type="submit" value=" * " onClick={handleMultiply} />
                <input className='bg-blue-400 rounded px-2 m-1' type="submit" value=" / " onClick={handleDivide} />
            </form>
        </div>
    );
}

export default Arithmetic;
