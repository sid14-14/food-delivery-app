import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) { //if user adds an items first time into the cart, we create a new entry
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else { //if the item is already available we just increment
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(()=>{ //when the cartitems are updated, we log it
    console.log(cartItems);
  }, [cartItems])
  const contextValue = { //any el added to this obj we can access it from any component 
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
