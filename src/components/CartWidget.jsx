import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
useContext

const CartWidget = () => {
  const {cartQuantity} = useCart ()
  return (
    <div className="cartWidgetContainer">
      <img src="/cart.svg" alt="cart" className="cartIcon" />
      <p className="cartCounter">{cartQuantity ()}</p>
    </div>
  );
};

export default CartWidget;
