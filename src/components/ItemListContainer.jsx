import { useEffect, useState } from "react";
import { getProducts } from "../mock/Api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams(); // Usamos categoryId desde los parámetros de la ruta

    useEffect(() => {
        setIsLoading(true);

        // Conectar con la colección en Firestore
        const productsCollection = collection (db, "productos");

        // Pedir documentos
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data(),
                    };
                });

                // Filtrar por categoría si `categoryId` está definida
                if (categoryId) {
                    const filteredList = list.filter((item) => item.category === categoryId);
                    setItems(filteredList);
                } else {
                    setItems(list);
                }
            })
            .catch((error) => {
                console.error("Error al cargar productos:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [categoryId]); // Usamos categoryId como dependencia

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
