import { useState, useContext } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";


import { DataContext } from "../../context/DataContext";
import HamburgerComponent from "../app-hamburger";

import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as InstagramIcon } from "../../resources/icon/socialIcons/ins.svg";
import { ReactComponent as TikTokIcon } from "../../resources/icon/socialIcons/ic_tiktok.svg";
import { ReactComponent as WhatsAppIcon } from "../../resources/icon/socialIcons/icon_whatsapp.svg";
import { ReactComponent as TelegramAppIcon } from "../../resources/icon/socialIcons/telegram.svg";
import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as AddresssIcon } from "../../resources/icon/shopDataIcons/addressIcon.svg";

import "./index.scss";

const UserMenuComponent = () => {

    const [subNav, setSubNav] = useState({
        "subNav1": false,
        "subNav2": false,
        "subNav3": false,
    });

    const { hamburgerActive } = useContext(DataContext);


    const menuBlockPropagation = (e) => {
        e.stopPropagation();
    }

    const subNavToggle = (e, option) => {
        e.stopPropagation();

        setSubNav(subNav => ({ ...subNav, [option]: !subNav[option] }))
    }


    return (
        //menu block
        <div
            onClick={menuBlockPropagation}
            className={classnames("menu", {
                "menu__active": hamburgerActive
            })}>
            <div className="menu__head">

                <div className="logo menu__logoText">ShopLink</div>
                <HamburgerComponent />
            </div>

            <ul className="nav">
                <li className="menu__item">
                    <Link to="/user/preview">
                        <span className="menu__text">Главная</span>
                    </Link>
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
    )
}

export default UserMenuComponent;