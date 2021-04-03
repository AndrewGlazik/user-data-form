import React from "react";
import './index.css';

export default function (props) {
    const {labelValue, options, ...otherProps} = props

    return (
        <div className="select-group">
            <select className="custom-select-select" defaultValue={null}>
                {options.map(item => <option value={item.value}>{item.label}</option>)}
            </select>
            <label className="custom-select-label">{labelValue}</label>
        </div>
    )
}
