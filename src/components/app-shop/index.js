
import { useRef } from "react";

import { ReactComponent as OrderIcon } from "../../resources/icon/orderIcon.svg";
import { ReactComponent as FlagKz } from "../../resources/icon/shopDataIcons/ic_flag_kazakhstan.svg";
import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown.svg";
import { ReactComponent as LinkIcon } from "../../resources/icon/shopDataIcons/linkIcon.svg";
import { ReactComponent as WorkIcon } from "../../resources/icon/shopDataIcons/workic.svg";
import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as AddresssIcon } from "../../resources/icon/shopDataIcons/addressIcon.svg";
import { ReactComponent as InfoIcon } from "../../resources/icon/shopDataIcons/ic_info.svg";
import { ReactComponent as LockIcon } from "../../resources/icon/shopDataIcons/Lock.svg";
import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";
import { ReactComponent as InstagramIcon } from "../../resources/icon/socialIcons/ins.svg";
import { ReactComponent as GlobalIcon } from "../../resources/icon/socialIcons/global.svg";
import { ReactComponent as TikTokIcon } from "../../resources/icon/socialIcons/ic_tiktok.svg";
import { ReactComponent as WhatsAppIcon } from "../../resources/icon/socialIcons/icon_whatsapp.svg";




import "./index.scss";


