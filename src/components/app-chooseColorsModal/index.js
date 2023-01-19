import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import "./index.scss";

const ChooseColordModalConponent = () => {

    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="availableColors">
                <p className="availableColors__titleText">
                    Нажмите на доступные цвета
                </p>

                <div className="availableColors__block">
                    <div className="colorBlock">
                        <span className="colorProduct"></span>
                        <p className="colorText">Бежевый</p>
                    </div>
                    <div className="colorBlock">
                        <span className="colorProduct" style={{ backgroundColor: "#FFFFFF", border: "1px solid #B7BCCC" }}></span>
                        <p className="colorText">Белый</p>
                    </div>
                    <div className="colorBlock activeTickIconText">
                        <span className="colorProduct" style={{ backgroundColor: "#805B42" }}>
                            <TickIcon width="15" height="10" />
                        </span>
                        <p className="colorText">Коричневый</p>
                    </div>
                    <div className="colorBlock">
                        <span className="colorProduct" style={{ backgroundColor: "#C0648F" }}></span>
                        <p className="colorText">Розовый</p>
                    </div>
                    <div className="colorBlock">
                        <span className="colorProduct" style={{ backgroundColor: "#9C9C9C" }}></span>
                        <p className="colorText">Серый</p>
                    </div>
                    <div className="colorBlock">
                        <span className="colorProduct" style={{ backgroundColor: "#B158E8" }}></span>
                        <p className="colorText">Сиреневый</p>
                    </div>
                    <div className="colorBlock">
                        <span className="colorProduct" style={{ backgroundColor: "#1C6BE2" }}></span>
                        <p className="colorText">Синий</p>
                    </div>
                    <div className="colorBlock activeTickIconText">
                        <span className="colorProduct" style={{ backgroundColor: "#252728" }}>
                            <TickIcon width="15" height="10" />
                        </span>
                        <p className="colorText">Черный</p>
                    </div>
                </div>

                <div className="btns">
                    <button className="btns-block cancelBtn" onClick={HideModal}>Отмена</button>
                    <button className="removeBtn" onClick={HideModal}>
                        <p className="btnText">
                            Удалить
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

export default ChooseColordModalConponent;