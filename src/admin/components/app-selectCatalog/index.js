import { useState, useEffect, useContext } from "react";
import classnames from "classnames";

import { DataContext } from "../../context/DataContext";

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

export const objCityText = [
    { label: "Актау", value: "aktau" },
    { label: "Актобе", value: "aktobe" },
    { label: "Астана", value: "astana" },
];

const SelecterCatalogComponent = ({ placeholderText }) => {
    const { selectedValue, SetValueSelected, statusFilter, ToggleStatusFilter, SetStatusFilter } = useContext(DataContext);


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
        const handler = () => SetStatusFilter({ [statusFilter["selectGender"]]: false });

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    });

    return (
        <div className="selectChoose">
            <div className={
                classnames("selectChoose-block", {
                    "selectChoose-block_active": statusFilter["selectGender"]
                })}
                style={{ color: getDispaly() === placeholderText && placeholderText !== "Женщинам" ? "#969CAF" : "#252728" }}
                onClick={(e) => ToggleStatusFilter(e, "selectGender")}>

                {getDispaly()}

                {statusFilter["selectGender"]
                    ? <ArrowUp className={`icon`} width="14" height="28" />
                    : <ArrowDown className="icon" width="14" height="28" />}
            </div>

            {/* component ke boly kerek  */}
            <div className={
                classnames("dropdown-tags", {
                    "dropdown-tags_active": statusFilter["selectGender"]
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
    const { statusFilter, ToggleStatusFilter, SetStatusFilter } = useContext(DataContext);
    const [selectedValue, setSelectedValue] = useState(null);


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

    useEffect(() => {
        const handler = () => SetStatusFilter({ [statusFilter["selectClother"]]: false });

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    });

    return (
        <div className="selectChoose">
            <div className={
                classnames("selectChoose-block", {
                    "selectChoose-block_active": statusFilter["selectClother"]
                })}
                style={{ color: getDispaly() === placeholderText && placeholderText !== "Верхняя одежда" ? "#969CAF" : "#252728" }}
                onClick={(e) => ToggleStatusFilter(e, "selectClother")}>

                {getDispaly()}

                {statusFilter["selectClother"]
                    ? <ArrowUp className={`icon`} width="14" height="28" />
                    : <ArrowDown className="icon" width="14" height="28" />}
            </div>

            {/* component ke boly kerek  */}
            <div className={
                classnames("dropdown-tags", {
                    "dropdown-tags_active": statusFilter["selectClother"]
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