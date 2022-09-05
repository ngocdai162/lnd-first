import React, { useRef, useState, useEffect } from 'react';
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import { Modal } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';
import InputCustom from '../modules/InputCustom';
import { usdSelector ,lndSelector, feeProject, profitProject, currentUserSelector } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFee } from '../../redux/slice/projectSlice';
import { typeAccountSelector } from '../../redux/selectors';

export default function Sider() {
  const user = useSelector(currentUserSelector);
  const dispatch  = useDispatch();
  const [valueConvert,setValueConvert] = useState(0);
  const [valueResult,setValueResult] = useState(0);
  const [errorValue,setErrorValue] = useState(false);
  const usd= useSelector(usdSelector);
  const lnd = useSelector(lndSelector);
  const fee = useSelector(feeProject);
  const profit = useSelector(profitProject);
  const typeAccount = useSelector(typeAccountSelector);
  const inputFee = useRef();
  let isAdmin;
  if(user.roleId == 0) {
    isAdmin = true;
  } else {
    isAdmin = false
  }
 
  const  handleUpdateFee = () => {
   dispatch(setFee(inputFee.current.value));
  }
//   const profit = '5214123';
//   const fee = '23'
  const lndCoin = {
      rank: '24',
      marketCap: '1241234',
      price: '14312',
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
   setValueResult(valueConvert/lnd.price);
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
            <p>Rank: <span>{lndCoin.rank}</span></p>
            <p>Market Cap: <span>{lndCoin.marketCap}</span></p>
            <p>Current Price (USD) : <span>{lndCoin.price}</span> </p>
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
                  <span>Exits: {usd.amount}</span>
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
                  <p>Price: {lnd.price}USD</p>
                  <span>Exits: {lnd.amount}</span>
                </div>
                <p className='result'>Result : {valueResult} LND</p>
              </div>
         </Modal>}
       </div>
        </div>
    )
}