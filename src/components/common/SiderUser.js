import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import {ArrowRightOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ButtonCustom from '../modules/ButtonCustom';
import CryptoLogo from '../modules/modules__container/CryptoLogo';
import InputCustom from '../modules/InputCustom';
import { usdSelector ,lndSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
const SiderUser = () => {
    const [valueConvert,setValueConvert] = useState(0);
    const [valueResult,setValueResult] = useState(0);
    const [errorValue,setErrorValue] = useState(false);
    const usd= useSelector(usdSelector);
    const lnd = useSelector(lndSelector);
      function getItem(label, key, icon, children, type) {
          return {
            key,
            icon,
            children,
            label,
            type,
          };
        }
        
        const items = [
          getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Option 1', '1'),
            getItem('Option 2', '2'),
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
          ]),
  
          getItem('Navigation True', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
          ]),
        ]; // submenu keys of first level
        
        const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
       
        
        const [openKeys, setOpenKeys] = useState(['sub1']);
  
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    }   
    
    //Modal
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
     
    //Xử lý convert to lnd
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
        <>
             <div className='sider__menu'>
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                  width: 200,
                }}
                items={items}
              />
            </div>
            <div className='buy-coin'>
              <ButtonCustom text="Buy LND-COIN" event={showModal}/>
            </div>
            <Modal title="Convert to LND-COIN" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
            </Modal>
        </>
    )
}
export default SiderUser;