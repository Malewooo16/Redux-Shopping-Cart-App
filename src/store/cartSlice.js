import { createSlice } from "@reduxjs/toolkit";

const cart= createSlice({
    name: "cart",
    initialState: {
        itemsList:[],
        totalQuantity:0,
        showCart:false,
    },
    reducers: {
       addToCart(state,action){
        const newItem=action.payload
        //Check if item is available
        const existingItem=state.itemsList.find((i)=>i.id===newItem.id)

        if(existingItem){
            existingItem.quantity++
            existingItem.totalPrice+=newItem.price
        }
        else{
            state.itemsList.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.name
            })

            state.totalQuantity++
        }
       },
       removeFromCart(state,action){
           const id = action.payload 
           
           const existingItem = state.itemsList.find((i)=>i.id===id)

           if(existingItem.quantity===1){
             state.itemsList=state.itemsList.filter((i)=> i.id !==id)
             state.totalQuantity--
           }

           else{
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price
           }
        
       },
       setShowCart(state){
        state.showCart=!state.showCart;
       }
    },
 
})

export const { addToCart, removeFromCart, setShowCart } = cart.actions
export default cart.reducer