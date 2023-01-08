import { useState } from "react";
import { objTextStatus } from "../app-chooseOrder";
import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import "./index.scss";

const FilterStatusComponent = () => {

    return (
        <div className="filterStatus">
            {objTextStatus.map((text, i) => (
                <div key={i} className="filterStatus-block">
                    <div className="filterStatus-block__text">
                        {text.text1}
                    </div>
                    <TickIconComponent iconIndex={i} />
                </div>
            ))}

        </div>
    );
}

const TickIconComponent = ({ iconIndex }) => {

    const [tickToggle, setTickToggle] = useState(true);

    const handleClick = (index) => {
        if (iconIndex === index) {
            setTickToggle(tickToggle => !tickToggle);
        }
    }
    return (
        <div className={`filterStatus-block__box ${tickToggle && "activeFilter"}`} onClick={() => handleClick(iconIndex)}>
            <TickIcon />
        </div>
    );
}

export default FilterStatusComponent;