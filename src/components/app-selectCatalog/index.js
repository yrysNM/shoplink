import { useState } from "react";
import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../resources/icon/shopDataIcons/arrowUp.svg";

import "./index.scss";


const objTextCatalogGender = [
    { label: "Женщинам", value: "женщинам" },
    { label: "Мужчинам", value: "мужчинам" },
    { label: "Выберите категорию", value: "выберите категорию" }
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

    const isSelected = (option) => {

        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    }

    return (
        <div className="selectChoose">
            <div className="selectChoose-block" onClick={handleClick}>
                {getDispaly()}

                {toggleArrow
                    ? <ArrowUp cclassName={`icon`} />
                    : <ArrowDown className="icon" width="14" height="28" />}
            </div>
            {/* objTextCatalogGender.map(item => (
                <div key={item.value} onClick={() => onItemClick(item)} className="selectValues">
                    {item.label}
                </div> */}
            {toggleArrow && <DropDownTagsComponent />}
        </div>
    );
}

const DropDownTagsComponent = () => {
    <div className="dropdown-tags">
        {objTextCatalogGender.map(item => (
            <div key={item.value} className="dropdown-tag-item">
                {item.label}
            </div>
        ))}
    </div>
}

export default SelecterCatalogComponent;