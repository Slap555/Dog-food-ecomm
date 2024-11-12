import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        {title && <h3 className="text-lg font-bold mb-4">{title}</h3>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
