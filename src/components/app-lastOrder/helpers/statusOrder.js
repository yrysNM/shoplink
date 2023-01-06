import { useState } from "react";
import ChooseOrderComponent from "../../app-chooseOrder";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

/**
 * 
 * @param {ArrowComponent icon arrow, item - data} StatusORderComponent
 *  setNumberOrderData - context kylu kerek
 * @returns JSX component 
 */
const StatusOrderComponent = ({ item }) => {
    const [statusToggle, setStatusToggle] = useState(false);

    const handleClickToggle = (status) => {
        if (status === item.numberOrder) {
            setStatusToggle(statusToggle => !statusToggle);
        }
    }

    return (
        <div className="box status-box">
            <div className="select select-table__status"
                style={{ backgroundColor: item.chooseStatusBgColor }}
                onClick={() => handleClickToggle(item.numberOrder)}>
                <span className="select-table__textStatus" style={{ color: item.statusColorText }}>{item.status}</span>

                {/* егер status true кайтарса онда стрелка устыге котерыледы */}
                {statusToggle ? <ArrowUp /> : <ArrowDown />}
            </div>
            {/* статус тексеремыз что тру и заказ баскан заказымызга тен екеннын тексеремыз */}
            {statusToggle ? <ChooseOrderComponent bgColor={item.bgColor} status={item.status} /> : null}
        </div >

    );
}

export default StatusOrderComponent;