import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./index.scss";

const Modal = ({ children }) => {
    const { isActiveModal } = useContext(DataContext);

    return (
        <div
            className={`overlay overlay__active-${isActiveModal}`}>
            <div className="modal">
                <div
                    className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;