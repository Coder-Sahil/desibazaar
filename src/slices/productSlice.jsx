
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    filterProducts: [],
    filterBy: ''
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            //console.log(`Slice - ${action.payload}`)
            state.products = action.payload; //no return required
        }
        // getProduct: (state, action) => {
        //     
        // }
    }
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
