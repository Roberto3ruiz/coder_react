import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({prod}) => {
  const {removeItem} = useCart ()
  return (
    <div>
      <img  src={prod.img} alt={prod.name} style={ {width:'10rem'}}/>
      <span>{prod.name}</span>
      <span>{prod.cantidad}</span>
      <span>{prod.price}</span>
      <span>Precio final : $ {prod.cantidad*prod.price}.oo</span>
      <button className=''onClick={  ()=> removeItem (prod.id) } >X</button>

     </div>
  )
}

export default CartItem