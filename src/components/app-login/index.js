import { HelpFormInputComponent } from "../app-shop";

import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as LockIcon } from "../../resources/icon/shopDataIcons/Lock.svg";

import "./index.scss";

const LoginComponent = () => {
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__wrapper-block">
                    <div className="login__logo">
                        ShopLink
                    </div>

                    <div className="login__descr">Вход в личный кабинет </div>
                    <div className="subtext login__subText">Заполните все поля для входа в личный кабинет</div>

                    <form className="login__form" onSubmit={(e) => e.preventDefault()}>
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

                    <p className="registerText">Вы еще не наш клиент?  <span className="registerText__span">Зарегистрируйтесь</span></p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;