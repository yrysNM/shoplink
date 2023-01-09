// import LastOrderTableComponent from "./helpers/lastOrderTable";
import { Link } from "react-router-dom";
import LastOrderGridComponent from "./helpers/lastOrderGrid";
import "./index.scss";

const LastOrderComponent = () => {


    return (
        <div className="last-order">
            <div className="container">
                <div className="catalogCity_block last-order__wrapper">
                    <div className="last-order__head">
                        <p className="text-catalogCityHead" style={{ fontWeight: 600 }}>Последние заказы</p>


                        <Link to={"/order"}>
                            <p className="text">
                                <span className="linkSite" style={{ fontSize: 16 }}>Посмотреть все</span>
                            </p>
                        </Link>
                    </div>

                    {/* <table className="table">
                        <thead className="thead">

                            <tr>
                                <th className="th" style={{ paddingLeft: 24, textAlign: "left" }}>Номер заказа</th>
                                <th className="th">Дата</th>
                                <th className="th">Город</th>
                                <th className="th">Имя покупателя</th>
                                <th className="th">Номер телефона</th>
                                <th className="th">Общая сумма</th>
                                <th className="th">Статус</th>
                                <th className="th"></th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            <LastOrderTableComponent />
                        </tbody>
                    </table> */}
                    {/* grid ка озгерту керек болды */}
                    <div className="grid-temp">
                        <div className="box th">Номер заказа</div>
                        <div className="box th">Дата</div>
                        <div className="box th">Город</div>
                        <div className="box th">Имя покупателя</div>
                        <div className="box th">Номер телефона</div>
                        <div className="box th">Общая сумма</div>
                        <div className="box th">Статус</div>
                        <div className="box th"></div>

                        <LastOrderGridComponent isLastOrder={true} colorComposition={"#40BFFF"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastOrderComponent;