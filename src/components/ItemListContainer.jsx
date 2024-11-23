
import { useEffect, useState } from "react"

import { getProducts } from "../mock/Api"
import ItemList from "./ItemList"
const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => setItems(res))
            .catch((error) => console.log(error))
    }, [])




    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
            <ItemList items={items} />
        </div>
    )


}

export default ItemListContainer