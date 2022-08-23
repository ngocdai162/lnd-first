import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
        <div className="p-wallet">
          <div className="wallet">
            <div className="wallet__header">
                <div className="wallet__header__title">
                  <span>Wallet</span>
                </div>
                <div className="wallet__header__user">
                  <p>Lương Ngọc Đại</p>
                  <div className="wallet__header__user__avt">
                    <img src="../images/lnd-logo.png" alt=""/>
                  </div>
                </div>
               
            </div>
            <div className="wallet__container">
               <div className="wallet__container__content">
                  <div className="wallet__container__content__select">
                    <SelectCustom listItem = {listItem} event={getKey} defaultValue= "Select Coin" placeholderSelect = "Select Coin"/>
                  </div>
                  <div  className="wallet__container__content__logo">
                    <img src="../images/cryptoLogo/shiba-inu-shib-logo.png"/>
                  </div>
                  <h1>{listItem[activeCoin].coin}</h1>
                  <p>{listItem[activeCoin].amount}</p>
                  <span>{listItem[activeCoin].price}</span>
               </div>
               <div className="wallet__container__button">
                <ButtonCustom text="Buy"/>
                <ButtonCustom text="Send"/>
               </div>
            </div>
          </div>
        </div>
    )
}
export default Wallet;