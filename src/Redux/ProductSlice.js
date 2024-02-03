import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data: []
    },
    reducers:{
        setProducts(state, action){
            state.data = action.payload
        }
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer

export function fetchProduct(){
    return async function fetchProductThunk(dispatch, getState){
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            dispatch(setProducts(data))
            console.log(data)
        }
        catch(err){}
    }
}