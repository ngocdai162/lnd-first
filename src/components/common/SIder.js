import React, { useRef, useState, useEffect } from 'react';
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import { Modal } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';
import InputCustom from '../modules/InputCustom';
import { usdSelector ,lndSelector, profitProject, currentUserSelector, feeSelector, tempSelector, lndApiSelector, walletSelector } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { typeAccountSelector } from '../../redux/selectors';
import { disableFee, getFee, getLnd, getWallet, upDateFee } from '../../redux/apiRequest';
import { v4 as uuidv4 } from 'uuid';

export default function Sider() {
  const dispatch  = useDispatch();
  const wallet= useSelector(walletSelector); 
  const user = useSelector(currentUserSelector);
  const lndApi = useSelector(lndApiSelector);
  const [valueConvert,setValueConvert] = useState(0);
  const [valueResult,setValueResult] = useState(0);
  const [errorValue,setErrorValue] = useState(false);
  const [lndWallet,setLndWallet] = useState();
  const [usdWallet,setUsdWallet] = useState();
  const usd= useSelector(usdSelector);
  const lnd = useSelector(lndSelector);
  const fee = useSelector(feeSelector);
  const profit = useSelector(profitProject);
  const typeAccount = useSelector(typeAccountSelector);
  const inputFee = useRef();
  useEffect(() => {
    getFee(dispatch);
    getWallet(dispatch,user.userId);
    let tempLnd = wallet.filter((item) => {
      if(item.coinId =="lnd") return true
    });
    setLndWallet(tempLnd[0])
    let tempUsd = wallet.filter((item) => {
      if(item.coinId =="usd") return true
    });
    setUsdWallet(tempUsd[0])
  },[user])

  let isAdmin;
  if(user.roleId == 0) {
    isAdmin = true;
  } else {
    isAdmin = false
  }
  const  handleUpdateFee = async() => {
    let newFee = {
        tradingFeeId: uuidv4(),
        fee: inputFee.current.value,
        createdDate : "2002-02-09 00:00:00",  // test tạm
        isUse  : 1
    }
    if( newFee.fee && newFee.fee!=null) {
      await disableFee(dispatch);
      await upDateFee(newFee,dispatch)
      getFee(dispatch);
    }
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeConvert = (e) => {
   setValueConvert(e.target.value);
 }
 useEffect(()=>{
  if(isNaN(valueConvert) || (valueConvert > usd.amount) ) {
   setErrorValue(true);
  } else {
   setValueResult(valueConvert/lndApi.price);
   setErrorValue(false);
  }
 },[valueConvert])
  return (
        <div className="sider">
             <div className='sider__title'>
               <img src="../../images/lnd-logo.png"/>
               <img src="../../images/lnd-title.png"/>
            </div>
            {/* <SiderUser/> */}
            <div className="sider-main">
         <div className="sider-main__info">
            <CryptoLogo srcImg='../../images/lnd-logo.png'/>
            <h1>LND-COIN</h1>
            <p>Rank: <span>{lndApi.rank}</span></p>
            <p>Market Cap: <span>{lndApi.marketCap}</span></p>
            <p>Current Price (USD) : <span>{lndApi.price}</span> </p>
            {isAdmin && <h2>Profit: <span>{profit}</span></h2>}
         </div>
         {isAdmin ?  
         <div className="sider-main__action">
            <div className='sider-main__action__fee'>
               <p>Update Fee</p>
               <p>Current fee : <span>{fee}</span></p>
            </div>
            <input ref={inputFee}/>
            <ButtonCustom text = 'Update' event = {handleUpdateFee}/>
         </div> : 
          <div className='buy-coin'>
              <ButtonCustom text="Buy LND-COIN" event={showModal}/>
          </div>}
         {!isAdmin && <Modal title="Convert to LND-COIN" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <div className='wallet-item'>
                <div className='wallet-item__title wallet-usd__title'>
                  <CryptoLogo srcImg='../images/cryptoLogo/bitcoin-btc-logo.png'/>
                  <p>USD</p>
                  <span>Exits: {usdWallet?.quantity}</span>
                </div>
                <div className="wallet-item__input">
                  <InputCustom placeholder="Convert to LND-COIN" event={handleChangeConvert}/>
                  {errorValue &&  <span className='invalid'>Invalid</span>}
                </div>
              </div>
              <ArrowRightOutlined width="90" />
              <div className='wallet-item'>
                <div className='wallet-item__title wallet-lnd__title'>
                  <CryptoLogo srcImg='../images/lnd-logo.png'/>
                  <p>LND</p> 
                  <p>Price: {lndApi.price} USD</p>
                  <span>Exits: {lndWallet?.quantity}</span>
                </div>
                <p className='result'>Result : {valueResult} LND</p>
              </div>
         </Modal>}
       </div>
        </div>
    )
}