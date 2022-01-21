import styles from "./QuickView.module.css";
import { BsSearch } from "react-icons/bs";

const QuickView = (props) => {
  return (
    <div className={styles.QuickView}>
      <span className={styles.span}>
        <span className={styles.ico}>
          <BsSearch />
        </span>
      </span>
      <p className={styles.quick}>Quick view</p>
    </div>
  );
};

export default QuickView;
