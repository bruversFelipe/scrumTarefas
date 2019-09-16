import React from "react";
import ModalWrapper from "./style";

const Modal = ({ children, ...props }) => (
  <ModalWrapper {...props}>{children}</ModalWrapper>
);

export default Modal;
