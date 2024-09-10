import React, { ReactNode } from "react";
import "@/components/modal/modal.scss";
import { CloseIcon } from "../icons/socialIcons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <span>
          <button className="closeButton" onClick={onClose}>
            <CloseIcon />
          </button>
        </span>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
