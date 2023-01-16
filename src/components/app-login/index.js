
import { Link } from "react-router-dom";

import { HelpFormInputComponent } from "../app-shop";

import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as LockIcon } from "../../resources/icon/shopDataIcons/Lock.svg";

import "./index.scss";

const LoginComponent = () => {


    return (
        <div className="loginRegister">
            <div className="loginRegister__wrapper">
                <div className="loginRegister__wrapper-block">
                    <div className="loginRegister__logo">
                        ShopLink
                    </div>

                    <div className="loginRegister__descr">Вход в личный кабинет </div>
                    <div className="subtext loginRegister__subText">Заполните все поля для входа в личный кабинет</div>

                    <form className="loginRegister__form" onSubmit={(e) => e.preventDefault()}>
                        <HelpFormInputComponent data={{
                            inputType: "number",
                            iconComponent: <PhoneIcon />,
                            inputName: "phone login",
                            placeholder: "+7 (xxx) xxx xx xx",
                        }} />
                        <HelpFormInputComponent data={{
                            inputType: "password",
                            iconComponent: <LockIcon />,
                            inputName: "password login",
                            placeholder: "Введите пароль",
                        }} />

                        <p className="forgotPassWordText">Забыли пароль?</p>
                        <button className="btn next">Продолжить</button>
                    </form>

                    <p className="registerText">
                        Вы еще не наш клиент?&nbsp;&nbsp;
                        <span className="registerText__span">
                            <Link to={"/register"}>
                                Зарегистрируйтесь
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;