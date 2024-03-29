import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    initialState,
    name:'cart',
    reducers:{
        add(state, action){
            state.push(action.payload)            
        },
        remove(state, action){
            console.log(action)
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions
export default cartSlice.reducer