import { useRef, useEffect } from "react";
import { HelpFormInputComponent } from "../../app-shop";
import LastOrderGridComponent from "../../app-lastOrder/helpers/lastOrderGrid";
import { ReactComponent as SearchIcon } from "../../../resources/icon/orderIcons/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../../resources/icon/orderIcons/filterIcon.svg";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
// import { ReactComponent as DateIcon } from "../../../resources/icon/orderIcons/dateIcon.svg";

import "./dataOrder.scss";
import "../../app-lastOrder/index.scss";

const DataOrderComponent = () => {

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

                    <div className="statusBlockFilter">
                        Статус
                        <ArrowDown style={{ cursor: "pointer" }} />
                    </div>

                    <div className="statusBlockFilter">
                        Фильтры
                        <FilterIcon style={{ cursor: "pointer" }} />
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

                <LastOrderGridComponent isLastOrder={+false} colorComposition={"#969CAF"} />
            </div>
        </div>
    );
}

export default DataOrderComponent;