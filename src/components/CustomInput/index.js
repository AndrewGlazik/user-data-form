import React from "react";

import './index.css';

export default function (props) {
    const {
        inputType = "text",
        labelValue,
        isRequired = false,
        warningMessage = "Поле является обязательным",
        name,
        setData,
        ...otherProps
    } = props
    return (
        <div className="input-group">
            <input onChange={e => setData(state => ({...state, [name]: e.target.value}))} name="bare"
                   className="custom-input-input" type={inputType} required/>
            <label className="custom-input-label">{labelValue}</label>
        </div>
    )
};
