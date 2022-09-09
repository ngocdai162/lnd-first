import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_LISTCRYPTO } from "../../config/api";
const listCryptoSlice = createSlice({
    name: "listCrypto",
    initialState: {
      data: [],
      status: false,
    },
    reducers: {
       fetchListCrypto(state,action) {
        state.data = action.payload;
       }
    },
})
export const {fetchListCrypto} = listCryptoSlice.actions
export default listCryptoSlice.reducer;