import { useContext } from "react"

import Modal from "../ModalWindow"
import { DataContext } from "../../context/DataContext"

const WarningsRemoveComponent = ({ catalogNumber }) => {
    const { HideModal } = useContext(DataContext);

    return (
        <Modal>
            <div className="warningsRemove">
                <p className="warningsText">
                    Вы уверены, что хотите удалить товар {catalogNumber}? Данные не будут восстановлены.
                </p>

                <button className="cancelBtn">Отмена</button>
                <button className="cancelBtn">Удалить</button>
            </div>
            <div className="closeModal">
                <div className={`сlose close_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Modal>
    );
}

export default WarningsRemoveComponent;