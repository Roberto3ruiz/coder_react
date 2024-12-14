import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'


const CartList = () => {
  const {cart, cartTotal, clear} = useCart ()
    return (
    <div>
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod} /> )}
        <span> Total a pagar $ {cartTotal () }   </span>
        <div>
            <button  onClick={clear}>Borrar Carrito</button>
            <button>Terminar Compra</button>

        </div>
    </div>
  )
}

export default CartList