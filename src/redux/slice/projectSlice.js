import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
const projectSlice = createSlice({
    name: 'lndCoin',
    initialState: {
        fee: 5,
        profit: 45261
    },
    reducers: {
       setFee  (state,action) {
        state.fee = action.payload; 
       },
       plusProfit (state,action) {
        state.profit = state.profit + action.payload;
       }
    },
    // extraReducers : {
    //     [fetchFeeProject.fulfilled]: (state, action) => {
    //         state.fee = action.payload;
    //     },
    //     [fetchProfitProject.fulfilled]: (state, action) => {
    //         state.profit = action.payload;
    //     }
    // }
})
export const {setFee, plusProfit} = projectSlice.actions;
export default projectSlice.reducer;