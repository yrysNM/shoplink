import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./index.scss";

const Modal = ({ children }) => {
    const { isActiveModal, HideModal } = useContext(DataContext);

    return (
        <div onClick={HideModal}
            className={`overlay overlay__active-${isActiveModal}`}>
            <div className="modal">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;