import { CustomButton } from "../../components/CustomButton/";
import React, { useState } from "react";
import "./CategoryButtons.css";

const CategoryButtons = ({ buttons }) => {
  const [activeButton, setActiveButton] = useState(buttons[0]);

  return (
    <div className="category-group">
      {buttons.map((item) => (
        <CustomButton
          key={item}
          text={item}
          clazz={
            activeButton === item
              ? "primary category-btn-padding"
              : "secondary-borderless category-btn-padding"
          }
          onPressButton={() => setActiveButton(item)}
        />
      ))}
    </div>
  );
};

export { CategoryButtons };
