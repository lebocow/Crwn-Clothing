import { createContext, useState, useEffect } from "react";

const addQuantity = (cartItems, productToAdd) =>
  cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return addQuantity(cartItems, productToAdd);
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const substractQuantity = (cartItems, productToSubstract) =>
  cartItems
    .map((cartItem) => {
      if (cartItem.id !== productToSubstract.id) {
        return cartItem;
      }
      const updatedQuantity = cartItem.quantity - 1;
      return updatedQuantity === 0
        ? null
        : { ...cartItem, quantity: updatedQuantity };
    })
    .filter((item) => item);

const deleteItemCart = (cartItems, productToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  addItemQuantity: () => {},
  substractItemQuantity: () => {},
  deleteItemFromCart: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);

    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const addItemQuantity = (productToAdd) => {
    setCartItems(addQuantity(cartItems, productToAdd));
  };

  const substractItemQuantity = (productToSubstract) => {
    setCartItems(substractQuantity(cartItems, productToSubstract));
  };

  const deleteItemFromCart = (productToSubstract) => {
    setCartItems(deleteItemCart(cartItems, productToSubstract));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    setCartCount,
    addItemQuantity,
    substractItemQuantity,
    deleteItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
