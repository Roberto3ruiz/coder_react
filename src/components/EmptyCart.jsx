import React from 'react'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div>
            <h2>
                Tu carrtio esta vacio
            </h2>

            <h4>
                Te invitamos a ver nuersttros productos
            </h4>

            <Link to='/'>Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart