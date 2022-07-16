import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
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
        </div>
    )
}