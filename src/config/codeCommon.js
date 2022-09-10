
//CHECK WALLET
// const [checkCoin,setCheckCoin] = useState();
// const temp = async () => {
//     let check = await checkWallet({
//     userId: user.userId,
//     coinId:'usd'
//     })
//     setCheckCoin(check);
//     console.log(checkCoin); 
// }
// temp();


// CODE TRADING
//   const [refreshWallet,setReFreshWallet] = useState(false);
//   const getData = async() => {
//     await getWallet(dispatch,user.userId);
//     if(wallet) {
//       console.log("get wallet")
//       let tempLnd = wallet?.filter((item) => {
//         if(item.coinId =="lnd") return true
//       });
//       setLndWallet(tempLnd[0])
//       let tempUsd = wallet?.filter((item) => {
//         if(item.coinId =="usd") return true
//       });
//       console.log(tempUsd);
//       setUsdWallet(tempUsd[0])
//     }
//   }
//   useEffect(() => {
//    getData();
//   },[refreshWallet])
//   const handleOk = async() => {
//     if(!lndCheck) {
//       await addToWallet(dispatch,{
//         coinId  : "lnd",
//         userId: user.userId,
//         quantity:  valueResult
//       });
//       await updateWallet({
//         coinId  : "usd",
//         userId: user.userId,
//         quantityAdd:  -valueConvert
//       })
//     } else {
//       await updateWallet({
//         coinId  : "lnd",
//         userId: user.userId,
//         quantityAdd:  valueResult,
//       });
//       await updateWallet({
//         coinId  : "usd",
//         userId: user.userId,
//         quantityAdd:  -valueConvert,
//       })
//     }
//     await updateWallet({
//       coinId  : "usd",
//       userId: idAdmin,
//       quantityAdd:  valueConvert
//     })
//     await getData();
//     setReFreshWallet(!refreshWallet);
//   };