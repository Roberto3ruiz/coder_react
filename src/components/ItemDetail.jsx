import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

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
   
   <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <span></span>
      <h2 >Detalle de {producto.name}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.lugar}</p>
      <p>stock:{producto.stock}</p>
      <p>${producto.price}</p> 
      {compra ? <Link to='/cart'>Ir al Carrito</Link> : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail
