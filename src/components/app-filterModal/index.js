import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { objTextStatus } from "../app-chooseOrder";
import { objTextCity } from "../app-chooseCity";
import MultiRangeSlideComponent from "../app-multiRange";
import StatusFilterComponent from "../app-order/helpers/statusFilter";
import DateThenToComponent from "../app-order/helpers/dateThenTo";


import "./index.scss";

const FilterModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (

        <>
            <div className="filterBlock">
                <h4 className="filterBlock-title">Фильтры</h4>
                <form className="form">
                    <div className="form-filterBlock">
                        <DateThenToComponent filterDate={"filterBlock-datesStatus"} />
                        <StatusFilterComponent filterDate={"filterBlock-datesStatus"} textStatus={"Статус"} objText={objTextStatus} id="statusFilterModal1" />
                        {/* сории но екы component косылып кетты city and status */}
                        <StatusFilterComponent textStatus={"Выберите город"} filterDate={"filterBlock-city"} objText={objTextCity} id="statusFilterModal2" />
                    </div>


                    <div className="rangePrice">
                        <h5 className="rangePrice__text">Сумма заказа</h5>
                        <MultiRangeSlideComponent
                            min={2390}
                            max={120450}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />

                    </div>
                    <button className="btn clear">Очистить</button>
                    <button className="btn apply">Применить</button>
                </form>
            </div>

            <div className="closeModal">
                <div className={`сlose close_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default FilterModalComponent