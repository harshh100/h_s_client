import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("hpCart");
    if (!localCartData) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_items: "",
    total_amount: "",
    shipping_fee: 100,
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (name, price, stock, amount) => {
        console.log("amount of " + name + " is : " + amount);
        alert(name + " added to your Cart !!")
        dispatch({ type: "ADD_TO_CART", payload: { name, price, stock, amount } });
    };

    const removeItem = (name) => {
        // console.log(name);
        dispatch({ type: "REMOVE_ITEM", payload: name });
    };

    const setDecrease = (name, stock) => {

        dispatch({ type: "DECREASE_ANOUNT", payload: { name, stock } });
    };

    const setIncrease = (name, stock) => {
        // console.log(name);
        // console.log("amount of " + name + " is : " + stock)
        dispatch({ type: "INCREASE_ANOUNT", payload: { name, stock } });
    };

    // to add the data in localStorage
    // get vs set

    useEffect(() => {
        const cartHasChanged = JSON.stringify(state.cart) !== localStorage.getItem("hpCart");
        if (cartHasChanged) {
            localStorage.setItem("hpCart", JSON.stringify(state.cart));
        }
    }, [state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, setIncrease, setDecrease }} >{children}</CartContext.Provider>;
};


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }