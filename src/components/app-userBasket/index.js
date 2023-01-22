import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import HamburgerComponent from "../app-hamburger";
import UserMenuComponent from "../app-userMenu";
import { DataContext } from "../../context/DataContext";
import { classNamesHeartIcon } from "../app-userCategory";

import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";
import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";
import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import { ReactComponent as BasketIcon } from "../../resources/icon/userIcons/basket.svg";
import testImg1 from "../../resources/img/Rectangle 31.png";

import "./index.scss";

const UserBasketComponent = () => {

    const { OpenModal } = useContext(DataContext);

    return (
        <div className="userCategory userBasket">
            <div className="containerUser">
                <div className="userCategoryProduct__head">
                    <HamburgerComponent />
                    <UserMenuComponent />
                    <h2 className="userCategoryProduct__head-title">Футболки</h2>

                    <div className="favoriteBasketIcons">
                        <div className="iconBlock">

                            <NavLink to="/user/preview/favorite"
                                className={({ isActive }) =>
                                    isActive ? classNamesHeartIcon : undefined
                                }>
                                <HeartIcon />
                            </NavLink>
                        </div>

                        <div className="iconBlock">
                            <NavLink to="/user/preview/basket"
                                className={({ isActive }) => isActive ? classNamesHeartIcon : undefined}>
                                <BasketIcon />
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="userBasket__wrapper">
                    <div className="userBasket__wrapper-block">
                        <img src={testImg1} alt="product" />

                        <div className="productInfo">
                            <h4 className="infoName">Пальто двубортное на пуговицах</h4>

                            <p className="subtext">Размер: M-L  </p>
                            <p className="subtext">Цвет:  Черный</p>
                        </div>
                    </div>
                    <div className="userBasket__wrapper-subBlock">
                        <div className="countBlock">
                            <div className="trashPlusBlock" onClick={() => OpenModal({
                                id: "userRemoveModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "40%"
                            })}>
                                <TrashIcon width="15" height="15" />
                            </div>
                            <span className="countNumber">1</span>
                            <div className="trashPlusBlock">
                                <PlusIcon width="15" height="15" />
                            </div>
                        </div>

                        <div className="priceProduct">
                            <span className="strokePrice"> 25 990 ₸</span>
                            <span className="price">15 990 ₸</span>
                        </div>
                    </div>
                </div>
                <div className="userBasket__wrapper">
                    <div className="userBasket__wrapper-block">
                        <img src={testImg1} alt="product" />

                        <div className="productInfo">
                            <h4 className="infoName">Пальто двубортное на пуговицах</h4>

                            <p className="subtext">Размер: M-L  </p>
                            <p className="subtext">Цвет:  Черный</p>
                        </div>
                    </div>
                    <div className="userBasket__wrapper-subBlock">
                        <div className="countBlock">
                            <div className="trashPlusBlock">
                                <TrashIcon width="15" height="15" />
                            </div>
                            <span className="countNumber">1</span>
                            <div className="trashPlusBlock">
                                <PlusIcon width="15" height="15" />
                            </div>
                        </div>

                        <div className="priceProduct">
                            <span className="strokePrice"> 25 990 ₸</span>
                            <span className="price">15 990 ₸</span>
                        </div>
                    </div>
                </div>

                <div className="userBasket__wrapper">
                    <div className="userBasket__wrapper-block">
                        <img src={testImg1} alt="product" />

                        <div className="productInfo">
                            <h4 className="infoName">Пальто двубортное на пуговицах</h4>

                            <p className="subtext">Размер: M-L  </p>
                            <p className="subtext">Цвет:  Черный</p>
                        </div>
                    </div>
                    <div className="userBasket__wrapper-subBlock">
                        <div className="countBlock">
                            <div className="trashPlusBlock">
                                <TrashIcon width="15" height="15" />
                            </div>
                            <span className="countNumber">1</span>
                            <div className="trashPlusBlock">
                                <PlusIcon width="15" height="15" />
                            </div>
                        </div>

                        <div className="priceProduct">
                            <span className="strokePrice"> 25 990 ₸</span>
                            <span className="price">15 990 ₸</span>
                        </div>
                    </div>
                </div>

                <div className="generalInfo">
                    <span className="countProduct">3 товара на сумму</span>
                    <span className="generalCount">16 990 ₸</span>
                </div>

                <button className="checkoutBtn">
                    <Link to={"/user/preview/basket/checkout"}>
                        <p className="btnText">
                            Оформить заказ
                        </p>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default UserBasketComponent;