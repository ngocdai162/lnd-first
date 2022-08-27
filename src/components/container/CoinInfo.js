import React from "react";
import { useSelector } from "react-redux";
import { coinChartSelector } from "../../redux/selectors";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import CoinChart from "./CoinChart";


const CoinInfo = () => {
    const coin = useSelector(coinChartSelector);
    // const coin2 = useSelector(coinInfoSelector);
    // console.log(coin2);
    return (
        <div className="coin-info">
            <div className="coin-info__detail">
            <CryptoLogo srcImg={coin.imgSrc}/>
            <h1>{coin.coin}</h1>
            <p>`Rank: ${coin.marketCapRank}`</p>
            <p>`Market Cap: ${coin.marketCap}`</p>
            </div>
            <div className="coin-info__chart">
                <CoinChart/>
            </div>
        </div>
    )
}
export default CoinInfo;