import { useState, useEffect } from "react";

function Demo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./src/Components/Basics/Todos.json");
        const todos = await res.json();
        console.log(todos);
        setData(todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello React Forms</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
