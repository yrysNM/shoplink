import { Link } from "react-router-dom";

import { ReactComponent as LocationArrowIcon } from "../../resources/icon/orderIcons/locationArrow.svg";

import "./index.scss";

const RegisterNumberConfirmationComponent = () => {
    return (
        <div className="registerStep">
            <div className="registerStep__head">
                <Link to={"/registr/step1"} relative="path">
                    <LocationArrowIcon style={{ marginTop: 5 }} className="icon-arrowBack" />
                </Link>
                <div className="numberConfirmationText">Подтверждение номера</div>
            </div>
            <p className="subtext">Мы отправили SMS с 6-ти значным кодом на ваш номер телефона. Введите его.</p>

            <div className="registerStep__inputNumberBlock">
                <div className="numberBox">
                    <span className="circleNumberBox" />
                    <span className="step" />
                </div>
                <div className="numberBox">
                    <span className="circleNumberBox" />
                    <span className="step" />
                </div>
                <div className="numberBox">
                    <span className="circleNumberBox" />
                    <span className="step" />
                </div>
                <div className="numberBox">
                    <span className="circleNumberBox" />
                    <span className="step" />
                </div>
                <div className="numberBox">
                    <span className="circleNumberBox" />
                    <span className="step" />
                </div>
                <div className="numberBox">
                    <span className="circleNumberBox" />
                    <span className="step" />
                </div>
            </div>

            <p className="timeTextSend">Отправить повторно через 04:58</p>

            <button
                className="btn next">
                <Link to={"/registr/step3"}>
                    <p className="btnText">
                        Продолжить
                    </p>
                </Link>
            </button>


            <div className="register__steps">
                <span className="step" />
                <span className="step step__active" />
                <span className="step" />
                <span className="step" />
            </div>
        </div>
    );
}

export default RegisterNumberConfirmationComponent;