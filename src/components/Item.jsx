import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/Item.css';


const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="item-card-content">
        <p className="item-card-title">{producto.nombre}</p>
        <p className="item-card-price">${producto.price}</p>
        <Link className="item-card-button" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;


