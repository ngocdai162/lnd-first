import React from "react";
import ButtonCustom from "../components/modules/ButtonCustom";
import CryptoLogo from "../components/modules/modules__container/CryptoLogo";
import SelectCustom from "../components/modules/SelectCustom";
const Wallet = () => {
   const listItem=[
    "Shiba",
    "Bitcoin",
    "LND"
   ]
   const cryptoInfo = {
     name: "",
     price: "",
     srcImg: ""
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
                    <SelectCustom listItem = {listItem} defaultValue= "Select Coin" placeholderSelect = "Select Coin"/>
                  </div>
                  <div  className="wallet__container__content__logo">
                    <img src="../images/cryptoLogo/shiba-inu-shib-logo.png"/>
                  </div>
                  <h1>LND-Coin</h1>
                  <p>1000</p>
                  <span>$0.9</span>
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