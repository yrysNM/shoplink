import { useState } from "react";
import CompositionComponent from "../../app-composition";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

const CompositionOrderComponent = ({ item, colorComposition }) => {

    const [compositionShow, setCompositionShow] = useState(false);

    const handleClickToggle = (status) => {
        if (status === item.numberOrder) {
            setCompositionShow(compositionShow => !compositionShow);
        }
    }

    return (
        <>
            <div className="box">
                <div className="select select-table__composition" onClick={() => handleClickToggle(item.numberOrder)}>
                    <span className="select-table__textComposition" style={{ color: colorComposition }}>Состав</span>
                    {
                        compositionShow
                            ? <ArrowUp />
                            : <ArrowDown />
                    }

                </div>
            </div>

            {compositionShow &&
                <CompositionComponent />}
        </>
    );
}

export default CompositionOrderComponent;