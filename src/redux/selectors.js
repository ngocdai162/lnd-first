export const userSelector = (state) => state.user;
export const isUserSelector = (state) => state.isUser.isUserFlag;
export const typeAccountSelector = (state) => state.isUser.type;
export const listCryptoSelector = (state) => state.listCrypto.data;
export const walletSelector = (state) => state.wallet.collection;
export const walletIdCoinActive = (state) => state.wallet.idActive;
export const usdSelector = (state) => state.wallet.collection[0];
export const lndSelector = (state) => state.lndCoin;
export const coinSwapSelector = (state) => state.coinSwap;
export const lndApiSelector = (state) => state.lndApi;
// export const feeSelector = (state) => state.lndMarketCap.fee;
export const feeSelector = (state) => state.fee.fee;
export const lndMarketCapSelector = (state) => state.lndMarketCap.marketCap;
export const coinChartSelector = (state) =>state.coinChart;
export const tempSelector = (state) =>state.temp;
export const feeProject = (state) => state.project.fee;
export const profitProject = (state) => state.project.profit;
// Auth 
export const isErrorLoginSelector = (state) => state.auth.login?.error;
export const currentUserSelector = (state) => state.auth.login?.currentUser;
export const coinSelector = (state) => state.coin;

