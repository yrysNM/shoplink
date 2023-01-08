import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Modal from "../ModalWindow";
import DateThenToComponent from "../app-order/helpers/dateThenTo";
import StatusFilterComponent from "../app-order/helpers/statusFilter";
import "./index.scss";

const FilterModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <Modal>
            <div className="filterBlock">
                <h4 className="filterBlock-title">Фильтры</h4>
                <form className="form form-filterBlock">
                    <DateThenToComponent filterDate={"filterBlock-datesStatus"} />
                    <StatusFilterComponent filterDate={"filterBlock-datesStatus"} />


                    <div className="btn">
                        <button type="reset" className="clear">Очистить</button>
                        <button type="submit" className="btn  submit">Применить</button>
                    </div>
                </form>
            </div>

            <div className="closeModal">
                <div className={`hamburger hamburger_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Modal>
    );
}

export default FilterModalComponent