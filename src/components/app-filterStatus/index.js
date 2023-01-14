import { useState } from "react";
import classnames from "classnames";

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

export const TickIconComponent = ({ iconIndex, tickValue = true, styleBox }) => {

    const [tickToggle, setTickToggle] = useState(tickValue);

    const handleClick = (index) => {
        if (iconIndex === index) {
            setTickToggle(tickToggle => !tickToggle);
        }
    }
    return (
        <div
            className={
                classnames(`filterStatus-block__box${styleBox}`, {
                    "activeFilter": tickToggle
                })}
            onClick={() => handleClick(iconIndex)}>
            <TickIcon />
        </div>
    );
}

export default FilterStatusComponent;