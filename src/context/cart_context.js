import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("UmerCart");
    const parseData = JSON.parse(localCartData)
    if (!Array.isArray(parseData)) return [] 
        return parseData;
};
const initialState = {
    cart: getLocalCartData(),
    // cart:[],
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //To add item into cart
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };
    //To remove item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    // to empty or to clear to cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }
      // increment and decrement the product
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
    // to add the data in localStorage
    // get vs set
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("UmerCart", JSON.stringify(state.cart));
    }, [state.cart]);
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrement }}>
            {children}
        </CartContext.Provider>
    );
};
// Custom Hook
export const useCartContext = () => {
    return useContext(CartContext);
};