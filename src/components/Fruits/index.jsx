import "./style.css";
const ShowFruits = ({ filteredFruits, action }) => {
  return (
    <div>
      <p>
        Preço total ={" "}
        {filteredFruits.reduce(function (acumulador, fruit) {
          return acumulador + fruit.price;
        }, 0)}
      </p>
      <span>
        {filteredFruits.map((item) => (
          <li>
            {item.name} preço: {item.price}
          </li>
        ))}
      </span>
      <p>
        <button className="btn" onClick={action}>
          Mostrar apenas frutas vermelhas
        </button>
      </p>
    </div>
  );
};

export default ShowFruits;
