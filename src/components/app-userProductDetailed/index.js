import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import classnames from "classnames";

import HamburgerComponent from "../app-hamburger";
import UserMenuComponent from "../app-userMenu";
import CarouselWithTrigerComponent from "../app-carouselWithTriger";
import { classNamesHeartIcon } from "../app-userCategory";
import { LayoutListCategoryComponent, SpeceficProductComponent } from "../app-userPreviewMainDataInfoShow";
import { DataContext } from "../../context/DataContext";

import { ReactComponent as BasketIcon } from "../../resources/icon/userIcons/basket.svg";
import { ReactComponent as WhatsappIcon } from "../../resources/icon/socialIcons/icon_whatsapp.svg";
import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../resources/icon/shopDataIcons/arrowUp.svg";
import userPreview1 from "../../resources/img/userPreview7.png";
import userPreview2 from "../../resources/img/userPreview8.png";
import userPreview3 from "../../resources/img/userPreview9.png";
import test1 from "../../resources/img/test1.png";

import "./index.scss";

const UserProductDetailedCatalogComponent = () => {
    const [descrDelivery, setDescrDelivery] = useState(false);
    const { OpenModal } = useContext(DataContext);

    const handleclick = () => {
        setDescrDelivery(descrDelivery => !descrDelivery);
    }



    return (
        <div className="userCategory userProductDetailer">
            <div className="containerUser">
                <div className="userCategoryProduct__head">
                    <HamburgerComponent />
                    <UserMenuComponent />
                    <h2 className="userCategoryProduct__head-title">Платье Zara</h2>

                    <div className="favoriteBasketIcons">
                        <div className="iconBlock">
                            <NavLink to="/user/preview/basket"
                                className={({ isActive }) => isActive ? classNamesHeartIcon : undefined}>
                                <BasketIcon />
                            </NavLink>
                        </div>
                    </div>

                </div>
                <p className="subtext userCategoryProduct__urlText">
                    <Link to={"../../main"} relative="path">
                        Главная
                    </Link>
                    &nbsp;/&nbsp;Женщинам&nbsp;/&nbsp;Платья
                </p>
            </div>
            <div className="containerUser subContainerUser">
                <CarouselWithTrigerComponent>
                    <img src={test1} alt="cart" width="100%" height="100%" />
                    <img src={test1} alt="cart" width="100%" height="100%" />
                    <img src={test1} alt="cart" width="100%" height="100%" />
                </CarouselWithTrigerComponent>
            </div>
            <div className="infoProductInfo">
                <div className="containerUser">
                    <p className="productNameText">Платье из бархата с драпировкой</p>
                    <div className="productCategory__price" style={{ position: "relative" }}>
                        12 490 ₸ <span className="salePriceText">25 990 ₸</span>
                        <div className="newProduct discount" style={{ bottom: "-3px" }}>
                            <p className="newText discountText">-50%</p>
                        </div>
                    </div>

                    <p className="subtext">Платье миди с круглым вырезом и длинными рукавами со складками. Разрез снизу, потайная застежка-молния сзади.</p>

                    <div className="productFilterBlock">
                        <span className="productFilterBlock__headText">
                            Выберите размер
                        </span>
                        <div className="sizeBlocks">
                            <div className="boxSize boxSize-active">
                                36
                            </div>
                            <div className="boxSize boxSize-active">
                                38
                            </div>
                            <div className="boxSize boxSize-active">
                                40
                            </div>
                            <div className="boxSize">
                                42
                            </div>
                        </div>
                    </div>
                    <div className="productFilterBlock">
                        <span className="productFilterBlock__headText">
                            Выберите цвет
                        </span>
                        <div className="catalogColors">
                            <span className="colorProduct" style={{ background: "#252728" }}></span>
                            <span className="colorProduct" style={{ background: "#F25E7F" }}></span>
                            <span className="colorProduct" style={{ background: "#53D160" }}></span>
                            <span className="colorProduct" style={{ background: "#5C61F4" }}></span>
                        </div>
                    </div>

                    <div className="deliveryInfo__grid">
                        <div className="deliveryInfo__grid-item">
                            <button className="deliverybtn deliverybtn-active" style={{ width: "100%" }} onClick={() => OpenModal({
                                id: "userOrderModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "auto",
                                leftPosition: "50%",
                                transform: "translate(-50%, -50%)"
                            })}>
                                <p className="btnText">
                                    Заказать
                                </p>
                            </button>
                        </div>
                        <div className="deliveryInfo__grid-item" style={{ gridRow: "2" }}>
                            <button className="whatsappBtn">
                                <p className="btnText">
                                    <WhatsappIcon className="iconWhatsapp" />
                                    Написать
                                </p>
                            </button>
                        </div>

                        <div className="deliveryInfo__grid-item" style={{ gridRow: "3" }}>
                            <div className="deliveryDescr" onClick={handleclick}>
                                <span className="deliveryText">Доставка</span>
                                {descrDelivery ? <ArrowUp /> : <ArrowDown />}
                            </div>
                        </div>
                        <div className={classnames("deliveryInfo__grid-item subDeliveryInfo", {
                            "deliveryInfo__grid-itemAnimate": descrDelivery
                        })} style={{ gridRow: "4" }}>
                            <p className={classnames("descrText subtext")}>Стандарт Green to Wear 2.0 направлен на минимизацию воздействия текстильного производства на окружающую среду. Для этого мы разработали программу Inditex The List, которая помогает нам обеспечивать чистоту производственных процессов, а также безопасность и гигиеничность нашей одежды.
                                <br />
                                <br />
                                100% полиэстер</p>
                        </div>
                    </div>



                    <LayoutListCategoryComponent textTitle={"Похожие товары"} idGallery={"displayFrameDetailed"} idCarouselItem={"carouselitemDetailed"}>
                        <SpeceficProductComponent
                            imgUrl={userPreview1}
                            productName={"Corner"}
                            productPrice={"5 990 ₸"} />
                        <SpeceficProductComponent
                            imgUrl={userPreview2}
                            productName={"EnvyLab"}
                            productPrice={"6 990 ₸"} />
                        <SpeceficProductComponent
                            imgUrl={userPreview3}
                            productName={"Футболка"}
                            productPrice={"6 490 ₸"} />
                        <SpeceficProductComponent
                            imgUrl={userPreview1}
                            productName={"Corner"}
                            productPrice={"5 990 ₸"} />
                    </LayoutListCategoryComponent>
                </div>
            </div>
        </div >
    );
}

export default UserProductDetailedCatalogComponent;