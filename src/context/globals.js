import { createContext, useContext, useState, useEffect } from "react";
import mockCategories from '../mock'

export const GlobalsContext = createContext()

export const GlobalsProvider = ({ children }) => {
    const [categories, setCategories] = useState(mockCategories)
    const [amount, setAmount] = useState(0)
    const [discount, setDiscount] = useState(0)

    return (<GlobalsContext.Provider value={{
        categories, setCategories,
        amount, setAmount,
        discount, setDiscount
    }}>
        {children}
    </GlobalsContext.Provider>);
}

export const useGlobals = () => {
    const {
        categories,
        setCategories,
        amount,
        setAmount,
        discount,
        setDiscount
    } = useContext(GlobalsContext);

    return {
        categories,
        setCategories,
        amount,
        setAmount,
        discount,
        setDiscount
    }
}