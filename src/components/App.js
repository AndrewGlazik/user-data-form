import React, {useState} from "react";
import CustomInput from './CustomInput'

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
        console.log(userData)
    }

    return (
        <div>
            <h1>My React App!</h1>
            <form onSubmit={handleSubmit}>
                <CustomInput labelValue="Имя"/>
                <input type="date"/>
                {/*<label>*/}
                {/*    Фамилия*/}
                {/*    <input*/}
                {/*        value={userData.surname}*/}
                {/*        onChange={e => setUserData(state => ({...state, surname: e.target.value}))}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*<label>*/}
                {/*    Email*/}
                {/*    <input*/}
                {/*        type="email"*/}
                {/*        value={userData.email}*/}
                {/*        onChange={e => setUserData(state => ({...state, email: e.target.value}))}*/}
                {/*    />*/}
                {/*</label>*/}
                <button>Submit</button>
            </form>
        </div>
    )
}
