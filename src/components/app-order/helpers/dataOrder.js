import { useState } from "react";
import { HelpFormInputComponent } from "../../app-shop";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import LastOrderGridComponent from "../../app-lastOrder/helpers/lastOrderGrid";
import FilterStatusComponent from "../../app-filterStatus";
import { ReactComponent as SearchIcon } from "../../../resources/icon/orderIcons/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../../resources/icon/orderIcons/filterIcon.svg";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";
import { ReactComponent as DateIcon } from "../../../resources/icon/orderIcons/dateIcon.svg";

import "react-datepicker/dist/react-datepicker.css";
import "./dataOrder.scss";
import "../../app-lastOrder/index.scss";

registerLocale("ru", ru);
const DataOrderComponent = () => {
    const [statusFilter, setStatusFilter] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dateTextStart, setDateTextStart] = useState("Дата от");
    const [dateTextEnd, setDateTextEnd] = useState("Дата до");
    const listMonthNames = ["янв", "фев", "мар", "апр", "май", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек"];


    const toggleFilterStatus = (e) => {
        e.stopPropagation();

        setStatusFilter(statusFilter => !statusFilter);
    }

    const handleChangeStart = (date) => {
        setStartDate(date)
        setDateTextStart(`${date.getDate()} ${listMonthNames[date.getMonth()]}, ${date.getFullYear()}`);
    }

    const handleChangeEnd = (date) => {
        setEndDate(date)
        setDateTextEnd(`${date.getDate()} ${listMonthNames[date.getMonth()]}, ${date.getFullYear()}`);
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

                    <div className="dateFilter">

                        <DatePicker
                            className="dateInput"
                            onChange={handleChangeStart}
                            selectsStart
                            startDate={startDate}
                            locale="ru"
                            placeholderText={dateTextStart}
                        />
                        <DateIcon className="dateIcon" />
                    </div>
                    <div className="dateFilter">
                        <DatePicker
                            className="dateInput"
                            onChange={handleChangeEnd}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            locale="ru"
                            placeholderText={dateTextEnd}
                        />
                        <DateIcon className="dateIcon" />
                    </div>

                    <div className="statusFilter">
                        <div className="statusBlockFilter"
                            onClick={toggleFilterStatus}
                            style={{
                                borderBottom: statusFilter ? "none" : "border: 1px solid #DBDDE5",
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

                    <div className="statusFilter">
                        <div className="statusBlockFilter modalFilter">

                            Фильтры
                            <FilterIcon className="icon" />
                        </div>

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