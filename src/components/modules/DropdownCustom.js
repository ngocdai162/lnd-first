import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import {Link} from "react-router-dom";
export default function DropdownCustom (props) {
    const menu = (
        <Menu
          items={[
            {
              label: (
                <Link to="/setting" onClick={props.propsDropdown.event1}>{props.propsDropdown.item1}</Link>
              ),
              key: '0',
            },
            {
              label: (
                <Link to="" onClick={props.propsDropdown.event2}>{props.propsDropdown.item2}</Link>
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