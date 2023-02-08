import { useEffect, useContext } from "react";

import { DataContext } from "../../../context/DataContext";
import FilterStatusComponent from "../../app-filterStatus";

import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";


const StatusFilterComponent = ({ filterDate = "", textStatus, objText, id }) => {
    const { statusFilter, SetStatusFilter, ToggleStatusFilter } = useContext(DataContext);

    useEffect(() => {
        const handler = () => SetStatusFilter(({ [statusFilter[id]]: false }));

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    });

    return (
        <div className={`statusFilter${filterDate.length > 0 ? " " + filterDate : ""}`}>
            <div className="statusBlockFilter"
                onClick={(e) => ToggleStatusFilter(e, id)}
                style={{
                    boxShadow: statusFilter[id] ? "0px 0px 20px rgba(0, 0, 0, 0.06)" : "none"
                }}>
                {textStatus}
                {statusFilter[id]
                    ? <ArrowUp className={`icon`} />
                    : <ArrowDown className="icon" />
                }
            </div>

            {statusFilter[id] && <FilterStatusComponent objText={objText} />}
        </div>
    );
}


export default StatusFilterComponent;