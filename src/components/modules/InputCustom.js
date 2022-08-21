import React from "react";
export default function InputCustom (props) {
    return (
        <div className="input-custom">
          <input placeholder={props.placeholder} onChange={props.event}/>
        </div>
    )
}