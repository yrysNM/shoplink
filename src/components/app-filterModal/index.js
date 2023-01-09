import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { objTextStatus } from "../app-chooseOrder";
import { objTextCity } from "../app-chooseCity";
import Modal from "../ModalWindow";
import MultiRangeSlideComponent from "../app-multiRange";
import StatusFilterComponent from "../app-order/helpers/statusFilter";
import DateThenToComponent from "../app-order/helpers/dateThenTo";


import "./index.scss";

const FilterModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <Modal>
            <div className="filterBlock">
                <h4 className="filterBlock-title">Фильтры</h4>
                <form className="form">
                    <div className="form-filterBlock">
                        <DateThenToComponent filterDate={"filterBlock-datesStatus"} />
                        <StatusFilterComponent filterDate={"filterBlock-datesStatus"} textStatus={"Статус"} objText={objTextStatus} />
                        {/* сории но екы component косылып кетты city and status */}
                        <StatusFilterComponent textStatus={"Выберите город"} filterDate={"filterBlock-city"} objText={objTextCity} />
                    </div>


                    <div className="rangePrice">
                        <h5 className="rangePrice__text">Сумма заказа</h5>
                        <MultiRangeSlideComponent
                            min={2390}
                            max={120450}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />

                    </div>
                    <button type="reset" className="btn clear">Очистить</button>
                    <button type="submit" className="btn apply">Применить</button>
                </form>
            </div>

            <div className="closeModal">
                <div className={`сlose close_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Modal>
    );
}

export default FilterModalComponent