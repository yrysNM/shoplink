
import { useContext } from "react"

import { DataContext } from "../../context/DataContext"

import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";
import imgCheckout from "../../resources/img/imgCheckout.png";

import "./index.scss";

const UserOrderModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="userOrderModal">
                <h3 className="textOrderModal">Ваш заказ</h3>
                <div className="userOrderModal__wrapper-block" style={{ marginTop: 20 }}>
                    <img src={imgCheckout} alt="product" />

                    <div className="productInfo">
                        <h4 className="infoName">Платье из бархата
                            с драпировкой</h4>

                        <p className="subtext">Размер: M-L  </p>
                        <p className="subtext">Цвет:  Черный</p>
                    </div>
                </div>
                <div className="userOrderModal__wrapper-subBlock">
                    <div className="countBlock">
                        <div className="trashPlusBlock">
                            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 1" stroke="#B7BCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="countNumber">1</span>
                        <div className="trashPlusBlock">
                            <PlusIcon width="15" height="15" />
                        </div>
                    </div>

                    <div className="priceProduct">
                        <span className="strokePrice"> 25 990 ₸</span>
                        <span className="generalCount">15 990 ₸</span>
                    </div>
                </div>
                <div className="btns">
                    <button className="btns-block cancelBtn" onClick={HideModal}>Заказать сейчас</button>
                    <button className="removeBtn" onClick={HideModal}>
                        <p className="btnText">
                            В корзину
                        </p>
                    </button>
                </div>
            </div>
            <div className="closeModal closeModal__small">
                <div className={`сlose close_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default UserOrderModalComponent;