import { useState, useEffect } from "react";
import classnames from "classnames";


import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../resources/icon/shopDataIcons/arrowUp.svg";

import "./index.scss";

const ShopSelectComponent = ({ objItems, placeholderText, iconComponent, title, shopCountryVoluteClass, bottom }) => {
    const [toggleArrow, setToggleArrow] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleClick = (e) => {
        e.stopPropagation();

        setToggleArrow(toggleArrow => !toggleArrow);
    }

    const getDisplay = () => {
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
        const handler = () => setToggleArrow(false);

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    });


    return (
        <div className={classnames("form-info from-infoStoreSelect", {
            "form-input form-inputCities form-inputVolute": shopCountryVoluteClass?.volute,
            "form-input form-inputCities": shopCountryVoluteClass?.city
        })}>
            {title
                ?
                <p className="text-formTitle">
                    {title}
                </p>
                : null}


            <div className="selectChoose">
                <div className={`iconform`} style={{ bottom: "auto", top: "calc(55%)", transform: "translateY(-50%)" }}>
                    {iconComponent}
                </div>
                <div className={
                    classnames("selectChoose-block", {
                        "selectChoose-block_active": toggleArrow,

                    })}
                    style={{
                        color: placeholderText === "Выберите раздел" ? "#969CAF" : "#252728",
                        paddingLeft: shopCountryVoluteClass?.volute || placeholderText === "Выберите раздел" ? "14px" : "44px",
                        width: placeholderText === "Выберите раздел" ? "340px" : "auto"
                    }}
                    onClick={handleClick}>

                    {getDisplay()}

                    {toggleArrow
                        ? <ArrowUp className={`icon`} width="14" height="28" />
                        : <ArrowDown className="icon" width="14" height="28" />}
                </div>

                {/* component ke boly kerek  */}
                <div className={
                    classnames("dropdown-tags", {
                        "dropdown-tags_active": toggleArrow
                    })} style={{
                        bottom: bottom
                    }}>
                    {objItems?.map(item => (
                        <div key={item.value} onClick={() => onItemClick(item)} className="selectValues">
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopSelectComponent;