import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchListCrypto = createAsyncThunk('data,getdatas', async () => {
    return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then ((res) =>
     res.json()
    )
})
const listCryptoSlice = createSlice({
    name: "listCrypto",
    initialState: {
      data: [],
      status: false,
    },
    reducers: {
       
    },
    extraReducers : {
        [fetchListCrypto.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = true;
        }
    }
})
// export const {setIsUser} = isUserSlice.actions;
export default listCryptoSlice.reducer;