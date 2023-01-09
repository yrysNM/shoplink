import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import { ReactComponent as DateIcon } from "../../../resources/icon/orderIcons/dateIcon.svg";

export const listMonthNames = ["янв", "фев", "мар", "апр", "май", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"];

registerLocale("ru", ru);

const DateThenToComponent = ({ filterDate = "" }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dateTextStart, setDateTextStart] = useState("Дата от");
    const [dateTextEnd, setDateTextEnd] = useState("Дата до");
    const [classNameDate, setClassNameDate] = useState("dateInput");

    const handleChangeStart = (date) => {
        setStartDate(date)
        setDateTextStart(`${date.getDate()} ${listMonthNames[date.getMonth()]}, ${date.getFullYear()}`);
        setClassNameDate("dateInput dateInput-active");
    }

    const handleChangeEnd = (date) => {
        setEndDate(date)
        setDateTextEnd(`${date.getDate()} ${listMonthNames[date.getMonth()]}, ${date.getFullYear()}`);
        setClassNameDate("dateInput dateInput-active");
    }

    return (
        <>
            <div className={`dateFilter${filterDate.length > 0 ? " " + filterDate : ""}`}>

                <DatePicker
                    selected={startDate}
                    value={dateTextStart}
                    className={classNameDate}
                    onChange={handleChangeStart}
                    selectsStart
                    startDate={startDate}
                    locale="ru"
                    placeholderText={dateTextStart}
                />
                <DateIcon className="dateIcon" />
            </div>
            <div className={`dateFilter${filterDate.length > 0 ? " " + filterDate : ""}`}>
                <DatePicker
                    value={dateTextEnd}
                    className={classNameDate}
                    onChange={handleChangeEnd}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    locale="ru"
                    placeholderText={dateTextEnd}
                />
                <DateIcon className="dateIcon" />
            </div>
        </>
    );
}

export default DateThenToComponent;