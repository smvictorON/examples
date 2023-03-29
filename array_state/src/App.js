import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [data, updateData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ]);

  const increment = (id) => {
    // Método 1
    // let newData = [...data]
    // newData[id-1].value = ++newData[id-1].value
    // updateData(newData)

    // Método 2
    updateData(data.map((opt) => opt.id === id ? { id: opt.id, value: ++opt.value } : opt))
  }

  const decrement = (id) => {
    // Método 1
    // let newData = [...data]
    // newData[id-1].value = --newData[id-1].value
    // updateData(newData)

    // Método 2
    updateData(data.map((opt) => opt.id === id ? { id: opt.id, value: --opt.value } : opt))
  }

  return (
    <div>
      {data.map((counter, index) => (
        <Counter
          key={index}
          id={counter.id}
          value={counter.value}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </div>
  );
}

export default App;
