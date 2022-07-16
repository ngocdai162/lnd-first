import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
export default function DropdownCustom () {
    const menu = (
        <Menu
          items={[
            {
              label: (
                <a target="_blank" rel="" href="">
                  1st menu item
                </a>
              ),
              key: '0',
            },
            {
              label: (
                <a target="_blank" rel="" href="">
                  2nd menu item
                </a>
              ),
              key: '1',
            },
          ]}
        />
      );
    return (
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
          <Space>
         <DownOutlined />
         </Space>
    </a>
  </Dropdown>
    )
}