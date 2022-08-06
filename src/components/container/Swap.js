import React, { useState } from "react";
import ButtonCustom from "../modules/ButtonCustom";
import InputCustom from "../modules/InputCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import { ArrowRightOutlined } from '@ant-design/icons';
const Swap = () => {
  // const dataCoin = props;
  const infoCoin  = [
    {
      name:"BTC",
      imgSrc: "../images/cryptoLogo/bitcoin-btc-logo.png",
      price: '15000',
      exist: '3030000'
    },
    {
      name: "LUNA",
      imgSrc: "../images/cryptoLogo/terra-luna-luna-logo.png",
      price: '12000',
      exist: '2040'
    }
  ]
  const fee = "5"
  const [swapOutput,setSwaOutput] = useState(0);
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
                      <p>{infoCoin[0].name}</p>
                      <CryptoLogo srcImg={infoCoin[0].imgSrc}/>
                    </div>
                     <span>Price: {infoCoin[0].price} </span>
                     <span>Exist: {infoCoin[0].exist}</span>
                  </div>
                  <div className="swap__content__main__info__item">
                     <div className="swap__content__main__info__item__crypto">
                      <p>{infoCoin[1].name}</p>
                      <CryptoLogo srcImg={infoCoin[1].imgSrc}/>
                     </div>
                     <span>Price: {infoCoin[1].price} </span>
                     <span>Exist: {infoCoin[1].exist}</span>
                  </div>
              </div>
              <div className="swap__content__main__item">
                <div className="swap__content__main__item__title">
                    <p>From {infoCoin[0].name}</p>
                    <CryptoLogo srcImg={infoCoin[0].imgSrc}/>
                </div>
                <div className="swap__content__main__item__value">
                  <input placeholder="0"/>
                </div>
              </div>
              <ArrowRightOutlined  style={{ fontSize: '150%'}}/>
              <div className="swap__content__main__item">
                <div className="swap__content__main__item__title">
                  <p>To {infoCoin[1].name}</p>
                  <CryptoLogo srcImg={infoCoin[1].imgSrc}/>
                </div>
                <p className="swap__content__main__item__output">Result: {swapOutput}</p>
              </div>
            </div>
            <div className="swap__content__button">
              <span>Fee: {fee} LND</span>
              <div className="swap__content__button__block">
                <ButtonCustom text="Cancel"/>
                <ButtonCustom text="Swap"/>
              </div>
             
            </div>
          </div>
        </div>
    )
}
export default Swap;