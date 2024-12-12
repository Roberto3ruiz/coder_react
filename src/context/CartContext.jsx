import { createContext, useState } from "react";

export const CartContext = createContext ()

export const CartProvider = ({children}) => {
    const [ cart, setCart] = useState ([])

    const addToCart = (item, quantity) => {
        if(isInCart (item.id)){
       setCart(
        cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, cantidad:prod.cantidad + quantity}
            }  else {
                return prod;
            }
        })
       )
        }else{
            //sumar un item nuevo al carito
            setCart ([...cart, {...item, cantidad : quantity }])
        }
    }

    const isInCart = (id)=>{
        return cart.some ((prod)=> prod.id === id)
    }
    console.log(cart, 'carrito')
return (
   <CartContext.Provider value={{cart, addToCart}}>
        {children}


   </CartContext.Provider> 
)

}