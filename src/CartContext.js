import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const handleUpdateCart = (item) => {
        setCartItems([...cartItems, item]);
    };
    
    return <CartContext.Provider value={{handleUpdateCart, cartItems}}>{children}</CartContext.Provider>;
};