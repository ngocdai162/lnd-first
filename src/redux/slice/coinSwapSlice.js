import { createSlice } from "@reduxjs/toolkit";
const coinSwapSlice = createSlice({
    name: "coinSwap",
    initialState : {
        id:"",
        coin: "",
        imgSrc: '',
        price: 0,
        amount: 0
    },
    reducers: {
        swapToLND(state,action){
            state.id = action.payload.id;
            state.coin = action.payload.name;
            state.imgSrc = action.payload.image;
            state.price = action.payload.current_price
        }
    }
})
export const {swapToLND} = coinSwapSlice.actions;
export default coinSwapSlice.reducer;