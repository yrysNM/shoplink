import { Link } from "react-router-dom";

import { HelpFormInputComponent } from "../app-shop";

import { ReactComponent as LocationArrowIcon } from "../../resources/icon/orderIcons/locationArrow.svg";
import { ReactComponent as FlagKz } from "../../resources/icon/shopDataIcons/ic_flag_kazakhstan.svg";
import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown.svg";
import { ReactComponent as OrderIcon } from "../../resources/icon/orderIcon.svg";
import { ReactComponent as LinkIcon } from "../../resources/icon/shopDataIcons/linkIcon.svg";
import { ReactComponent as WorkIcon } from "../../resources/icon/shopDataIcons/workic.svg";
import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as AddresssIcon } from "../../resources/icon/shopDataIcons/addressIcon.svg";

import "./index.scss";

const RegisterStoreDataComponent = () => {
    return (
        <div className="registerStep registerStep-storeData">
            <div className="registerStep__head">
                <Link to={"/registr/step2"} relative="path">
                    <LocationArrowIcon style={{ marginTop: 5 }} className="icon-arrowBack" />
                </Link>

                <div className="numberConfirmationText">Данные магазина</div>
            </div>

            <p className="subtext">Введите данные магазина для регистрации</p>

            <form className="loginRegister__form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-input__block">
                    <div className="iconform">
                        <OrderIcon />
                    </div>
                    <input type="text" className="form-input" name="name shop" placeholder={`Название магазина`} />
                </div>

                <HelpFormInputComponent data={{
                    iconComponent: <LinkIcon />,
                    inputType: "url",
                    inputName: "name link",
                    placeholder: "URL магазина"
                }} />

                <HelpFormInputComponent data={{
                    iconComponent: <PhoneIcon />,
                    inputType: "number",
                    inputName: "phone number",
                    placeholder: "Номер whatsapp"
                }} />

                <div className="select-form">
                    <div className="countrySelect">
                        <FlagKz />
                        KZ
                        <ArrowDown />
                    </div>

                    <div className="citySelect">
                        <WorkIcon className="citySelect__icon" />
                        Город
                        <ArrowDown className="citySelect__iconArrow" />
                    </div>
                </div>

                <HelpFormInputComponent data={{
                    iconComponent: <AddresssIcon />,
                    inputType: "text",
                    inputName: "address",
                    placeholder: "Адрес (не обязательно)"
                }} />
            </form>

            <button
                className="btn next">
                <Link to={"/registr/step4"}>
                    <p className="btnText">
                        Продолжить
                    </p>
                </Link>
            </button>


            <div className="register__steps">
                <span className="step" />
                <span className="step" />
                <span className="step step__active" />
                <span className="step" />
            </div>
        </div>
    );
}

export default RegisterStoreDataComponent;