import React from "react";
import { Switch } from 'antd';

export default function SwitchCustom() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div>
            <Switch defaultChecked onChange={onChange} />;
        </div>
    )
}