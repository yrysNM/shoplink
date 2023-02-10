import React from "react";
import Slider from "react-slick";
import { Card } from "../Card";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CustomSlider.css";

const CustomSlider = ({ slides }) => {
  const sliderSettings = {
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <Slider {...sliderSettings} className="slick-track-custom">
        {slides.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            path={item.path}
            tag={item.tag}
            discount={"25990"}
            body={item}
          />
        ))}
      </Slider>
    </React.Fragment>
  );
};

export { CustomSlider };
