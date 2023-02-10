import React from "react";
import { useDispatch } from "react-redux";

import { showMenu } from "../../../redux/menuReducer";
import { MenuDropdown } from "../MenuDropdown";
import { MenuLink } from "../MenuLink";

import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();

  const closeMenu = () => {
    document.body.classList.remove("no-scroll");
    dispatch(showMenu(false));
  };

  return (
    <div className="overlayUser">
      <div className="menu-modal">
        <div className="menu-modal-header">
          <img src="/icons/logo.svg" alt="logo" />
          <img src="/icons/close.svg" alt="close" onClick={closeMenu} />
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <MenuLink mainlink={true} title={"Главная"} to={"/user/preview/main"} />
          </li>
          <li className="menu-item">
            <MenuDropdown title={"Женщинам"} />
          </li>
          <li className="menu-item">
            <MenuDropdown title={"Мужчинам"} />
          </li>
          <li className="menu-item">
            <MenuDropdown title={"Детям"} />
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item">Контакты</li>
          <li className="footer-list-item">
            <img src="/icons/phone.svg" alt="phone" />
            <a className="footer-tellink" href="tel:+7 (7172) 252 262">
              +7 (7172) 252 262
            </a>
          </li>
          <li className="footer-list-item">
            <img src="/icons/whatsup.svg" alt="phone" />
            <a className="footer-tellink" href="tel:+7 708 4 252 262">
              +7 708 4 252 262
            </a>
          </li>
          <li className="footer-list-item">
            <img src="/icons/instagram.svg" alt="phone" />
            <img src="/icons/telegram.svg" alt="phone" />
            <img src="/icons/whatsup.svg" alt="phone" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Menu };
