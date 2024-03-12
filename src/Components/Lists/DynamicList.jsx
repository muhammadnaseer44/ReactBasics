import React, { useState } from 'react';

function DynamicList({ arr }) {
  const [text, setText] = useState('');
  const [items, setItems] = useState(arr);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  return (
    <ul>
      <h1>Dynamic List</h1>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <form action="" onSubmit={addItem}>
        <input type="text" name="" id="" value={text} onChange={handleText} className="border w-20 m-2" />
        <br />
        <input type="submit" value="Add" className='mx-2 my-1 px-1 bg-blue-600 rounded' />
      </form>
    </ul>
  );
}

export default DynamicList;
