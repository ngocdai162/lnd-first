import {  createSlice } from "@reduxjs/toolkit";
const listUserSlice = createSlice({
    name: "listUser",
    initialState: {
      data: [],
      status: false,
    },
    reducers: {
       fetchListUser(state,action) {
        state.data = action.payload;
       }
    },
})
export const {fetchListUser} = listUserSlice.actions
export default listUserSlice.reducer;