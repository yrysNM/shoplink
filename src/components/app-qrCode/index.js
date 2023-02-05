
import qrImg from "../../resources/img/qr.png";

import "./index.scss";

const GetQrCodeComponent = () => {
    return (
        <div className="qrCode">
            <img src={qrImg} alt="qr" className="iconQrImg" />

            <button className="btn getQrBtn">
                Получить QR-код
            </button>
        </div>
    );
}

export default GetQrCodeComponent;