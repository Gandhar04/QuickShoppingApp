import React from "react";
import { createPortal } from "react-dom";
import styles from "./Cartmodal.module.css";

function Cartmodal({ children, close }) {
  return createPortal(
    <>
      <div className={styles.backDrop} onClick={close}></div>
      <div className={styles.modalcontent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Cartmodal;
