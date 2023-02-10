import React from "react";
import "./Tag.css";

const Tag = ({ text, clazz }) => {
  return (
    <div className={`tag tag-${clazz}`}>
      <div className="tag-inner">{text}</div>
    </div>
  );
};

export { Tag };
