import { createContext, useContext, useReducer, useEffect } from "react";
import toast from 'react-hot-toast';
import reducer from '../reducer/orderReducer'
// import axios from "axios";

const OrderContext = createContext();

const initialState = {
    userName: "",
    userPhone: "",
    receiptNo: "",
    verified: false,
};

const OrderProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    const setuserName = (name) => {
        // console.log(name);
        dispatch({ type: "SETUSERNAME", payload: name });
    };

    const setuserPhone = (phone) => {
        dispatch({ type: "SETUSERPHONE", payload: phone });
    };

    // const setreceiptNo = async () => {
    //     // const tail = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    //     // dispatch({ type: "SETRECEIPTNO", payload: tail });
    // };

    // const sendotp = async () => {
    //     // const url = "http://localhost:8080/api/sendotp";
    //     // try {
    //     //     const res = await axios.post(url, { phoneNumber: userPhone });
    //     //     // console.log("response : " + res);
    //     //     const products = await res.data;
    //     //     dispatch({ type: "SET_API_DATA", payload: products });
    //     // } catch (error) {
    //     //     dispatch({ type: "API_ERROR" });
    //     // }
    // };

    // const checkverified = (status) => {
    //     // console.log(name);
    //     dispatch({ type: "CHECKVERIFIED", payload: status });
    // };




    return <OrderContext.Provider value={{ ...state, setuserName, setuserPhone }}>{children}</OrderContext.Provider>

}

const useOrderContext = () => {
    return useContext(OrderContext);
}

export { OrderProvider, useOrderContext }