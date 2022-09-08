import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LNDCoin } from "../../config/api";
// lấy thong tin tu api
const lndCoinSlice = createSlice({
    name: 'lndApi',
    initialState: {
        coin: "LND",
        imgSrc: '../images/lnd-logo.png',
        rank: 0,
        price: 0,
        marketCap: 0,
        status: false
    },
    reducers: {
       getLndApi:(state, action) => {
        state.price = action.payload.market_data.current_price.usd;
        state.marketCap = action.payload.market_data.market_cap.usd;
        state.rank = action.payload.market_cap_rank;
        state.status = true;
       } 
    }
})
// export const {setIsUser} = isUserSlice.actions;
export const {getLndApi} = lndCoinSlice.actions;
export default lndCoinSlice.reducer;