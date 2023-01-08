import { useState } from "react";
import FilterStatusComponent from "../../app-filterStatus";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

const StatusFilterComponent = ({ filterDate = "" }) => {
    const [statusFilter, setStatusFilter] = useState(false);

    const toggleFilterStatus = (e) => {
        e.stopPropagation();

        setStatusFilter(statusFilter => !statusFilter);
    }

    return (
        <div className={`statusFilter ${filterDate.length > 0 && filterDate}`}>
            <div className="statusBlockFilter"
                onClick={toggleFilterStatus}
                style={{
                    borderBottom: statusFilter ? "none" : "1px solid #DBDDE5",
                    boxShadow: statusFilter ? "0px 0px 20px rgba(0, 0, 0, 0.06)" : "none"
                }}>
                Статус
                {statusFilter
                    ? <ArrowUp className={`icon`} />
                    : <ArrowDown className="icon" />
                }
            </div>

            {statusFilter && <FilterStatusComponent />}
        </div>
    );
}

export default StatusFilterComponent;