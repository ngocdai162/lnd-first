import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


export default function SelectCustom (props) {
  const handleChange = (value,key) => {
      props.event(key.key);
  };

  const listItem = props.listItem;
  
  return (
    <div className='select-custom'>
      <Select
        defaultValue={props.defaultValue}
        placeholder= {props.placeholderSelect}
        style={{
        width: 120,
        }}
        onChange={handleChange}
        className="select__block"
      >
        {listItem.map((item) => 
            <Option value= {item.coin} key = {item.key}>{item.coin}</Option>
        )}

    </Select>
  </div>
  )
}