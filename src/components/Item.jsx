import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div>
     <img src={producto.imagen} alt={producto.nombre} />
     <p>{producto.nombre}</p>
     <p>${producto.price}</p>
     <Link className='btn btn-primary' to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  )
}

export default Item
