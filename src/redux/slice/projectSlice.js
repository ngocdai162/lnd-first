import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// export const fetchFeeProject = createAsyncThunk('data,getdatas', async () => {
//     return fetch('api get fee').then ((res) =>
//     // return fetch('api get fee and profit').then ((res) =>
//      res.json()
//     )
// })
// export const fetchProfitProject = createAsyncThunk('data,getdatas', async () => {
//     return fetch('api get profit').then ((res) =>
//     // return fetch('api get fee and profit').then ((res) =>
//      res.json()
//     )
// })
// createAsyncThunk set fee
// createAsyncThunk plus profit
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