import { useState } from "react";
import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import "./index.scss";

const FilterStatusComponent = ({ objText }) => {

    return (
        <div className="filterStatus" style={{ bottom: `-${(objText.length * 53) - 4}px` }}>
            {objText.map((text, i) => (
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