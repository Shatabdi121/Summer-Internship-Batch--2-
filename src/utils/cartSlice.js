import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            //item add to cart
            state.items.push(action.payload)
            console.log(state.items);
            
        },
        removeItems:(state,action)=>{
            //item remove from cart
            state.items.pop()
        },
        clearCart:(state,action)=>{
            //cart item ==0
            state.items.length=0

        }
    }
})

export const {addItems,removeItems,clearCart}=cartSlice.actions
export default cartSlice.reducer;