import { createSlice } from "@reduxjs/toolkit";
const coinChartSlice = createSlice({
    name: "coinChart",
    initialState : {
        coinId:"",
        marketCap : 0,
        marketCapRank: 0,
        coin: "",
        imgSrc: '',
        price: 0,
    },
    reducers: {
        getCoinChart(state,action){
            console.log(action.payload)
            state.coinId = action.payload.id;
            state.marketCap = action.payload.market_cap;
            state.marketCapRank = action.payload.market_cap_rank;
            state.coin = action.payload.name;
            state.imgSrc = action.payload.image;
            state.price = action.payload.current_price
            console.log(state);
            console.log(state.coinId)
            console.log(state.id)
        }
    }
})
export const {getCoinChart} = coinChartSlice.actions;
export default coinChartSlice.reducer;