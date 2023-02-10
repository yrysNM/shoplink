import { useContext, useEffect } from "react";

import { DataContext } from "../../../context/DataContext";
import CompositionComponent from "../../app-composition";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

const CompositionOrderComponent = ({ item, colorComposition }) => {
    const { numberOrder } = item;
    const { statusFilter, SetStatusFilter, ToggleStatusFilter } = useContext(DataContext);

    useEffect(() => {
        const handler = () => SetStatusFilter({ [statusFilter[numberOrder]]: false });

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    });

    return (
        <>
            <div className="box">
                <div className="select select-table__composition" onClick={(e) => ToggleStatusFilter(e, numberOrder + "composition")}>
                    <span className="select-table__textComposition" style={{ color: colorComposition }}>Состав</span>
                    {
                        statusFilter[`${numberOrder}composition`]
                            ? <ArrowUp />
                            : <ArrowDown />
                    }

                </div>
            </div>

            {statusFilter[`${numberOrder}composition`] &&
                <CompositionComponent />}
        </>
    );
}

export default CompositionOrderComponent;