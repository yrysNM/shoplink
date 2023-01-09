import { useState } from "react";
import { Link } from "react-router-dom";
import CompositionOrderComponent from "./compositionOrder";
import StatusOrderComponent from "./statusOrder";

export const testData = [
    {
        numberOrder: "#0011",
        dateOrder: "23/12/2021",
        cityName: "Алматы",
        userName: "Айганым",
        phoneNumber: "+7 (708) 369 09 18",
        price: 19980,
        status: "Не обработан",
        statusColorText: "#969CAF",
        chooseStatusBgColor: "rgba(244, 246, 252, 0.7)",
        bgColor: "#f7f8fd",
    },
    {
        numberOrder: "#0010",
        dateOrder: "23/12/2021",
        cityName: "Алматы",
        userName: "Аружан",
        phoneNumber: "+7 (702) 345 49 56",
        price: 25980,
        status: "Обработан",
        statusColorText: "#5C61F4",
        chooseStatusBgColor: "rgba(92, 97, 244, 0.07)",
        bgColor: "#f3f2fe",
    },
    {
        numberOrder: "#0009",
        dateOrder: "22/12/2021",
        cityName: "Астана",
        phoneNumber: "+7 (775) 456 45 64",
        userName: "Мадина",
        price: 29980,
        status: "Не обработан",
        statusColorText: "#F5A328",
        chooseStatusBgColor: "rgba(255, 179, 64, 0.07)",
        bgColor: "#FFFAF2",
    },
    {
        numberOrder: "#0008",
        dateOrder: "22/12/2021",
        cityName: "Алматы",
        phoneNumber: "+7 (702) 642 45 95",
        userName: "Шынгыс",
        price: 59540,
        status: "Завршен",
        statusColorText: "#53D160",
        chooseStatusBgColor: "rgba(57, 194, 54, 0.07)",
        bgColor: "#F1FAF0",
    },
    {
        numberOrder: "#0007",
        dateOrder: "22/12/2021",
        cityName: "Алматы",
        phoneNumber: "+7 (702) 642 45 95",
        userName: "Шынгыс",
        price: 59540,
        status: "Завршен",
        statusColorText: "#53D160",
        chooseStatusBgColor: "rgba(57, 194, 54, 0.07)",
        bgColor: "#F1FAF0",
    },
    {
        numberOrder: "#0006",
        dateOrder: "22/12/2021",
        cityName: "Алматы",
        phoneNumber: "+7 (702) 642 45 95",
        userName: "Шынгыс",
        price: 59540,
        status: "Завршен",
        statusColorText: "#53D160",
        chooseStatusBgColor: "rgba(57, 194, 54, 0.07)",
        bgColor: "#F1FAF0",
    },
    {
        numberOrder: "#0005",
        dateOrder: "22/12/2021",
        cityName: "Алматы",
        phoneNumber: "+7 (702) 642 45 95",
        userName: "Шынгыс",
        price: 59540,
        status: "Завршен",
        statusColorText: "#53D160",
        chooseStatusBgColor: "rgba(57, 194, 54, 0.07)",
        bgColor: "#F1FAF0",
    }
];

const LastOrderGridComponent = ({ isLastOrder, colorComposition }) => {
    //test data
    const data = useState(testData);


    const LayoutGridTable = ({ item }) => {
        return (
            <div className="row">
                <div className="box numberOrder">
                    <Link to={`/order/${item.numberOrder.substring(1, item.numberOrder.length)}`}>
                        {item.numberOrder}
                    </Link>
                </div>
                <div className="box">{item.dateOrder}</div>
                <div className="box">{item.cityName}</div>
                <div className="box">{item.userName}</div>
                <div className="box">{item.phoneNumber}</div>
                <div className="box">{item.price} ₸</div>

                <StatusOrderComponent item={item} />

                <CompositionOrderComponent item={item} colorComposition={colorComposition} />
            </div >
        );
    }
    // eger last order tek 4 shygar dese
    function showDataTable() {
        if (isLastOrder) {
            return (
                data[0].slice(0, 4).map((item, i) => (
                    <LayoutGridTable item={item} key={i} />
                ))
            )
        } else {
            return (

                data[0].map((item, i) => (
                    <LayoutGridTable item={item} key={i} />
                ))
            )
        }
    }

    return (
        showDataTable()
    );
}

export default LastOrderGridComponent;
