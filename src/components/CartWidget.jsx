import { useContext } from "react";
import { CartContext } from "../context/CartContext";
useContext

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  console.log(cart)

  return (
    <div className="cartWidgetContainer">
      <img src="/cart.svg" alt="cart" className="cartIcon" />
      <p className="cartCounter">20</p>
    </div>
  );
};

export default CartWidget;
