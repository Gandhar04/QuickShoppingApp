import React from "react";
import { useCart } from "../Context/CardProvider";
import styles from "./Cartitems.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
function Cartitems({ id, title, price, quantity, img }) {
  const { dispatch, cart } = useCart();
  console.log(cart);

  function onIncrease() {
    console.log("increase");

    dispatch({ type: "INCREASE", payload: { id, quantity } });
  }

  function onDecrease() {
    console.log("decrease");
    if (quantity === 1) {
      return;
    } else {
      dispatch({ type: "DECREASE", payload: { id, quantity } });
    }
  }

  function onRemove() {
    dispatch({ type: "REMOVE", payload: { id } });
  }

  return (

    //new code 
    <div className={styles.cart}>
      <div className={styles.imgAndHeading}>
        <div className={styles.Container}><img src={img} className={styles.cartImg} /></div>
        <h1 className={styles.heading}>{title}</h1>
      </div>

      <div className={styles.otherTools}>
          <div className={styles.quantityControls}>
            <button className={styles.increase} onClick={onIncrease}><FaPlus /></button>
            <span>{quantity}</span>
            <button className={styles.decrease} onClick={onDecrease}><FaMinus /></button>
          </div>
          <div className={styles.price}>{price * quantity}</div>
          <button className={styles.remove} onClick={onRemove}><IoMdCloseCircle /></button>        
      </div>
    </div>
  );
}

export default Cartitems;
