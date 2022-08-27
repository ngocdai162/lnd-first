import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { coinChartSelector } from "../../redux/selectors";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import CoinChart from "./CoinChart";
import { swapToLND } from "../../redux/slice/coinSwapSlice";

const CoinInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const coin = useSelector(coinChartSelector);
    // const coin2 = useSelector(coinInfoSelector);
    // console.log(coin2);
    const handleSwap = () => {
            let coinSwap = {
                id: coin.id,
                name: coin.coin,
                image: coin.imgSrc,
                current_price: coin.price
            }
            dispatch(swapToLND(coinSwap));
            navigate('/swap');
   }
    
    return (
        <div className="coin-info">
            <div className="coin-info__detail">
              <CryptoLogo srcImg={coin.imgSrc}/>
              <h1>{coin.coin}</h1>
              <p>Rank: <span>{coin.marketCapRank}</span></p>
              <p>Market Cap: <span>{coin.marketCap}</span></p>
              <p>Current Price: <span>{coin.price}</span> </p>
              <ButtonCustom text="Swap" event = {handleSwap}/>
            </div>
            <div className="coin-info__chart">
                <CoinChart/>
            </div>
        </div>
    )
}
export default CoinInfo;