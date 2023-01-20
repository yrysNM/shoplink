import { useState, useEffect, useRef } from "react";
import classnames from "classnames";

import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as InstagramIcon } from "../../resources/icon/socialIcons/ins.svg";
import { ReactComponent as TikTokIcon } from "../../resources/icon/socialIcons/ic_tiktok.svg";
import { ReactComponent as WhatsAppIcon } from "../../resources/icon/socialIcons/icon_whatsapp.svg";
import { ReactComponent as TelegramAppIcon } from "../../resources/icon/socialIcons/telegram.svg";
import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as AddresssIcon } from "../../resources/icon/shopDataIcons/addressIcon.svg";
import shopingCart from "../../resources/img/shopingCar.png";


import "./index.scss";

const UserPreviewHeaderComponent = () => {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [subNav, setSubNav] = useState({
        "subNav1": false,
        "subNav2": false,
        "subNav3": false,
    });
    const menuBlock = useRef(null);

    const activeHanburger = (e) => {
        e.stopPropagation();
        setHamburgerActive(hamburgerActive => !hamburgerActive);
    }

    const subNavToggle = (e, option) => {
        e.stopPropagation();

        setSubNav(subNav => ({ ...subNav, [option]: !subNav[option] }))
    }

    const menuBlockPropagation = (e) => {
        e.stopPropagation();
    }

    useEffect(() => {
        const handler = () => setHamburgerActive(false);

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        }
    });

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

                {/* menu block */}
                <div ref={menuBlock}
                    onClick={menuBlockPropagation}
                    className={classnames("menu", {
                        "menu__active": hamburgerActive
                    })}>
                    <div className="menu__head">

                        <div className="logo menu__logoText">ShopLink</div>
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

                    <ul className="nav">
                        <li className="menu__item">
                            <span className="menu__text">Главная</span>
                        </li>

                        <li className="menu__item">
                            <div className="itemBlock" onClick={(e) => subNavToggle(e, "subNav1")}>
                                <span className="menu__text">Одежда</span>
                                <ArrowDown width="14px" height="14px" />
                            </div>


                            <ul className={classnames("subNav", {
                                "subNav__active": subNav.subNav1
                            })}>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav1
                                })}>
                                    <span className="submenu__text">Футболки</span>
                                </li>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav1
                                })}>
                                    <span className="submenu__text">Платья</span>
                                </li>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav1
                                })}>
                                    <span className="submenu__text">Штаны</span>
                                </li>
                            </ul>

                        </li>
                        <li className="menu__item">
                            <div className="itemBlock" onClick={(e) => subNavToggle(e, "subNav2")}>
                                <span className="menu__text">Обувь</span>
                                <ArrowDown width="14px" height="14px" />
                            </div>

                            <ul className={classnames("subNav", {
                                "subNav__active": subNav.subNav2
                            })}>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav2
                                })}>
                                    <span className="submenu__text">Футболки</span>
                                </li>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav2
                                })}>
                                    <span className="submenu__text">Платья</span>
                                </li>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav2
                                })}>
                                    <span className="submenu__text">Штаны</span>
                                </li>
                            </ul>
                        </li>

                        <li className="menu__item">
                            <div className="itemBlock" onClick={(e) => subNavToggle(e, "subNav3")}>
                                <span className="menu__text">Аксессуары</span>
                                <ArrowDown width="14px" height="14px" />
                            </div>

                            <ul className={classnames("subNav", {
                                "subNav__active": subNav.subNav3
                            })}>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav3
                                })}>
                                    <span className="submenu__text">Футболки</span>
                                </li>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav3
                                })}>
                                    <span className="submenu__text">Платья</span>
                                </li>
                                <li className={classnames("submenu__item", {
                                    "submenu__item-animate": subNav.subNav3
                                })}>
                                    <span className="submenu__text">Штаны</span>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="menu__footer">
                        <div className="footer__data-block">
                            <PhoneIcon />

                            <span className="phoneNumberAdressText">
                                <a href="tel:77172252262">
                                    +7 (7172) 252 262
                                </a>
                            </span>
                        </div>

                        <div className="footer__data-block">
                            <AddresssIcon />

                            <span className="phoneNumberAdressText">г. Алматы, Байтурсынова, 58Г</span>
                        </div>
                        <div className="socialBlock" style={{ marginTop: 30 }}>
                            <InstagramIcon />
                            <TelegramAppIcon />
                            <WhatsAppIcon />
                            <TikTokIcon />
                        </div>
                    </div>

                </div>
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