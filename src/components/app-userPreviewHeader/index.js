import { useState } from "react";
import classnames from "classnames";

import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import shopingCart from "../../resources/img/shopingCar.png";


import "./index.scss";

const UserPreviewHeaderComponent = () => {
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const activeHanburger = () => {
        setHamburgerActive(true);
    }

    return (
        <>
            <header className="header headerUser">
                <div className="containerUser">
                    <div className="headerUser__wrapper">
                        <div className="text">
                            <p className="logo">
                                ShopLink
                            </p>
                        </div>

                        <div className="headerUser__wrapper-tail">
                            <p className="adminPanelText">Админ панель</p>

                            <HeartIcon style={{ marginRight: 32 }} />

                            <div
                                className={classnames("hamburger", {
                                    "hamburger_active": hamburgerActive
                                })}
                                onClick={activeHanburger}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="subHead">
                <div className="containerUser">

                    <div className="subHead__description">
                        <div className="infoShopText">
                            <h3 className="shopNameText">Название</h3>
                            <p className="subText">Небольшое описание длиной
                                в две строки</p>
                        </div>

                        <div className="cart">
                            <img src={shopingCart} alt="cart " />
                        </div>
                    </div>

                    <div className="slideLines">
                        <span className="line line__active " />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>
        </>


    );
}

export default UserPreviewHeaderComponent;