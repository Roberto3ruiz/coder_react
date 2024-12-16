import React from 'react'
import Item from './Item'

const ItemList = ({items})=> {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center', // Centra las tarjetas en el contenedor
      alignItems: 'center',
      flexWrap: 'wrap', // Permite que las tarjetas se ajusten a múltiples filas
      gap: '2rem', // Espacio entre tarjetas
      maxWidth: '1200px', // Ancho máximo para que no se estiren demasiado
      margin: '0 auto', // Centra el contenedor de las tarjetas en la página
      padding: '1rem',
    }}
  >
        {items.map((producto)=><Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList