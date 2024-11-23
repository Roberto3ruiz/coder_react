import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/Api'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto]=useState ({})
    useEffect(()=>{
        getOneProduct ('1')
        .then ((res)=>setProducto(res))
        .catch ((error)=> console.log(error))
    },[])
    console.log (producto)

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer
