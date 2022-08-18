import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        //thong tin user
        id:null,
        name:"Test",
        password:"",
        email:"",
        avt:""
    },
    reducers: {
        updateUserInfo(state,action) {
            state = action.payload //tam
        }
    }
})
export const {updateUserInfo} =  userSlice.actions;
export default userSlice.reducer;