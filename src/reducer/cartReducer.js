const cartReducer = (state, action) => {
    // console.log(action.type);
    if (action.type === "ADD_TO_CART") {
        let { name, price, stock, amount } = action.payload;
        // console.log(state.cart);
        let cartProduct = {
            name: name,
            price: price,
            stock: stock,
            amount: amount,
        }
        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }

    if (action.type === "REMOVE_ITEM") {
        // console.log(action.type);
        let updatedCart = state.cart.filter(
            (curItem) => curItem.name !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "INCREASE_ANOUNT") {
        // console.log(action.type);
        let name = action.payload;
        let t_cart = state.cart;
        // console.log("state : " + JSON.stringify(state.cart));
        // console.log("Cart" + JSON.stringify(t_cart[0]) + "\n" + "name : " + name);
        const updatedCart = t_cart.map(item => {
            if (item.name === name) {
                return {
                    ...item,
                    amount: item.amount + 1,
                };
            }
            return item;
        });

        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "DECREASE_ANOUNT") {
        // console.log(action.type);
        let name = action.payload;
        let t_cart = state.cart;
        // console.log("state : " + JSON.stringify(state.cart));
        // console.log("Cart" + JSON.stringify(t_cart[0]) + "\n" + "name : " + name);
        const updatedCart = t_cart.map(item => {
            if (item.name === name) {
                return {
                    ...item,
                    amount: item.amount - 1,
                };
            }
            return item;
        });

        return {
            ...state,
            cart: updatedCart,
        };
    }
    return state;
}

export default cartReducer;