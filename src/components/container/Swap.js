import React, { useState, useEffect } from "react";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import {SwapOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { coinSwapSelector, lndSelector, walletSelector } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

const Swap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lnd = useSelector(lndSelector);
  const coinSwap = useSelector(coinSwapSelector); // láy từ listCrypto
  const walletCoin = useSelector (walletSelector); // lấy từ wallet để lấy amount
  const [rootCoin,setRootCoin] = useState(lnd)
  const [destinationCoin ,setDestinationCoin]= useState(coinSwap);
  const [toLnd,setToLnd] = useState(false);
  const [amountCoin,setAmountCoin] = useState({id:"", amount: "0"})
  const [valueSwap,setValueSwap] = useState(0);
  const [valueResult,setValueResult] = useState(0);
  const [errorValue,setErrorValue] = useState(false);
  const fee = "5";
  useEffect(()=> {
    let amountCoinTemp = walletCoin.find((item) => {
      return item.id == coinSwap.id;
    })
    if(amountCoinTemp==null) {
      console.log("hahhaaa")
    }
    // setAmountCoin(amountCoinTemp)
  },[])
    console.log(amountCoin);

  const handleChangeSwap = (e) => {
    setValueSwap(e.target.value);
  }
  const handleCancel = () => {
    navigate("/listCryptos")
  }
  const handleSwap = () => {
    navigate("/listCryptos")
  }
  useEffect(()=>{
   if(isNaN(valueSwap) || (valueSwap > rootCoin.amount) ) {
    setErrorValue(true);
   } else {
    setValueResult(valueSwap*rootCoin.price/destinationCoin.price);
    setErrorValue(false);
   }
  },[valueSwap])
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
                     <span>Amount: {amountCoin.amount}</span>
                  </div>
              </div>
              <div className="swap__content__main__item">
                <div className="swap__content__main__item__title">
                    <p>From {toLnd ? lnd.coin : coinSwap.coin}</p>
                    <CryptoLogo srcImg={toLnd ? lnd.imgSrc : coinSwap.imgSrc}/>
                </div>
                <div className="swap__content__main__item__value input-swap">
                  <input placeholder="0" onChange={handleChangeSwap}/>
                  {errorValue && <p>Invalid</p>}
                </div>
              </div>
              <SwapOutlined  onClick={() => {toLnd ? setToLnd(false) : setToLnd(true)}}/>
              <div className="swap__content__main__item">
                <div className="swap__content__main__item__title">
                  <p>To {toLnd ? coinSwap.coin : lnd.coin}</p>
                  <CryptoLogo srcImg={toLnd ? coinSwap.imgSrc : lnd.imgSrc}/>
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