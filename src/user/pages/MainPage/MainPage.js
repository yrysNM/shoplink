import React from "react";
import { useNavigate } from "react-router-dom";

import { SliderCard } from "../../components/SliderCard";
import { CategoryButtons } from "../../components/CategoryButtons";
import { CustomButton } from "../../components/CustomButton";
import { DotsSlider } from "../../components/DotsSlider";

import { DefaultLayout } from "../../../layouts/default";

import "./MainPage.scss";

const MainPage = () => {
  const navigate = useNavigate();

  const onNavigateTo = () => {
    navigate(`user/preview/category/Все товары`);
  };

  const slides = [
    {
      title: "Название",
      text: "Небольшое описание <br /> длиной в две строки",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      title: "Название",
      text: "Небольшое описание <br /> длиной  в две строки",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      title: "Название",
      text: "Небольшое описание <br /> длиной в две строки",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  ];

  return (
    <DefaultLayout>
      <DotsSlider>
        {slides.map((item, index) => (
          <div key={index} className="intro">
            <img
              className="intro-img"
              src={`${item.img}`}
              alt="shopping-cart"
            />
          </div>
        ))}
      </DotsSlider>

      <SliderCard title={"Новинки"} />
      <SliderCard title={"Товары со скидкой"} />
      <CategoryButtons
        buttons={["Футболки", "Рубашки", "Штаны", "Обувь", "Другое"]}
      />
      <SliderCard title={"Футболки"} />
      <div className="intro-page-btn">
        <CustomButton
          text={"Показать все"}
          clazz={"secondary"}
          onPressButton={onNavigateTo}
        />
      </div>
    </DefaultLayout>
  );
};

export { MainPage };
