import React from "react";

import './index.css';

export default function (inputType = "text", requiredInput =false, labelValue) {
    return (
        <div className="group">
            <input type={inputType} required={requiredInput}/>
            <span className="bar"/>
            <label>Имя</label>
        </div>
    )
};
