import { createContext, useContext, useState } from "react";
import mockCategories from '../mock'

export const GlobalsContext = createContext()

export const GlobalsProvider = ({ children }) => {
    const [categories, setCategories] = useState(mockCategories)

    return (<GlobalsContext.Provider value={{
        categories, setCategories
    }}>
        {children}
    </GlobalsContext.Provider>);
}

export const useGlobals = () => {
    const {
        categories,
        setCategories
    } = useContext(GlobalsContext);

    return {
        categories,
        setCategories
    }
}