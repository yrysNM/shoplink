import { useEffect, useContext } from "react";
import classnames from "classnames";

import { DataContext } from "../../context/DataContext";

import "./index.scss";

const HamburgerComponent = () => {
    const { hamburgerActive, SetHamburgerValue } = useContext(DataContext);

    const activeHanburger = (e) => {
        e.stopPropagation();
        SetHamburgerValue(hamburgerActive => !hamburgerActive);
    }

    useEffect(() => {
        const handler = () => SetHamburgerValue(false);

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        }
    });


    return (
        <div
            className={classnames("hamburger", {
                "hamburger_active": hamburgerActive
            })}
            onClick={activeHanburger}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default HamburgerComponent;