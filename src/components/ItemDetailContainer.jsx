import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/Api'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams(); // Usamos categoryId desde los parámetros de la ruta
  // Firebase

  useEffect(() => {
    setIsLoading(true);
    //collection y proyecto de Firebase
    const collectionProd = collection(db, "productos")
    //creamos referencia
    const docRef = doc(collectionProd, id)
//traer documento
      getDoc (docRef) 
      .then ((res )=> setProducto ({id: res.id, ...res.data()}) )
      .catch ((error)=> console.log (error) )
      .finally(()=>setIsLoading(false))
  }, [])

  // MOCK LOCAL
  // const {id} = useParams ()

  // useEffect(()=>{
  //     getOneProduct (id)
  //     .then ((res)=>setProducto(res))
  //     .catch ((error)=> console.log(error))
  // },[])
  // console.log (producto)

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer
