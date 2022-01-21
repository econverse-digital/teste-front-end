import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        defaultValue={props.children}
      />
    </div>
  );
};

export default Input;
