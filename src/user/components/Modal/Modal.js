import React from "react";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="overlay overlay-modal">
      <div className="popup">
        {children}
        <img
          className="popup-close"
          src="/icons/close.svg"
          alt="close"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export { Modal };
