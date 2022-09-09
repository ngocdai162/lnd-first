import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LndChart from "./LndChart";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import SelectCustom from "../modules/SelectCustom";
import { coinSelector, currentUserSelector, userSelector, walletSelector } from "../../redux/selectors";
import { setIdActive } from "../../redux/slice/walletSlice";
import CoinChart from "./CoinChart";
import { getCoin, getWallet } from "../../redux/apiRequest";
const Wallet = () => {
   const dispatch = useDispatch();
  const user = useSelector(currentUserSelector);
   const wallet = useSelector(walletSelector);
   const [listItem,setListIten] = useState([{
    // coinId:""
   }])
   const coinApi = useSelector(coinSelector);
   const [activeKey,setActiveKey] = useState(0)
   const [idCoinActive,setIdCoinActive] = useState(listItem[0]?.coinId);
   useEffect(()=> {
    if(user?.userId) {
      getWallet(dispatch,user.userId);
    }
    if(wallet) {
      setListIten(wallet)
     }
   },[])
   const getKey = (activeKey) => {
    setActiveKey(activeKey);
   }
   useEffect(()=> {
        dispatch(setIdActive(listItem[activeKey]?.coinId))
        if(listItem[activeKey]?.coinId=="lnd") {
          getCoin(dispatch,"uniswap");
        } else
        getCoin(dispatch,listItem[activeKey].coinId);
   },[activeKey])
  console.log(listItem)
    return (
            <div className="wallet">
              <div className="wallet__container">
              {listItem[activeKey]?.coinId ? <div className="wallet__container__content">
                  <div className="wallet__container__content__select">
                    <SelectCustom listItem = {listItem} event={getKey} defaultValue= "Select Coin" placeholderSelect = "Select Coin"/>
                  </div>
                  <div  className="wallet__container__content__logo">
                    <img src={listItem[activeKey]?.coinId=="lnd" ? "../../images/lnd-logo.png" : coinApi.imgSrc}/>
                  </div>
                  {/* <h1>{listItem[activeCoin].coin}</h1> */}
                  <h1>{listItem[activeKey]?.coinId=="lnd" ? "LND" : coinApi.name}</h1>
                  <p>Amount: {listItem[activeKey]?.quantity}</p>
                  <span>Price: {coinApi.price}</span>
               </div> :  <h1 className="wallet-empty">Wallet empty</h1>}
              </div>
             <div className="wallet__chart">
             {listItem[activeKey]?.coinId &&
               <CoinChart coinId = {listItem[activeKey]?.coinId=="lnd" ? "uniswap" : listItem[activeKey]?.coinId}/>
             }
             </div>
            </div>
           
       
    )
}
export default Wallet;