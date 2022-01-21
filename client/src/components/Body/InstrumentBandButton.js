import styles from "./InstrumentBandButton.module.css";

const InstrumentBandButton = (props) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.img}
        src={"./assets/instruments/" + props.image + ".png"}
        alt={props.nome}
      />
      <span className={styles.instrumentName}>{props.nome.toUpperCase()}</span>
    </div>
  );
};

export default InstrumentBandButton;
