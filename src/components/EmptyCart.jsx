import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/EmptyCart.css';

const EmptyCart = () => {
    const heroImage = '/empty.jpg'; // Ruta carrito vacio

    return (
        <div className="empty-cart-container">
            <div
                className="empty-cart-hero"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <h1 className="empty-cart-title">Tu carrito está vacío</h1>
            <p className="empty-cart-subtitle">
                ¿Aún no te has decidido? Tenemos una carrera cerca de ti. Revisa nuestro menú.
            </p>
            <Link to="/" className="empty-cart-link">
                Ir a comprar
            </Link>
        </div>
    );
};

export default EmptyCart;

