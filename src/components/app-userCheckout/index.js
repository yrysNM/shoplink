import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { HelpFormInputComponent } from "../app-shop";
import UserSelectorComponent from "../app-userSelecter";

import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import { ReactComponent as LocationIcon } from "../../resources/icon/orderIcons/locationArrow.svg";
import { ReactComponent as PhoneIcon } from "../../resources/icon/shopDataIcons/phonIcon.svg";
import { ReactComponent as ProfileIcon } from "../../resources/icon/infoIcons/profileIcon.svg";
import { ReactComponent as AddressIcon } from "../../resources/icon/shopDataIcons/addressIcon.svg";
import testImg1 from "../../resources/img/imgCheckout.png";


import "./index.scss";

const UserCheckoutComponent = () => {

    const [tickIcon, setTickIcon] = useState({
        tickIcon1: false,
        tickIcon2: false
    });

    const handleClick = (value) => {
        setTickIcon(tickIcon => ({ ...tickIcon, [value]: !tickIcon[value] }));
    }

    return (
        <div className="userCategory userCheckout">
            <div className="containerUser">
                <div className="userCheckout__head">
                    <Link to={"../../main"} relative="path">
                        <LocationIcon />
                    </Link>
                    <span className="headText">Оформление заказа</span>
                </div>

                <div className="userCheckout__subHead">
                    <span className="checkout_text">Заказ</span>
                    <span className="countProduct">1 товаров</span>
                </div>

                <div className="listProductImg">
                    <img src={testImg1} alt="checkout img" />
                </div>

                <div className="userData">
                    <HelpFormInputComponent data={{
                        iconComponent: <ProfileIcon className="iconProfile" />,
                        inputType: "text",
                        inputName: "user name",
                        placeholder: "Введите имя"
                    }} />
                    <HelpFormInputComponent data={{
                        iconComponent: <PhoneIcon />,
                        inputType: "number",
                        inputName: "user phone",
                        placeholder: "+7 (xxx) xxx xx xx"
                    }} />
                </div>

                <div className="deliveryBlock">
                    <p className="deliveryBlock-text">Доставка</p>

                    <div className="deliveryBlock__grid">
                        <div className="deliveryBlock__grid-itemFirst">
                            <div className="deliveryCityInfo">
                                <div className={classnames("tickBlock", {
                                    "tickBlock__active": tickIcon.tickIcon1
                                })} onClick={() => handleClick("tickIcon1")}>
                                    {tickIcon.tickIcon1 &&
                                        <TickIcon />
                                    }
                                </div>
                                <div>
                                    <p className="inAlmatyText">По Алматы</p>
                                    <p className="subtext">от 1 дня, 1000 ₸</p>
                                </div>
                            </div>
                            <div className="deliveryCityInfo" style={{ marginTop: 20 }}>
                                <div className={classnames("tickBlock", {
                                    "tickBlock__active": tickIcon.tickIcon2
                                })} onClick={() => handleClick("tickIcon2")}>
                                    {tickIcon.tickIcon2 &&
                                        <TickIcon />
                                    }
                                </div>
                                <div>
                                    <p className="inAlmatyText">В другие города Казахстана</p>
                                    <p className="subtext">от 7 дней, 1000 ₸</p>
                                </div>
                            </div>


                            {tickIcon.tickIcon2 ? <UserSelectorComponent placeholderText={"Выберите город"} /> : null}

                            <HelpFormInputComponent data={{
                                iconComponent: <AddressIcon className="iconAddress" style={{ marginBottom: 3 }} />,
                                inputType: "text",
                                inputName: "user address",
                                placeholder: "Введите адрес"
                            }} />
                        </div>

                        <div className="deliveryBlock__grid-itemSecond">
                            <div className="subProductDelivery">
                                <span className="sumProductDeliveryText">Сумма товара</span>
                                <span className="subProductDeliveryPrice">15 990 ₸</span>
                            </div>
                            <div className="subProductDelivery">
                                <span className="sumProductDeliveryText">Сумма доставки</span>
                                <span className="subProductDeliveryPrice">1000 ₸</span>
                            </div>
                            <div className="subProductDelivery">
                                <span className="generalSum">Общая сумма</span>
                                <span className="generalCount">16 990 ₸</span>
                            </div>
                        </div>
                    </div>

                    <button className="deliverybtn">
                        <p className="btnText">
                            Заказать
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCheckoutComponent