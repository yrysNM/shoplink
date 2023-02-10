import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import "./index.scss";

const Modal = ({ children }) => {
    const { HideModal, isActiveModal } = useContext(DataContext);

    return (
        <div
            onClick={HideModal}
            className={`overlay overlay__${isActiveModal.classNameIsActive}`}
            style={{
                position: isActiveModal?.absolute
            }}>
            <div
                className={`modal-${isActiveModal.widthModal} modal`}
                style={{
                    maxWidth: isActiveModal?.widthModal,
                    top: isActiveModal.topPosition,
                    right: isActiveModal.rightPosition,
                    left: isActiveModal.leftPosition,
                    bottom: isActiveModal.bottom,
                    transform: isActiveModal.transform
                }}>
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