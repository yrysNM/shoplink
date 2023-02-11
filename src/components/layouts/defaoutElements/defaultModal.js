import closeImg from "../../../resources/icon/close.svg";

const DefaultModal = ({ onClose, children }) => {

  return (
    <div className="modalblock-400Cn">
      {children}
      <img
        className="popup-close"
        src={closeImg}
        alt="close"
        onClick={onClose}
      />
    </div>
  );
}

export { DefaultModal };