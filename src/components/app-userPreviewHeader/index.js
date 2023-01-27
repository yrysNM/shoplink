import { Link } from "react-router-dom";

import HamburgerComponent from "../app-hamburger";
import UserMenuComponent from "../app-userMenu";
import CarouselWithTrigerComponent from "../app-carouselWithTriger";


import "./index.scss";

const UserPreviewHeaderComponent = () => {

    return (
        <div className="beginBlock">
            <header className="header headerUser">
                <div className="containerUser">
                    <div className="headerUser__wrapper">
                        <div className="text">
                            <p className="logo">
                                ShopLink
                            </p>
                        </div>

                        <div className="headerUser__wrapper-tail" style={{ marginRight: 32 }}>
                            <Link to={"/"}>
                                <p className="adminPanelText">Админ панель</p>
                            </Link>

                            <HamburgerComponent />
                        </div>
                    </div>
                </div>

                {/* menu block */}
                <UserMenuComponent />
            </header>

            {/* sub head info */}
            <div className="containerUser">

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
    );
}

export default UserPreviewHeaderComponent;