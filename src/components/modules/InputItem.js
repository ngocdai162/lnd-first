import React from "react";
import InputCustom from "./InputCustom";
export default function InputItem(props) {
    return (
        <div className="input-item">
            <p>{props.title}</p>
            <InputCustom/>
        </div>
    )
}