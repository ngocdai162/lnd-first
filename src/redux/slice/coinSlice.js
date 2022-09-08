import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LNDCoin } from "../../config/api";
// lấy thong tin tu api
const coinSlice = createSlice({
    name: 'coin',
    initialState: {
        name: '',
        imgSrc: '',
        rank: 0,
        price: 0,
        marketCap: 0,
    },
    reducers: {
       getCoinApi:(state, action) => {
        // console.log("data neeee")
        // console.log(action.payload)
        state.name = action.payload.name;
        state.imgSrc = action.payload.image.thumb;
        state.price = action.payload.market_data.current_price.usd;
        state.marketCap = action.payload.market_data.market_cap.usd;
        state.rank = action.payload.market_cap_rank;
       } 
    }
})
// export const {setIsUser} = isUserSlice.actions;
export const {getCoinApi} = coinSlice.actions;
export default coinSlice.reducer;