import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./ItemModal.module.css";
import { IoMdClose } from "react-icons/io";

function Backdrop(props) {
  return <div className={styles.backdrop} />;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.imageSide}>
        <img className={styles.image} src={props.image} alt={props.title} />
      </div>
      <div className={styles.descSide}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.valor}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.valor)}
        </p>
        <p className={styles.message}>{props.message}</p>
        <p className={styles.link}>Veja mais detalhes do produto {">"}</p>
        <Button onClick={props.onClick}>Adicionar ao carrinho</Button>
      </div>
      <div className={styles.ico} onClick={props.onClick}>
        <IoMdClose />
      </div>
    </div>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          image={props.image}
          valor={props.valor}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
