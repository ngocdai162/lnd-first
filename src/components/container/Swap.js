import React, { useState, useEffect } from "react";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import {SwapOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { coinSwapSelector, feeSelector, lndMarketCapSelector, lndSelector, walletSelector } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { addCoin, updateCoin } from "../../redux/slice/walletSlice";
import { plusMarketCap } from "../../redux/slice/lndMarketCapSlice";

const Swap = () => {
  const marketCap = useSelector(lndMarketCapSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lnd = useSelector((state) => state.wallet.collection.find(item => item.id=="lnd")); //lnd
  const coinSwapFromList = useSelector(coinSwapSelector); // coin swap láy từ listCrypto
  const coinSwapFromWallet = useSelector((state) => state.wallet.collection.find(item => item.id==coinSwapFromList.id));
  // const [coinSwap,setCoinSwap] = useState(coinSwapFromWallet); //coinSwap
  var coinSwap;  
  if(coinSwapFromWallet!=undefined) {
    let temp = {amount: coinSwapFromWallet.amount};
    coinSwap = {...coinSwapFromList,...temp}
  } else {
    let temp = {amount: 0};
    coinSwap = {...coinSwapFromList,...temp}
  }
  // Đã có được lnd và coinSwap
  const [rootCoin,setRootCoin] = useState(lnd)   // coin gốc
  console.log("lnd Coin");
  console.log(rootCoin)
  // useEffect(()=> {
  //   setRootCoin(lnd);
  // },[])
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
  },[lnd])  // khi amount của lnd thay đổi, thì cập nhật lại
  const handleChangeSwap = (e) => {   //nhận value Swap
    setValueSwap(e.target.value);
  }
  console.log('amount');
  console.log(lnd.amount);
  useEffect(()=>{       // kiểm tra value swap, trả result
    if(isNaN(valueSwap) || valueSwap<=0) {
     setErrorValue(true);
     setValueResult("Empty");
    } else {
      if(toLnd==false) // gốc swap là lnd 
      {
        console.log("rootCoin.amount - fee");
        console.log(rootCoin.amount - fee);
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
  const handleSwap = () => {
    let coinWalletUpdate;
    if(lnd.amount<fee) {
      setFlagFee(true);
    } 
    else {
      if(toLnd==false) {   // rootCoin là lnd
        setFlagFee(false);
        coinWalletUpdate={
          lnd: {
            id:"lnd",
            changeValue: -valueSwap - fee
          },
          coinSwap: {
            id:coinSwap.id,
            changeValue: valueResult
          }
        }
      } else {          // rootCoin là coinSwap
         coinWalletUpdate = {
          coinSwap: {
            id:coinSwap.id,
            changeValue: -valueSwap
          },
          lnd: {
            id:"lnd",
            changeValue: valueResult - fee
          }
        }
      }
      if(!errorValue) {
        if(coinSwapFromWallet !=undefined) {
          dispatch(updateCoin(coinWalletUpdate))
        } else {
          let temp = {amount: valueResult};
          dispatch(addCoin({
              coinSwap: {...coinSwap,...temp},
              lnd: {
                id: "lnd",
                changeValue: -valueSwap - fee
              }
          }))
        }
        dispatch(plusMarketCap()); //thêm một lượng fee vào lndMarketCap
      }
    } 
   
   
    // navigate("/listCryptos")
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