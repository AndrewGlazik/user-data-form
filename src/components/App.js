import React, {useState} from "react";
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import CustomSelect from './CustomSelect'

import '../styles/App.css';
import {FieldValidation} from './CustomInput/validations';

export const FormContext = React.createContext({})

export default function () {
    const [userData, setUserData] = useState({validations: []})
    const [errors, setErrors] = useState([])

    const handleSubmit = function () {
        setErrors([])
        if (userData.validations.reduce((previousValue,item) => {
            let res = FieldValidation(item.validation, userData[item.field])
            if (typeof res === "string") {
                setErrors(state => [...state, {fieldName: item.field, message: res}])
                return false
            } else {
                return previousValue
            }
        }, true)) {
            console.log(userData)
        } else {
            console.log('error')
        }
    }

    return (
        <div className="form-wrapper user-data-form">
            <h3>Информация о сотруднике</h3>
            {/*<form onSubmit={handleSubmit} className="user-data-form">*/}
            <FormContext.Provider value={{setData: setUserData, errors: errors}}>
                <div className="grid-one-column">
                    <CustomInput name="surname" labelValue="Фамилия"/>
                    <CustomInput name="name" labelValue="Имя"/>
                    <CustomInput name="patronymic" labelValue="Отчество"/>
                    <div className="grid-two-column">
                        <CustomInput name="gender" labelValue="Пол"/>
                        <CustomInput name="dateOfBirth" labelValue="Дата рождения"/>
                        <CustomInput name="telephone" validation="numbers_only" labelValue="Мобильный телефон"/>
                        <CustomInput name="email" validation="email" labelValue="Email"/>
                    </div>
                    <CustomSelect
                        labelValue="Пол"
                        options={[
                            {value: "001", label: "Мужчина"},
                            {value: "002", label: "Женщина"},
                            {value: "003", label: "Другое"}
                            ]}
                    />
                    <CustomInput name="address" labelValue="Адрес постоянной регистрации"/>
                    <CustomInput name="employer" labelValue="Название работодателя"/>
                    <div className="justify-end half-width">
                        <CustomButton buttonType="button" onClick={handleSubmit}
                                      customStyle={{width: '100%'}}>Сохранить</CustomButton>
                    </div>
                </div>
            </FormContext.Provider>
            {/*</form>*/}
        </div>
    )
}
