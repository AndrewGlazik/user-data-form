import React, {useContext, useEffect} from "react";

import './index.css';
import {FormContext} from "../App";

export default function (props) {
    const {
        inputType = "text",
        labelValue,
        isRequired = false,
        warningMessage = "Поле является обязательным",
        name,
        validation,
        ...otherProps
    } = props

    const contextValue = useContext(FormContext)

    useEffect(() => {
        contextValue.setData(state => ({
            ...state,
            validations: validation ? state.validations.concat({
                field: name,
                validation: validation
            }) : state.validations
        }))
    }, [])

    return (
        <div className="input-group">
            <input onChange={e => contextValue.setData(state => ({
                ...state,
                [name]: e.target.value,
            }))} name="bare"
                   className="custom-input-input" type={inputType} required/>
            <label className="custom-input-label">{labelValue}</label>
            {contextValue.errors.map(({fieldName, message}) => name === fieldName ?
                <span className="custom-input-error">{message}</span> : null)}
        </div>
    )
};
