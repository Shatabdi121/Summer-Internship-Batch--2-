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
            state.items=state.items.filter((item)=>{
                return item.card.info.id != action.payload.card.info.id
            })
        },
        clearCart:(state)=>{
            //cart item ==0
            state.items.length=0

        }
    }
})

export const {addItems,removeItems,clearCart}=cartSlice.actions
export default cartSlice.reducer;