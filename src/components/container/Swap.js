import React, { useState, useEffect } from "react";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import {SwapOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { coinSwapSelector, currentUserSelector, feeSelector, lndApiSelector, lndMarketCapSelector, lndSelector, walletSelector } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { addCoin, updateCoin } from "../../redux/slice/walletSlice";
import { plusMarketCap } from "../../redux/slice/lndMarketCapSlice";
import { addToWallet, checkWallet, getWallet, updateWallet } from "../../redux/apiRequest";

const Swap = () => {
  const lndApi = useSelector(lndApiSelector);
  const user = useSelector(currentUserSelector);
  const wallet= useSelector(walletSelector); 
  const [checkCoin,setCheckCoin] = useState();
  const [refreshWallet,setReFreshWallet] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getWallet(dispatch,user.userId);
  },[refreshWallet])
  console.log(wallet);
  const lndWallet = wallet.filter((item) => {
    if(item.coinId =="lnd") return true
  });
  const coinSwapFromList = useSelector(coinSwapSelector); // coin swap láy từ listCrypto
  //CHECK COIN SWAP
  const temp = async () => {
    let check = await checkWallet({
    userId: user.userId,
    coinId:coinSwapFromList.id
    })
    setCheckCoin(check);
    console.log(checkCoin); 
  }
  temp();
  const coinSwapFromWallet = useSelector((state) => state.wallet.collection.find(item => item.coinId==coinSwapFromList.id));
  // const [coinSwap,setCoinSwap] = useState(coinSwapFromWallet); //coinSwap
  const lnd = {
    id: lndWallet[0].coinId,
    coin: "LND",
    imgSrc: "../../images/lnd-logo.png",
    price: lndApi.price,
    amount:lndWallet[0].quantity
  }


  // k sửa 
  var coinSwap;  
  if(coinSwapFromWallet!=undefined) {
    let temp = {amount: coinSwapFromWallet.quantity};
    coinSwap = {...coinSwapFromList,...temp}
  } else {
    let temp = {amount: 0};
    coinSwap = {...coinSwapFromList,...temp}
  }
  // Đã có được lnd và coinSwap
  const [rootCoin,setRootCoin] = useState(lnd)   // coin gốc
  const [destinationCoin ,setDestinationCoin]= useState(coinSwap); // coin đích
  const [toLnd,setToLnd] = useState(false);  // flag check chiều swap
  const [valueSwap,setValueSwap] = useState(0);
  const [valueResult,setValueResult] = useState(0);
  const [errorValue,setErrorValue] = useState(false);
  const [flagFee,setFlagFee] = useState(false);
  const fee = useSelector(feeSelector);
  const handleClickArrow = () => {   // đổi chiều swap
    if(toLnd==false) {
      setRootCoin(coinSwap);
      setDestinationCoin(lnd)
      setToLnd(true);
    } else {
      setRootCoin(lnd);
      setDestinationCoin(coinSwap)
      setToLnd(false);
    }
  }
  useEffect(()=> {
    if(toLnd==false) {
      setRootCoin(lnd);
    } else setDestinationCoin(lnd);
  },[])  // khi amount của lnd thay đổi, thì cập nhật lại
  const handleChangeSwap = (e) => {   //nhận value Swap
    setValueSwap(e.target.value);
  }
  useEffect(()=>{       // kiểm tra value swap, trả result
    if(isNaN(valueSwap) || valueSwap<=0) {
     setErrorValue(true);
     setValueResult("Empty");
    } else {
      if(toLnd==false) // gốc swap là lnd 
      {
        if((valueSwap > (rootCoin.amount - fee))) {
          setErrorValue(true);
          setValueResult("Empty");
        }
        else {
          setValueResult((valueSwap*rootCoin.price)/destinationCoin.price);
          setErrorValue(false);
        }
      } else { // gốc swap là coinSwap
        if(valueSwap > rootCoin.amount) {
          setErrorValue(true);
          setValueResult("Empty");
        } else {
          setValueResult((valueSwap*rootCoin.price)/destinationCoin.price);
          setErrorValue(false);
        }
      }
    }
   },[valueSwap])
  const handleCancel = () => {
    navigate("/home/listCryptos")
  }
  const handleSwap = async () => {
    var coinWalletUpdate;
    if(lnd.amount<fee) {
      setFlagFee(true);
    } 
    else {
      var tempSwap;
      if(toLnd==false) {   // rootCoin là lnd
        setFlagFee(false);
        if(checkCoin) {  //Kiểm tra xem coin đã có trong ví chưa
          tempSwap = {
            coinId  : coinSwapFromList.id,
            userId: user.userId,
            quantityAdd:  valueResult
          }
        } else {
          tempSwap = {
            coinId  : coinSwapFromList.id,
            userId: user.userId,
            quantity:  valueResult
          };
        }
        coinWalletUpdate={
          lnd: {
            coinId:"lnd",
            userId: user.userId,
            quantityAdd: -valueSwap - fee
          },
          coinSwap: tempSwap
        }
       
      } else {          // rootCoin là coinSwap
        coinWalletUpdate={
          lnd: {
            coinId:"lnd",
            userId: user.userId,
            quantityAdd: valueResult - fee
          },
          coinSwap:{
            coinId  : coinSwapFromList.id,
            userId: user.userId,
            quantityAdd:  -valueSwap
          }
        }
      }
      if(!errorValue) {
        if(!checkCoin) {
          await addToWallet(dispatch,coinWalletUpdate.coinSwap );
          await updateWallet(coinWalletUpdate.lnd)
        } else {
          await updateWallet(coinWalletUpdate.coinSwap )
          await updateWallet(coinWalletUpdate.lnd)
        }
      getWallet(dispatch,user.userId);
      }
    } 
  }
    return (
        <div className="swap">
          <div className="swap__title">
             <p>Swap Crypto</p>
          </div>
          <div className="swap__content">
            <div className="swap__content__main">
              <div className="swap__content__main__item swap__content__main__info">
                  <div className="swap__content__main__info__item">
                    <div className="swap__content__main__info__item__crypto">
                      <p>{lnd.coin}</p>
                      <CryptoLogo srcImg={lnd.imgSrc}/>
                    </div>
                     <span>Price: {lnd.price} </span>
                     <span>Amount: {lnd.amount}</span>
                  </div>
                  <div className="swap__content__main__info__item">
                     <div className="swap__content__main__info__item__crypto">
                      <p>{coinSwap.coin}</p>
                      <CryptoLogo srcImg={coinSwap.imgSrc}/>
                     </div>
                     <span>Price: {coinSwap.price} </span>
                     <span>Amount: {coinSwap.amount}</span>
                  </div>
              </div>
              <div className="swap__content__main__item">
                <div className="swap__content__main__item__title">
                    <p>From {rootCoin.coin}</p>
                    <CryptoLogo srcImg={rootCoin.imgSrc}/>
                </div>
                <div className="swap__content__main__item__value input-swap">
                  <input placeholder="0" onChange={handleChangeSwap}/>
                  {errorValue && <p>Invalid</p>}
                  {(flagFee==true) && <span className="not-enough">Not enough LND</span>}
                </div>
              </div>
              <SwapOutlined  onClick={handleClickArrow}/>
              <div className="swap__content__main__item">
                <div className="swap__content__main__item__title">
                  <p>To {destinationCoin.coin}</p>
                  <CryptoLogo srcImg={destinationCoin.imgSrc}/>
                </div>
                <p className="swap__content__main__item__output">Result: <span>{valueResult}</span></p>
              </div>    
            </div>    
            <div className="swap__content__button">
              <span>Fee: {fee} LND</span>
              <div className="swap__content__button__block">
                <ButtonCustom text="Cancel" event = {handleCancel}/>
                <ButtonCustom text="Swap" event = {handleSwap}/>
              </div>
             
            </div>
          </div>
        </div>
    )
}
export default Swap;