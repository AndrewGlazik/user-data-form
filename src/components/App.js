import React, {useState} from "react";
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

import '../styles/App.css';

export default function () {
    const [userData, setUserData] = useState({});

    const handleSubmit = function () {
        // e.preventDefault();
        // Object.keys(mainGuess).forEach()
        console.log(userData)
    }

    return (
        <div className="form-wrapper user-data-form">
            <h3>Информация о сотруднике</h3>
            {/*<form onSubmit={handleSubmit} className="user-data-form">*/}
                <div className="grid-one-column">
                    <CustomInput name="surname" setData={setUserData} labelValue="Фамилия"/>
                    <CustomInput name="name" setData={setUserData} labelValue="Имя"/>
                    <CustomInput name="patronymic" setData={setUserData} labelValue="Отчество"/>
                    <div className="grid-two-column">
                        <CustomInput name="gender" setData={setUserData} labelValue="Пол"/>
                        <CustomInput name="dateOfBirth" setData={setUserData} labelValue="Дата рождения"/>
                        <CustomInput name="telephone" setData={setUserData} labelValue="Мобильный телефон"/>
                        <CustomInput name="email" setData={setUserData} labelValue="Email"/>
                    </div>
                    <CustomInput name="address" setData={setUserData} labelValue="Адрес постоянной регистрации"/>
                    <CustomInput name="employer" setData={setUserData} labelValue="Название работодателя"/>
                    <div className="justify-end half-width">
                        <CustomButton buttonType="button" onClick={handleSubmit} customStyle={{width: '100%'}}>Сохранить</CustomButton>
                    </div>
                </div>
            {/*</form>*/}
        </div>
    )
}
