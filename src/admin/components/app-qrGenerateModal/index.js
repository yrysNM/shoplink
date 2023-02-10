import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import qrImg from "../../resources/img/qr-img.png";

import "./index.scss";

const GenerateQrModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <div className="generateQr">
            <p className="generateQr__headText">QR-код</p>
            <div className="generateQrBlock">
                <div className="imgQr">
                    <img src={qrImg} alt="qr" className="qrImg" />
                </div>

                <h3 className="orderOnlineText">Принимаем заказы онлайн</h3>
                <p className="descr">наведите камеру на QR-код или перейдите по ссылке</p>

                <button className="btn urlBtn">example.com</button>
            </div>
            <div className="subDescrUrl">
                Можно распечатать и повесить этот QR код возле входа для того чтобы клиенты могли посетить ваш магазин онлайн в любой момент.
            </div>

            <div className="closeModal closeModal__small">
                <div className={`сlose close_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};


export default GenerateQrModalComponent;