import { useState, useContext, useEffect } from "react";
import classnames from "classnames";

import { DataContext } from "../../context/DataContext";
import { objCityText } from "../app-selectCatalog";

import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../resources/icon/shopDataIcons/arrowUp.svg";

import "./index.scss";

const UserSelectorComponent = ({ placeholderText }) => {
    const { selectedValue, SetValueSelected } = useContext(DataContext);

    const [toggleArrow, setToggleArrow] = useState(false);

    function handleClick(e) {
        e.stopPropagation();
        setToggleArrow(toggleArrow => !toggleArrow);
    }

    const getDispaly = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeholderText;
        } else {
            return selectedValue.label;
        }
    }

    const onItemClick = (option) => {
        SetValueSelected(option);
    }

    useEffect(() => {
        const handler = () => setToggleArrow(false);

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    });

    return (
        <div className="selectChoose" style={{ marginTop: 20 }}>
            <div className={
                classnames("selectChoose-block", {
                    "selectChoose-block_active": toggleArrow
                })}
                style={{ color: getDispaly() === placeholderText && placeholderText !== "Женщинам" ? "#969CAF" : "#252728" }}
                onClick={handleClick}>

                <span className="userCityPlaceholderText">
                    {getDispaly()}
                </span>

                {toggleArrow
                    ? <ArrowUp className={`icon`} width="14" height="28" />
                    : <ArrowDown className="icon" width="14" height="28" />}
            </div>

            {/* component ke boly kerek  */}
            <div className={
                classnames("dropdown-tags", {
                    "userdropdown-tags_active": toggleArrow
                })}>
                {objCityText.map(item => (
                    <div key={item.value} onClick={() => onItemClick(item)} className="selectValues">
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserSelectorComponent;