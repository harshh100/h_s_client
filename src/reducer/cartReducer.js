const cartReducer = (state, action) => {
    // console.log(action.type);
    if (action.type === "ADD_TO_CART") {
        let { name, price, stock, amount } = action.payload;
        // console.log(state.cart);
        let cartProduct = {
            name: name,
            price: price,
            stock: stock,
            amount: 1,
        }

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }
    return state;
}

export default cartReducer;