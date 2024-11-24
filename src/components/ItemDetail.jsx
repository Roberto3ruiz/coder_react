import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} productos`)
    }


  return (
   
   <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <span></span>
      <h2 >Detalle de {producto.name}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.lugar}</p>
      <p>stock:{producto.stock}</p>
      <p>${producto.price}</p>
      <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail
