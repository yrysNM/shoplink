import React from "react";
import { Link } from "react-router-dom";

import { Tag } from "../Tag/Tag";
import "./Card.scss";

const Card = ({ id, title, price, path, discount, tag, body }) => {
  const tagDiv = [];
  return (
    <Link to={`/user/preview/detail/${id}`}>
      <div className="card">
        <div className="card-stack">
          <img className="card-img" src={path} alt={title} />
          {tag &&
            Object.entries(tag).map((item, index) => {
              if (item[0] === "discount" || item[0] === "credit") {
                tagDiv.push(item);
                return null;
              }

              return <Tag key={index} clazz={item[0]} text={item[1]} />;
            })}
          <div className="tag-wrapper">
            {tagDiv.map((item, index) => (
              <Tag key={index} clazz={item[0]} text={item[1]} />
            ))}
          </div>
        </div>
        <p className="card-title">{title}</p>
        {price && (
          <div className="card-price-block">
            <span className="card-price">{price} ₸</span>
            {discount && <span className="card-discount">{discount} ₸</span>}
          </div>
        )}
      </div>
    </Link>
  );
};

export { Card };
