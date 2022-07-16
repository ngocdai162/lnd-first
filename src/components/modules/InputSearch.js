import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
export default function InputSearch() {
    return (
        <div className="input-search">
            <input placeholder="Search"/>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </div>
    )
}