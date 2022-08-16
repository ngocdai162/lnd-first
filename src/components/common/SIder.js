import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MinusOutlined, ArrowRightOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ButtonCustom from '../modules/ButtonCustom';
import CryptoLogo from '../modules/modules__container/CryptoLogo';
import InputItem from '../modules/InputCustom';
import InputCustom from '../modules/InputCustom';
export default function Sider() {
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

    return (
        <div className="sider">
             <div className='sider__title'>
               <img src="../../images/lnd-logo.png"/>
               <img src="../../images/lnd-title.png"/>
            </div>
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
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <div className='wallet-item'>
                <div className='wallet-item__title wallet-usd__title'>
                  <CryptoLogo srcImg='../images/cryptoLogo/bitcoin-btc-logo.png'/>
                  <p>USD</p>
                  <span>Exits: 20$</span>
                </div>
                <p></p>
                <InputCustom placeholder="Convert to LND-COIN"/>
              </div>
              <ArrowRightOutlined width="90" />
              <div className='wallet-item'>
                <div className='wallet-item__title wallet-lnd__title'>
                  <CryptoLogo srcImg='../images/lnd-logo.png'/>
                  <p>LND</p>
                  <span>Exits: 30 LND</span>
                </div>
                <p>Result : 60 LND</p>
            
            
              </div>

            </Modal>
        </div>
    )
}