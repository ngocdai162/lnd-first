import {createSlice} from "@reduxjs/toolkit";
const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        collection : [
            {   
                key: 1,
                id: 'usd',
                coin: "USD",
                imgSrc: '',
                price: 1,
                amount: 120
            },
            {   
                key: 2,
                id: 'lnd',
                coin: "LND",
                imgSrc: '',
                price: 15,
                amount: 30
            },
            {
                id: "bitcoin",
                amount: 60
            }
        ],
        status: "",
    },
    reducers: {
        //lay mot luong usd ngau nhien khi dang ky
        getUSD(state,action) {  
            state.collection.coin = "USD";
            state.collection.amount = action.payload.amount;
        },
        //add them coin luc swap
        addCoin(state,action) {
            state.collection.push(action.payload);
        },
       
    }
})
export const {getUSD, addCoin} =  walletSlice.actions;
export default walletSlice.reducer;