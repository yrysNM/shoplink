import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import qrImg from "../../resources/img/qr.png";

import "./index.scss";

const GetQrCodeComponent = () => {
    const { OpenModal } = useContext(DataContext);

    return (
        <div className="qrCode">
            <img src={qrImg} alt="qr" className="iconQrImg" />

            <button className="btn getQrBtn"
                onClick={() => OpenModal({
                    id: "generateQrModa",
                    classNameIsActive: "activeModalFilter",
                    topPosition: "50%",
                    rightPosition: "auto",
                    leftPosition: "50%",
                    transform: "translate(-50%, -50%)",
                    widthModal: "803",
                })}>
                Получить QR-код
            </button>
        </div>
    );
}

export default GetQrCodeComponent;