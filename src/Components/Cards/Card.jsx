import React from 'react';

function Card({ props }) {
  return (
    <div className="border rounded-lg m-2 w-80">
      <div className="p-2">
        <h5 className="font-bold text-xl mb-2">{props.name}</h5>
        <p className="text-gray-700 text-base">{props.title}</p>
      </div>
      <div className="p-4">
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">Buy Now</a>
      </div>
    </div>
  );
}

export default Card;