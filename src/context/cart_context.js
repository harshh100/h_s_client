import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();
const initialState = {
    cart: [],
    total_items: "",
    total_amount: "",
    shipping_fee: 100,
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (name, price, stock) => {
        // console.log(name, price);
        alert(name + " added to your Cart !!")
        dispatch({ type: "ADD_TO_CART", payload: { name, price, stock } });
    };

    return <CartContext.Provider value={{ ...state, addToCart }} >{children}</CartContext.Provider>;
};


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }