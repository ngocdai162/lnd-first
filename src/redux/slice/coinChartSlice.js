import { createSlice } from "@reduxjs/toolkit";
const coinChartSlice = createSlice({
    name: "coinChart",
    initialState : {
        id:"",
        marketCap : 0,
        marketCapRank: 0,
        coin: "",
        imgSrc: '',
        price: 0,
    },
    reducers: {
        getCoinChart(state,action){
            state.id = action.payload.id;
            state.marketCap = action.payload.market_cap;
            state.marketCapRank = action.payload.market_cap_rank;
            state.coin = action.payload.name;
            state.imgSrc = action.payload.image;
            state.price = action.payload.current_price
        }
    }
})
export const {getCoinChart} = coinChartSlice.actions;
export default coinChartSlice.reducer;