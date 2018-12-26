import * as React from "react";
import {
  Button as BSButton,
  Modal as BSModal,
  ModalBody as BSModalBody
} from "reactstrap";

type ModalProps = {
  isOpen: boolean;
  toggle?: () => void;
  className?: string;
  text: string;
};

const Modal = ({ isOpen, toggle, className, text }: ModalProps) => (
  <BSModal
    isOpen={isOpen}
    toggle={toggle}
    className={className}
    centered={true}
  >
    <BSModalBody>
      <p>{text}</p>
      <BSButton color="danger" onClick={() => null}>
        Close
      </BSButton>
    </BSModalBody>
  </BSModal>
);

export default Modal;
