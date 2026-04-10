
export const cartReducer = (state, {type, payload}) => {

    switch(type){

        case("ADD_TO_CART"):
            return {
                ...state,
                cart : [...state.cart, payload]
            }
        case("REMOVE_FROM_CART"):
            return {
                ...state,
                cart : state.cart.filter(product => product.id != payload.id)
            }
         case("ADD_TO_WISHLIST"):
            return {
                ...state,
                wishList : [...state.wishList, payload]
            }
        case("REMOVE_FROM_WISHLIST"):
            return {
                ...state,
                wishList : state.wishList.filter(product => product.id != payload.id)
            }
            default:
                return state

    }

}