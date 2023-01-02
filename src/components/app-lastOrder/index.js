import LastOrderTableComponent from "./helpers/lastOrderTable";
import "./index.scss";

const LastOrderComponent = () => {


    return (
        <div className="last-order">
            <div className="container">
                <div className="catalogCity_block last-order__wrapper">
                    <div className="last-order__head">
                        <p className="text-catalogCityHead" style={{ fontWeight: 600 }}>Последние заказы</p>


                        <p className="text">
                            <span className="linkSite" style={{ fontSize: 16 }}>Посмотреть все</span>
                        </p>
                    </div>

                    <table className="table">
                        <thead className="thead">

                            <tr>
                                <th className="th">Номер заказа</th>
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
                            {/* <LastOrderComponent data={{
                                numberOrder: "#0011",
                                dateOrder: "23/12/2021",
                                cityName: "Алматы",
                                phoneNumber: "+7 (708) 369 09 18",
                                price: 19980,
                                status: "Не обработан",
                                statusColorText: "#969CAF",
                                chooseStatusBgColor: "#F4F6FC"
                            }} /> */}

                            {/* <LastOrderTableComponent data={{
                                numberOrder: "#0010",
                                dateOrder: "23/12/2021",
                                cityName: "Алматы",
                                userName: "Аружан",
                                phoneNumber: "+7 (702) 345 49 56",
                                price: 25980,
                                status: "Обработан",
                                statusColorText: "#5C61F4",
                                chooseStatusBgColor: "rgba(92, 97, 244, 0.07)"

                            }} /> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default LastOrderComponent;