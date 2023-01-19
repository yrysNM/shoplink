import { ReactComponent as InstagramIcon } from "../../resources/icon/socialIcons/ins.svg";
import { ReactComponent as TikTokIcon } from "../../resources/icon/socialIcons/ic_tiktok.svg";
import { ReactComponent as WhatsAppIcon } from "../../resources/icon/socialIcons/icon_whatsapp.svg";
import { ReactComponent as TelegramAppIcon } from "../../resources/icon/socialIcons/telegram.svg";
import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as AddresssIcon } from "../../resources/icon/shopDataIcons/addressIcon.svg";

import "./index.scss";

const UserFooterComponent = () => {
    return (
        <footer className="footer">
            <div className="containerUser">

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
            </div>
        </footer>
    );
}

export default UserFooterComponent;