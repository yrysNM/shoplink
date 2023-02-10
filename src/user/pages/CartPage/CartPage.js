import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "../../components/CustomButton";
import { Modal } from "../../components/Modal";

import { DefaultLayout } from "../../../layouts/default";

import "./CartPage.scss";

const cartItems = [
  {
    img: "/images/mock.svg",
    title: "Пальто двубортное на пуговицах",
    size: "M-L",
    color: "Черный",
    quantity: 2,
    price: "25 990",
    discount: "12 490",
  },
  {
    img: "/images/mock.svg",
    title: "Футболка Qarala",
    size: "M-L",
    color: "Черный",
    quantity: 2,
    price: "25 990",
    discount: "12 490",
  },
  {
    img: "/images/mock.svg",
    title: "Платье из бархата с драпировкой",
    size: "M-L",
    color: "Черный",
    quantity: 2,
    price: "12 490",
    discount: "12 490",
  },
];

const CartPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <DefaultLayout title={"Корзина"}>
        <section className="cart-page">
          <div className="cart-items">
            {cartItems.map(
              (
                { title, img, size, color, quantity, price, discount },
                index
              ) => (
                <div className="cart-item" key={index}>
                  <div className="detail-modal-header">
                    <img
                      className="detail-modal-img cart-detail-img"
                      src={img}
                      alt="detail"
                    />
                    <div className="detail-modal-descr">
                      <p>{title}</p>
                      <span>Размер: {size}</span>
                      <span>Цвет: {color}</span>
                    </div>
                  </div>
                  <div className="detail-modal-footer">
                    <div className="detail-add-item">
                      <img
                        src="/icons/delete.svg"
                        alt="sign"
                        onClick={() => setModalOpen(true)}
                      />
                      <span>{quantity}</span>
                      <img src="/icons/plus.svg" alt="sign" />
                    </div>
                    <div className="card-price-block">
                      <span className="card-discount">{price} ₸</span>
                      <span className="card-price cart-card-price">
                        {discount} ₸
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="order-price">
            <div className="order-price-items order-price-last">
              <h3>3 товара на сумму</h3>
              <span>16 990 ₸</span>
            </div>
          </div>
          <CustomButton
            text={"Оформить заказ"}
            clazz={"primary"}
            onPressButton={() => navigate("/user/preview/order")}
          />
        </section>
      </DefaultLayout>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div className="cart-modal-img">
            <img src="/images/delete-img.svg" alt="delete" />
          </div>
          <p className="cart-modal-text">Товар будет удален из корзины</p>
          <div className="cart-modal-wrapper">
            <CustomButton text={"Удалить"} clazz={"secondary"} />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { CartPage };
