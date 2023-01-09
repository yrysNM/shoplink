import { useState } from "react";
import FilterStatusComponent from "../../app-filterStatus";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

const StatusFilterComponent = ({ filterDate = "", textStatus, objText }) => {
    const [statusFilter, setStatusFilter] = useState(false);

    const toggleFilterStatus = (e) => {
        e.stopPropagation();

        setStatusFilter(statusFilter => !statusFilter);
    }

    return (
        <div className={`statusFilter${filterDate.length > 0 ? " " + filterDate : ""}`}>
            <div className="statusBlockFilter"
                onClick={toggleFilterStatus}
                style={{
                    boxShadow: statusFilter ? "0px 0px 20px rgba(0, 0, 0, 0.06)" : "none"
                }}>
                {textStatus}
                {statusFilter
                    ? <ArrowUp className={`icon`} />
                    : <ArrowDown className="icon" />
                }
            </div>

            {statusFilter && <FilterStatusComponent objText={objText} />}
        </div>
    );
}

export default StatusFilterComponent;