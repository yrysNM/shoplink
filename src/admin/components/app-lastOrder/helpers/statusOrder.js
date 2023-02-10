import { useEffect, useContext } from "react";

import { DataContext } from "../../../context/DataContext";
import ChooseOrderComponent from "../../app-chooseOrder";

import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

/**
 * @param {ArrowComponent icon arrow, item - data} StatusORderComponent
 *  setNumberOrderData - context kylu kerek
 * @returns JSX component 
 */
const StatusOrderComponent = ({ item }) => {
    const { numberOrder, status, statusColorText, bgColor, chooseStatusBgColor } = item;
    const { statusFilter, SetStatusFilter, ToggleStatusFilter } = useContext(DataContext);

    useEffect(() => {
        const handler = () => SetStatusFilter({ [statusFilter[numberOrder]]: false });

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    });


    return (
        <div className="box status-box">
            <div
                className={`select select-table__status ${statusFilter[numberOrder] && "select-table__status-active"}`}
                style={{ backgroundColor: chooseStatusBgColor }}
                onClick={(e) => ToggleStatusFilter(e, numberOrder)}>

                <span
                    className="select-table__textStatus"
                    style={{ color: statusColorText }}>{status}</span>

                {/* егер status true кайтарса онда стрелка устыге котерыледы */}
                {statusFilter[numberOrder] ? <ArrowUp /> : <ArrowDown />}
            </div>
            {/* статус тексеремыз что тру и заказ баскан заказымызга тен екеннын тексеремыз */}
            {statusFilter[numberOrder] ? <ChooseOrderComponent bgColor={bgColor} status={status} /> : null}
        </div >

    );
}

export default StatusOrderComponent;