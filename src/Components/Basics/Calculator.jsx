import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(display));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input className='border-2 w-32 rounded-md m-1 px-1' type="text" value={display} readOnly />
      <div>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('7')}>7</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('8')}>8</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('9')}>9</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('4')}>4</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('5')}>5</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('6')}>6</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('1')}>1</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('2')}>2</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('3')}>3</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('0')}>0</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('.')}>.</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => clearDisplay()}>C</button>
        <button className='bg-blue-400 px-2 m-1 rounded' onClick={() => handleClick('/')}>/</button>
      </div>
      <button className='bg-blue-400 px-14 m-1 rounded' onClick={() => calculateResult()}>=</button>
      <div>
        <strong>Result: {result}</strong>
      </div>
    </div>
  );
}

export default Calculator;