const ShopComponent = () => {
    return (
        <div className="pagehead">
            <div className="container">
                <div className="shoppageTop">
                    <p className="text-page__title">
                        Магазин
                    </p>

                    <div className="btn">
                        <button className="shopCahngePhoneNumber">Изменить номер</button>
                    </div>
                </div>

                {/* Store data */}
                <div className="shoppage-wrapper">
                    <div className="shoppage-blocks">
                        <p className="shoppage-blocks__title">Данные магазина</p>

                        <form className="form">
                            <div className="form-data">

                                <div className="form-info">
                                    <p className="text-formTitle">
                                        Название магазина
                                    </p>

                                    <div className="form-input__block">
                                        <div className="iconform">
                                            <OrderIcon />
                                        </div>
                                        <input type="text" className="form-input" name="name shop" placeholder={`Pentagon`} />
                                    </div>
                                </div>

                                <div className="form-info">
                                    <p className="text-formTitle">
                                        Страна
                                    </p>

                                    <div className="form-input__block">
                                        <div className="form-input form-inputCities">

                                            <div className="iconform flagicon">
                                                <FlagKz />
                                            </div>

                                            <p className="cityName">
                                                Казахстан
                                            </p>

                                            <div className="arrowDown">
                                                <ArrowDown />
                                            </div>
                                        </div>

                                        <div className="form-input form-inputCities form-inputVolute">
                                            <p className="voluteText">
                                                KZT
                                            </p>

                                            <div className="arrowDown arrowDown-volute">
                                                <ArrowDown />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <HelpFormInputComponent data={{
                                    title: "URL",
                                    iconComponent: <LinkIcon />,
                                    inputType: "url",
                                    inputName: "name link",
                                    helperPl: "https://alatau.cc/",
                                    span: "pentagon"
                                }} />


                                <HelperSelectComponent data={{
                                    title: "Город",
                                    iconComponent: <WorkIcon />,
                                    selectName: "Алматы",
                                }} />

                                <HelpFormInputComponent data={{
                                    title: "Контактный номер",
                                    iconComponent: <PhoneIcon />,
                                    inputType: "number",
                                    inputName: "phone number",
                                    placeholder: "+7 (708) 369 09 15"
                                }} />

                                <HelpFormInputComponent data={{
                                    title: "Адрес",
                                    iconComponent: <AddresssIcon />,
                                    inputType: "text",
                                    inputName: "address",
                                    placeholder: "Байтурсынова, 58Г"
                                }} />
                            </div>
                            <button type="submit" className="btn submit">Cохранить</button>
                        </form>
                    </div>

                    {/* store description */}
                    <div className="shoppage-blocks">
                        <p className="shoppage-blocks__title">Описание магазина</p>

                        <form className="form-descr">
                            <textarea placeholder="Введите описаниеx" className="form-descr__textArea" name="description store">

                            </textarea>

                            <button type="submit" className="btn submit">Cохранить</button>
                        </form>
                    </div>

                    {/* Banner setup */}
                    <div className="shoppage-blocks">
                        <p className="shoppage-blocks__title">Настройка баннеров</p>

                        <p className="shoppage-blocks__subtitle">Фотографии для баннеров на главной странице сайта</p>

                        <div className="banner-setup">
                            <PlusIcon style={{ width: 24, height: 24 }} />
                            <p className="text-add" style={{ marginTop: 16 }}>Добавить</p>
                        </div>

                        <div className="bannerSizeInfo">
                            <InfoIcon />
                            <span className="banner-warning">Размеры баннеров - 1280 px х 900 px  </span>
                        </div>
                    </div>

                    <div className="shoppage-blocks">
                        <p className="shoppage-blocks__title">Cоц.сети</p>

                        <form className="form-social">
                            <HelpFormInputComponent data={{
                                iconComponent: <InstagramIcon />,
                                inputType: "text",
                                inputName: "instagram",
                                placeholder: "Имя пользователя в instagram"
                            }} />

                            <HelpFormInputComponent data={{
                                iconComponent: <TikTokIcon />,
                                inputType: "text",
                                inputName: "tiktok",
                                placeholder: "TikTok (не обязательно)"
                            }} />

                            <HelpFormInputComponent data={{
                                iconComponent: <GlobalIcon />,
                                inputType: "text",
                                inputName: "anotherInt",
                                placeholder: "Другое (не обязательно)"
                            }} />

                            <button type="submit" className="btn submit">Cохранить</button>
                        </form>
                    </div>

                    {/* Delivery */}
                    <div className="shoppage-blocks">
                        <p className="shoppage-blocks__title">Доставка</p>
                        <form className="form">
                            <div className="form-data price-data">
                                <p className="shoppage-blocks__subtitleCity">По Алматы</p>

                                <p className="shoppage-blocks__subtitleCity">В другие города</p>
                                <HelpFormInputComponent data={{
                                    title: "Цена доставки",
                                    iconComponent: "₸",
                                    placeholder: "Введите цену доставки",
                                    inputType: "number",
                                    inputName: "shipping price city",
                                    price: true,
                                }} />

                                <HelpFormInputComponent data={{
                                    title: "Цена доставки",
                                    iconComponent: "₸",
                                    placeholder: "Введите цену доставки",
                                    inputType: "number",
                                    inputName: "shipping price another city",
                                    price: true,
                                }} />

                                <HelpFormInputComponent data={{
                                    title: "Бесплатная доставка на сумму свыше",
                                    iconComponent: "₸",
                                    placeholder: "Введите сумму",
                                    inputType: "number",
                                    inputName: "high shipping price city",
                                    price: true,
                                }} />

                                <HelpFormInputComponent data={{
                                    title: "Бесплатная доставка на сумму свыше",
                                    iconComponent: "₸",
                                    placeholder: "Введите сумму",
                                    inputType: "number",
                                    inputName: "high shipping price another city",
                                    price: true,
                                }} />
                            </div>
                            <button type="submit" className="btn submit">Cохранить</button>
                        </form>
                    </div>

                    {/* whatsapp setup */}
                    <div className="shoppage-blocks">
                        <p className="shoppage-blocks__title">Настройка whatsapp</p>

                        <form className="form">
                            <HelpFormInputComponent data={{
                                iconComponent: <WhatsAppIcon />,
                                placeholder: "+7 702 365 76 78",
                                inputType: "number",
                                inputName: "whatsapp number",
                            }} />

                            <textarea placeholder="Введите шаблонный текст для начала чата" className="form-descr__textArea" name="chat descript" style={{ marginTop: 16, height: 148 }}>

                            </textarea>

                            <button type="sbumit" className="btn submit">Cохранить</button>
                        </form>
                    </div>
                </div>

                {/* Change password */}
                <div className="change-password">
                    <p className="shoppage-blocks__title">Изменить пароль</p>

                    <form className="form">
                        <div className="form-data changePassword">

                            <HelpFormInputComponent data={{
                                iconComponent: <LockIcon />,
                                placeholder: "Старый пароль",
                                inputType: "password",
                                inputName: "old password"
                            }} />

                            <HelpFormInputComponent data={{
                                iconComponent: <LockIcon />,
                                placeholder: "Новый пароль",
                                inputType: "password",
                                inputName: "new password"
                            }} />

                            <HelpFormInputComponent data={{
                                iconComponent: <LockIcon />,
                                placeholder: "Повторите пароль",
                                inputType: "password",
                                inputName: "repeat password"
                            }} />

                            <button type="sbumit" style={{ left: "auto", right: "24px" }} className="btn submit">Cохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export const HelpFormInputComponent = ({ data }) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div className="form-info">
            {data.title
                ?
                <p className="text-formTitle">
                    {data.title}
                </p>
                : null
            }

            <div className="form-input__block">
                <div className={`iconform ${data.price ? "priceIcon" : null}`} style={{ bottom: 6 }}>
                    {data.iconComponent}
                </div>
                <input
                    type={data.inputType}
                    ref={inputRef}
                    className={`form-input ${data.price ? "form-priceInput" : null}`}
                    name={data.inputName}
                    placeholder={data.placeholder ?? null} />

                {data.helperPl
                    ? <div onClick={handleClick} className="helperPlaceholder">{data.helperPl}<span onClick={handleClick} className="stylePl">{data.span}</span></div>
                    : null
                }
            </div>
        </div>
    );
}

export const HelperSelectComponent = ({ data }) => {
    return (
        <div className="form-info">
            <p className="text-formTitle">
                {data.title}
            </p>

            <div className="form-select__block">
                <div className="form-input form-select">

                    <div className="iconform selectIcon">
                        {data.iconComponent}
                    </div>

                    <p className="selectName">
                        {data.selectName}
                    </p>

                    <div className="arrowDown selectArrow">
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopComponent;