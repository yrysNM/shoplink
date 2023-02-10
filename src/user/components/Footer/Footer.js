import React from "react";

import { ReactComponent as InstagramIcon } from "../../../admin/resources/icon/socialIcons/ins.svg";
import { ReactComponent as TikTokIcon } from "../../../admin/resources/icon/socialIcons/ic_tiktok.svg";
import { ReactComponent as WhatsAppIcon } from "../../../admin/resources/icon/socialIcons/icon_whatsapp.svg";
import { ReactComponent as TelegramAppIcon } from "../../../admin/resources/icon/socialIcons/telegram.svg";
import { ReactComponent as PhoneIcon } from "../../../admin/resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as AddresssIcon } from "../../../admin/resources/icon/shopDataIcons/addressIcon.svg";


import "./Footer.scss";

const Footer = () => {
  return (
    // <footer className="footer">
    //   <img className="footer-logo" src="/icons/logo.svg" alt="logo" />
    //   <p className="footer-descr">Небольшое описание магазина</p>
    //   <ul className="footer-list">
    //     <li className="footer-list-item">Контакты</li>
    //     <li className="footer-list-item">
    //       <img src="/icons/phone.svg" alt="phone" />
    //       <a className="footer-tellink" href="tel:+7 (7172) 252 262">
    //         +7 (7172) 252 262
    //       </a>
    //     </li>
    //     <li className="footer-list-item">
    //       <img src="/icons/whatsup.svg" alt="phone" />
    //       <a className="footer-tellink" href="tel:+7 708 4 252 262">
    //         +7 708 4 252 262
    //       </a>
    //     </li>
    //     <li className="footer-list-item">
    //       <img src="/icons/instagram.svg" alt="phone" />
    //       <img src="/icons/telegram.svg" alt="phone" />
    //       <img src="/icons/whatsup.svg" alt="phone" />
    //     </li>
    //   </ul>
    //   <p className="footer-descr">Политика конфединциальности</p>
    //   <p className="copyright">©2021. Все права защищены.</p>
    // </footer>
    <footer className="footer">

      <h3 className="footer__title">ShopLink</h3>
      <p className="subtext">Небольшое описание магазина</p>

      <div className="footer__data">
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
      </div>

      <div className="socialBlock">
        <InstagramIcon />
        <TelegramAppIcon />
        <WhatsAppIcon />
        <TikTokIcon />
      </div>

      <div className="copyrightText">
        &#169; Этот магазин создан с помощью Shoplink
      </div>
    </footer>
  );
};

export { Footer };
