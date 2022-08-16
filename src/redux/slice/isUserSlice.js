import { createSlice } from "@reduxjs/toolkit";
const isUserSlice = createSlice({
    name: "isUser",
    initialState: {
        isUserFlag :  false,
    },
    reducers: {
        setIsUser (state,action) {
            console.log("ne ")
            console.log(action.payload);
            state.isUserFlag = action.payload;
        }
    }
})
export const {setIsUser} = isUserSlice.actions;
export default isUserSlice.reducer;