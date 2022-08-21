import {createSlice} from "@reduxjs/toolkit";
const lndCoinSlice = createSlice({
    name: 'lndCoin',
    initialState: {
        coin: "LND",
        imgSrc: '../images/lnd-logo.png',
        price: 2,
        amount: 200
    },
    reducers: {
        updateImg(state,action) {
            state.imgSrc = action.payload //tam
        }
    }
})
export const {updateImg} = lndCoinSlice.actions;
export default lndCoinSlice.reducer;