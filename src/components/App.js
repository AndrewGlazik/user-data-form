import React, {useState} from "react";
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

import '../styles/App.css';

export default function () {
    const [userData, setUserData] = useState({
        surname: "",
        name: "",
        patronymic: "",
        gender: "",
        dateOfBirth: "",
        telephone: "",
        email: "",
        address: "",
        employer: ""
    });

    const handleSubmit = function (e) {
        e.preventDefault();
        Object.keys(mainGuess).forEach()
        console.log(mainGuess)
    }

    return (
        <div className="form-wrapper">
            <h3>Информация о сотруднике</h3>
            <form onSubmit={handleSubmit} className="user-data-form">
                <div className="grid-one-column">
                    <CustomInput labelValue="Фамилия"/>
                    <CustomInput labelValue="Имя"/>
                    <CustomInput labelValue="Отчество"/>
                    <div className="grid-two-column">
                        <CustomInput labelValue="Пол"/>
                        <CustomInput labelValue="Дата рождения"/>
                        <CustomInput labelValue="Мобильный телефон"/>
                        <CustomInput labelValue="Email"/>
                    </div>
                    <CustomInput labelValue="Адрес постоянной регистрации"/>
                    <CustomInput labelValue="Название работодателя"/>
                    <div className="justify-end half-width">
                        <CustomButton buttonType="submit" customStyle={{width: '100%'}}>Сохранить</CustomButton>
                    </div>
                </div>
            </form>
        </div>
    )
}
