import React from "react";

import './index.css';

export default function (props) {
    const {buttonType = "button", customStyle = {}, requiredInput = false, children, ...otherProps} = props
    return (
        <div className="button-group">
            <button type={buttonType} style={customStyle}>{children}</button>
        </div>
    )
};
