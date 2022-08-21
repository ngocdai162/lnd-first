import { createSlice } from "@reduxjs/toolkit";
const cryptoSlice = createSlice({
    name: "cryptoSlice",
    initialState : {
        id:"",
        name : "",
        price: "",
        marketCap: "",
        favorite: false
    },
    reducers: {
        getCryptoInfo(state,action) {
        }
    }
})
export default cryptoSlice.reducer;