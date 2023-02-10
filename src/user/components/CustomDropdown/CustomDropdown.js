import React, { useState } from "react";
import "./CustomDropdown.css";

const CustomDropdown = ({ title, descr }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={() => setOpen(!isOpen)}>
        <span>{title}</span>
        {isOpen ? (
          <img
            className="dropdown-arrow"
            src="/icons/arrow-down-blue.svg"
            alt="arrow"
          />
        ) : (
          <img
            className="dropdown-arrow"
            src="/icons/arrow-down.svg"
            alt="arrow"
          />
        )}
      </div>
      <div className={`dropdown-body ${isOpen && "dropdown-body-active"}`}>
        {descr}
      </div>
    </div>
  );
};

export { CustomDropdown };
