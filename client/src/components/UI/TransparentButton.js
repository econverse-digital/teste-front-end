import styles from "./TransparentButton.module.css";

const TransparentButton = (props) => {
  return (
    <div>
      {props.size === "normal" ? (
        props.button === "white" ? (
          <button className={styles.buttonWhite}>{props.children}</button>
        ) : (
          <button className={styles.buttonBlue}>{props.children}</button>
        )
      ) : props.button === "white" ? (
        <button className={styles.buttonWhiteSmall}>{props.children}</button>
      ) : (
        <button className={styles.buttonBlueSmall}>{props.children}</button>
      )}
      {}
    </div>
  );
};

export default TransparentButton;
