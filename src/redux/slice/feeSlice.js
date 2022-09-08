import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_GET_FEE } from "../../constants/api";

const feeSlice = createSlice({
    name: "fee",
    initialState: {
      fee: 0
    },
    reducers: {
        getFeeSuccess: (state,action) => {
            state.fee = action.payload.Fee;
        },
    },
})
export const {getFeeSuccess} = feeSlice.actions;
export default feeSlice.reducer;