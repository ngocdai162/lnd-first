import {bindActionCreators, createSlice} from "@reduxjs/toolkit";
const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        collection : [
            {   
                id: 'usd',
                coin: "USD",
                imgSrc: '',
                price: 1,
                amount: 120
            },
            {   
                id: 'lnd',
                coin: "LND",
                imgSrc: '',
                price: 15,
                amount: 30
            },
            {
                id: 'bitcoin',
                coin: "LND",
                imgSrc: '',
                price: 15,
                amount: 30
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
        //update amount cho coin 
        updateCoin(state,action) {
           const indexCoinSwap = state.collection.findIndex(({id}) => id===action.payload.coinSwap.id)
           state.collection[indexCoinSwap].amount =state.collection[indexCoinSwap].amount + action.payload.coinSwap.changeValue;
           const indexLnd = state.collection.findIndex(({id}) => id===action.payload.lnd.id)
           state.collection[indexLnd].amount =state.collection[indexLnd].amount + action.payload.lnd.changeValue;
        }
    }
})
export const {getUSD, addCoin,updateCoin} =  walletSlice.actions;
export default walletSlice.reducer;