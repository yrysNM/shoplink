import { useState } from "react";
import classnames from "classnames";

import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../resources/icon/shopDataIcons/arrowUp.svg";

import "./index.scss";


const objTextCatalogGender = [
    { label: "Женщинам", value: "женщинам" },
    { label: "Мужчинам", value: "мужчинам" },
];

const objTextSubCatalog = [
    { label: "Верхняя одежда", value: "верхняя одежда" },
    { label: "Футболка", value: "футболка" }
];

const SelecterCatalogComponent = ({ placeholderText }) => {
    const [toggleArrow, setToggleArrow] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    function handleClick() {
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
        setSelectedValue(option);
    }

    return (
        <div className="selectChoose">
            <div className={
                classnames("selectChoose-block", {
                    "selectChoose-block_active": toggleArrow
                })}
                style={{ color: getDispaly() === placeholderText ? "#969CAF" : "#252728" }}
                onClick={handleClick}>

                {getDispaly()}

                {toggleArrow
                    ? <ArrowUp className={`icon`} width="14" height="28" />
                    : <ArrowDown className="icon" width="14" height="28" />}
            </div>

            {/* component ke boly kerek  */}
            <div className={
                classnames("dropdown-tags", {
                    "dropdown-tags_active": toggleArrow
                })}>
                {objTextCatalogGender.map(item => (
                    <div key={item.value} onClick={() => onItemClick(item)} className="selectValues">
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export const SubSelectorCatalogComponent = ({ placeholderText }) => {
    const [toggleArrow, setToggleArrow] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    function handleClick() {
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
        setSelectedValue(option);
    }

    return (
        <div className="selectChoose">
            <div className={
                classnames("selectChoose-block", {
                    "selectChoose-block_active": toggleArrow
                })}
                style={{ color: getDispaly() === placeholderText ? "#969CAF" : "#252728" }}
                onClick={handleClick}>

                {getDispaly()}

                {toggleArrow
                    ? <ArrowUp className={`icon`} width="14" height="28" />
                    : <ArrowDown className="icon" width="14" height="28" />}
            </div>

            {/* component ke boly kerek  */}
            <div className={
                classnames("dropdown-tags", {
                    "dropdown-tags_active": toggleArrow
                })}>
                {objTextSubCatalog.map(item => (
                    <div key={item.value} onClick={() => onItemClick(item)} className="selectValues">
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelecterCatalogComponent;