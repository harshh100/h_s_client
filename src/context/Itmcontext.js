import { useContext, createContext, useEffect } from "react";
// import axios from "axios";

const AppContext = createContext();

// const API = "api";


const AppProvider = ({ children }) => {

    //get data
    // const getProducts = async (url) => {
    //     const res = await axios.get(url);
    //     console.log(res);
    // }

    // useEffect(() => {
    //     getProducts(API);
    // }, [])


    return (
        <AppContext.Provider value={{ name: 'harsh' }} >{children}</AppContext.Provider>
    )
}

//custom hook
const useName = () => {
    return useContext(AppContext);
}


export { AppProvider, AppContext, useName }
