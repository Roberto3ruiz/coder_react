import React from 'react'

const Item = ({producto}) => {
  return (
    <div>
     <img src={producto.imagen} alt={producto.nombre} />
     <p>{producto.nombre}</p>
     <p>${producto.price}</p>
     <button className='btn btn-primary'>Ver más</button>
    </div>
  )
}

export default Item
