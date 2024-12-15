import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import '../estilos/CartList.css';



const CartList = () => {
  const {cart, cartTotal, clear} = useCart ()
  return (
    <div className="cart-list-container">
      <h2 className="cart-list-title">Tu Carrito</h2>
      {cart.map((prod) => (
        <div key={prod.id} className="cart-item">
          <img src={prod.img} alt={prod.name} />
          <div className="cart-item-details">
            <p className="cart-item-name">{prod.name}</p>
            <p className="cart-item-quantity">Cantidad: {prod.cantidad}</p>
            <p className="cart-item-price">Precio: ${prod.price}</p>
          </div>
          <button className="cart-item-remove" onClick={() => removeItem(prod.id)}>
            Eliminar
          </button>
        </div>
      ))}
      <div className="cart-actions">
        <p className="cart-total">Total a pagar: ${cartTotal()}</p>
        <button className="clear-cart" onClick={clear}>
          Borrar Carrito
        </button>
        <button>Terminar Compra</button>
      </div>
    </div>
  );
};

export default CartList