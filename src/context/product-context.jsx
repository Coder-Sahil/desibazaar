import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productreducer";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const initialState = {
        product : [],
        filterProduct : []
    }

    const [{product, filterProduct}, productDispatch] = useReducer(productReducer, initialState)

    return (
        <ProductContext.Provider value={{product,filterProduct, productDispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export {ProductContext, useProduct}

