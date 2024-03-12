import React, { useState } from 'react'

function Nested() {
  const [name, setName] = useState("")
  return (
    <div className='text-center'>
      <Level1 name={name} />
      <button onClick={() => setName(alert("Submited"))} className=' bg-blue-500 rounded p-1 m-1'>Submit</button>
    </div>
  )
}

function Level1({ name }) {
  return (
    <div>
      <Level2 myName={name} />
    </div>
  )
}

function Level2({ myName }) {
  return (
    <div>
      {myName}
    </div>
  )
}

export default Nested;