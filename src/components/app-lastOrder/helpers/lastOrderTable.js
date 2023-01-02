import { useState } from "react";
import ChooseOrderComponent from "../../app-chooseOrder";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";



const LastOrderTableComponent = () => {
    //test data
    const data = useState([
        {
            numberOrder: "#0011",
            dateOrder: "23/12/2021",
            cityName: "Алматы",
            userName: "Айганым",
            phoneNumber: "+7 (708) 369 09 18",
            price: 19980,
            status: "Не обработан",
            statusColorText: "#969CAF",
            chooseStatusBgColor: "rgba(244, 246, 252, 0.7)"
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
            chooseStatusBgColor: "rgba(92, 97, 244, 0.07)"
        },
        {
            numberOrder: "#0009",
            dateOrder: "22/12/2021",
            cityName: "22/12/2021",
            phoneNumber: "+7 (775) 456 45 64",
            userName: "Мадина",
            price: 29980,
            status: "Не обработан",
            statusColorText: "#F5A328",
            chooseStatusBgColor: "rgba(255, 179, 64, 0.07)"
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
            chooseStatusBgColor: "rgba(57, 194, 54, 0.07)"
        }

    ]);

    const [statusToggle, setStatusToggle] = useState(false);

    const [numberOrderData, setNumberOrderData] = useState("");

    const handleClickHide = (status) => {
        setStatusToggle(false);
        setNumberOrderData(status);
    }

    const handleClickShow = (status) => {
        setStatusToggle(true);
        setNumberOrderData(status);
    }

    return (
        data[0].map(item => (
            <tr key={item.numberOrder} data-key={item.numberOrder}>
                <td className="td numberOrder">{item.numberOrder}</td>
                <td className="td">{item.dateOrder}</td>
                <td className="td">{item.cityName}d</td>
                <td className="td">{item.userName}</td>
                <td className="td">{item.phoneNumber}</td>
                <td className="td">{item.price}  ₸</td>
                <td className="td">
                    <div className="select select-table__status" style={{ borderRadius: `${!statusToggle ? "15px" : "15px 15px 0 0"}`, backgroundColor: item.chooseStatusBgColor }}>
                        <span className="select-table__textStatus" style={{ color: item.statusColorText }}>{item.status}</span>

                        {/* егер status true кайтарса онда стрелка устыге котерыледы */}
                        {statusToggle && item.numberOrder === numberOrderData
                            ? <ArrowUp onClick={() => handleClickHide(item.numberOrder)} />
                            : <ArrowDown width="11px" height="11px" onClick={() => handleClickShow(item.numberOrder)} />

                        }
                    </div>
                    {/* статус тексеремыз что тру и заказ баскан заказымызга тен екеннын тексеремыз */}
                    {statusToggle && item.numberOrder === numberOrderData ? <ChooseOrderComponent bgColor={item.chooseStatusBgColor} status={item.status} />
                        : null
                    }
                </td>

                <td className="td">
                    <div className="select select-table__composition">
                        <span className="select-table__textComposition">Состав</span>

                        <ArrowDown />
                    </div>
                </td>
            </tr>
        ))
    );
}

export default LastOrderTableComponent;