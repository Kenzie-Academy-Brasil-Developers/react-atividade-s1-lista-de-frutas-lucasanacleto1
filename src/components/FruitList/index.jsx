import { useState } from "react";
import "./style.css";

const Fruits = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    return setFruits(
      fruits.filter(function (fruit) {
        return fruit.color === "red";
      })
    );
  };
  return (
    <div>
      <p>
        Preço total ={" "}
        {fruits.reduce(function (acumulador, fruit) {
          return acumulador + fruit.price;
        }, 0)}
      </p>
      <ul>
        {fruits.map(function (fruit, index) {
          return (
            <li key={index}>
              {fruit.name} preço = {fruit.price}
            </li>
          );
        })}
      </ul>
      <button className="btn" onClick={filterRedFruits}>
        Mostrar frutas vermelhas
      </button>
    </div>
  );
};

export default Fruits;
