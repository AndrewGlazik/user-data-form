import React from "react";

import './index.css';

export default function (props) {
    const {buttonType = "button", requiredInput = false, children, ...otherProps} = props
    return (
        <div className="button-group">
            <button type={buttonType}>{children}</button>
        </div>
    )
};
