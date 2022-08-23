import React, { useState, useEffect } from "react";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import {SwapOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { coinSwapSelector, lndSelector, walletSelector } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { addCoin, updateCoin } from "../../redux/slice/walletSlice";

const Swap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lnd = useSelector(lndSelector);
  const coinSwap = useSelector(coinSwapSelector); // coin swap láy từ listCrypto
  const walletCoin = useSelector (walletSelector); // lấy từ wallet để lấy amount
  const [rootCoin,setRootCoin] = useState(lnd)   // coin gốc
  const [destinationCoin ,setDestinationCoin]= useState(coinSwap); // coin đích
  const [toLnd,setToLnd] = useState(false);  // flag check chiều swap
  const [swapCoinWallet,setSwapCoinWallet] = useState({id:"", amount: "0"});
  const [isSwapCoinWallet,setIsSwapCoinWallet] = useState(false);  //check coinSwap có sẵn trong wallet chưa
  const [lndWallet,setLndWallet] = useState({amount: 0}); //lnd từ wallet
  const [valueSwap,setValueSwap] = useState(0);
  const [valueResult,setValueResult] = useState(0);
  const [errorValue,setErrorValue] = useState(false);
  const fee = "5";
  console.log(walletCoin);
  useEffect(()=> {
    let swapCoinWalletTemp = walletCoin.find((item) => {
      return item.id == coinSwap.id;
    });
    let lndWalletTemp=  walletCoin.find((item) => {
      return item.id == 'lnd';
    });
    if(lndWalletTemp) {
      setLndWallet(lndWalletTemp);
    }
    if(swapCoinWalletTemp==null) {
      console.log("hahhaaa")
    } else{
      setIsSwapCoinWallet(true);
      console.log("dc")
      setSwapCoinWallet(swapCoinWalletTemp);
    } 
  },[walletCoin])
 
  const handleClickArrow = () => {   // đổi chiều swap
    if(!toLnd) {
      setRootCoin(coinSwap);
      setDestinationCoin(lnd)
      setToLnd(true);
    } else {
      setToLnd(false);
      setRootCoin(lnd);
      setDestinationCoin(coinSwap)
    }
  }
  const handleChangeSwap = (e) => {   //nhận value Swap
    setValueSwap(e.target.value);
  }
  useEffect(()=>{       // kiểm tra value swap, trả result
   if(isNaN(valueSwap) || (valueSwap > rootCoin.amount) ) {
    setErrorValue(true);
    setValueResult(0);
   } else {
    console.log(valueSwap +" "+  rootCoin.price +" "+ destinationCoin.price)
    setValueResult((valueSwap*rootCoin.price)/destinationCoin.price);
    setErrorValue(false);
   }
  },[valueSwap])
  const handleCancel = () => {
    navigate("/listCryptos")
  }
  const handleSwap = () => {
    var coinWalletUpdate;
    if(!toLnd) {
      coinWalletUpdate={
        coinSwap: {
          id:coinSwap.id,
          changeValue: -valueResult
        },
        lnd: {
          id:"lnd",
          changeValue: valueSwap
        }
    }
      
    } else {
       coinWalletUpdate = {
        coinSwap: {
          id:coinSwap.id,
          changeValue: valueResult
        },
        lnd: {
          id:"lnd",
          changeValue: -valueSwap
        }
    }
    }
   
    if(!errorValue) {
      if(isSwapCoinWallet == true) {
        dispatch(updateCoin(coinWalletUpdate))
       
      } else {
        dispatch(addCoin({
          id:coinSwap.id,
          amount: valueResult
        }))
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
                     <span>Amount: {lndWallet.amount}</span>
                  </div>
                  <div className="swap__content__main__info__item">
                     <div className="swap__content__main__info__item__crypto">
                      <p>{coinSwap.coin}</p>
                      <CryptoLogo srcImg={coinSwap.imgSrc}/>
                     </div>
                     <span>Price: {coinSwap.price} </span>
                     <span>Amount: {swapCoinWallet.amount}</span>
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