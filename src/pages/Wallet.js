import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LndChart from "../components/container/LndChart";
import ButtonCustom from "../components/modules/ButtonCustom";
import CryptoLogo from "../components/modules/modules__container/CryptoLogo";
import SelectCustom from "../components/modules/SelectCustom";
import { walletSelector } from "../redux/selectors";
const Wallet = () => {
   const listItem = useSelector(walletSelector);
   const [activeCoin,setActiveCoin] = useState(1)
   const getKey = (activeKey) => {
    setActiveCoin(activeKey)
    console.log(activeKey);
    return activeKey;
   }
    return (
            <div className="wallet">
              <div className="wallet__container">
               <div className="wallet__container__content">
                  <div className="wallet__container__content__select">
                    <SelectCustom listItem = {listItem} event={getKey} defaultValue= "Select Coin" placeholderSelect = "Select Coin"/>
                  </div>
                  <div  className="wallet__container__content__logo">
                    <img src="../images/cryptoLogo/shiba-inu-shib-logo.png"/>
                  </div>
                  <h1>{listItem[activeCoin].coin}</h1>
                  <p>Amount: {listItem[activeCoin].amount}</p>
                  <span>Price: {listItem[activeCoin].price}</span>
               </div>
              </div>
             <div className="wallet__chart">
               <LndChart/>
             </div>
            </div>
           
       
    )
}
export default Wallet;