import { useContext } from "react"

import { DataContext } from "../../context/DataContext"

import "./index.scss";

const WarningsRemoveModalComponent = ({ catalogNumber }) => {
    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="warningsRemove">
                <p className="warningsText">
                    Вы уверены, что хотите удалить товар {catalogNumber}? Данные не будут восстановлены.
                </p>

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

export default WarningsRemoveModalComponent;