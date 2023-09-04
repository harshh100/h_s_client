import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ name, amount, setDecrease, setIncrease }) => {
    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={() => setDecrease(name)}>
                    <FaMinus />
                </button>
                <div className="amount-style">{amount}</div>
                <button onClick={() => setIncrease(name)}>
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default CartAmountToggle;