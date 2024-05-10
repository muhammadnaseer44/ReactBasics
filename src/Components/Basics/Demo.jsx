import React, { useEffect } from 'react';

function Demo() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./Todos.json");
        const todos = await res.json();
        console.log(todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello React Forms</h1>
    </div>
  );
}

export default Demo;
