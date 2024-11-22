import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Cart Context
const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cartItems change
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // And save the cart to localStorage whenever it changes
  useEffect(() => {
    console.log("Updating localStorage with cartItems:", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  console.log(cartItems);

  const addToCart = (product) => {
    console.log("Adding to cart: ", product);
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      updateItemCount(existingProduct.id, existingProduct.count + 1);
    } else {
      setCartItems((prevItems) => {
        const updatedItems = [
          ...prevItems,
          { ...product, count: 1, total: product.price }, // Ensure total is initialized
        ];
        console.log("Updated Cart: ", updatedItems);
        return updatedItems;
      });
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? { ...item, count: newQuantity, total: item.price * newQuantity }
          : item
      );
    });
  };

  const updateItemCount = (id, count) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, count, total: item.price * count } : item
      );
      return updatedItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateItemCount,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
