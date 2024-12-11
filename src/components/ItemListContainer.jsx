import { useEffect, useState } from "react";

import { getProducts } from "../mock/Api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getProducts()
            .then((res) => {
                if (categoryId) {
                    // Filter products by category
                    setItems(res.filter((product) => product.category === categoryId));
                } else {
                    // Set all products
                    setItems(res);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;