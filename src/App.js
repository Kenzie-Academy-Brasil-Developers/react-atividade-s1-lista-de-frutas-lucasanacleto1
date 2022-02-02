import "./App.css";
import { useState } from "react";
import ShowFruits from "./components/Fruits";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    return setFruits(fruits.filter((fruit) => fruit.color === "red"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <ShowFruits filteredFruits={fruits} action={filterRedFruits} />
      </header>
    </div>
  );
}

export default App;
