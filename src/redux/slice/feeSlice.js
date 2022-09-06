import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_GET_FEE } from "../../constants/api";

const feeSlice = createSlice({
    name: "fee",
    initialState: {
      fee: 0
    },
    reducers: {
        getFeeSuccess: (state,action) => {
            console.log(action.payload);
            state.fee = action.payload.Fee;
            console.log(state.fee)
        },
    },
    // extraReducers : {
    //     [fetchFee.fulfilled]: (state, action) => {
    //         console.log("coi ne");
    //         if(typeof(action.payload) ==="object") {
    //             console.log(action.payload)
    //             state.fee = action.payload.Fee;
    //             console.log(state.fee)
    //         }
    //     }
    // }
})
// export const {setIsUser} = isUserSlice.actions;
export const {getFeeSuccess} = feeSlice.actions;
export default feeSlice.reducer;