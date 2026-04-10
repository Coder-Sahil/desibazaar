
export const productReducer = (state, {type, payload}) => {

    switch(type){

        case("SET_FILTERPRODUCT"):
            return {
                ...state,
                // filterProduct : [...state.filterProduct, payload.product]
                filterProduct : payload.product
            }
        case("GET_PRODUCT"):
            return {
                ...state,
                product : [...state.product, payload.product]
            }
        case("SET_FILTER"):
            return {
                ...state,
                filter : payload.filter
            }
            default:
                return state

    }

}