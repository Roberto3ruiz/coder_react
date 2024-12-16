import React, { useState } from 'react'

import '../estilos/ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  
  const handleOnAdd = () => {
    if (stock !== 0) {
      onAdd(count); // 
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-buttons">
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button 
        onClick={handleOnAdd} // Asegúrate de llamar a handleOnAdd correctamente
        disabled={count === 0} 
        className="item-count-add-button"
      >
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;

