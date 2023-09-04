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

    const addToCart = (name, price, stock, amount) => {
        // console.log(name, price);
        alert(name + " added to your Cart !!")
        dispatch({ type: "ADD_TO_CART", payload: { name, price, stock, amount } });
    };

    const removeItem = (name) => {
        // console.log(name);
        dispatch({ type: "REMOVE_ITEM", payload: name });
    };

    const setDecrease = (name) => {
        dispatch({ type: "DECREASE_ANOUNT", payload: name });
    };

    const setIncrease = (name) => {
        // console.log(name);
        dispatch({ type: "INCREASE_ANOUNT", payload: name });
    };

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, setIncrease, setDecrease }} >{children}</CartContext.Provider>;
};


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }