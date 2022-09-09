import {bindActionCreators, createSlice} from "@reduxjs/toolkit";
const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        collection : [],
        idAcive: "",
    },
    reducers: {
        // Lấy toàn bộ coin trong ví
        getCoins(state,action) {
          state.collection = action.payload;
        },

        setIdActive(state,action) {
            state.idAcive = action.payload;
        },
        //lay mot luong usd ngau nhien khi dang ky
        getUSD(state,action) {  
            state.collection.coin = "USD";
            state.collection.amount = action.payload.amount;
        },
        //add them coin luc swap
        addCoin(state,action) {
            state.collection.push(action.payload.coinSwap);
            console.log(action.payload.lnd.id);
            const indexLnd = state.collection.findIndex(({id}) => id==action.payload.lnd.id)
            state.collection[indexLnd].amount = state.collection[indexLnd].amount + action.payload.lnd.changeValue;
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
export const {setIdActive,getUSD,addCoin,updateCoin,getCoins} =  walletSlice.actions;
export default walletSlice.reducer;