import React, { useState } from "react";
import "./CustomBox.css";

const CustomBox = ({ text, isColor = false }) => {
  const [isPressed, setPressed] = useState(false);

  return (
    <button
      className={`custom-box ${isColor && "custom-box-default"} ${
        isPressed && "custom-box-active"
      }`}
      onClick={() => setPressed(!isPressed)}
    >
      {text}
    </button>
  );
};

export { CustomBox };
