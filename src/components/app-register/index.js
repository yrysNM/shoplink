import { Link } from "react-router-dom";

import "./index.scss";

const RegisterComponent = () => {
    return (
        <div className="loginRegister">
            <div className="loginRegister__wrapper">
                <div className="loginRegister__wrapper-block">
                    <div className="loginRegister__logo">
                        ShopLink
                    </div>


                    <div className="loginRegister__descr">Регистрация</div>
                    <div className="subtext loginRegister__subText">Заполните все поля для регистрации</div>

                    <form className="loginRegister__form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            name="user name"
                            placeholder="Имя"
                            className="loginRegister__form-input" />

                        <input
                            type="text"
                            name="user surname"
                            placeholder="Фамилия"
                            className="loginRegister__form-input" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;