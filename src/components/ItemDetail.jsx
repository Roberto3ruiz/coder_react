import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../estilos/ItemDetail.css';


const ItemDetail = ({producto}) => {
  const [compra, setCompra] = useState(false)
  const {addToCart, cart } = useContext (CartContext)
    const onAdd = (cantidad) => {
      setCompra (true)
      // let cartItem = {
      //   name:producto.name,
      //   img:producto.imagen,
      //   price: producto.price,
      //   stock:producto.stock,
      //   id:producto.id
      //  }
      //  addToCart (cartItem,cantidad)
        addToCart (producto,cantidad)
    }
console.log (cart)

return (
  <div className="item-detail-container">
    <h2 className="item-detail-title">Detalle de {producto.name}</h2>
    <img className="item-detail-image" src={producto.imagen} alt={producto.nombre} />
    <p className="item-detail-location">{producto.lugar}</p>
    <p className="item-detail-info">Stock: {producto.stock}</p>
    <p className="item-detail-price">${producto.price}</p>
    {compra ? (
      <Link className="item-detail-button" to="/cart">Ir al Carrito</Link>
    ) : (
      <div className="item-count-button">
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      </div>
    )}
  </div>
);
};


export default ItemDetail
