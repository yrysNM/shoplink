import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../../redux/alertReducer";

import { CustomButton } from "../../components/CustomButton";
import { RegionDropdown } from "../../components/RegionDropdown";

import { DefaultLayout } from "../../../layouts/default";

import "./OrderPage.scss";

const OrderPage = () => {
  const [delivery, setDelivery] = useState("Almaty");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = 1;
  const price = "12000";
  const img = "/images/detail.svg";

  return (
    <DefaultLayout title={"Оформление заказа"} showBackIcon>
      <section className="order">
        <div className="order-header">
          <h3>Заказ</h3>
          <span>{items} товар</span>
        </div>
        <img className="order-img" src={img} alt="order" />
        <form className="order-form">
          <div className="order-form-controll">
            <input
              className="input order-text"
              type="text"
              placeholder="Введите имя"
            />
            <img className="order-form-img" src="/icons/user.svg" alt="user" />
          </div>
          <div className="order-form-controll">
            <input
              className="input order-text"
              type="text"
              placeholder="+7 (xxx) xxx xx xx"
            />
            <img
              className="order-form-img"
              src="/icons/phone-gray.svg"
              alt="phone"
            />
          </div>
          <div className="order-delivery">
            <h4>Доставка</h4>
            <div className="order-delivery-location">
              <label className="order-delivery-btn">
                <input
                  type="radio"
                  className="order-radio"
                  name="radio"
                  checked={delivery === "Almaty"}
                  onChange={() => setDelivery("Almaty")}
                />
                <div className="order-delivery-wrapper">
                  <h4>По Алматы</h4>
                  <h5>от 1 дня, 1000 ₸</h5>
                </div>
              </label>
              <label className="order-delivery-btn">
                <input
                  type="radio"
                  className="order-radio"
                  name="radio"
                  checked={delivery === "Another"}
                  onChange={() => setDelivery("Another")}
                />
                <div className="order-delivery-wrapper">
                  <h4>В другие города Казахстана</h4>
                  <h5>от 7 дней, 1000 ₸</h5>
                </div>
              </label>
            </div>
            {delivery === "Another" && (
              <div className="order-form-controll">
                <RegionDropdown />
              </div>
            )}
            <div className="order-form-controll">
              <input
                type="text"
                className="input order-text"
                placeholder="Введите адрес"
              />
              <img
                className="order-form-img"
                src="/icons/location.svg"
                alt="location"
              />
            </div>
          </div>
          <div className="order-price">
            <div className="order-price-items">
              <h3>{items} товар на сумму</h3>
              <span>{price} ₸</span>
            </div>
            <div className="order-price-items">
              <h3>Сумма доставки</h3>
              <span>1000 ₸</span>
            </div>
            <div className="order-price-items order-price-last">
              <h3>Общая сумма</h3>
              <span>{+price + 1000} ₸</span>
            </div>
          </div>
          <CustomButton
            text={"Заказать"}
            clazz={"prevent"}
            onPressButton={(e) => {
              e.preventDefault();
              navigate(-1);
              dispatch(
                showAlert({
                  isOpen: true,
                  title: "Заказ оформлен",
                  text: "В ближайшее время с вами свяжутся консультанты магазина",
                })
              );
            }}
          />
        </form>
      </section>
    </DefaultLayout>
  );
};

export { OrderPage };
