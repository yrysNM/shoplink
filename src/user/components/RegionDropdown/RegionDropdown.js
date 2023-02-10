import React, { useState } from "react";
import "./RegionDropdown.css";

const RegionDropdown = () => {
  const regions = [
    { id: null, region: "Выберите город" },
    { id: 1, region: "Актау" },
    { id: 2, region: "Актобе" },
    { id: 3, region: "Алматы" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [chosenRegion, setChosenRegion] = useState(regions[0]);

  const chooseRegion = (region) => {
    setChosenRegion(region);
    setOpen(!isOpen);
  };

  return (
    <div className="region-dropdown">
      <div className="region-dropdown-header" onClick={() => setOpen(!isOpen)}>
        <span className={`${chosenRegion.id && "region-dropdown-header-text"}`}>
          {chosenRegion.region}
        </span>
        {isOpen ? (
          <img
            className="region-dropdown-arrow"
            src="/icons/arrow-down-blue.svg"
            alt="arrow"
          />
        ) : (
          <img
            className="region-dropdown-arrow"
            src="/icons/arrow-down.svg"
            alt="arrow"
          />
        )}
      </div>
      <ul
        className={`region-dropdown-body ${
          isOpen && "region-dropdown-body-active"
        }`}
      >
        {regions.map((item) => (
          <li
            className={`region-dropdown-item ${
              item.id === chosenRegion.id && "region-dropdown-item-active"
            }`}
            key={item.id}
            onClick={() => chooseRegion(item)}
          >
            {item.region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RegionDropdown };
