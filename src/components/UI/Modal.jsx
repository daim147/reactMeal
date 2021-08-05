import React from "react";
import ReactDom from "react-dom";
import classes from "./modal.module.css";

const Backdrop = (props) => (
  <div onClick={props.onClick} className={classes.backdrop}></div>
);
const ModalContent = (props) => (
  <div className={classes.modal}>
    <div>{props.children}</div>
  </div>
);

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("overlay")
      )}{" "}
      {ReactDom.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
