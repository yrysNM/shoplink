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
                <p className="logo">Название</p>
            </div>
            <div className="header__wrapper">
                <img src={globalInt} alt="global icon" />

                <p className="text" style={{ marginLeft: 15 }}>
                    <span className="linkSite">Перейти на сайт </span>
                </p>

                <div className="link-site">
                    <div className="searchMessage">
                        <div className="input-container">
                            <img
                                src={textWarning}
                                alt="text icon"
                                className={`iconWarning iconWarning-${trigerInput}`} />

                            <input
                                type="text"
                                ref={inputRef}
                                className="input-search"
                                name="searchMessage"
                                onChange={handleChange} />

                            <label htmlFor="searchMessage" className={`tag tag-${trigerInput}`}>
                                Введете текст для ответчека в whatsapp.
                                <span onClick={handleClick}>Ввести</span>
                            </label>
                        </div>
                    </div>


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