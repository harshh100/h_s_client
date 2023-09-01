import { useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ name: 'harsh' }} >{children}</AppContext.Provider>
    )
}

//custom hook
const useName = () => {
    return useContext(AppContext);
}


export { AppProvider, AppContext, useName }
