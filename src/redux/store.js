import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './slice/userSlice'
import isUserReducer from "./slice/isUserSlice";
const store = configureStore({
    reducer: {
        isUser: isUserReducer,
        user: userReducer,
    }
})
export default store;