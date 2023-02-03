import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import globalInt from "../../resources/icon/globalInt.svg";
import exitIcon from "../../resources/icon/exit.svg";
import bellNotificationIcon from "../../resources/icon/bellNotificationIcon.svg";
import "./index.scss";

const AppHeaderComponent = () => {
    const { OpenModal } = useContext(DataContext);

    return (
        <header className="header">
            <div className="header-name text">
                <p className="logo">ShopLink</p>
            </div>
            <div className="header__wrapper">
                <img src={globalInt} alt="global icon" style={{ marginBottom: 2 }} />

                <p className="text" >
                    <span className="linkSite">Перейти на сайт </span>
                </p>

                <div className="link-site">
                    <div className="notification_exit">
                        <img src={bellNotificationIcon} alt="notification icon" onClick={() => {
                            OpenModal({
                                id: "notificationModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "31%",
                                rightPosition: "2%",
                            })
                        }} />
                        <span className="circlered"></span>
                        <img src={exitIcon} alt="exit icon" onClick={() => {
                            OpenModal({
                                id: "logOutModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "auto",
                                leftPosition: "50%",
                                transform: "translate(-50%, -50%)"
                            })
                        }} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AppHeaderComponent;