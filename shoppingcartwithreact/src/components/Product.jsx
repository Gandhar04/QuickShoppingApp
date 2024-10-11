import React from "react";
import { useCart } from "../Context/CardProvider";
import { toast } from "react-toastify";
import styles from "./Product.module.css";
function Product({ id, title, price, img }) {
  const { dispatch, cart } = useCart();
  function addtoCart() {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        toast('Item already in cart');
        return;
      }
    }
    const newItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };

    dispatch({
      type: "ADD_TO_CART",
      payload: newItem,
    });
  }
  return (
    <div
      className={styles.product}
    >
      <img src={img} alt="productImg" className={styles.img}/>
      <p className={styles.title}>name: {title}</p>
      <p className={styles.price} >Price: {price}</p>
      <button className={styles.addToCartBtn} onClick={addtoCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
