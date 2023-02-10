import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showAlert } from "../../../redux/alertReducer";

import { CustomBox } from "../../components/CustomBox";
import { CustomButton } from "../../components/CustomButton";
import { CustomDropdown } from "../../components/CustomDropdown";
import { SliderCard } from "../../components/SliderCard";
import { Modal } from "../../components/Modal";
import { Tag } from "../../components/Tag";
import { DotsSlider } from "../../components/DotsSlider";

import { DefaultLayout } from "../../../layouts/default";

import "./DetailPage.scss";

const DetailPage = () => {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const slides = [
    "/images/detail.svg",
    "/images/detail.svg",
    "/images/detail.svg",
  ];

  return (
    <React.Fragment>
      <DefaultLayout title={id}>
        <section className="detail">
          <div className="detail-slider">
            <DotsSlider>
              {slides.map((item, index) => (
                <div key={index} className="img-slider-detail-wrapper">
                  <img className="img-slider-detail" src={item} alt="detail" />
                </div>
              ))}
            </DotsSlider>
          </div>
          <div className="detail-padding">
            <h2 className="detail-title">Платье из бархата с драпировкой</h2>
            <div className="detail-subtitle">
              <div className="card-price-block">
                <span className="card-price">12 490 ₸</span>
                <span className="card-discount">25 990 ₸</span>
              </div>
              <Tag text={"-50%"} tagCard={false} clazz={"discount"} />
            </div>
            <p className="detail-descr">
              Платье миди с круглым вырезом и длинными рукавами со складками.
              Разрез снизу, потайная застежка-молния сзади.
            </p>
            <div className="detail-option">
              <h3>Выберите размер</h3>
              <div className="detail-option-block">
                <CustomBox text={"S"} />
                <CustomBox text={"M"} />
                <CustomBox text={"L"} />
              </div>
            </div>
            <div className="detail-option">
              <h3>Выберите цвет</h3>
              <div className="detail-option-block">
                <div className="color-circle"></div>
                <div className="color-circle"></div>
                <div className="color-circle"></div>
              </div>
            </div>
            <div className="detail-btn-group">
              <CustomButton
                text={"Заказать"}
                clazz={"primary"}
                onPressButton={() => setModalOpen(true)}
              />
              <CustomButton text={"Написать"} icon={"/icons/whatsup.svg"} />
            </div>
            <CustomDropdown
              title={"Характеристика"}
              descr={
                "Стандарт Green to Wear 2.0 направлен на минимизацию воздействия текстильного производства на окружающую среду. Для этого мы разработали программу Inditex The List, которая помогает нам обеспечивать чистоту производственных процессов, а также безопасность и гигиеничность нашей одежды."
              }
            />
            <CustomDropdown
              title={"Доставка"}
              descr={
                "Стандарт Green to Wear 2.0 направлен на минимизацию воздействия текстильного производства на окружающую среду. Для этого мы разработали программу Inditex The List, которая помогает нам обеспечивать чистоту производственных процессов, а также безопасность и гигиеничность нашей одежды."
              }
            />
          </div>
        </section>
        <SliderCard title={"Похожие товары"} />
      </DefaultLayout>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2 className="detail-modal-title">Ваш заказ</h2>
          <div className="detail-modal-header">
            <img
              className="detail-modal-img"
              src="/images/detail.svg"
              alt="detail"
            />
            <div className="detail-modal-descr">
              <p>Платье из бархата с драпировкой</p>
              <span>Размер: M-L</span>
              <span>Цвет: Черный</span>
            </div>
          </div>
          <div className="detail-modal-footer">
            <div className="detail-add-item">
              <img src="/icons/minus.svg" alt="sign" />
              <span>1</span>
              <img src="/icons/plus.svg" alt="sign" />
            </div>
            <div className="card-price-block">
              <span className="card-price">12 490 ₸</span>
              <span className="card-discount">25 990 ₸</span>
            </div>
          </div>
          <div className="detail-modal-btn-group">
            <CustomButton
              text={"Заказать сейчас"}
              clazz={"order-now"}
              onPressButton={() => navigate("/user/preview/order")}
            />
            <CustomButton
              text={"В корзину"}
              clazz={"primary"}
              onPressButton={() => {
                setModalOpen(false);
                dispatch(
                  showAlert({ isOpen: true, title: "Товар добавлен в корзину" })
                );
              }}
            />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { DetailPage };
