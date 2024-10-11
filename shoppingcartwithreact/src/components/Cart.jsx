import React from "react";
import Cartitems from "./Cartitems";
import { useCart } from "../Context/CardProvider";
import styles from "./Cart.module.css";
function Cart() {
  const { cart } = useCart();
  const Total = cart.reduce((Total, items) => {
    return Total + items.price * items.quantity; // This is correct
  }, 0);
  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Shopping Cart</h1>
      <div>
      {cart.map((item) => (
        <Cartitems key={item.id} {...item} />
      ))}
      <h1>Total: {Total}</h1>
    </div>
    </div>
    
  );
}

export default Cart;
