import React, { useEffect, useState } from "react";
import Cartmodal from "./UI/Cartmodal";
import Cart from "./Cart";
import styles from "./PageHeader.module.css";
import HeaderContainer from "./UI/HeaderContainer";
import { useCart } from "../Context/CardProvider";
import { IoMdCart } from "react-icons/io";
function PageHeader() {
  const [isModalopen, setisModalopen] = useState(false);
  const { cart } = useCart();
  useEffect(() => {
    if (isModalopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalopen]);
  function onOpen() {
    setisModalopen(true);
  }
  function onclose() {
    setisModalopen(false);
  }
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className={styles.header}>
      <HeaderContainer>
      <nav className={styles.nav}>
          <h1 className={styles.logo}>ARC Project</h1>
          <button className={styles.showCartButton} onClick={onOpen}>
            <span className={styles.cartIconAndNumber}>
              <IoMdCart className={styles.cartIcon}/>
              {totalItems > 0 && <span className={styles.number}>{totalItems}</span>}
            </span>
            <span className={styles.cart}>Cart</span>
          </button>
        </nav>
      </HeaderContainer>
        
      
      {isModalopen && (
        <Cartmodal close={onclose}>
          <Cart />
        </Cartmodal>
      )}
    </header>
  );
}

export default PageHeader;
