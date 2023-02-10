import React from "react";
import { Card } from "../Card";
import "./GridCards.css";

const GridCards = ({ render }) => {
  return (
    <section className="grid-cards">
      {render.map((item) => (
        <Card
          key={Date.now() + 1000 * Math.random()}
          id={item.id}
          title={item.title}
          path={item.path}
          price={item.price}
          discount={item.discount}
          showButton={item.showButton}
          isCardFavorite={item.isFavorite}
        />
      ))}
    </section>
  );
};

export { GridCards };
