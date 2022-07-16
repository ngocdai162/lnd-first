import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";
export default function ButtonCustom (props) {
    return (
        <button className="button-custom" onClick={props.event}>{props.text}</button>
    )
}