import { Link, NavLink } from "react-router-dom";

import { classNamesHeartIcon } from "../app-userCategory";
import HamburgerComponent from "../app-hamburger";
import UserMenuComponent from "../app-userMenu";
import CarouselWithTrigerComponent from "../app-carouselWithTriger";

import { ReactComponent as BasketIcon } from "../../resources/icon/userIcons/basket.svg";

import "./index.scss";

const UserPreviewHeaderComponent = () => {

    return (
        <div className="beginBlock">
            <header className="header headerUser">
                <div className="containerUser">
                    <div className="headerUser__wrapper">
                        <div className="text">
                            <p className="logo" style={{ marginLeft: 32 }}>
                                ShopLink
                            </p>
                        </div>

                        <div className="headerUser__wrapper-tail">
                            <Link to={"/"}>
                                <p className="adminPanelText">Админ панель</p>
                            </Link>

                            <div className="favoriteBasketIcons" style={{ marginLeft: 12 }}>
                                <div className="iconBlock">
                                    <NavLink to="/user/preview/basket"
                                        className={({ isActive }) => isActive ? classNamesHeartIcon : undefined}>
                                        <BasketIcon />
                                    </NavLink>
                                </div>
                            </div>
                            <HamburgerComponent />
                        </div>
                    </div>
                </div>

                {/* menu block */}
                <UserMenuComponent />
            </header>

            {/* sub head info */}
            <div style={{ background: "#fff " }}>

                <div className="containerUser subContainerUser">

                    <CarouselWithTrigerComponent>
                        <div className="subHead__description">
                            <div className="bannerImg">
                                <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} alt="cart " />
                            </div>
                        </div>
                        <div className="subHead__description">
                            <div className="bannerImg">
                                <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} alt="cart " />
                            </div>
                        </div>
                        <div className="subHead__description">
                            <div className="bannerImg">
                                <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} alt="cart " />
                            </div>
                        </div>
                    </CarouselWithTrigerComponent>
                </div>
            </div>
        </div>
    );
}

export default UserPreviewHeaderComponent;