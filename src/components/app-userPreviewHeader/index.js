import HamburgerComponent from "../app-hamburger";
import UserMenuComponent from "../app-userMenu";

import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";

import shopingCart from "../../resources/img/shopingCar.png";

import "./index.scss";

const UserPreviewHeaderComponent = () => {

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

                            <HeartIcon style={{ marginRight: 42 }} />

                            <HamburgerComponent />
                        </div>
                    </div>
                </div>

                {/* menu block */}
                <UserMenuComponent />
            </header>

            {/* sub head info */}
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