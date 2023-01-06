import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import "./index.scss";

const FilterStatusComponent = () => {
    return (
        <div className="filterStatus">
            <div className="filterStatus-block">
                <div className="filterStatus-block__text">
                    Не обработан
                </div>

                <div className="filterStatus-block__box activeFilter">
                    <TickIcon />
                </div>
            </div>
            <div className="filterStatus-block">
                <div className="filterStatus-block__text">
                    Обработан
                </div>

                <div className="filterStatus-block__box activeFilter">
                    <TickIcon />
                </div>
            </div>
            <div className="filterStatus-block">
                <div className="filterStatus-block__text">
                    Завершен
                </div>

                <div className="filterStatus-block__box activeFilter">
                    <TickIcon />
                </div>
            </div>

        </div>
    );
}

export default FilterStatusComponent;