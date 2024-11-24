
import { useEffect, useState } from "react"

import { getProducts } from "../mock/Api"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])
const {categoryId} =useParams ()
console.log (categoryId)

    useEffect(() => {
        getProducts()
            .then((res) => {
                if(categoryId){
                    //filtro
                    setItems (res.filter ((producto)=>producto.category ===categoryId))
                }else{
                //respuesta sin filtro
                setItems (res)
            }

            })
            .catch((error) => console.log(error))
    }, [categoryId])




    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
            <ItemList items={items} />
        </div>
    )


}

export default ItemListContainer