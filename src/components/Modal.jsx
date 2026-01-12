import React from "react";
import ReactDOM from "react-dom"; 
import "./Modal.scss";


const Modal = ({ isOpen, onClose, children, transparentOverlay = false }) => {
  if (!isOpen) return null;


  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${transparentOverlay ? "transparent" : ""}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body 
  );
};

export default Modal;
