import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./DotsSlider.css";

const DotsSlider = ({ children }) => {
  const sliderSettings = {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="slick-dot-custom"></div>,
  };

  return (
    <Slider {...sliderSettings} className="slider-wrapper">
      {children}
    </Slider>
  );
};

export { DotsSlider };
