import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartreducer";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const initialState = {
        cart : [],
        wishList : []
    }

    const [{cart, wishList}, cartDispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{cart,wishList, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart}

