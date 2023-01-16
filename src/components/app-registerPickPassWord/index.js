import { Link } from "react-router-dom";

import { HelpFormInputComponent } from "../app-shop";

import { ReactComponent as LockIcon } from "../../resources/icon/shopDataIcons/Lock.svg";
import { ReactComponent as LocationArrowIcon } from "../../resources/icon/orderIcons/locationArrow.svg";

const RegisterPickPassWordComponent = () => {
    return (
        <div className="registerStep">
            <div className="registerStep__head">
                <Link to={"/registr/step3"} relative="path">
                    <LocationArrowIcon style={{ marginTop: 5 }} className="icon-arrowBack" />
                </Link>

                <div className="numberConfirmationText">Придумайте пароль</div>
            </div>
            <p className="subtext">Придумайте пароль для регистрации</p>

            <form className="loginRegister__form" onSubmit={(e) => e.preventDefault()}>
                <HelpFormInputComponent data={{
                    inputType: "password",
                    iconComponent: <LockIcon />,
                    inputName: "password login",
                    placeholder: "Придумайте пароль",
                }} />

                <HelpFormInputComponent data={{
                    inputType: "password",
                    iconComponent: <LockIcon />,
                    inputName: "password login",
                    placeholder: "Повторите пароль",
                }} />
            </form>

            <button
                className="btn next">
                <Link to={"/"}>
                    <p className="btnText">
                        Продолжить
                    </p>
                </Link>
            </button>


            <div className="register__steps">
                <span className="step" />
                <span className="step" />
                <span className="step" />
                <span className="step step__active" />
            </div>
        </div>
    );
}

export default RegisterPickPassWordComponent;