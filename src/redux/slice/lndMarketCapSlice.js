import { createSlice } from "@reduxjs/toolkit";
const lndMarketCapSlice= createSlice({
    name: "lndMarketCap",
    initialState: {
       fee: 5,
       marketCap: 0
    },
    reducers: {
        adjustFee(state,action) {
            state.fee = state.fee + action.payload;
        },
        plusMarketCap(state,action) {
            state.marketCap = state.marketCap + state.fee;
        }
    }
})
export const {plusMarketCap,adjustFee} = lndMarketCapSlice.actions;
export default lndMarketCapSlice.reducer;