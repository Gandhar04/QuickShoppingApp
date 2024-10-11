import React from "react";
import Product from "./Product";
import { products } from "../data/Products";
import styles from "./Products.module.css";
import HeaderContainer from "./UI/HeaderContainer";

function Products() {
  return (
    <HeaderContainer>
      <h1>Best of ARC</h1>
      <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      </div>
      
    </HeaderContainer>
  );
}

export default Products;
