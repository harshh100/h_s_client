import { createContext, useContext, useReducer, useEffect } from "react";
import toast from 'react-hot-toast';
import reducer from '../reducer/orderReducer'
import axios from "axios";
import otpGenerator from "otp-generator";

const OrderContext = createContext();

const initialState = {
    userName: "",
    userPhone: "",
    receiptNo: "",
    userotp: "",
    otpverified: false,
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

    const setuserotp = (otp) => {
        dispatch({ type: "SETOTP", payload: otp });
    };

    const sendotp = async (phoneNumber, userName) => {

        // console
        if (userName.length < 5) {
            return toast.error("Name Must be at least 5 characters");
        }

        const phonePattern = /^(?:(?:\+|00)1\s*-?)?(?:\(\d{3}\)|\d{3})\s*-?\d{3}\s*-?\d{4}$/;
        if (!phonePattern.test(phoneNumber)) {
            return toast.error("Enter Valid Phone Number");
        }
        console.log("sendotp");
        try {
            const res = await axios.post("http://localhost:8080/api/sendotp", { phoneNumber });
            const { msg } = await res.data;
            // console.log("response : " + res);
            return toast.success(msg);
        } catch (error) {
            return toast.error("Error To sendotp !!");
            // dispatch({ type: "API_ERROR" });
        }
    };

    const setreceiptNo = async () => {
        const tail = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
        dispatch({ type: "SETRECEIPTNO", payload: tail });
    };

    // const checkverified = (status) => {
    //     // console.log(name);
    //     dispatch({ type: "CHECKVERIFIED", payload: status });
    // };




    return <OrderContext.Provider value={{ ...state, setuserName, setuserPhone, sendotp, setuserotp }}>{children}</OrderContext.Provider>

}

const useOrderContext = () => {
    return useContext(OrderContext);
}

export { OrderProvider, useOrderContext }