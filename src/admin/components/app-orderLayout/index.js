import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import StatusOrderComponent from "../app-lastOrder/helpers/statusOrder";
import { testData } from "../app-lastOrder/helpers/lastOrderGrid";
import { ReactComponent as LocationArrow } from "../../resources/icon/orderIcons/locationArrow.svg";
import "./index.scss";
import compositionImg2 from "../../resources/img/compositionImg2.png";


const OrderLayoutComponent = () => {
    const { numberOrder } = useParams();
    const data = useState(testData.filter(item => item.numberOrder === `#${numberOrder}`));

    return (
        <div className="orderLayout">
            <div className="container">
                <div className="orderLayout-head">
                    <div className="headBlock">

                        <Link to=".." relative="path" className="locationArrow">
                            <LocationArrow />
                        </Link>

                        <h2 className="orderNumber-text">Заказ #{numberOrder}</h2>

                        <StatusOrderComponent item={data[0][0]} />
                    </div>

                    <div className="tailBlock">
                        <div className="btn btn-order">
                            <button className="removeOrder">Удалить заказ</button>
                        </div>
                    </div>
                </div>

                {/* кандай заказ данныйлары */}
                <div className="order-data">
                    <div className="order-data__grid">
                        <div className="grid-temp order-data__grid-temp">
                            <div className="box th">Фото</div>
                            <div className="box th">Номер</div>
                            <div className="box th">Название и категория</div>
                            <div className="box th">Размер</div>
                            <div className="box th">Цвет</div>
                            <div className="box th">Кол-во</div>
                            <div className="box th">Цена</div>

                            <div className="row order-data__row">
                                <div className="box">
                                    <img src={compositionImg2} className="layoutImg" alt="order img" />
                                </div>
                                <div className="box numberOrder">#0560</div>
                                <div className="box">
                                    <p className="nameOrder">Пальто двубортное на пуговицах</p>
                                    <p className="descr descr-order">Женщинам, футболки</p>
                                </div>
                                <div className="box">M-L</div>
                                <div className="box">
                                    <span className="colorProduct" style={{ backgroundColor: "rgb(37, 39, 40)" }}></span>
                                </div>
                                <div className="box">x1</div>
                                <div className="box price">15 990 ₸</div>
                            </div>

                        </div>
                    </div>

                    {/* Данные заказа  */}
                    <div className="order-data__block">
                        <p className="titleOrderData">Данные заказа</p>

                        <div className="order-data__wrapper">
                            <div className="userData">
                                <div className="nameUserPhone">Город</div>
                                <div className="nameNumber">Алматы</div>
                            </div>
                            <div className="userData">
                                <div className="nameUserPhone">Адрес</div>
                                <div className="nameNumber">Жарокова 206</div>
                            </div>
                        </div>

                        <div className="order-data__wrapper cityAddress">

                            <h4 className="titleDataAddress">Адрес заказа</h4>
                            <div className="userData">
                                <div className="nameUserPhone">Имя</div>
                                <div className="nameNumber">Салтанат</div>
                            </div>
                            <div className="userData">
                                <div className="nameUserPhone">Номер телефона</div>
                                <div className="nameNumber">+7 (702) 369 09 18</div>
                            </div>
                        </div>

                        <div className="order-data__wrapper cityAddress">

                            <h4 className="titleDataAddress">Сумма заказа</h4>
                            <div className="userData">
                                <div className="nameUserPhone">Сумма за товары</div>
                                <div className="nameNumber">28 480 ₸</div>
                            </div>
                            <div className="userData">
                                <div className="nameUserPhone">Доставка</div>
                                <div className="nameNumber">1000 ₸</div>
                            </div>
                            <div className="userData">
                                <div className="nameUserPhone">Общая сумма</div>
                                <div className="nameNumber price">29 480 ₸</div>
                            </div>
                        </div>
                    </div>

                    {/* калай болганы */}
                    <div className="order-data__history">
                        <p className="title-history">История заказа</p>

                        <div className="history-roadMap">
                            <div className="roadMapStyle">
                                <span className="circleRoadMap"></span>
                                <span className="lineRoadMap"></span>
                                <span className="circleRoadMap"></span>
                                <span className="lineRoadMap"></span>
                                <span className="circleRoadMap"></span>
                            </div>
                            <div className="roadMapText">
                                <div className="roadMapData">
                                    <p className="orderText">Заказ завершен</p>
                                    <p className="orderDateText">16/12/2021</p>
                                </div>
                                <div className="roadMapData">
                                    <p className="orderText">Заказ обработан</p>
                                    <p className="orderDateText">17/12/2021</p>
                                </div>
                                <div className="roadMapData">
                                    <p className="orderText">Заказ оформлен</p>
                                    <p className="orderDateText">16/12/2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default OrderLayoutComponent;