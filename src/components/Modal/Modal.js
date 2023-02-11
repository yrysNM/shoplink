
import closeImg from "../../resources/icon/close.svg";
import "./modal.scss";

const Modal = ({ children, onClose, classPopup = "defaultPosClosePopup" }) => {
  return (
    <div className="overlay">
      <div className="popup">
        {children}
        <img
          className={classPopup}
          src={closeImg}
          alt="close"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export { Modal };
