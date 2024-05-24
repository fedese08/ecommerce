"use client";
// contexts/CartContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((i) => i.item.id === item.id);
    if (existingItem) {
      existingItem.quant += 1;
    } else {
      let product = {
        item: item,
        quant: 1,
      };
      setCartItems([...cartItems, product]);
    }
    cartQuant();
  };

  const removeItemFromCart = (id) => {
    const existingItem = cartItems.find((i) => i.item.id === id);
    if (existingItem && existingItem.quant > 1) {
      existingItem.quant -= 1;
      setCartItems([...cartItems]);
    } else {
      const newCartItems = cartItems.filter((i) => i.item.id !== id);
      setCartItems(newCartItems);
    }
    cartQuant();
  };

  const [cartQuantity, setCartQuantity] = useState();

  useEffect(() => {
    cartQuant();
  }, [cartItems]);

  const cartQuant = () => {
    let quantity = 0;
    cartItems.forEach((i) => (quantity += i.quant));
    setCartQuantity(quantity);
    console.log(cartQuantity);
    return cartQuantity;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuant,
        cartQuantity,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
