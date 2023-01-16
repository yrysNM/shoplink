import { ReactComponent as LocationArrowIcon } from "../../resources/icon/orderIcons/locationArrow.svg";

import "./index.scss";

const RegisterNumberConfirmationComponent = () => {
    return (
        <div className="registerStep">
            <div className="registerStep__head">
                <LocationArrowIcon />
                <div className="numberConfirmationText">Подтверждение номера</div>
            </div>
            <p className="subtext">Мы отправили SMS с 6-ти значным кодом на ваш номер телефона. Введите его.</p>
        </div>
    );
}

export default RegisterNumberConfirmationComponent;