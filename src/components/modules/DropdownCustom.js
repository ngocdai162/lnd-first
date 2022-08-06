import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
export default function DropdownCustom (props) {
    const menu = (
        <Menu
          items={[
            {
              label: (
                <a target="_blank" rel="" href="" style={{padding: "40px"}}>
                  {props.item1}
                </a>
              ),
              key: '0',
            },
            {
              label: (
                <a target="_blank" rel="" href=""  style={{padding: "40px"}}>
                  {props.item2}
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