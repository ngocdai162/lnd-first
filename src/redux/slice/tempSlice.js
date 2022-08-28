import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LNDCoin } from "../../config/api";
export const fetchLndCoin = createAsyncThunk('price,getdatas', async () => {
    await  fetch(LNDCoin).then ((res) =>
     res.json()
    )
})
const lndCoinSlice = createSlice({
    name: 'lndCoin',
    initialState: {
        coin: "LND",
        imgSrc: '../images/lnd-logo.png',
        price: 0,
        status: false
    },
    reducers: {
       
    },
    extraReducers : {
        [fetchLndCoin.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.price = action.payload.market_data.current_price.usd;
            state.status = true;
        }
    }
})
// export const {setIsUser} = isUserSlice.actions;
export default lndCoinSlice.reducer;