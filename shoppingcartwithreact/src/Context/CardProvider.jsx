import React, { useReducer } from "react";
import { createContext, useContext } from "react";
const cartContext = createContext();
function CardProvider({ children }) {
  function cartReducer(cart, action) {
    if (action.type === "ADD_TO_CART") {
      return [...cart, action.payload];
    }
    if (action.type === "INCREASE") {
      // console.log("dispatched increase");
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    }
    if (action.type === "DECREASE") {
      // console.log("dispatched decrease");
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    }

    if (action.type === "REMOVE") {
      return cart.filter((item) => item.id !== action.payload.id);
    }
  }
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
export function useCart() {
  return useContext(cartContext);
}
export default CardProvider;
