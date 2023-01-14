import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./index.scss";

const Modal = ({ children }) => {
    const { isActiveModal, HideModal } = useContext(DataContext);

    return (
        <div onClick={HideModal}
            className={`overlay overlay__${isActiveModal.classNameIsActive}`}>
            <div className="modal" style={{ top: isActiveModal.topPosition, right: isActiveModal.rightPosition }}>
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