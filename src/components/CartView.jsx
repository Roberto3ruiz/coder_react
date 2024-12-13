import React from 'react'
import { useCart } from '../context/CartContext'
import EmptyCart from './EmptyCart'


const CartView = () => {
    const { cart } = useCart ()

  return (
    <div>

    {!cart.length ? <EmptyCart/> : <div>
        <h2>Tu carrito</h2>
    </div> }

    </div>
  )
}

export default CartView