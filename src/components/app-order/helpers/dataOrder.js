import { useContext } from "react";

import { DataContext } from "../../../context/DataContext";
import { HelpFormInputComponent } from "../../app-shop";
import { objTextStatus } from "../../app-chooseOrder";
import LastOrderGridComponent from "../../app-lastOrder/helpers/lastOrderGrid";
import StatusFilterComponent from "./statusFilter";
import DateThenToComponent from "./dateThenTo";

import { ReactComponent as SearchIcon } from "../../../resources/icon/orderIcons/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../../resources/icon/orderIcons/filterIcon.svg";


import "react-datepicker/dist/react-datepicker.css";
import "./dataOrder.scss";
import "../../app-lastOrder/index.scss";

const DataOrderComponent = () => {
    const { isActiveModal, OpenModal } = useContext(DataContext);

    return (
        <>
            <div className="dataOrder">
                <div className="dataOrder-filter">
                    <form className='form-filter'>
                        <HelpFormInputComponent data={{
                            iconComponent: <SearchIcon />,
                            inputType: "text",
                            placeholder: "Поиск по номеру заказа или телефона",
                            inputName: "search input",

                        }} />

                        <DateThenToComponent />

                        <StatusFilterComponent textStatus={"Статус"} objText={objTextStatus} />
                        <div className="statusFilter">
                            <div
                                className={`statusBlockFilter modalFilter ${isActiveModal.classNameIsActive && "activeModal"}`}
                                onClick={() => OpenModal({
                                    id: "filterModal",
                                    classNameIsActive: "activeModalFilter",
                                    topPosition: "56%",
                                    rightPosition: "43px"
                                })}>

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

        </>

    );
}

export default DataOrderComponent;