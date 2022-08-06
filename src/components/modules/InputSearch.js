import React, { useEffect, useRef } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
export default function InputSearch(props) {
    const InputSearch = useRef();
    return (
        <div className="input-search">
            <input onChange={props.eventChange} placeholder={props.text}/>
            <Button type="primary" onClick = {props.eventSearch} shape="circle" icon={<SearchOutlined />} />
        </div>
    )
}