import { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { HelpFormInputComponent } from "../app-shop";

import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";

import "./index.scss";

const RegisterComponent = () => {
    const [changeInput, setChangeInput] = useState({
        "user name": "",
        "user surname": "",
    });

    const handleChange = (e) => {
        setChangeInput(changeInput => ({ ...changeInput, [e.target.name]: e.target.value }));
    }

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
                            onChange={handleChange}
                            value={changeInput["user name"]}
                            type="text"
                            name="user name"
                            placeholder="Имя"
                            className="loginRegister__form-input" />

                        <input
                            onChange={handleChange}
                            value={changeInput["user surname"]}
                            type="text"
                            name="user surname"
                            placeholder="Фамилия"
                            className="loginRegister__form-input" />

                        <HelpFormInputComponent data={{
                            inputType: "number",
                            iconComponent: <PhoneIcon />,
                            inputName: "phone login",
                            placeholder: "+7 (xxx) xxx xx xx",
                        }} />

                        <button
                            className={classnames("btn next", {
                                "next-active": changeInput["user name"].length >= 1 || changeInput["user surname"].length >= 1
                            })}>
                            Продолжить
                        </button>
                    </form>

                    <p className="registerText">
                        Есть аккаунт?&nbsp;&nbsp;
                        <span className="registerText__span">
                            <Link to={"/login"}>
                                Войти
                            </Link>
                        </span>
                    </p>

                    <div className="register__steps">
                        <span className="step step__active" />
                        <span className="step" />
                        <span className="step" />
                        <span className="step" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;