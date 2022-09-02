import { createSlice } from "@reduxjs/toolkit";
const isUserSlice = createSlice({
    name: "isUser",
    initialState: {
        isUserFlag : null,
        type: null
    },
    reducers: {
        setIsUser (state,action) {
            state.isUserFlag = action.payload.isUser;
            state.type = action.payload.type;
        }
    }
})
export const {setIsUser} = isUserSlice.actions;
export default isUserSlice.reducer;