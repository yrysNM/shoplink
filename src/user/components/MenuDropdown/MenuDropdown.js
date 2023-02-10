import React, { useState } from "react";
import { MenuLink } from "../MenuLink";
import "./MenuDropdown.css";

const MenuDropdown = ({ title }) => {
  const [isOpen, setOpen] = useState(false);
  const data = ["Футболки", "Платья", "Обувь"];
  return (
    <React.Fragment>
      <div className="menu-item-title" onClick={() => setOpen(!isOpen)}>
        <span className="menu-dropdown-title">{title}</span>
        <img
          className="menu-arrow"
          src={isOpen ? "/icons/arrow-down-blue.svg" : "/icons/arrow-down.svg"}
          alt="arrow-down"
        />
      </div>
      <ul className={`menu-sublist ${isOpen && "menu-sublist-active"}`}>
        {data.map((item) => (
          <li key={Date.now() + 100 * Math.random()}>
            <MenuLink
              key={Date.now() + 100 * Math.random()}
              title={item}
              to={`/user/preview/category/${item}`}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export { MenuDropdown };
