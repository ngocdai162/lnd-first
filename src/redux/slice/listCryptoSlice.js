import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_LISTCRYPTO } from "../../config/api";
export const fetchListCrypto = createAsyncThunk('data,getdatas', async () => {
    return fetch(API_LISTCRYPTO).then ((res) =>
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
export default listCryptoSlice.reducer;