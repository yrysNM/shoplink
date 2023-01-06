import { useState, useRef } from "react";
import globalInt from "../../resources/icon/globalInt.svg";
import textWarning from "../../resources/icon/textWarning.svg";
import exitIcon from "../../resources/icon/exit.svg";
import bellNotificationIcon from "../../resources/icon/bellNotificationIcon.svg";
import "./index.scss";

const AppHeaderComponent = () => {
    const [trigerInput, setTrigerInput] = useState(false);
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        setTrigerInput(true);
    }

    const handleChange = () => {
        if (inputRef.current.value === "") {
            inputRef.current.blur();
            setTrigerInput(false);
        } else {
            setTrigerInput(true);
        }
    }

    return (
        <header className="header">
            <div className="header-name text">
                <p className="logo">Shoplink</p>
            </div>
            <div className="header__wrapper">
                <img src={globalInt} alt="global icon" style={{ marginBottom: 2 }} />

                <p className="text" >
                    <span className="linkSite">Перейти на сайт </span>
                </p>

                <div className="link-site">
                    <div className="notification_exit">
                        <img src={bellNotificationIcon} alt="notification icon" />
                        <span className="circlered"></span>
                        <img src={exitIcon} alt="exit icon" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AppHeaderComponent;