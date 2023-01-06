import { useState } from "react";
import { HelpFormInputComponent } from "../../app-shop";
import LastOrderGridComponent from "../../app-lastOrder/helpers/lastOrderGrid";
import FilterStatusComponent from "../../app-filterStatus";
import { ReactComponent as SearchIcon } from "../../../resources/icon/orderIcons/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../../resources/icon/orderIcons/filterIcon.svg";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";
// import { ReactComponent as DateIcon } from "../../../resources/icon/orderIcons/dateIcon.svg";

import "./dataOrder.scss";
import "../../app-lastOrder/index.scss";

const DataOrderComponent = () => {
    const [statusFilter, setStatusFilter] = useState(false);

    const toggleFilterStatus = () => {
        setStatusFilter(statusFilter => !statusFilter);
    }

    return (
        <div className="dataOrder">
            <div className="dataOrder-filter">
                <form className='form-filter'>
                    <HelpFormInputComponent data={{
                        iconComponent: <SearchIcon />,
                        inputType: "text",
                        placeholder: "Поиск по номеру заказа или телефона",
                        inputName: "search input",

                    }} />

                    <input type="date" name="date from" />
                    <input type="date" name="date from" />

                    <div
                        className="statusBlockFilter"
                        onClick={toggleFilterStatus}
                        style={{
                            borderBottom: statusFilter ? "none" : "border: 1px solid #DBDDE5",
                            boxShadow: statusFilter ? "0px 0px 20px rgba(0, 0, 0, 0.06)" : "none"

                        }}>
                        Статус
                        {statusFilter
                            ? <ArrowUp className="icon" />
                            : <ArrowDown className="icon" />
                        }

                        {statusFilter && <FilterStatusComponent />}
                    </div>

                    <div className="statusBlockFilter">
                        Фильтры
                        <FilterIcon className="icon" />
                    </div>
                </form>
            </div>

            <div className="grid-temp">
                <div className="box th">Номер заказа</div>
                <div className="box th">Дата</div>
                <div className="box th">Город</div>
                <div className="box th">Имя покупателя</div>
                <div className="box th">Номер телефона</div>
                <div className="box th">Общая сумма</div>
                <div className="box th">Статус</div>
                <div className="box th"></div>

                <LastOrderGridComponent isLastOrder={false} colorComposition={"#969CAF"} />
            </div>
        </div>
    );
}

export default DataOrderComponent;